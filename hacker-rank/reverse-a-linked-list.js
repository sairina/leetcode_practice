

// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
  let current = head;
  let prev = null;

  while (current !== null) {
      let save = current.next;
      current.next = prev;
      prev = current;
      current = save;
  }
  //prev is now head
  return prev;
}

