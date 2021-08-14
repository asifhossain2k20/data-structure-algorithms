class Queue{
    constructor(){
        this.queue=[]
    }

    enqueue(item){
        this.queue.push(item)
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const queueData=new Queue();

queueData.enqueue("JOY")
queueData.enqueue("BABU")
queueData.enqueue("ALEX")

console.log(queueData.queue);

const removeData=queueData.dequeue();
console.log(removeData)

console.log(queueData.queue)