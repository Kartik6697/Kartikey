const India_A = [10, 20, 25];
const India_B = [15, 30, 40];
let winner_team;
let avgIndiaA, avgIndiaB;
//calculate average of India_A team
//create a function to calculate average for first array
const calcAverage1 = (India_A) => {
  let total1 = 0;
  let count1 = 0;
  // let avg = 0;

  //function that calculate values of array and do add
  India_A.map(function (item1) {
    total1 += item1;
    count1++;
  });
  //this will calculate average of values using logic of addition of values divide by no. of total values in array
  return total1 / count1;
};
//store function value in a varible
avgIndiaA = calcAverage1(India_A);
document.write(avgIndiaA); //display that variable
document.write("<br>"); // for display in new line

//calculate average of India_B team
//create a function to calculate average for second array
const calcAverage2 = (India_B) => {
  let total2 = 0;
  let count2 = 0;
  // let avg = 0;

  //function that calculate values of array and do add
  India_B.map(function (item2) {
    total2 += item2; //addition of values
    count2++; //value count increment
  });
  //this will calculate average of values using logic of addition of values divide by no. of total values in array
  return total2 / count2;
};
//store function value in a varible
avgIndiaB = calcAverage2(India_B);
document.write(avgIndiaB); //display that variable
document.write("<br>");

//calculate average for both output averages and display
const checkWinner = (avgIndiaA, avgIndiaB) => {
  let count = 0;
  return (calcAverage1(India_A) + calcAverage2(India_B)) / 2;
};
let Winner = checkWinner(India_A, India_B);
document.write(Winner);
