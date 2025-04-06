const body = document.querySelector(".body")
const container = document.querySelector(".calculator-container");

const course_info = document.querySelector(".row");
const course_input = document.querySelector(".course-name");
const course_unit = document.querySelector(".course-unit");
const course_grade = document.querySelector(".course-grade");

const generate_btn = document.querySelector("#generate-btn");
const calculate_btn = document.querySelector("#calculate-btn");

function createCalculator(){
  let one_row = course_info.cloneNode(true);
  container.appendChild(one_row);
}

generate_btn.addEventListener('click', createCalculator)