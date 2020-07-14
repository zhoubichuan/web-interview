---
lang: zh-CN
home: true
heroImage: ""
actionText: 先睹为快 →
actionLink: /base/static/1.base.html
pageClass: page_index
footer: 前端面试题
meta:
  - name: keywords
    content: 前端面试题,前端学习,前端笔记
---

<template>
    <div class="cont">
        <div id="large-header" class="large-header"></div>
        <mindmap v-model="data" height="1000"></mindmap>
    </div>
</template>

<script>
import mindmap from '@hellowuxin/mindmap'

export default {
  name: 'App',
  components: {
    mindmap
  },
  data: () => ({
    data: [
      {
        name:"前端面试",
        children:
          [
            {
              name:"基础面试题",
              children:[
                  {name:"构建基础篇", children: []},
                  {name:"开发技巧", children: []}
              ]
            },
            {
              name:"高级面试题",
              children:[
                  {name:"vue组件精讲", children: []}
              ]
            },
            {
              name:"大厂面试题",
              children:[
                  {name:"Vue源码解析", children: []},
                  {name:"Element源码解析", children: []}
              ]
            }
          ]
      }
    ]
  })
}
</script>
