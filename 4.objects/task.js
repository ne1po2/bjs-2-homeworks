function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if (!this.marks) {
    return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length == 0) {
    return 0;
  }
  let totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
  let result = totalMarks / this.marks.length;
  return result;
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject
  this.excluded = reason;
}