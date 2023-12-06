export function invoiceCode() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randL_1 = alphabet[Math.floor(Math.random() * 26)];
  const randL_2 = alphabet[Math.floor(Math.random() * 26)];
  const randNum = Math.floor(Math.random() * 9000) + 1000;

  return `${randL_1}${randL_2}${randNum}`;
}

export function amount(qtys, prices) {
  const amount =
    qtys
      ?.map((el, i) => Number(el) * Number(prices[i]))
      .reduce((acc, el) => acc + el, 0) || 0;

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

export function calculateDate(date, number) {
  const match = number?.match(/\d+/)?.[0] || 0;

  const currentDate = new Date(date);
  const newDate = new Date(currentDate);
  newDate.setDate(currentDate.getDate() + parseInt(match, 10));

  // Format the new date as "DD-MM-YYYY"
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = newDate.getFullYear();

  return `${day}-${month}-${year}`;
}
