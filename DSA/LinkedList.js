class Node{
    constructor(data1,next1=null){
        this.data = data1;
        this.next = next1;
    }
}

function lengthOfLinkedList(head){
    let temp = head;
    let c=0;
    while(temp != null){
        c++;
        temp = temp.next
    }
    return c;
}

function search(head,ele){
    let temp = head;
    while(temp != null){
        if(temp.data == ele){
            return true;
        }
        temp = temp.next
    }
    return false;
}

function printLL(head){
    let temp = head;
    while(temp != null){
        console.log(temp.data + " ")
        temp = temp.next
    }
}

function deleteNodeAtTail(head){
    if (head === null || head.next === null) {
        return null;
    }
    let temp = head;
    while(temp.next.next != null){
        temp = temp.next;
    }
    temp.next = null;
    return head;
}

function insertAtHead(head,val){
    return new Node(val,head);
}

function main(){
    const arr = [1,2,3,4,5]

    const head = new Node(arr[0]);
    head.next = new Node(arr[1]);
    head.next.next = new Node(arr[2]);
    head.next.next.next = new Node(arr[3]);
    head.next.next.next.next = new Node(arr[4]);

    const ele = 9;

    console.log(`Length of linkedList is ${lengthOfLinkedList(head)}`)
    console.log(`Check if ${ele} is present in linkedlist: ${search(head,ele)}`)

    deleteNodeAtTail(head);
    console.log("Print ll after deleting node")
    printLL(head);
    console.log("Print ll after inserting node")
    printLL(insertAtHead(head,5));

}

main()