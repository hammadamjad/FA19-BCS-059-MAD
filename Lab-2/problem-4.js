function sandwich_calculator(bread, cheese){
    sandW = Math.floor(bread/2)
    console.log(sandW)
    made_sand = 0
    while(cheese>0 && sandW >=0){
        made_sand+=1
        sandW-=2
        cheese--
    }
    return made_sand
}

console.log("Number of possible sandwiches with cheese is: "+
                    sandwich_calculator(4,5))