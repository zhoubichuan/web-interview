module.exports = {
  // 基础配置
  base: '/Web-Interview/', // 部署站点的基础路径
  locales: {
    // 默认标题
    '/': {
      title: '前端面试题精选',
      description: ''
    }
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: '.vuepress/dist', // 指定 vuepress build 的输出目录
  serviceWorker: false, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [
          // 顶部导航栏
          {
            text: '前端基础面试题',
            link: '/page/base/'
          },
          {
            text: '前端框架面试题',
            link: '/page/frame/'
          },
          {
            text: 'node相关面试题',
            link: '/page/service/'
          },
          {
            text: '大厂面试题',
            link: '/page/article/'
          }
        ],
        sidebar: {
          // 文档侧边栏 跳转到不同页面
          '/page/base/': [{
              title: '一、标签及样式',
              collapsable: false,
              children: ['', 'CSS']
            },
            {
              title: '二、JavaScript',
              collapsable: false,
              children: ['JavaScript']
            }
          ],
          '/page/frame/': [{
              title: '一、Vue',
              collapsable: false, // 让一个组永远都是展开状态
              children: ['']
            },
            {
              title: '二、React',
              collapsable: false, // 让一个组永远都是展开状态
              children: ['React']
            },
            {
              title: '三、Angular',
              collapsable: false, // 让一个组永远都是展开状态
              children: ['Angular']
            },
            {
              title: '四、小程序',
              collapsable: false, // 让一个组永远都是展开状态
              children: ['小程序']
            },
          ],
          '/page/service/': [{
              title: '一、node',
              collapsable: false, // 让一个组永远都是展开状态
              children: ['', ]
            },
            {
              title: '二、express',
              collapsable: false, // 让一个组永远都是展开状态
              children: ['express']
            },
            {
              title: '三、koa',
              collapsable: false, // 让一个组永远都是展开状态
              children: ['koa']
            },
            {
              title: '四、egg',
              collapsable: false, // 让一个组永远都是展开状态
              children: ['egg']
            },
          ],
          '/page/article/': [{
              title: '阿里巴巴',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '',
                'elem',
                'mogujie',
              ]
            },
            {
              title: 'baobaoshu',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'baobaoshu',
              ]
            },
            {
              title: '滴滴',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'didi',
              ]
            },
            {
              title: 'duiba',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'duiba',
              ]
            },
            {
              title: 'haifendian',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'haifendian',
              ]
            },
            {
              title: '海风教育',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'haifengjiaoyu',
              ]
            },
            {
              title: '海康威视',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'haikangweishi',
              ]
            },
            {
              title: '沪江',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'hujiang',
              ]
            },
            {
              title: '酷家乐',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'kujiale',
              ]
            },
            {
              title: '寺库',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'siku',
              ]
            },
            {
              title: '头条',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'toutiao',
              ]
            },
            {
              title: '挖财',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'wacai',
              ]
            },
            {
              title: '网易',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'wangyi',
              ]
            },
            {
              title: 'weiyi',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'weiyi',
              ]
            },
            {
              title: 'xiecheng',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'xiecheng',
              ]
            },
            {
              title: '喜马拉雅',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'ximalaya',
              ]
            },
            {
              title: '有赞',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                'youzan',
              ]
            },
          ]
        }
      }
    }
  }
}