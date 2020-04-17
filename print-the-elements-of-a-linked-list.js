function printLinkedList(head) {
  let current = head;
  
  console.log(head.data);

  while (current.next !== null){
      current = current.next;
      console.log(current.data);
  }
}