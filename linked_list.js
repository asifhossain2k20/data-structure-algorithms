class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(head){
        this.head=head;
    }
    add(value){
        const newNode=new Node(value);
        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next=newNode;

    }
}

const head=new Node(1500)
const linked=new LinkedList(head);
linked.add(100)
linked.add(200)
linked.add(300)
console.log(linked)
console.log(JSON.stringify(linked))