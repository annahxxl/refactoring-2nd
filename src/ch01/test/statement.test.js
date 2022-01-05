const statement = require("../statement");

describe("statement", () => {
  let plays;
  let invoice;

  beforeEach(() => {
    plays = {
      hamlet: { name: "Hamlet", type: "tragedy" },
      asLike: { name: "As You Like It", type: "comedy" },
      othello: { name: "Othello", type: "tragedy" },
    };
    invoice = {
      customer: "BigCo",
      performances: [
        {
          playID: "hamlet",
          audience: 55,
        },
        {
          playID: "asLike",
          audience: 35,
        },
        {
          playID: "othello",
          audience: 40,
        },
      ],
    };
  });

  it("청구 내역을 출력한다.", () => {
    const result = statement(invoice, plays);
    expect(result).toBe(
      "청구 내역 (고객명: BigCo)\n  Hamlet: $650.00 (55석)\n  As You Like It: $580.00 (35석)\n  Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n"
    );
  });

  it("play의 type이 tragedy이나 comedy가 아니라면 Exception이 발생한다.", () => {
    plays.hamlet.type = "etc";
    expect(() => statement(invoice, plays).toThrow("알 수 없는 장르: etc"));
  });
});
