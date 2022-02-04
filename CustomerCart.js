
class Course{
    constructor(courseName,price,amount){
        this.courseName=courseName;
        this.price = price;
        this.amount = amount;

    }
}

const listofCourses = [];

const course1 = new Course("Web-Development",20,1);
const course2 = new Course(".Net Course",30,1);
const course3 = new Course("Cyber-Security",40,1);
const course4 = new Course("Web-Development",35,1);

function addCourse1() {
    
    alert("Course Added");
  
}

listofCourses.push(course1);
listofCourses.push(course2);
listofCourses.push(course3);
listofCourses.push(course4);


for (let i = 0; i < listofCourses.length; i++) {
    const course = listofCourses[i];
    let innerHTML = `<li>${course.courseName} ${course.price} ${course.amount}</li>`
    document.getElementById("customerCart").innerHTML+= innerHTML;
    
}