function getShippingMessage(country, price, deliveryFee) {
  const deliveryPrice = price + deliveryFee;

  return `Shipping to ${country} will cost ${deliveryPrice} credits`;
}
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));

//

// function getShippingMessage2(country2, price2, deliveryFee2) {
//   const deliveryPrice2 = price2 + deliveryFee2;

//   return `Відпралення в  ${country2} коштуватиме ${deliveryPrice2} папугаїв`;
// }
// const userCountry = prompt("Виберіть країну");
// const userPrice = Number(prompt("Вкажіть вартість товару"));
// const userDeliveri = Number(prompt("Вкажіть вартість доставки"));
// alert(getShippingMessage2(userCountry, userPrice, userDeliveri));
