#! /usr/bin/env node
import inquirer from "inquirer";

interface ansType {
    Userid: string,
    Userpin: number,
    AccountType: string,
    TransactionType: string,
    Amount: number
}

const answer: ansType = await inquirer.prompt([
    {
        type: "Input",
        name: "Userid",
        message: "Kindly enter your Id: "
    },
    {
        type: "number",
        name: "Userpin",
        message: "Kindly enter yoyr PIN: ",
    },
    {
        type:"list",
        name: "AccountType",
        choices: ["Current", "Saving"],
        message:"Select your account type:",
    },
    {
        type:"list",
        name: "TransactionType",
        choices: ["Fast Cash","Withdraw"],
        message:"Select your transaction",
        when(answer) {
            return answer.AccountType
        },
    },
    {   type:"list",
        name: "Amount",
        choices: [1000, 2000, 10000, 20000],
        message:"Select your amount",
        when(answer) {
            return answer.TransactionType == "Fast Cash"
        },

    },
    {   type:"number",
        name: "Amount",
        message:"Enter your amount",
        when(answer) {
            return answer.TransactionType == "Withdraw"
        },

    },
])

if (answer.Userid && answer.Userpin) {

    const balance = Math.floor(Math.random()*100000);
    console.log(balance)
    const EnteredAmount = answer.Amount;
    if (balance >= EnteredAmount) {
        const remaning = balance - EnteredAmount;
        console.log("Your remaning balance is ", remaning)
    } else {
        console.log("Insuficient Balance")
    }
}