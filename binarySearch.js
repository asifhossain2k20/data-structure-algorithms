const numbers=[10,20,30,40,50,60];

const binarySearch=(target,numbers)=>{

    let  start=0;
    let end=numbers.length-1;

    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(numbers[mid]===target){
            return mid;
        }
        if(numbers[mid]<target){
            start=mid+1;
        }
        if(numbers[mid]>target){
            end=mid-1;
        }
    }
    return -1;
}
const target=30;

const position=binarySearch(target,numbers);
console.log(position)