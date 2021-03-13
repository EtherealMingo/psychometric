const Mock = require("mockjs");
const Random = Mock.Random;

const newsData = function() {
  let articles = [];
  for (let i = 0; i < 10; i++) {
    let newsObj = {
      date: Random.date(), //年月日
      longDate: Random.datetime(), //精确到时分秒
      number: Random.natural(201, 205), //数字
      image: Random.image(), //图片
      flag: Random.boolean(), // true-false
      name: Random.cname(), //姓名
      url: Random.url(), //url地址
      email: Random.email(), //邮件地址
      province: Random.province(), //省
      city: Random.city(3), //市
      county: Random.county() //区
    };
    articles.push(newsObj);
  }

  return {
    code: 0,
    msg: "操作成功",
    data: articles
  };
};

const personnel = function() {
  let articles = [];
  for (let i = 0; i < 20; i++) {
    let newsObj = {
      longDate: Random.datetime(), //精确到时分秒
      name: Random.cname(), //姓名
      remarks: Random.sentence(),
      number: Random.natural(201, 205), //数字

      // eslint-disable-next-line no-unused-vars

      source: Random.extend({
        sources: ["校内", "毕业生", "校外人员"],
        // eslint-disable-next-line no-unused-vars
        source: function(_date) {
          console.log(this.pick);
          return this.pick(this.sources);
        }
      })
    };
    articles.push(newsObj);
  }

  return {
    code: 0,
    msg: "操作成功",
    data: articles
  };
};

const anxietyData = {
  status: 200,
  message: "量表结束页!",
  title: "焦虑自评量表(SAS)",
  description:
    "焦虑是一种比较普遍的精神体验，长期存在焦虑反应的人易发展为焦虑症。本量表包含20个项目，分为4级评分，请您仔细阅读以下内容，根据最近一星期的情况如实回答。",
  data: [
    { id: 1, question: "我觉得比平时容易紧张或着急", a: 1, b: 2, c: 3, d: 4 },
    { id: 2, question: "我无缘无故在感到害怕", a: 1, b: 2, c: 3, d: 4 },
    { id: 3, question: "我容易心里烦乱或感到惊恐", a: 1, b: 2, c: 3, d: 4 },
    { id: 4, question: "我觉得我可能将要发疯", a: 1, b: 2, c: 3, d: 4 },
    { id: 5, question: "我觉得一切都很好", a: 4, b: 3, c: 2, d: 1 },
    { id: 6, question: "我手脚发抖打颤", a: 1, b: 2, c: 3, d: 4 },
    { id: 7, question: "我因为头疼、颈痛和背痛而苦恼", a: 1, b: 2, c: 3, d: 4 },
    { id: 8, question: "我觉得容易衰弱和疲乏", a: 1, b: 2, c: 3, d: 4 },
    {
      id: 9,
      question: "我觉得心平气和，并且容易安静坐着",
      a: 4,
      b: 3,
      c: 2,
      d: 1
    },
    { id: 10, question: "我觉得心跳得很快", a: 1, b: 2, c: 3, d: 4 },
    { id: 11, question: "我因为一阵阵头晕而苦恼", a: 1, b: 2, c: 3, d: 4 },
    {
      id: 12,
      question: "我有晕倒发作，或觉得要晕倒似的",
      a: 1,
      b: 2,
      c: 3,
      d: 4
    },
    { id: 13, question: "我吸气呼气都感到很容易", a: 4, b: 3, c: 2, d: 1 },
    { id: 14, question: "我的手脚麻木和刺痛", a: 1, b: 2, c: 3, d: 4 },
    { id: 15, question: "我因为胃痛和消化不良而苦恼", a: 1, b: 2, c: 3, d: 4 },
    { id: 16, question: "我常常要小便", a: 1, b: 2, c: 3, d: 4 },
    { id: 17, question: "我的手脚常常是干燥温暖的", a: 4, b: 3, c: 2, d: 1 },
    { id: 18, question: "我脸红发热", a: 1, b: 2, c: 3, d: 4 },
    { id: 19, question: "我容易入睡并且一夜睡得很好", a: 4, b: 3, c: 2, d: 1 },
    { id: 20, question: "我作恶梦", a: 1, b: 2, c: 3, d: 4 }
  ]
};

const depressionData = {
  status: 200,
  message: "响应成功!",
  title: "抑郁自评量表(SDS)",
  description:
    "本量表包含20个项目，分为4级评分，为保证调查结果的准确性，务请您仔细阅读以下内容，根据最近一星期的情况如实回答。 说明：所有题目均共用答案，请选择A、B、C 、D，每题限选一个答案。",
  data: [
    { id: 1, question: "我觉得闷闷不乐,情绪低沉", a: 1, b: 2, c: 3, d: 4 },
    { id: 2, question: "我觉得一天之中早晨最好", a: 4, b: 3, c: 2, d: 1 },
    { id: 3, question: "我一阵阵哭出来或想哭", a: 1, b: 2, c: 3, d: 4 },
    { id: 4, question: "我晚上睡眠不好", a: 1, b: 2, c: 3, d: 4 },
    { id: 5, question: "我吃得跟平常一样多", a: 4, b: 3, c: 2, d: 1 },
    {
      id: 6,
      question: "我与异性密切接触时和以往一样感到愉快",
      a: 4,
      b: 3,
      c: 2,
      d: 1
    },
    { id: 7, question: "我发觉我的体重在下降", a: 1, b: 2, c: 3, d: 4 },
    { id: 8, question: "我有便秘的苦恼", a: 1, b: 2, c: 3, d: 4 },
    { id: 9, question: "我心跳比平时快", a: 1, b: 2, c: 3, d: 4 },
    { id: 10, question: "我无缘无故地感到疲乏", a: 1, b: 2, c: 3, d: 4 },
    { id: 11, question: "我的头脑跟平常一样清楚", a: 4, b: 3, c: 2, d: 1 },
    { id: 12, question: "我觉得经常做的事情并没困难", a: 4, b: 3, c: 2, d: 1 },
    { id: 13, question: "我觉得不安而平静不下来", a: 1, b: 2, c: 3, d: 4 },
    { id: 14, question: "我对将来抱有希望", a: 4, b: 3, c: 2, d: 1 },
    { id: 15, question: "我比平常容易生气激动", a: 1, b: 2, c: 3, d: 4 },
    { id: 16, question: "我觉得作出决定是容易的", a: 4, b: 3, c: 2, d: 1 },
    {
      id: 17,
      question: "我觉得自己是个有用的人，有人需要我",
      a: 4,
      b: 3,
      c: 2,
      d: 1
    },
    { id: 18, question: "我的生活过得很有意思", a: 4, b: 3, c: 2, d: 1 },
    {
      id: 19,
      question: "我认为如果我死了别人会生活得更好些",
      a: 1,
      b: 2,
      c: 3,
      d: 4
    },
    {
      id: 20,
      question: "平常感兴趣的事我仍然照样感兴趣",
      a: 4,
      b: 3,
      c: 2,
      d: 1
    }
  ]
};

Mock.setup({
  timeout: 500
});

//请严格注意get请求的地址
Mock.mock("/api/user/myTranferRecord", "post", newsData); //post请求
Mock.mock("/personnel", "post", personnel); //post请求
Mock.mock("/anxietyData", "post", anxietyData); //post请求
Mock.mock("/depressionData", "post", depressionData); //post请求

Mock.mock(RegExp("/api/user/myTranferRecord" + ".*"), "get", newsData); //get请求
