/*Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

"use strict"

function studentsGrade(arrStudents, arrGrades) {
    for (i = 0, j = 0; i < arrStudents.length; i++) {
       
        if (arrGrades[j] < 51) {
            console.log(arrStudents[i] + "acquired " + arrGrades[j] + " and failed to complete the exam");
        }
        if (arrGrades[j] < 60 && arrGrades[j] >= 51) {
            console.log(arrStudents[i] + "acquired " + arrGrades[j] + " and earned 6");
        }
        if (arrGrades[j] < 70 && arrGrades[j] >= 61) {
            console.log(arrStudents[i] + "acquired " + arrGrades[j] + " and 7");
        }
        if (arrGrades[j] < 80 && arrGrades[j] >= 71) {
            console.log(arrStudents[i] + "acquired " + arrGrades[j] + " and 8");
        }
        if (arrGrades[j] < 90 && arrGrades[j] >= 81) {
            console.log(arrStudents[i] + "acquired " + arrGrades[j] + " and 9");
        }
        if (arrGrades[j] < 100 && arrGrades[j] >= 91) {
            console.log(arrStudents[i] + "acquired " + arrGrades[j] + " and 10");
        }
    }

}