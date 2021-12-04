import { ListNode } from "./remove-nth-node-from-end";

class Solution {
  static isPalindrome(head: ListNode | null) {
    if (head == null) return true;

    // Find the end of first half and reverse second half.
    let firstHalfEnd: ListNode | null = this.endOfFirstHalf(head);
    let secondHalfStart: ListNode | null = this.reverseList(firstHalfEnd.next!);

    // Check whether or not there is a palindrome.
    let p1: ListNode | null = head;
    let p2: ListNode | null = secondHalfStart;
    let result: boolean = true;
    while (result && p2 != null) {
      if (p1?.val != p2.val) result = false;
      p1 = p1.next!;
      p2 = p2.next;
    }

    // Restore the list and return the result.
    firstHalfEnd.next = this.reverseList(secondHalfStart!);
    return result;
  }

  private static reverseList(head: ListNode): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    while (curr != null) {
      let nextTemp: ListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    return prev;
  }

  private static endOfFirstHalf(head: ListNode): ListNode {
    let fast: ListNode = head;
    let slow: ListNode = head;
    while (fast.next != null && fast.next.next != null) {
      fast = fast.next.next;
      slow = slow.next!;
    }
    return slow;
  }
}

console.log(
  Solution.isPalindrome(new ListNode(1, new ListNode(2, new ListNode(1, null))))
);
