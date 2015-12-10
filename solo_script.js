// ! ! !
// Three Bugs
// zero is a test subject. i inserted zero in front of atticus in the 2d array because i wanted to prove that code is getting caught up on the first index of the employee arrays. now to find the bug in the for loop.
// added [i] to array inside calculateSTI call. now the for loop functions properly. bug 1 found. note, now it builds array but all the salarys are negative, time to check the math.
// basepercent was set to minus 1 changed + 1.  now  salarys no longer come up negative. but now everyone is getting a 13 percent bonus. did some testing, found the plus 1 to be unnessesary. removed it. numbers seem to be correct, still one bug left.
// found if employee has a review of 2, and a 4 digit employee number they still got a 5 percent raise, added argument reviewScore to the getYearAdjustment function. 
// salary was not being rounded off in the new array. adjusted.

var zero = ["zero","1444","20000",2];
var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [zero,arrayAtticus, arrayJem, arrayBoo, arrayScout];
//verify that array is working correctly.
console.log(array);
//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'


for(var i = 0; i < array.length; i++){
  array[i] = calculateSTI(array[i]);
    newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);

}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = array[0];

  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];

  
  var  bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber,reviewScore) - getIncomeAdjustment(baseSalary)  ;
  
     if( bonus  > 0.13){
     bonus = 0.13;
    }
  
  
  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber,reviewScore){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4 && reviewScore > 2){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}