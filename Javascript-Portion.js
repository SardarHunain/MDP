/*Create a javascript class Person with attributes: id, name, age.
Derive two classes from person, named Student and Teacher.
The extra attributes of Student are cgpa, currently enrolled semester (e.g., FA22 or SP22, etc), admission date.
The extra attributes of Teacher are salary, designation (Lecturer, Assistant Professor, Professor, etc), department, and joining date.
Populate at least 3 records in each class use class objects.
A user should be able to search a student or teacher with the provided ID. To manage that you should store objects of Teacher and Student in an array.
*/
class Person {
    constructor(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
  }
  
  class Student extends Person {
    constructor(id, name, age, cgpa, enrolledSemester, admissionDate) {
      super(id, name, age);
      this.cgpa = cgpa;
      this.enrolledSemester = enrolledSemester;
      this.admissionDate = admissionDate;
    }
  }
  
  class Teacher extends Person {
    constructor(id, name, age, salary, designation, department, joiningDate) {
      super(id, name, age);
      this.salary = salary;
      this.designation = designation;
      this.department = department;
      this.joiningDate = joiningDate;
    }
  }
  
  // Create an array to store records of students and teachers
  const people = [];
  
  // Populate the array with sample data
  people.push(new Student(1, 'John Doe', 20, 3.8, 'FA22', '2022-09-15'));
  people.push(new Student(2, 'Jane Smith', 21, 3.6, 'SP22', '2022-03-10'));
  people.push(new Student(3, 'Alice Johnson', 19, 3.9, 'FA21', '2021-09-01'));
  
  people.push(new Teacher(101, 'Dr. Robert Brown', 35, 60000, 'Professor', 'Computer Science', '2015-08-20'));
  people.push(new Teacher(102, 'Dr. Emily White', 40, 55000, 'Associate Professor', 'Physics', '2017-01-10'));
  people.push(new Teacher(103, 'Prof. David Smith', 50, 70000, 'Professor', 'Mathematics', '2010-05-15'));
  
  // Function to search a person by ID
  function searchPersonById(id) {
    const person = people.find(p => p.id === id);
    if (person) {
      return person;
    } else {
      return 'Person not found.';
    }
  }
  
  // Example usage of searching a person by ID
  const idToSearch = 2;
  const result = searchPersonById(idToSearch);
  console.log(result);
  
/*Write arrow functions for the following equations:
𝐴 = 𝑥2 + 2𝑥𝑦 + 𝑃. 𝑧
P = 𝑛2 + 𝑞𝑛 + 1
Z = x2 + 4y2 – 8y + 2x*/
P = (n,q)=>n*n+q*n+1;
A = (x,y,z)=>x*x+2*x*y+P(1,1)*z;
Z = (x,y)=>x*x+4*(y*y)-8*y+2*x;

console.log(A(2,3,4));
console.log(Z(3,4));

//.................................................
/*Suppose the equation is:
Z = x2 + 4y2 – 8N + 2x 
Where N is represented by a separate equation:
N = p2z + rq2 + s
Solve ‘Z’ with arrow function. Note, here you are calling an arrow function within an 
arrow function.*/
N = (p,q,r,s,z) =>(p*p)*z + r*(q*q) + s;
Z = (x,y)=>x*x + (4*(y*y)) - 8*N(1,2,1,1,2) +2*x;

console.log(Z(2,3));
//.................................................
/*Write the following expressions using Javascript arrow functions. DO NOT change the 
variable names and function names as provided below, otherwise it will be considered 
an incorrection solution.
𝑵 = 𝑥3 + 𝑎3
𝒁 = 𝑠2 + 5𝑡 + 𝑵/2
𝑨 = 2𝑥 + 𝑦𝒁
*/ 
N = (x,a)=>x*x*x + a*a*a;
Z = (s,t)=> s*s + 5*t + N(2,3)/2;

A = (x,y)=>2*x + y* ((Z(2,2))*(Z(2,2)));

console.log(N(2,3));
console.log(Z(2,1));
console.log(A(1,3));
//.................................................
/*Suppose you have the following array of objects,
var myarray: [ {‘name‘: ‘ali’, ‘age’:’45’}, {‘name’:’noman’, ‘age’:’34’}]
Display the values of array using map function.*/ 
var myArray = [{name:'Ali',age:45},{name:'noman',age:34}]

myArray.map((val)=>{
  console.log(val.name,val.age)
})


myArray.map((val)=>{
    console.table([val]);
})
//.................................................
/*Suppose we have the following arrays in JavaScript:
var myArray1 = [3, 4, 5]
var myArray2 = [6, 7, 8]
Write code to append the myArray2 into myArray1.*/
let arr1 = [3,4,5]
let arr2 = [6,7,8]
console.log(arr1.concat(arr2));
//or
// var myArray1 = [3, 4, 5];
// var myArray2 = [6, 7, 8];

// myArray1 = [...myArray1, ...myArray2];

// console.log(myArray1);


//.................................................
var myObject1 = {
    name:'Devin',
    hairColor:'Brown',
}
myObject1 = {...myObject1,hairColor:'red'}
console.log(myObject1.hairColor);
//.................................................
/*Write an example of defining an arrow function within another arrow function.*/ 
arrowFunction = ()=>{
        insideArrowFunction = ()=>{
            return 2+2
        }
        return(insideArrowFunction())
} 
console.log(arrowFunction());

                            /**********************End Javascript portion*************************/

                            A=[2,4,3,6,7]
                              A.map((itm)=>console.log(itm))