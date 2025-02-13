function guessNumber(target) {
  let low = 1;
  let high = 100;
  let attempts = 0;

  while (low <= high) {
    attempts++;
    let guess = Math.floor((low + high) / 2);
    console.log(`попытка №${attempts}: чисол ${guess}`);

    if (guess === target) {
      console.log(`угадано!число:${guess},попыток:${attempts}`);
      break;
    } else if (guess < target) {
      console.log("больше");
      low = guess + 1;
    } else {
      console.log("меньше");
      high = guess - 1;
    }
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const secretNumber = getRandomNumber();
guessNumber(secretNumber);
