function deleteNode(head, position) {
  let previous;
  let current = head;
  let index = 0;

  if(head === null) return null;

  if (position === 0) {
      head = head.next;
      return head;
  }

  while (index < position) {
      previous = current;
      current = current.next;
      index++;
  }
  
  previous.next = current.next;
  
  return head;
}