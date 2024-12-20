///\\\\\\\\\\\\\\----------- QUESTION 1. ---------\\\\\\\\\\\\\\\\\///

let studentNames = [];
studentNames.push("Ayesha");
studentNames.push("Areeba <br>");
document.write(studentNames);

///\\\\\\\\\\\\\\----------- QUESTION 2. ---------\\\\\\\\\\\\\\\\\///

let studentName = {};
studentName.name = "Ayesha";
studentName.age = 18;
studentName.grade = "A";
console.log(studentName);

///\\\\\\\\\\\\\\----------- QUESTION 3. ---------\\\\\\\\\\\\\\\\\///

let str = ["Lipgloss","Mascara","conceler","highlighter","sheglam Blush <br>"];
document.write(str);

///\\\\\\\\\\\\\\----------- QUESTION 4. ---------\\\\\\\\\\\\\\\\\///

let num = [1,2,3,4,5,6 ,"<br>"];
document.write(num);

///\\\\\\\\\\\\\\----------- QUESTION 5. ---------\\\\\\\\\\\\\\\\\///

 let bool = [true,false,true,false];
document.write(bool[0]);
document.write(bool[1]);

///\\\\\\\\\\\\\\----------- QUESTION 6. ---------\\\\\\\\\\\\\\\\\///

 let mix = ["ayesha",25,true,"phone033--",null];
 
///\\\\\\\\\\\\\\----------- QUESTION 7. ---------\\\\\\\\\\\\\\\\\///

document.write("<br> QUALIFICATIONS <br>");
let quali = ["1) SSC <br>"+ "2) HSC <br>"+ "3) BCS <br>"+" 4) BS <br>"+ "5) BCOM <br>" + " 6) MS <br>" +  "7) M. Phil <br>" + "8) PhD <br>"]
document.write(quali);

///\\\\\\\\\\\\\\----------- QUESTION 8. ---------\\\\\\\\\\\\\\\\\///

let student = ["ayesha", "areeba", "alishba"];
let studentScores = [450, 380, 400];
let totalMarks = 500;
for (var i = 0; i < student.length; i++) {
let percentage = (studentScores[i] / totalMarks) * 100;
document.write( " <br> Name: " + student[i] +  "  |  Score: " + studentScores[i] +" . Percentage: " + percentage +"%" )}

//\\\\\\\\\\\\\\----------- QUESTION 9. ---------\\\\\\\\\\\\\\\\\///

let colors = [" Red", "Blue", "Green", "Yellow", "Pink"];
document.write("<br> Initial Colors Array: " + colors + "<br>");

let addBeginColors = prompt("enter the color which you want to ADD in BEGINING");
colors.unshift(addBeginColors);
document.write("The adding color in the BEGINING is " + colors + "<br>");

let addEndColors = prompt("Enter the color which you want to ADD in the END");
colors.push(addEndColors);
document.write("The adding color in the END is " + colors + "<br>");

let removeBeginColors = prompt("Enter the color which you want to REMOVE from the BEGINING")
colors.shift(removeBeginColors);
document.write("the color which remove from the begining is " + colors + "<br>");

let removeEndColors = prompt("Enter the color which you want to REMOVE at the END");
colors.pop(removeEndColors);
document.write("The color which is remove at the end is " + colors + "<br>");

let indexToAddColor = prompt("At which index do you want to add a color?"); 
let colorNameToAdd = prompt("What color would you like to add?"); 
colors.splice(indexToAddColor, 0, colorNameToAdd);
document.write("Updated Colors Array after adding color at index " + indexToAddColor + ": " + colors + "<br>");

let indexToDeleteColor = prompt("At which index do you want to delete color(s)?"); // 2
let colorsToDeleteCount = prompt("How many colors do you want to delete?"); // 2
colors.splice(indexToDeleteColor, colorsToDeleteCount);
document.write("Updated Colors Array after deleting " + colorsToDeleteCount + " color(s) from index " + indexToDeleteColor + ": " + colors + "<br>");

//\\\\\\\\\\\\\\----------- QUESTION 10. ---------\\\\\\\\\\\\\\\\\///

let score = [23,45,89,12,45,70];
score.sort((a,b) => a - b);
document.write("Ordered scores of student is " + score +"<br>");

//\\\\\\\\\\\\\\----------- QUESTION 11. ---------\\\\\\\\\\\\\\\\\///

let cities = [" karachi","muree","islambad","qetta","multan","swat","kashmir"];
document.write("the cites are" + cities + "<br>");
let selectedCities = cities.slice(2,4);
document.write("the three specific cities are  " + selectedCities + "<br>");

//\\\\\\\\\\\\\\----------- QUESTION 12. ---------\\\\\\\\\\\\\\\\\///

let arr = ["This","is","my","cat"];
document.write("Array" + arr + "<br>");
let stri = arr.join(" ");
document.write("String: " + stri +"<br>");

//\\\\\\\\\\\\\\----------- QUESTION 13. ---------\\\\\\\\\\\\\\\\\///

let queue = [];
queue.push("printer");
queue.push("mouse");
queue.push("keyboard");

document.write("Queue: " + queue + "<br>");

document.write("Accessing values in FIFO order:<br>");
while (queue.length > 0) {
    let value = queue.shift();
    document.write(value + "<br>");
}

//\\\\\\\\\\\\\\----------- QUESTION 14. ---------\\\\\\\\\\\\\\\\\///

let stack = [];
stack.push("printer");
stack.push("mouse");
stack.push("keyboard");
document.write("Stack: " + stack + "<br>");
document.write("Accessing values in LIFO order:<br>");
while (stack.length > 0) {
    let value = stack.pop(); 
    document.write(value + "<br>");
}

//\\\\\\\\\\\\\\----------- QUESTION 15. ---------\\\\\\\\\\\\\\\\\///

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}
document.write('</select>');
