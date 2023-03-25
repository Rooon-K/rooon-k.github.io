module.exports = {
  "title": "Rooon-K",
  "description": "",
  "dest": "./dist",
  // "base": "./",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "nodeFs",
            "link": "/docs/nodejsFs"
          }
        ]
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Rooon-K",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "subSidebar": 'auto',
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "OrangeSiteDeveloper",
        "desc": "橙果工作室",
        "logo": "https://avatars.githubusercontent.com/u/87692517?s=200&v=4",
        "link": "https://github.com/OrangeSiteDeveloper"
      },
      {
        "title": "ShawnZhou的小站",
        "desc": "我翔哥",
        "logo": "https://shawnzhou.world/images/avatar1.png",
        "link": "https://shawnzhou.world/"
      },
    ],
    // "logo": "/logo.png", 
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Rooon-K",
    "authorAvatar": "/avatar.jpg",
    "startYear": "2022",
    "mode": 'light',
    "modePicker": true
  },
  "markdown": {
    "lineNumbers": true
  },
  "locales": {
    '/': {
      "lang": 'zh-CN'
    }
  }
}