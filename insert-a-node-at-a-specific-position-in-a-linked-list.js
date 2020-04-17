function insertNodeAtPosition(head, data, position) {

  let newNode = new SinglyLinkedListNode(data);
  let index = 0;

  if(head === null) {
      head = newNode;
      return head;
  }

  let current = head;

  while(index < position - 1) {
      current = current.next;
      index ++;
  }

  newNode.next = current.next;
  current.next = newNode;      

  return head;
}