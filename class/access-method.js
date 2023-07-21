function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  this.setLastName = function (name) {
    this.lastName = name;
  };

  this.setAge = function(age) {
    //just demo for understand encapsulation
    //reality, we don't add logic code in getter/setter
    //we will use validator to verify property values
    if (age <= 0) {
      console.log("Your age is invalid!");
    } else {
      this.age = age;
    }
  }
}

let myFather = new Person("Nguyễn Văn", "Ba", 50, "Đen");
let myMother = new Person("Trần Thị", "Mẹ", 48, "Đen");

console.log(myFather);
console.log(myMother);

myMother.setLastName("Mẹ Tui");
myMother.setAge(-45);//log message error
myMother.setAge(45);//update age success
console.log(myMother);
