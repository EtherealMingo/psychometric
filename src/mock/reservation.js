const Mock = require("mockjs");
const Random = Mock.Random;

const newsData = function() {
  let articles = [];
  for (let i = 0; i < 20; i++) {
    let newsObj = {
      longDate: Random.datetime(), //精确到时分秒
      name: Random.cname(), //姓名
      consultant: Random.extend({
        consultants: ["王挺", "孙越异", "王蓓", "黄爱国", "孔梦雅(实习)"],
        consultant: (function() {
          return this.pick(this.consultant);
        })()
      }),
      source: Random.extend({
        sources: ["校内", "毕业生", "校外人员"],
        source: (function() {
          return this.pick(this.source);
        })()
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

Mock.setup({
  timeout: 500
});

//请严格注意get请求的地址
Mock.mock("/personnel", "post", newsData); //post请求
Mock.mock(RegExp("/api/user/myTranferRecord" + ".*"), "get", newsData); //get请求
