function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec

let now = new Date();

console.log(`開始工作 at ${now.toISOString()}`);

// write your code here
// 以下是使用範例

doJob('刷牙', 1000, function (data) {
  // 表示 doJob 做完了
  console.log(data);
});

doJob('吃早餐', 4000, function (data) {
  // 表示 doJob 做完了
  console.log(data);
});

doJob('寫功課', 5000, function (data) {
  // 表示 doJob 做完了
  console.log(data);
});

doJob('吃午餐', 7000, function (data) {
  // 表示 doJob 做完了
  console.log(data);
});

// ================== 第二種寫法 ===================

function doJob(job, time, cb) {
  setTimeout(() => {
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

// 開始工作流程
doJob('刷牙', 1000, function (data) {
  console.log(data); // 刷牙完成
  doJob('吃早餐', 3000, function (data) {
    console.log(data); // 吃早餐完成
    doJob('寫功課', 1000, function (data) {
      console.log(data); // 寫功課完成
      doJob('吃午餐', 2000, function (data) {
        console.log(data); // 吃午餐完成
      });
    });
  });
});
