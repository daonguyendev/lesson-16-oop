function Student(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;

  this.getId = function () {
    return this.id;
  };

  this.setId = function (id) {
    this.id = id;
  };

  this.getName = function () {
    return this.name;
  };

  this.setName = function (name) {
    this.name = name;
  };

  this.getAge = function () {
    return this.age;
  };

  this.setAge = function (age) {
    this.age = age;
  };
}

let studentA = new Student(1, "Nguyễn Văn Tèo", 17);
console.log(studentA);

