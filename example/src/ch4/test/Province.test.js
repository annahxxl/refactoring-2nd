const Province = require("../Province");
const sampleProvinceData = require("./sampleProvinceData");

describe("Province", () => {
  let asia;

  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", () => {
    expect(asia.shortfall).toBe(5);
  });

  it("profit", () => {
    expect(asia.profit).toBe(230);
  });

  it("change production", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  });

  // 수요가 없다.
  it("zero demand", () => {
    asia.demand = 0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  });

  // 수요가 마이너스다.
  it("negative demand", () => {
    asia.demand = -1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  });

  // 수요 입력란이 비어 있다.
  it("empty string demand", () => {
    asia.demand = "";
    expect(asia.shortfall).toBeNaN();
    expect(asia.profit).toBeNaN();
  });
});

// 생산자가 없다.
describe("no producers", () => {
  let noProducers;

  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", () => {
    expect(noProducers.shortfall).toBe(30);
  });

  it("profit", () => {
    expect(noProducers.profit).toBe(0);
  });
});

// 생산자 수 필드에 문자열을 대입한다.
describe("string for producers", () => {
  it("", () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).toBe(0);
  });
});
