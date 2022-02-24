
const jsonRequest = new Request('OnDemandCourses.json');

const courses = []

class Course{
    constructor(input){
        this.courseNumber= input.courseNumber;
        this.courseTitle = input.courseTitle,
        this.courseDescription = input.courseDescription;
        this.courseLength = input.courseLength;
        this.coursePrice= input.coursePrice;
        this.courseImg=input.courseImg;

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
    // let innerHTML = `<li> ${meal.mealName} ${meal.protien} ${meal.carbs} ${meal.sauce}</li>`;
    
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
    document.getElementById("On-demand").innerHTML += innerHTML;
    
  }

  
}



