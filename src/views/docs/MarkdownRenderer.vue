<template>
  <div class="subContent">
    <div class="introduction">
      <img data-v-ef16d5dc="" class="img" :src=item.iconSrc alt="" width="auto" height="30" draggable="false" :style="{ 'viewTransitionName': 'class-item-img-' + category + '-' + subcategory + '-' + id }">
    </div>
  </div>
  <div class="mainContent">
    <div class="markdown-body">
      <h1 :style="{ 'viewTransitionName': 'class-item-name-' + category + '-' + subcategory + '-' + id ,'borderBottom':'none'}">
        {{ item.name }}
      </h1>
    </div>
    <br/>
    <div class="markdown-body" v-html="renderedMarkdown"></div>
  </div>
</template>
<script setup lang="ts">
import {computed, onMounted, ref, toRaw} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useI18n} from 'vue-i18n';
import get from 'lodash/get';
import MarkdownIt from 'markdown-it';
import {useDataSourcesStore} from '@/stores/dataSources';
import {useSettingStore} from '@/stores/setting';

const {category, subcategory, id} = useRoute().params;
const source = ref('');

const dataSources = useDataSourcesStore();

// 刷新数据
if (Object.keys(dataSources.localRepositoriesData).length === 0) {
  await dataSources.refreshData();

  // 合并语言数据
  const {getLocaleMessage} = useI18n();

  const updateLang = await useDataSourcesStore().mergeLangData(getLocaleMessage);
  for (const lang in updateLang) {
    useI18n().setLocaleMessage(lang, updateLang[lang]);
  }
}

const root = toRaw(dataSources.localRepositoriesData);

const routes = computed(() => useDataSourcesStore().routeGroups);

const pageHandle = get(root, [Object.keys(routes.value)[0], 'docs', useSettingStore().setting.lang, category, subcategory, id]) as any;
const indexMdHandle = get(pageHandle, 'index_md') as any;

if (pageHandle === undefined || indexMdHandle === undefined) {
  useRouter().push('/404');
}

let item = await useDataSourcesStore().getOrCacheItem([Object.keys(routes.value)[0], 'docs', useSettingStore().setting.lang, category, subcategory, id]);

// MarkdownIt 实例
const md = new MarkdownIt({html: true});

// todo 屏蔽<script>等标签
// md.use(sanitizer);

onMounted(async () => {
  if (indexMdHandle !== undefined) {
    const file = await indexMdHandle.getFile();
    const text = await file.text();

    source.value = text;

    // 处理格式 替换所有 [[path]] 为 ![path](path)
    source.value = source.value.replace(/!\[\[([^\]]+)\]\]/g, '![$1]($1)');

    // 匹配所有 markdown 图片语法
    const regex = /!\[(.*?)\]\((.*?)\)/g;
    const matches = [...source.value.matchAll(regex)];

    const replacements = await Promise.all(matches.map(async match => {
      const fullMatch = match[0]; // 整个 ![alt](path)
      const alt = match[1];       // alt 文本
      const oldPath = match[2];   // 括号内路径

      let imgURL;

      if (get(pageHandle, oldPath.replace(/\./g, '_')) !== undefined) {
        const img = await pageHandle[oldPath.replace(/\./g, '_')].getFile();
        imgURL = URL.createObjectURL(img);
      } else {
        //todo 替换为占位图片
        imgURL = oldPath;
      }

      const newMarkdown = `![${alt}](${imgURL})`;
      return {
        old: fullMatch,
        new: newMarkdown
      };
    }));

    // 替换所有 old -> new
    for (const {old, new: newVal} of replacements) {
      source.value = source.value.replace(old, newVal);
    }
  }
});

// 渲染后的 HTML
const renderedMarkdown = computed(() => {
  return md.render(typeof source.value === 'string' ? source.value : '');
});
</script>


<style scoped>
@media (min-width: 670px) {
  .subContent {
    padding-left: 30px;
    margin-left: auto;
  }
}

@media (max-width: 670px) {
  .markdown-body {
    display: block;
    max-width: calc(100vw - 45px);
  }

  .subContent {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.subContent .introduction {
  width: 100%;
  padding: 15px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.8px solid var(--color-border-2);
}

.subContent .introduction .img {
  width: 225px;
  height: 225px;
  object-fit: contain;
  image-rendering: pixelated;
}
</style>