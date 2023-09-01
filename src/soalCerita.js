function migratoryBirds(burung){
    let tampung = []
    let tampung1 = 0
    for(let i=0; i<burung.length; i++){
        if(burung[i] === burung[i+1]){
            tampung1++
            if(tampung1 >= 2){
                tampung.push(burung[i])
            }
        }
    }
    console.log(tampung[0])
}

migratoryBirds([1, 4, 4, 4, 5, 3])
// migratoryBirds([1, 2, 2, 2, 4, 4, 4, 5, 3])