function check_number_10(arr){
    if(arr.length ==1 || arr.length ==0){
        return "The length of array is less than 2"
    }

    if(arr[0] === 10 || arr[arr.length-1] == 10){
        console.log("Yes 10 is present")
    }else{
        console.log("No 10 is not present")
    }
}

let arr = [10,1,2,3,6]
let arr2 = [1,2,3,4,10,2,3]
check_number_10(arr)
check_number_10(arr2)
