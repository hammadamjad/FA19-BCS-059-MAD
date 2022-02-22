function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let str = "comsats"

let arr = str.split("")
let arr_ascii = arr.map((x) => { return x.charCodeAt(0) })

let arr_sort = sort(arr_ascii)

arr_sort = arr_sort.map((x)=> {return String.fromCharCode(x)})

console.log(arr_sort.join(""))