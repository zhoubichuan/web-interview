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
            text: '基础面试题',
            items: [{
                text: '一、CSS 常考面试题资料',
                link: '/base/static/1.base',
              },
              {
                text: '二、JS 基础知识点',
                link: '/base/javascript/1.base',
              },
              {
                text: '三、Vue 常考基础知识点',
                link: '/base/vue/1.base',
              },
              {
                text: '四、React 常考基础知识点',
                link: '/base/react/1.base',
              },
              {
                text: '四、浏览器基础知识点',
                link: '/base/browser/1.base',
              }
            ],
          },
          {
            text: '高级面试题',
            items: [{
                text: '一、JS 进阶知识点',
                link: '/senior/javascript/1.advanc',
              }, {
                text: '二、网络相关',
                link: '/senior/network/1.UDP',
              }, {
                text: '三、浏览器相关',
                link: '/senior/browser/1.cache',
              }, {
                text: '四、Vue 常考进阶知识点',
                link: '/senior/vue/1.advanc',
              }, {
                text: '五、React 常考进阶知识点',
                link: '/senior/react/1.advanc',
              },
              {
                text: '一、Vue',
                link: '/senior/1.advanc',
              }, {
                text: '二、React',
                link: '/senior/1.advanc',
              }, {
                text: '三、Angular',
                link: '/senior/3.Angular',
              }, {
                text: '四、小程序',
                link: '/frame/4.小程序',
              }
            ],
          },
          {
            text: 'node后端',
            link: '/backEnd/node',
            items: [{
              text: '一、Node',
              link: '/backEnd/1.node',
            }, {
              text: '二、Express',
              link: '/backEnd/2.express',
            }, {
              text: '三、Koa',
              link: '/backEnd/3.koa',
            }, {
              text: '四、Egg',
              link: '/backEnd/4.egg',
            }]
          },
          {
            text: '大厂面试题',
            link: '/largeFactories/',
            items: [{
              text: '阿里巴巴',
              link: '/largeFactories/阿里巴巴',
            }, {
              text: '饿了么',
              link: '/largeFactories/饿了么',
            }, {
              text: '百分点',
              link: '/largeFactories/百分点',
            }, {
              text: '宝宝树',
              link: '/largeFactories/宝宝树',
            }, {
              text: '滴滴',
              link: '/largeFactories/滴滴',
            }, {
              text: '兑吧',
              link: '/largeFactories/兑吧',
            }, {
              text: '海风教育',
              link: '/largeFactories/宝海风教育',
            }, {
              text: '海康威视',
              link: '/largeFactories/海康威视',
            }, {
              text: '沪江',
              link: '/largeFactories/沪江',
            }, {
              text: '今日头条',
              link: '/largeFactories/今日头条',
            }, {
              text: '酷家乐',
              link: '/largeFactories/酷家乐',
            }, {
              text: '蘑菇街',
              link: '/largeFactories/蘑菇街',
            }, {
              text: '寺库',
              link: '/largeFactories/寺库',
            }, {
              text: '挖财',
              link: '/largeFactories/挖财',
            }, {
              text: '网易',
              link: '/largeFactories/网易',
            }, {
              text: '微医',
              link: '/largeFactories/微医',
            }, {
              text: '喜马拉雅',
              link: '/largeFactories/喜马拉雅',
            }, {
              text: '携程',
              link: '/largeFactories/携程',
            }, {
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
          '/base/static/': ['1.base'],
          '/base/javascript/': ['1.base', '2.es6', '3.async', '4.eventLoop', '5.safe', '6.performance', '7.monitor'],
          '/base/vue/': ['1.base'],
          '/base/react/': ['1.base'],
          '/base/browser/': ['1.base'],
          '/base/': ['1.htm', '2.css', '3.js', '4.obj', '5.v8', '6.render', '7.cache', '8.calc', '9.design', '10.safe', '11.network'],
          '/senior/javascript/': ['1.advanc', '2.design', '3.dataStructure', '4.algorithm'],
          '/senior/network/': ['1.UDP', '2.TCP', '3.HTTPandTLS', '4.HTTP2andHTTP3'],
          '/senior/browser/': ['1.cache', '2.render'],
          '/senior/vue/': ['1.advanc'],
          '/senior/react/': ['1.advanc'],
          '/frame/': ['1.Vue', '2.React', '3.Angular', '4.小程序'],
          '/backEnd/': ['1.node', '2.express', '3.koa', '4.egg'],
          '/largeFactories/': ['阿里巴巴', '蘑菇街', '饿了么', '今日头条', '滴滴', '兑吧', '百分点', '海风教育', '海康威视', '沪江', '酷家乐', '寺库', '挖财', '网易', '微医', '携程', '喜马拉雅', '有赞'],
          '/myInterview':['20210131']
        }
      }
    }
  }
}