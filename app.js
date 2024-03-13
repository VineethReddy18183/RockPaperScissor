let userScore = 0;
let compScore = 0;

let userScoreElement = document.getElementById("user-score");

let compScoreElement = document.getElementById("comp-score");




let rockElement = document.getElementById("rock");
let paperElement = document.getElementById("paper");
let scissorElement = document.getElementById("scissors");

let computerChoices = ["rock","paper","scissor"]




rockElement.addEventListener("click",()=>
{
    let computerChoice = Math.floor(Math.random() * 3); 
    if("rock" === computerChoices[computerChoice])
    {
        console.log("draw");
    }
    if("scissor" === computerChoices[computerChoice])
    {
        
        userScore +=1;
        userScoreElement.textContent = userScore;
    }
    if("paper" === computerChoices[computerChoice])
    {
        
        compScore+=1;
        compScoreElement.textContent = compScore;
    }
})

paperElement.addEventListener("click",()=>
{
    let computerChoice = Math.floor(Math.random() * 3); 
    if("rock" === computerChoices[computerChoice])
    {
        
        userScore+=1;
        userScoreElement.textContent = userScore;
    }
    if("scissor" === computerChoices[computerChoice])
    {
        
        compScore+=1;
        compScoreElement.textContent = compScore;
    }
    if("paper" === computerChoices[computerChoice])
    {
        console.log("draw");
    }
})

scissorElement.addEventListener("click",()=>
{
    let computerChoice = Math.floor(Math.random() * 3); 
    if("rock" === computerChoices[computerChoice])
    {
        
        compScore+=1;
        compScoreElement.textContent = compScore;
    }
    if("scissor" === computerChoices[computerChoice])
    {
        console.log("draw");
    }
    if("paper" === computerChoices[computerChoice])
    {
        
        userScore+=1;
        userScoreElement.textContent = userScore
    }
})
