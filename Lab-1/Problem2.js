
function Add_Numbers(num){
    let i=0;
    let result = 0
    while(i < num.length){
        result += num[i]*1
        i++
    }
    return result
}

let num = "23618"

const result = Add_Numbers(num)

console.log(result)
