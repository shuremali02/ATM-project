#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let myBalance=20000;
let myPin=22;

let pinAnswer= await inquirer.prompt([
     {
name:"pin",
message:"Enter your pin",
type:"number"
       }
    ]
)
if(pinAnswer.pin===myPin){
    console.log(chalk.blue("Correct pin code "))
let operationAns=await inquirer.prompt([{
    name:"operation",
    message:"please select operation",
    type:"list",
    choices:["withdraw","Check balance"]
}])
if(operationAns.operation==="withdraw"){
 let amountans=await inquirer.prompt([{
    name:"amount",
    message:"Enter your amount",
    type:"list",
    choices:["1000","5000","10000","15000","20000","25000"]
 }])
 if(amountans.amount>myBalance){
    console.log("Insufficient Balance:" + " Your total balance is "+ myBalance)    
 }
 else{
    myBalance-=amountans.amount
    console.log("Your remaning balance is: "+myBalance)
  }
}
else if(operationAns.operation==="Check balance"){
    console.log(myBalance)
}

}


else{
    console.log(chalk.red("Incorrect pin number"))
}