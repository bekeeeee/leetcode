/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./remove-nth-node-from-end";
// 1,3,4
// 2,5,6

var mergeTwoLists = function (list1: ListNode | null, list2: ListNode | null) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  // const val1 = list1.val;
  // const val2 = list2.val;
  let mergedNode;
  if (list1.val < list2.val) {
    mergedNode = new ListNode(list1.val);
    mergedNode.next = mergeTwoLists(list1.next, list2);
  } else {
    mergedNode = new ListNode(list2.val);
    mergedNode.next = mergeTwoLists(list2.next, list1);
  }
  return mergedNode;
};
console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(7, null))),
    new ListNode(4, new ListNode(5, new ListNode(6, null)))
  )
);
