const jsonRequest = new Request('AllCourses.json');

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

    let innerHTML = `<section class="container content-section">  
           
            
            <div class="shop-items">
                <div class="shop-item">
                    <span class="shop-item-title">${course.courseTitle}</span>
                    <h5> <span class="shop-item-price">Course Length:${course.courseLength} Course Number: ${course.courseNumber}Course Price: ${course.coursePrice}</span></h5>
                    <img class="shop-item-image" src="${course.courseImg}">
                    <div class="shop-item-details">
                        
                        <p>Course Description: ${course.courseDescription}</p>
                        
                        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>

                </div>
        </section>

        `


//     let innerHTML = `<div class="pricing-column col-lg-4 col-md-6">
//     <div class="card">
//       <div class="card-header">
//       <img src="${course.courseImg}" alt="">
//         <h2>${course.courseTitle}, ${course.courseNumber}</h2>
//         <h5>Course Length:${course.courseLength}</h5>
//         <h5>Course Price:${course.coursePrice}</h5>
//       </div>
//       <div class="card-body">
//         <p>Course Description: ${course.courseDescription}</p>
//         <button onclick="addCourse1()" class="btn btn-lg btn-block btn-outline-dark" type="button">Add Course</button>
//       </div>
//     </div>
//   </div>
// `

   

    document.getElementById("allCourses").innerHTML += innerHTML;
    
  }

  
}



