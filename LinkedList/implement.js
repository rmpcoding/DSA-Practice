class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function containsCycle(firstNode) {
  
    // Check if the linked list contains a cycle
    
    let slowRunner = firstNode;
    let fastRunner = firstNode;
    
    while (fastRunner && fastRunner.next) {
      slowRunner = slowRunner.next;
      fastRunner = fastRunner.next.next;
      
      if (fastRunner === slowRunner) {
        return true;
      }
    }
    
    return false;
  }