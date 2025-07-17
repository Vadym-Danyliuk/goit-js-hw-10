function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return ` "You ordered ${quantity} droids worth ${totalPrice} credits!"`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

//

// function makeTransaction2(quantity2, pricePerDroid2) {
//   const totalPrice2 = quantity2 * pricePerDroid2;
//   return ` "Ви замовили ${quantity2} дронів), вартіть кожного ${pricePerDroid2}ойро, загальна вартість товарів у кошику ${totalPrice2} Листочків з дерева"`;
// }
// const userQuantity = Number(prompt("Ведіть кількість дронів"));
// const userPrice = Number(prompt("Яка рартість драна вам підходить?"));
// alert(makeTransaction2(userQuantity, userPrice));
