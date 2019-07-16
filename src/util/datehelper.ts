export function addHours(hours = 0) {
  const returnDate = new Date();
  returnDate.setHours(returnDate.getHours() + hours);
  return returnDate;
}
