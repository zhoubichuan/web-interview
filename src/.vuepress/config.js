module.exports = {
  // 基础配置
  base: '/web-interview/', // 部署站点的基础路径
  locales: {
    // 默认标题
    '/': {
      title: 'web面试题精选',
      description: ''
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json'
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
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: '前端面试题',
          items: [
            {
              text: '一.HTML部分',
              link: '/1.front-end/1.html/1.index',
            },
            {
              text: '二.CSS部分',
              link: '/1.front-end/2.css/1.index',
            },
            {
              text: '三.JavaScript部分',
              link: '/1.front-end/3.javascript/1.index',
            },
            {
              text: '四.浏览器部分',
              link: '/1.front-end/4.browser/1.index',
            },
            {
              text: '五.框架【vue】部分',
              link: '/1.front-end/5.vue/1.index',
            },
            {
              text: '六.框架【react】部分',
              link: '/1.front-end/6.react/1.index',
            },
            {
              text: '七.框架【小程序】部分',
              link: '/1.front-end/7.小程序/1.index',
            },
          ],
        },
        {
          text: '高级面试题',
          items: [
            {
              text: '一.JavaScript',
              link: '/senior/javascript/1.advanc',
            },
            {
              text: '二.网络',
              link: '/senior/network/1.UDP',
            },
            {
              text: '三.浏览器',
              link: '/senior/browser/1.cache',
            },
          ],
        },
        {
          text: '后端面试题',
          link: '/backEnd/node',
          items: [
            {
              text: '一、Node',
              link: '/backEnd/1.node',
            },
            {
              text: '二、Express',
              link: '/backEnd/2.express',
            },
            {
              text: '三、Koa',
              link: '/backEnd/3.koa',
            },
            {
              text: '四、Egg',
              link: '/backEnd/4.egg',
            }]
        },
        {
          text: '大厂面试题',
          link: '/largeFactories/',
          items: [
            {
              text: '阿里巴巴',
              link: '/largeFactories/阿里巴巴',
            },
            {
              text: '饿了么',
              link: '/largeFactories/饿了么',
            },
            {
              text: '百分点',
              link: '/largeFactories/百分点',
            },
            {
              text: '宝宝树',
              link: '/largeFactories/宝宝树',
            },
            {
              text: '滴滴',
              link: '/largeFactories/滴滴',
            },
            {
              text: '兑吧',
              link: '/largeFactories/兑吧',
            },
            {
              text: '海风教育',
              link: '/largeFactories/宝海风教育',
            },
            {
              text: '海康威视',
              link: '/largeFactories/海康威视',
            },
            {
              text: '沪江',
              link: '/largeFactories/沪江',
            },
            {
              text: '今日头条',
              link: '/largeFactories/今日头条',
            },
            {
              text: '酷家乐',
              link: '/largeFactories/酷家乐',
            },
            {
              text: '蘑菇街',
              link: '/largeFactories/蘑菇街',
            },
            {
              text: '寺库',
              link: '/largeFactories/寺库',
            },
            {
              text: '挖财',
              link: '/largeFactories/挖财',
            },
            {
              text: '网易',
              link: '/largeFactories/网易',
            },
            {
              text: '微医',
              link: '/largeFactories/微医',
            },
            {
              text: '喜马拉雅',
              link: '/largeFactories/喜马拉雅',
            },
            {
              text: '携程',
              link: '/largeFactories/携程',
            },
            {
              text: '有赞',
              link: '/largeFactories/有赞',
            }]
        },
        {
          text: '面试题',
          link: '/myInterview/20210131'
        }
        ],
        sidebar: {
          '/1.front-end/1.html/': ['1.index', '2.htmI', '3.html5'],
          '/1.front-end/2.css/': ['1.index', '2.css', '3.css3'],
          '/1.front-end/3.javascript/': ['1.index', '2.es6', '3.async', '4.eventLoop', '5.safe', '6.performance', '7.monitor'],
          '/1.front-end/4.browser/': ['1.index','2.render','3.cache'],
          '/1.front-end/5.vue/': ['1.index','2.advanc'],
          '/1.front-end/6.react/': ['1.index','2.advanc'],
          '/1.front-end/': ['1.htm', '2.css', '3.js', '4.obj', '5.v8', '6.render', '7.cache', '8.calc', '9.design', '10.safe', '11.network'],
          '/senior/javascript/': ['1.advanc', '2.design', '3.dataStructure', '4.algorithm'],
          '/senior/network/': ['1.UDP', '2.TCP', '3.HTTPandTLS', '4.HTTP2andHTTP3'],
          '/senior/browser/': ['1.cache', '2.render'],
          '/frame/': ['1.Vue', '2.React', '3.Angular', '4.小程序'],
          '/backEnd/': ['1.node', '2.express', '3.koa', '4.egg'],
          '/largeFactories/': ['阿里巴巴', '蘑菇街', '饿了么', '今日头条', '滴滴', '兑吧', '百分点', '海风教育', '海康威视', '沪江', '酷家乐', '寺库', '挖财', '网易', '微医', '携程', '喜马拉雅', '有赞'],
          '/myInterview/': ['20210131']
        }
      }
    }
  }
}