class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get type() {
    return "employee";
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  static createEmployee(name, type) {
    Employee.validateType(type);
    switch (type) {
      case "engineer":
        return new Engineer(name);
      case "salesperson":
        return new Salesperson(name);
      case "manager":
        return new Manager(name);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}

const ellie = new Engineer("엘리");
const bob = new Manager("밥");
