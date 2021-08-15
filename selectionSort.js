const numbers=[10,30,20,50,-20,40,5];

const selectionSort=array=>{
    for (let i = 0; i < array.length; i++) {
        let min=i;
        for (let j = i+1; j < array.length;j++){
            if(array[j]<array[min]){
                min=j;
            }
        }
        let tmp=array[i];
        array[i]=array[min];
        array[min]=tmp;
    }
    return array;
}

const sortedArray=selectionSort(numbers)
console.log(sortedArray);