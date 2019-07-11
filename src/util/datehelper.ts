export function addHours(hours: number = 0) {
  const returnDate = new Date();
  returnDate.setHours(returnDate.getHours() + hours);
  return returnDate;
}
