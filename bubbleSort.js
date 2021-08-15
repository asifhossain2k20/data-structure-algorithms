const numbers=[2,1,4,3,5,4,7];

const bubbleSort=array=>{
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
    
}

const sortedArray=bubbleSort(numbers);
console.log(sortedArray);