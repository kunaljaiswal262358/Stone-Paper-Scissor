let imageValue = document.querySelectorAll(".image")
let userScore = document.querySelector(".user-score")
let compScore = document.querySelector(".computer-score")
let msg = document.querySelector(".msg")


let userCount = 0
let compCount = 0

let randomValue = () => {
    let random = Math.floor(Math.random()*4)

    if(random == 1){
        return "stone";
    } else if(random == 2){
        return "paper"
    } else {
        return "scissor"
    }
}

imageValue.forEach(element => {
    element.addEventListener(("click"), ()=>{
    let currVal = element.id;
    let ranVal = randomValue()

    if(ranVal === currVal){
        msg.innerHTML = "Draw , try again"
        msg.style.backgroundColor = "#32012F"
    } else {
        if(ranVal === "stone"){
            if(currVal === "paper"){
                userCount++
                userScore.innerHTML = userCount
                msg.innerHTML = `You Win! You(${currVal}) beats the computer(${ranVal})`
                msg.style.backgroundColor = "green"
            } else {
                compCount++
                compScore.innerHTML = compCount
                msg.innerHTML = `You Lost! Computer(${ranVal}) beats the You(${currVal})`
                msg.style.backgroundColor = "red"
            }
        } else if(ranVal === "paper"){
            if(currVal === "stone"){
                compCount++
                compScore.innerHTML = compCount
                msg.innerHTML = `You Lost! Computer(${ranVal}) beats the You(${currVal})`
                msg.style.backgroundColor = "red"
            } else {
                userCount++
                userScore.innerHTML = userCount
                msg.innerHTML = `You Win! You(${currVal}) beats the computer(${ranVal})`
                msg.style.backgroundColor = "green"
            }
        } else {
            if(currVal === "stone"){
                userCount++
                userScore.innerHTML = userCount
                msg.innerHTML = `You Win! You(${currVal}) beats the computer(${ranVal})`
                msg.style.backgroundColor = "green"
            } else {
                compCount++
                compScore.innerHTML = compCount
                msg.innerHTML = `You Lost! Computer(${ranVal}) beats the You(${currVal})`
                msg.style.backgroundColor = "red"
            }
        }
    }
    })
});