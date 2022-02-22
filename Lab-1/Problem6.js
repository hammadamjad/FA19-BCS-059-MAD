
const rand_num = Math.floor(Math.random() * 11)


const user_input = window.prompt("Enter a number: ");

if(rand_num === user_input){
    window.prompt("You WIN")
}
else{
    window.prompt("Not matched")
}
