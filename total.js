function topThreeBuyers(purchases) {
  let totalAmount = 0;
  purchases.forEach((amount) => {
    totalAmount += amount;
  });
  return totalAmount;
}

let topBuyersPurchases = [10000, 20000, 30000];
console.log(topThreeBuyers(topBuyersPurchases));
