let getIp = () => {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}
module.exports = {
  // 基础配置
  base: '/', // 部署站点的基础路径
  locales: { // 默认标题
    '/': {
      title: '前端面试题精选',
      description: '',
    }
  },
  head: [ // 添加链接 pwa 的 manifest 如果需要
    ['link', {
      rel: 'icon',
      href: ''
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  host: getIp(),
  port: 3009,
  dest: '.vuepress/dist', // 指定 vuepress build 的输出目录
  ga: 'undefined', // 提供一个 Google Analytics ID 来使 GA 生效
  serviceWorker: false, // pwa

  // 主题配置
  themeConfig: {
    repo: 'https://github.com/zhoubichuan',
    editLinks: true,
    repoLabel: 'github',
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [ // 顶部导航栏
          {
            text: '基础部分',
            link: '/page/base/'
          },
          {
            text: '框架部分',
            link: '/page/frame/'
          },
          {
            text: '服务端相关知识点',
            link: '/page/service/'
          },
          {
            text: '大厂面试题',
            link: '/page/article/'
          },
        ],
        sidebar: { // 文档侧边栏 跳转到不同页面
          '/page/base/': genSidebarConfig('基础部分'),
          '/page/frame/': genSidebarConfig2('框架部分'),
          '/page/service/': genSidebarConfig3('服务端相关知识点'),
          '/page/article/': genSidebarConfig4('大厂面试题'),
        }
      }
    }
  },
}

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: true, // 让一个组永远都是展开状态
    children: [
      '',
      'CSS',
      'JavaScript',
    ]
  }]
}

function genSidebarConfig2(title) {
  return [{
    title,
    collapsable: true, // 让一个组永远都是展开状态
    children: [
      '',
      'React',
      'Angular',
      '小程序'
    ]
  }]
}

function genSidebarConfig3(title) {
  return [{
    title,
    collapsable: true, // 让一个组永远都是展开状态
    children: [
      '',
      'express',
      'koa',
      'egg'
    ]
  }]
}

function genSidebarConfig4(title) {
  return [{
    title,
    collapsable: true, // 让一个组永远都是展开状态
    children: [
      '',
      // '2',
      // '3',
      // '4',
      // '5',
      // '6',
      // '7',
      // '8',
      // '9',
      // '10',
      // '11',
      // '12',
      // '13',
      // '14',
      // '15',
      // '16',
      // '17',
      // '18',
      // '19',
    ]
  }]
}