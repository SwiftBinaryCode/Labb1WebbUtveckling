const jsonRequest = new Request('ClassRoomCourses.json');

const courses = []

class Course{
    constructor(input){
        this.courseNumber= input.courseNumber;
        this.courseTitle = input.courseTitle,
        this.courseDescription = input.courseDescription;
        this.courseLength = input.courseLength;
        this.coursePrice= input.coursePrice;
        this.courseImg= input.courseImg;

    }
}

fetch(jsonRequest).then(response => response.json()).
then(data => {

  for (let i = 0; i < data.length; i++) {
    const course = new Course(data[i])
    courses.push(course);
    
  }
  populateCourseList(courses);

}).catch(console.error)

function populateCourseList(array) {
  
  for (let i = 0; i < array.length; i++) {
    const course = array[i];
    let innerHTML = `
    <div class="pricing-column col-lg-6 col-md-6">
    <div class="card">
    <img src="${course.courseImg}" alt="" class="responsive">
      <div class="card-header">
      
        <h2>${course.courseTitle}</h2>
        <h5>Course Length:${course.courseLength}</h5>
        <h5>Course Price:${course.coursePrice}</h5>
      </div>
      <div class="card-body price-text">
        <p>Course Description: ${course.courseDescription}</p>
      </div>
    </div>
  </div>
`
    document.getElementById("classRoom").innerHTML += innerHTML;
    
  }

  
}













// class Course{
//     constructor(courseName,price,amount){
//         this.courseName=courseName;
//         this.price = price;
//         this.amount = amount;

//     }
// }

// const listofCourses = [];

// const course1 = new Course("Web-Development",20,1);
// const course2 = new Course(".Net Course",30,1);
// const course3 = new Course("Cyber-Security",40,1);
// const course4 = new Course("Web-Development",35,1);

// function addCourse1() {
    
//     alert("Course Added");
  
// }

// listofCourses.push(course1);
// listofCourses.push(course2);
// listofCourses.push(course3);
// listofCourses.push(course4);


// for (let i = 0; i < listofCourses.length; i++) {
//     const course = listofCourses[i];
//     let innerHTML = `<li>${course.courseName} ${course.price} ${course.amount}</li>`
//     document.getElementById("customerCart").innerHTML+= innerHTML;
    
// }