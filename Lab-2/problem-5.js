function calcHighest(){
    var sum = 0
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    var avg = Math.round(sum/arguments.length)
    var highest = arguments[0]
    for(var i=1; i<arguments.length; i++){
        if(arguments[i] > highest){
            highest = arguments[i]
        }
    }

    return [avg, highest]
}

var result = calcHighest(1,2,3,4,5,6)
var a = result[0]
var b = result[1]
console.log("Average: "+a+"\nHighest: "+b)