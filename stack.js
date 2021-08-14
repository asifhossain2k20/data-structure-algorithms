 class Stack{
     constructor(){
         this.stack=[];
     }
     add(item){
         this.stack.push(item)
     }
     remove(){
         if(this.stack.length){
             return this.stack.pop();
         }
     }
 }

 const stackData=new Stack();

 stackData.add("Asif")
 stackData.add("Joy")
 stackData.add("Bijoy")

 console.log(stackData.stack)

 const removeData=stackData.remove()
 console.log(removeData);
 console.log(stackData)