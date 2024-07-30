console.log(number = [2 , 4 , 5 , 6 , 7 , 8 , 10 , 15]);
const toq = [];
const juft = []

for(let index = 0;index < number.length;index++){
    if(number[index] % 2 == 0){
        juft.push(number[index])
    }else{
        toq.push(number[index])
    }
}

console.log(juft, `juft sonlar`);
console.log(toq, `toq sonlar`);