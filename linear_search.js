const numbers=[33,44,55,66]

const linearSearch=()=>{
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element==44){
            return i+1;
        }
        
    }
}

console.log(linearSearch())