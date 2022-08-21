export function printOwing(invoice, console, clock) {
  // class로 만들어 리팩토링 하는 것을 추천!
  printBanner(console);
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice, clock);
  printDetails(console, invoice, outstanding);
}

function printBanner(console) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice, clock) {
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(console, invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}

class Clock {
  get today() {
    return new Date();
  }
}
const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "한나",
};
const clock = new Clock();
printOwing(invoice, console, clock);
