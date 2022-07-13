import { strict as assert } from "node:assert";

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0); // 개발 단계에서만 사용, 배포 환경에서는 버그 리포트 or 기본값 설정
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1);
