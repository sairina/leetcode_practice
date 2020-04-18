// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
    
  if (head !== null) {
    let prev = null;
      let current = head;

      // reverses the SLL
      while (current !== null) {
          let save = current.next;
          current.next = prev;
          prev = current;
          current = save;
      }

      // traverses reversed SLL to console.log
      while (prev !== null) {
          console.log(prev.data);
          prev = prev.next;
      }  
  }
}