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
  dest: 'dist', // 指定 vuepress build 的输出目录
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
        nav: [{
            text: '前端基础',
            link: '/base/html',
            items: [{
                text: '一、HTML',
                link: '/base/html',
              },
              {
                text: '二、CSS',
                link: '/base/css',
              },
              {
                text: '三、JS基础',
                link: '/base/js',
              },
              {
                text: '四、JS面向对象',
                link: '/base/obj',
              },
              {
                text: '五、V8引擎机制',
                link: '/base/v8',
              },
              {
                text: '六、渲染机制',
                link: '/base/render',
              },
              {
                text: '七、浏览器缓存',
                link: '/base/cache',
              },
              {
                text: '八、排序算法',
                link: '/base/calc',
              },
              {
                text: '九、设计模式',
                link: '/base/design',
              },
              {
                text: '十、前端安全',
                link: '/base/safe',
              },
              {
                text: '十一、网络相关',
                link: '/base/network',
              },
            ],
          },
          {
            text: '前端框架',
            link: '/frame/Vue',
            items: [{
              text: '一、Vue',
              link: '/frame/Vue',
            }, {
              text: '二、React',
              link: '/frame/React',
            }, {
              text: '三、Angular',
              link: '/frame/Angular',
            }, {
              text: '四、小程序',
              link: '/frame/小程序',
            }]
          },
          {
            text: 'node后端',
            link: '/service/node',
            items: [{
              text: '一、Node',
              link: '/service/node',
            }, {
              text: '二、Express',
              link: '/service/express',
            }, {
              text: '三、Koa',
              link: '/service/koa',
            }, {
              text: '四、Egg',
              link: '/service/egg',
            }]
          },
          {
            text: '大厂面试题',
            link: '/article/',
            items: [{
              text: '阿里巴巴',
              link: '/article/阿里巴巴',
            }, {
              text: '饿了么',
              link: '/article/饿了么',
            }, {
              text: '百分点',
              link: '/article/百分点',
            }, {
              text: '宝宝树',
              link: '/article/宝宝树',
            }, {
              text: '滴滴',
              link: '/article/滴滴',
            }, {
              text: '兑吧',
              link: '/article/兑吧',
            }, {
              text: '海风教育',
              link: '/article/宝海风教育',
            }, {
              text: '海康威视',
              link: '/article/海康威视',
            }, {
              text: '沪江',
              link: '/article/沪江',
            }, {
              text: '今日头条',
              link: '/article/今日头条',
            }, {
              text: '酷家乐',
              link: '/article/酷家乐',
            }, {
              text: '蘑菇街',
              link: '/article/蘑菇街',
            }, {
              text: '寺库',
              link: '/article/寺库',
            }, {
              text: '挖财',
              link: '/article/挖财',
            }, {
              text: '网易',
              link: '/article/网易',
            }, {
              text: '微医',
              link: '/article/微医',
            }, {
              text: '喜马拉雅',
              link: '/article/喜马拉雅',
            }, {
              text: '携程',
              link: '/article/携程',
            }, {
              text: '有赞',
              link: '/article/有赞',
            }]
          }
        ],
        sidebar: {
          '/base/': ['html', 'css', 'js', 'obj', 'v8', 'render', 'cache', 'calc', 'design', 'safe', 'network'],
          '/frame/': ['Vue', 'React', 'Angular', '小程序'],
          '/service/': ['node', 'express', 'koa', 'egg'],
          '/article/': ['阿里巴巴', '蘑菇街', '饿了么', '今日头条', '滴滴', '兑吧', '百分点', '海风教育', '海康威视', '沪江', '酷家乐', '寺库', '今日头条', '挖财', '网易', '微医', '携程', '喜马拉雅', '有赞']
        }
      }
    }
  }
}