import { ListNode } from "./remove-nth-node-from-end";

class LinkedList {
  static checkCycle(head: ListNode | null) {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head?.next?.next!;
    let length: number = 0;

    while (fast && fast.next) {
      if (slow == fast) {
        length = this.getCycleLength(slow);
        break;
      }
      slow = slow?.next!;
      fast = fast.next.next;
    }
    return length ? this.getFirstNode(head!, length) : false;
  }

  private static getCycleLength(node: ListNode): number {
    let length: number = 0;
    let checkNode: ListNode | null = { ...node };

    while (checkNode !== node) {
      length++;
      checkNode = checkNode?.next!;
    }
    return length;
  }
  private static getFirstNode(head: ListNode, length: number): ListNode {
    let pointer1: ListNode | null = { ...head };
    let pointer2: ListNode | null = { ...head };
    let i: number = 0;
    for (i; i < length; i++) {
      pointer2 = pointer2.next!;
    }
    while (pointer2 !== pointer1) {
      pointer1 = pointer1.next!;
      pointer2 = pointer2.next!;
    }
    return pointer1;
  }
}

const node1 = new ListNode(1, null);
const node2 = new ListNode(2, null);
const node3 = new ListNode(3, null);
const node4 = new ListNode(4, null);
const node5 = new ListNode(5, null);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;
console.log(LinkedList.checkCycle(node1));
