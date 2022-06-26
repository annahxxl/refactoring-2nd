export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const hanna = new Person("한나");
const course = new Course("리팩토링", true);
hanna.addCourse(course);
console.log(hanna.courses.length);
hanna.removeCourse(course, () => {
  console.log("해당 코스는 없다!");
});
console.log(hanna.courses.length);
hanna.removeCourse(course, () => {
  console.log("해당 코스는 없다!");
});
