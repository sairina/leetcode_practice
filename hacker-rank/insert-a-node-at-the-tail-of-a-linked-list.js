function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  
  if(!head){
      head = newNode;
      return head;
  }

  let tail = head;
  
  while(tail.next) {
      tail = tail.next;
  }

  tail.next = newNode;
  
  return head;
}