function getElementWidth(content, padding, border) {
  const contentNum = parseFloat(content);
  const paddingNum = parseFloat(padding) * 2;
  const borderNum = parseFloat(border) * 2;
  return contentNum + paddingNum + borderNum;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

// //

// function getElementWidth(content, padding, border) {
//   const contentNum = parseFloat(content);
//   const paddingNum = parseFloat(padding) * 2;
//   const borderNum = parseFloat(border) * 2;
//   return contentNum + paddingNum + borderNum;
// }
// const contentUser = parseFloat(prompt("Введіть ширину "));
// const paddingUser = parseFloat(prompt("Вкажіть внутрішній відступ"));
// const borderUser = parseFloat(prompt("Вкажіть рамку"));
// alert(getElementWidth(contentUser, paddingUser, borderUser));
