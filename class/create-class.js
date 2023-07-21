function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  this.getAge = function(){
    return this.age;
  } 

  this.setAge = function(age){
    this.age = age;
  } 

  this.changeName = function (name) {
    this.lastName = name;
  };
}

let myFather = new Person("Nguyễn Văn", "Ba", 50, "Đen");
let myMother = new Person("Trần Thị", "Mẹ", 48, "Đen");

console.log("myFather: " + JSON.stringify(myFather));
console.log("myMother: " + JSON.stringify(myMother));

console.log("Hacking age...");
myMother.setAge(45);

console.log("After hacking age: ");
console.log("My new mother's age is: " + myMother.getAge());


