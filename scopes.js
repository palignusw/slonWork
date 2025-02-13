function createLogger() {
  const logs = [];

  return {
    log: function (message) {
      logs.push(message);
    },
    getLogs: function () {
      return logs;
    },
  };
}

const logger = createLogger();
logger.log("message 1");
logger.log("message 2");
logger.log("message3");
logger.log(123);

console.log(logger.getLogs());



function randomNum(min, max) {
  return function () {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

const getRandomNum = randomNum(1, 10);
console.log(getRandomNum());
console.log(getRandomNum());
