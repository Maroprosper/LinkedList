function Node(value = null, nextNode = null) {
    return { value, nextNode };
}
  
  
function linkedList() {
    let headNode = null;
    let length = 0;
  
    function append(value) {
      let newNode = Node(value);
      if (headNode === null) {
        headNode = newNode;
      } else {
        let currentNode = headNode;
        while (currentNode.nextNode) {
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
      }
      length++;
    }
  
    function prepend(value) {
      let newNode = Node(value);
      newNode.nextNode = headNode;
      headNode = newNode;
      length++;
    }
  
    function size() {
      return length;
    }
  
    function head() {
      return headNode;
    }
  
    function tail() {
      let currentNode = headNode;
      if (!currentNode) return null;
      
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      
      return currentNode;
    }
  
    function at(index) {
      if (index < 0 || index >= length) return null;
  
      let currentNode = headNode;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  
    function pop() {
      if (length === 0) return null;
  
      if (length === 1) {
        let nodeToRemove = headNode;
        headNode = null;
        length--;
        return nodeToRemove;
      }
  
      let currentNode = headNode;
      let prevNode = null;
      while (currentNode.nextNode) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
      }
  
      prevNode.nextNode = null;
      length--;
      return currentNode;
    }
  
    function contains(value) {
      let currentNode = headNode;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  
    function find(value) {
      let currentNode = headNode;
      for (let i = 0; i < length; i++) {
        if (currentNode.value === value) {
          return i;
        }
        currentNode = currentNode.nextNode;
      }
      return null;
    }
  
    function toString() {
      let values = [];
      let currentNode = headNode;
      while (currentNode) {
        values.push(`( ${currentNode.value} )`);
        currentNode = currentNode.nextNode;
      }
      return values.join(' -> ');
    }
  
    function insertAt(value, index) {
      if (index < 0 || index > length) return null;
  
      if (index === 0) {
        prepend(value);
        return;
      }
  
      let newNode = Node(value);
      let prevNode = at(index - 1);
      newNode.nextNode = prevNode.nextNode;
      prevNode.nextNode = newNode;
      length++;
    }
  
    function removeAt(index) {
      if (index < 0 || index >= length) return null;
  
      if (index === 0) {
        let nodeToRemove = headNode;
        headNode = headNode.nextNode;
        length--;
        return nodeToRemove;
      }
  
      let prevNode = at(index - 1);
      let nodeToRemove = prevNode.nextNode;
      prevNode.nextNode = nodeToRemove.nextNode;
      length--;
      return nodeToRemove;
    }
  
    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt };
}
  
export {linkedList};