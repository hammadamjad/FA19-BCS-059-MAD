function Add_Numbers_Even(num){
    let i=0;
    let result = 0
    while(i < num.length){
        if((num[i]*1) % 2 === 0){
            result += num[i]*1
        }
        i++
    }
    return result
}

let num = "23617"

const result = Add_Numbers_Even(num)

console.log(result)
