$( document ).ready( readyNow );

function readyNow() {

}


const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function employeeBonus(array){
  
  let newEmployee =[]
  let bonusPercentage = 0
  
for (let i = 0; i < array.length; i++) {
  if(array[i].reviewRating <= 2){
    bonusPercentage = 0;
  } else if(array[i].reviewRating === 3) {
    bonusPercentage = 4;
  } else if(array[i].reviewRating === 4) {
    bonusPercentage = 6;
  } else if(array[i].reviewRating === 5) {
    bonusPercentage = 10;
  }

  if(array[i].employeeNumber.length === 4) {
    bonusPercentage = bonusPercentage + 5;
  }

  if(array[i].annualSalary > 65000) {
    bonusPercentage - 1;
  }
  
  if(bonusPercentage > 13){
    bonusPercentage = 13;
  } else if(bonusPercentage < 0){
    bonusPercentage = 0;
    }

    newEmployee.push({
      name: array[i].name, 
      bonusPercentage: bonusPercentage,
      totalBonus: Math.round(array[i].annualSalary * (bonusPercentage / 100)),
      totalCompensation: parseFloat((array[i].annualSalary)) + parseFloat((Math.round(array[i].annualSalary * (bonusPercentage / 100))))
    })
  }
  console.log(newEmployee);
  

  $("#bonus").append ("<div>" + msg + "</div>");
}



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




console.log( employees );
employeeBonus(employees);
