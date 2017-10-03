var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

var Employee = function(name, employeeNumber, annualSalary, reviewRating) {
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.annualSalary = annualSalary;
  this.reviewRating = reviewRating;
  this.reviewBonus = function(){
    switch(this.reviewRating){
      case 0:
        return 0;
      case 1:
        return 0;
      case 2:
        return 0;
      case 3:
        return 0.04;
      case 4:
        return 0.06;
      case 5:
        return 0.1;
      default:
        return 0;
    }
  }; // end of bonusPercentage
  this.tenureBonus = function(){
    if(employeeNumber.length === 4){
      return 0.05;
    }else{
      return 0;
    }
  };
  this.salaryCap = function(){
    if (this.annualSalary > '65000'){
      return -0.01;
    } else{
      return 0;
    }
  };
  this.totalBonusPercentage = function (){
    var percent = this.reviewBonus() + this.tenureBonus() + this.salaryCap();
    if(percent > 0.13){
      return 0.13;
    }else if(percent < 0){
      return 0;
    }else{
      return percent;
    }
  };//

  this.totalBonus = function(){
    return this.annualSalary*this.totalBonusPercentage();
  };

  this.totalCompensation = function() {
    return Math.round(parseInt(this.annualSalary)+this.totalBonus());
  };
};

function calculatedBonus(array){
  var employeeArray = [];
  for(var i = 0; i < array.length; i++){
    var employeeBonus = new Employee (array[i].name,
      array[i].employeeNumber, array[i].annualSalary,
      array[i].reviewRating);
    console.log(employeeBonus);
    employeeArray.push(employeeBonus);
    $('#output').append('<li>' + employeeBonus.name + ': $' + employeeBonus.totalCompensation() + '</li>');
  }
  console.log(employeeArray);
}


$(document).ready(function(){
  $('#btn').on('click',calculate);
});

function calculate(){
  console.log('click');
  $('#output').html('');
  calculatedBonus(employees);
}
