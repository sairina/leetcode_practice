function insertNodeAtHead(head, data) {
  //make new node
  //point new node to head pointer (both pointers point to same node)
  //tell it that head is now new node

  let newNode = new SinglyLinkedListNode(data);
  newNode.next = head;
  head = newNode;

  return head;
}