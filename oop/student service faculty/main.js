var arrofStudents =[];
var arrofProfesors = [];

//FORMA STUDENT

var createStudentBtn = document.querySelector('#createStudent');


//Pravljene drop-downa za Status ///
var option = document.createElement('option');
var studentStatus = document.querySelector('#studentStatus');
option.textContent = STUDENT_STATUS.REGULAR;
option.value = STUDENT_STATUS.REGULAR;
studentStatus.appendChild(option);
/////////////////////////////////////


//STUDENT
var firstShow = document.querySelector(".firstShow");
var olStudent = firstShow.querySelector('ol');
var counter = 0;
var dropStudents;
var optionStudent

function createStudent(name, surname, indexNum, studStatus) {
    counter++;
    //Selektovanje vrednosti i kreiranje studenta pomocu konstruktora;
    var studentName = document.querySelector('#studentName').value;
    var studentSurname = document.querySelector('#studentSurname').value;
    var studentNumber = document.querySelector('#studentNumber').value;
    var studentStatusvalue = studentStatus.value;
    var student = new Student(studentName, studentSurname, studentNumber, studentStatusvalue)

    //Dodavanje studneta u listu
    var liStudent = document.createElement('li');
    liStudent.id = counter
    liStudent.textContent = student.getData()
    olStudent.appendChild(liStudent)

    //Pojavlivanje studenta u listi Passed Exam;
    optionStudent = document.createElement('option');
    dropStudents = document.querySelector('.dropstudents');
    optionStudent.value = counter;
    optionStudent.textContent = student.getData();
    dropStudents.appendChild(optionStudent);
    
    arrofStudents.push(student)
};

createStudentBtn.addEventListener('click', createStudent)

