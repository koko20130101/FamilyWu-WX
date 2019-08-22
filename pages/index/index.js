//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    membersList: [
      {
        "levelName": "吴",
        "members": [
          {
            "name": "吴敬公",
            "alive": false,
            "belongTo": null
          }
        ]
      },
      {
        "levelName": "海",
        "members": [
          {
            "name": "吴海浪",
            "alive": false,
            "belongTo": null
          },
          {
            "name": "吴海池",
            "alive": false,
            "belongTo": null
          }
        ]
      },
      {
        "levelName": "谷",
        "members": [
          {
            "name": "吴谷瑙",
            "alive": false,
            "belongTo": null
          },
          {
            "name": "吴谷仓",
            "alive": false,
            "belongTo": null
          }
        ]
      },
      {
        "levelName": "志",
        "members": [
          {
            "name": "吴志仕",
            "alive": false,
            "belongTo": null
          },
          {
            "name": "吴志仁",
            "alive": false,
            "belongTo": null
          }
        ]
      },
      {
        "levelName": "善",
        "members": [
          {
            "name": "吴桂荣",
            "alive": false,
            "belongTo": null
          },
          {
            "name": "吴善稳",
            "alive": false,
            "belongTo": null
          }
        ]
      },
      {
        "levelName": "庆",
        "members": [
          {
            "name": "吴庆笔",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴庆涛",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴庆印",
            "alive": false,
            "belongTo": "牛劳"
          }
        ]
      },
      {
        "levelName": "庭",
        "members": [
          {
            "name": "吴庭桂",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴庭茂",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴庭积",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴庭梅",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴庭元",
            "alive": false,
            "belongTo": "铜鼓"
          }
        ]
      },
      {
        "levelName": "振",
        "members": [
          {
            "name": "吴振佑",
            "alive": false,
            "belongTo": "板洋、拉甫"
          },
          {
            "name": "吴振儒",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴振高",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴振极",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴振参",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴振礼",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴振路",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴振汉",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴振天",
            "alive": false,
            "belongTo": "牛劳"
          }
        ]
      },
      {
        "levelName": "林",
        "members": [
          {
            "name": "吴林燕",
            "alive": false,
            "belongTo": "板洋、拉甫"
          },
          {
            "name": "吴林楠",
            "alive": false,
            "belongTo": "思街、板高"
          },
          {
            "name": "吴林庭",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴林树",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴林瑞",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴林桂",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴林安",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴林秋",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴林光",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴林永",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴林祥",
            "alive": false,
            "belongTo": "牛劳"
          }
        ]
      },
      {
        "levelName": "道",
        "members": [
          {
            "name": "吴道松",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道荣",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道新",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道宽",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道乾",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道保",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道润",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道明",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道范",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴道录",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴光兴",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴光微",
            "alive": false,
            "belongTo": "板里"
          },
          {
            "name": "吴光顺",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴光元",
            "alive": false,
            "belongTo": "拉甫"
          },
          {
            "name": "吴道轮",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴道元",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴道成",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴仁发",
            "alive": false,
            "belongTo": "内棚"
          }
        ]
      },
      {
        "levelName": "义",
        "members": [
          {
            "name": "吴义发",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义清",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义安",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义光",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义辉",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义强",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义益",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义月",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义宙",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义贵",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义规",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义矩",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义贤",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义长",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义章",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义仁",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义丰",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义才",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴义庭",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴德英",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴德贤",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴德才",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴天培",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴天禄",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴天禧",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴天寿",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴天开",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴天保",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴天仁",
            "alive": false,
            "belongTo": "拉甫"
          },
          {
            "name": "吴天福",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴光昌",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴瑞成",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴瑞元",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴永寿",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴义旺",
            "alive": false,
            "belongTo": "垒底"
          }
        ]
      },
      {
        "levelName": "有",
        "members": [
          {
            "name": "吴有蔺",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有相",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有田",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴永其",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴永龙",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有宗",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有吉",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有程",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有连",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有光",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有基",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有辉",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有安",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有年",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有庭",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有高",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有祥",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有易",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有山",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有扬",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有奎",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴瑞忠",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有顺",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有珍",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有春",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴有荣",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "泮树琼",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴有业",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴有贤",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴有辉",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴有德",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴志徽",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴绪烈",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴绪贵",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴绪忠",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴绪勤",
            "alive": false,
            "belongTo": "拉甫"
          },
          {
            "name": "吴绪刚",
            "alive": false,
            "belongTo": "拉甫"
          },
          {
            "name": "吴绪芬",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴绪芳",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴绪友",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴有才",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴绪林",
            "alive": false,
            "belongTo": "板里"
          },
          {
            "name": "吴永贤",
            "alive": false,
            "belongTo": "加乜"
          },
          {
            "name": "吴国昌",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴国顺",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴国安",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴国明",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴永光",
            "alive": false,
            "belongTo": "垒底"
          },
          {
            "name": "吴志贵",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴志邦",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴志龙",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴彩昌",
            "alive": false,
            "belongTo": "板高"
          },
          {
            "name": "吴忠林",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴袭早",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴袭烈",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴庭芳",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴庭森",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴庭辉",
            "alive": false,
            "belongTo": "思街"
          }
        ]
      },
      {
        "levelName": "宝",
        "members": [
          {
            "name": "吴宝川",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝田",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝珠",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝江",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝成",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝希",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝明",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝良",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴继荣",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴明亮",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝堂",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝杰",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝德",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝学",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝顺",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝琼",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝先",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝智",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝益",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝利",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝威",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝华",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝仁",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝庆",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝林",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝球",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝元",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝兴",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝辉",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝全",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝光",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝军",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝荣",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝业",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝清",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝才",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝文",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝权",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝昌",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝生",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "李景秋",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝奎",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝新",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "泮顺贤",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝恒",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝吉",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝怀",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝卫",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝强",
            "alive": false,
            "belongTo": "牛劳"
          },
          {
            "name": "吴宝权",
            "alive": false,
            "belongTo": "怀远"
          },
          {
            "name": "吴秉国",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉忠",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉忠",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉权",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉叶",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉辉",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉堂",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉居",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉立",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉效",
            "alive": false,
            "belongTo": "板洋"
          },
          {
            "name": "吴秉祥",
            "alive": false,
            "belongTo": "板里"
          },
          {
            "name": "吴秉辉",
            "alive": false,
            "belongTo": "樊村"
          },
          {
            "name": "吴秉陇",
            "alive": false,
            "belongTo": "拉甫"
          },
          {
            "name": "吴秉辉",
            "alive": false,
            "belongTo": "拉甫"
          },
          {
            "name": "吴忠良",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴忠吉",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴忠堂",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴忠奎",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴忠心",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴忠孝",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴忠林",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴秉成",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴秉吉",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴秉杰",
            "alive": false,
            "belongTo": "内棚"
          },
          {
            "name": "吴秉修",
            "alive": false,
            "belongTo": "板陆"
          },
          {
            "name": "吴秉良",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴永昌",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴绪勤",
            "alive": false,
            "belongTo": "拉甫"
          },
          {
            "name": "吴宝健",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴宝成",
            "alive": false,
            "belongTo": "岩口"
          },
          {
            "name": "吴宝生",
            "alive": false,
            "belongTo": "加乜"
          },
          {
            "name": "吴宝才",
            "alive": false,
            "belongTo": "加乜"
          },
          {
            "name": "吴宝瑜",
            "alive": false,
            "belongTo": "加乜"
          },
          {
            "name": "吴宝云",
            "alive": false,
            "belongTo": "上林"
          },
          {
            "name": "吴汉作",
            "alive": false,
            "belongTo": "平胸"
          },
          {
            "name": "吴宝成",
            "alive": false,
            "belongTo": "垒底"
          },
          {
            "name": "吴祥",
            "alive": false,
            "belongTo": "高索林场"
          },
          {
            "name": "吴宝奎",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴宝增",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴宝书",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴宝荣",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴宝益",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴宝杰",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴宝田",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴宝忠",
            "alive": false,
            "belongTo": "六洞"
          },
          {
            "name": "吴袭早",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴彩元",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴彩光",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴彩勤",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴彩松",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴彩辉",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴彩芳",
            "alive": false,
            "belongTo": "思街"
          },
          {
            "name": "吴建坤",
            "alive": false,
            "belongTo": "板高"
          },
          {
            "name": "吴建国",
            "alive": false,
            "belongTo": "板高"
          },
          {
            "name": "吴建才",
            "alive": false,
            "belongTo": "板高"
          },
          {
            "name": "吴建仔",
            "alive": false,
            "belongTo": "外朋"
          },
          {
            "name": "吴建文",
            "alive": false,
            "belongTo": "外朋"
          },
          {
            "name": "吴建章",
            "alive": false,
            "belongTo": "外朋"
          },
          {
            "name": "吴建谋",
            "alive": false,
            "belongTo": "外朋"
          },
          {
            "name": "吴建仁",
            "alive": false,
            "belongTo": "外朋"
          },
          {
            "name": "吴明高",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴明辉",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴明亮",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴明光",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴明星",
            "alive": false,
            "belongTo": "五里"
          },
          {
            "name": "吴宝林",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝球",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝胜",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝坤",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝贵",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝康",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝国",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝周",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝恒",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝强",
            "alive": false,
            "belongTo": "铜鼓"
          },
          {
            "name": "吴宝众",
            "alive": false,
            "belongTo": "铜鼓"
          }
        ]
      },
      {
        "levelName": "宗",
        "members": [
          {
            "name": "吴永良",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永喜",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永乐",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永怀",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永焦",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永忠",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永标",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永泉",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永果",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永超",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永波",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴永欢",
            "alive": false,
            "belongTo": "板理"
          }, {
            "name": "吴永盼",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴建贤",
            "alive": false,
            "belongTo": "思街"
          }, {
            "name": "吴建平",
            "alive": false,
            "belongTo": "思街"
          }, {
            "name": "吴建杰",
            "alive": false,
            "belongTo": "思街"
          }, {
            "name": "吴炳全",
            "alive": false,
            "belongTo": "五里"
          }, {
            "name": "吴炳荣",
            "alive": false,
            "belongTo": "五里"
          }, {
            "name": "吴炳华",
            "alive": false,
            "belongTo": "五里"
          }, {
            "name": "吴瑞强",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴瑞佰",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴耀辉",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴耀祖",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴耀德",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴耀威",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴耀标",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴耀春",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴耀亮",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴耀兵",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴建",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴茂",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴增光",
            "alive": false,
            "belongTo": "宜山"
          }, {
            "name": "吴宗明",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴宗献",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴宗成",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴宗强",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴忠朝",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴忠庭",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴忠棋",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴忠元",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "韦信国",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴永国",
            "alive": false,
            "belongTo": "板陆"
          }, {
            "name": "吴永谦",
            "alive": false,
            "belongTo": "板陆"
          }, {
            "name": "吴永嘉",
            "alive": false,
            "belongTo": "板陆"
          }, {
            "name": "吴忠新",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠全",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠华",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠川",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠伍",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠周",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠喜",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠陆",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴柳宜",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴柳平",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴柳娜",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠明",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠高",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠开",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠杰",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠尤",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴建明",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴建强",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴建清",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴建权",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴建钦",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴建成",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴建忠",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠勇",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "李吴忠",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "李建华",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "李建森",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠吉",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠龙",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠宁",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠球",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴厚",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴刚",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠元",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠泽",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠才",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠顺",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠坤",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠善",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠规",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠俊",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠专",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠良",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴忠应",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗叶",
            "alive": true,
            "belongTo": "牛劳"
          }, {
            "name": "吴孟叶",
            "alive": true,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗辉",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗强",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗清",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗生",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗能",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗成",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗业",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴少林",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗建",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴少其",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗怀",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗芬",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗芳",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗朝",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗宽",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗兴",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗亮",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗辉",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗军",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗兵",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗洋",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗培",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗支",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗恒",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗平",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗曲",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴宗科",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴凯",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴美月",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "潘忠亮",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "潘毅",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "黄林发",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴立忠",
            "alive": false,
            "belongTo": "板高"
          }, {
            "name": "吴立金",
            "alive": false,
            "belongTo": "板高"
          }, {
            "name": "吴立科",
            "alive": false,
            "belongTo": "板高"
          }, {
            "name": "吴立权",
            "alive": false,
            "belongTo": "板高"
          }, {
            "name": "吴立辉",
            "alive": false,
            "belongTo": "板高"
          }, {
            "name": "吴云",
            "alive": false,
            "belongTo": "板高"
          }, {
            "name": "吴斌",
            "alive": false,
            "belongTo": "板高"
          }, {
            "name": "吴瑞荣",
            "alive": false,
            "belongTo": "外朋"
          }, {
            "name": "吴瑞田",
            "alive": false,
            "belongTo": "外朋"
          }, {
            "name": "吴立成",
            "alive": false,
            "belongTo": "外朋"
          }, {
            "name": "吴立朋",
            "alive": false,
            "belongTo": "外朋"
          }, {
            "name": "吴忠清",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠成",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠合",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠江",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠海",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠像",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠涛",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠心",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠乐",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠广",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠满",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠宽",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠平",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴忠迪",
            "alive": false,
            "belongTo": "铜鼓"
          }, {
            "name": "吴宗仁",
            "alive": false,
            "belongTo": "粒丘？"
          }, {
            "name": "吴志辉",
            "alive": false,
            "belongTo": "粒丘？"
          }, {
            "name": "吴忠明",
            "alive": false,
            "belongTo": "樊村"
          }, {
            "name": "吴忠奎",
            "alive": false,
            "belongTo": "樊村"
          }, {
            "name": "吴停光",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停甫",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停辉",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停元",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停耀",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停杰",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停良",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停亮",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停利",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停安",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停希",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停文",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停献",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴停烈",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴兴",
            "alive": false,
            "belongTo": "平胸"
          }, {
            "name": "吴光",
            "alive": false,
            "belongTo": "平胸"
          }, {
            "name": "吴亮",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴景",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴彪",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴汉珠",
            "alive": false,
            "belongTo": "岩口"
          }, {
            "name": "吴忠誊",
            "alive": false,
            "belongTo": "岩口"
          }, {
            "name": "吴献学",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献怀",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献成",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献团",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献结",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献河",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献军",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献斌",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献辉",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献端",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献龙",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴献文",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴瑞明",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴瑞光",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴瑞宏",
            "alive": false,
            "belongTo": "内朋"
          }
        ]
      },
      {
        "levelName": "炳",
        "members": [
          {
            "name": "吴国宁",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国杰",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国义",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国桥",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国理",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国基",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国平",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国洋",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国峰",
            "alive": false,
            "belongTo": "板洋"
          }, {
            "name": "吴国斌",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴国胜",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴国艺",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴国利",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴国卫",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴国源",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴国憬?",
            "alive": false,
            "belongTo": "拉甫"
          }, {
            "name": "吴理新",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴理斌",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴理权",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴理先",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴理球",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴理强",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴成",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴理平",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴理东",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴理坤",
            "alive": false,
            "belongTo": "六洞"
          }, {
            "name": "吴国阳",
            "alive": false,
            "belongTo": "板里"
          }, {
            "name": "吴孟肖",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟值",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟权",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟全",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟金",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟江",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟威",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟球",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟强",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟发",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟德",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴孟桃",
            "alive": false,
            "belongTo": "内朋"
          }, {
            "name": "吴炳坤",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳围",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴学文",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴学武",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳荣",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳奎",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳纯",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳松",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳银",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳龙",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳君",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳浩",
            "alive": false,
            "belongTo": "上林"
          }, {
            "name": "吴炳成",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳福",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳谋",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳辉",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳家",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳海",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳潭",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳居",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳汉",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳规",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳宁",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴炳贤",
            "alive": false,
            "belongTo": "加乜"
          }, {
            "name": "吴国正",
            "alive": false,
            "belongTo": "外朋"
          }, {
            "name": "吴国亮",
            "alive": false,
            "belongTo": "外朋"
          }, {
            "name": "吴国宝",
            "alive": false,
            "belongTo": "外朋"
          }, {
            "name": "吴国勤?",
            "alive": false,
            "belongTo": "外朋"
          }, {
            "name": "吴启",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴勇",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴辉",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴晓明",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴晓卫",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴晓纯",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴华东",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴华星",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳旭",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳益",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳华",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳良",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳成",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳开",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴翠柳",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴翠利",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳树",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳田",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳西",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳南",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳立",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳学",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴代学",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳泰",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳州",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳宇",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳成",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳章",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳龙",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳锋",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳乐",
            "alive": true,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳宙",
            "alive": true,
            "belongTo": "牛劳"
          }, {
            "name": "吴华良",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴华清",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴华勤",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴华刚",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳新",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴理杰",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴强",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳祥",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳权",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳能",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴炳才",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴继平",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴祖平",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴祖能",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴有能",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴有文",
            "alive": false,
            "belongTo": "牛劳"
          }
        ]
      },
      {
        "levelName": "作",
        "members": [
          {
            "name": "吴作安",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作亮",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作勇",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作康",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作富",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作义",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作波",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作象",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作俊",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作旺",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作喜",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作欢",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作满",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作孟",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴缘",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作宽",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作贤",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作佳",
            "alive": false,
            "belongTo": "牛劳"
          }, {
            "name": "吴作懂",
            "alive": false,
            "belongTo": "牛劳"
          }
        ]
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
