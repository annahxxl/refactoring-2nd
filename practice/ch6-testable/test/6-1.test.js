import { printOwing } from "../6-1";

class Console {
  #content = "";
  log(message) {
    this.#content += `${message}\n`;
  }
  get content() {
    return this.#content;
  }
}

class Clock {
  get today() {
    return {
      getFullYear() {
        return 2022;
      },
      getMonth() {
        return 0;
      },
      getDate() {
        return 21;
      },
    };
  }
}

describe("printOwing", () => {
  it("should print owing", () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: "한나",
    };
    const expected =
      "***********************\n" +
      "**** Customer Owes ****\n" +
      "***********************\n" +
      "name: 한나\n" +
      "amount: 7\n" +
      "due: 2/20/2022\n";
    const console = new Console();
    const clock = new Clock();
    printOwing(invoice, console, clock);
    expect(console.content).toBe(expected);
  });
});
