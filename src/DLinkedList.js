// insert delete get clear  //push pop enqueue dequeue indexof removeat
class DNode{
    constructor(element=null, next=null, pre=null) {
        this.element = element;
        this.next = next;
        this.pre = pre;
    }
}

export default class DLinkedList{
    constructor() {
        this.length = 0;
        this.head = new DNode();
        this.tail = null;
    }

    insert(element, pos){
        let tempNode = new DNode(element);
        if(pos < 0){
            pos = this.length + pos + 1;
        }

        if(pos < 0 || pos > this.length){
            return 0;
        }

        let current = this.head; //current开始指向的是头节点，
        let i = pos;
        while(i--){ //pos等于多少就会循环几次，最后pos=0,所以不能直接用pos--,
            current = current.next;
        }
        //循环换成后，current指向的是要插入位置的前一个节点

        tempNode.next = current.next;
        tempNode.pre = current; //如果pos=0,temNode.pre=null;
        if(pos === 0){
            tempNode.pre = null;
        }


        if(pos === this.length){
            this.tail = tempNode;
        }else{
            current.next.pre = tempNode; //如果插入的元素是最后一个，current.next=null,没有pre
        }
        current.next = tempNode;

        this.length++;


    }
    travel(){
        let current = this.head;
        while(current.next){
            current = current.next;

            console.log(current.element);
        }
    }
    retravel(){
        let current = this.tail;
        while(current){
            console.log(current.element);
            current = current.pre;
        }
    }
}