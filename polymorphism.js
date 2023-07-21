class Student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  speakEnglish() {
    console.log("Say english!");
  }
}

class GoodStudent extends Student {
  constructor(id, name, age) {
    super(id, name, age);
    this.level = "Good";
  }

  speakEnglish() {
    return "Hello C06";
  }
}

class WeakStudent extends Student {
  constructor(id, name, age) {
    super(id, name, age);
    this.level = "Weak";
  }

  speakEnglish() {
    return "Hế lô C06";
  }
}

let ty = new GoodStudent(1, "Tý", 18);
let teo = new WeakStudent(2, "Tèo", 18);
console.log(ty.speakEnglish());
console.log(teo.speakEnglish());
