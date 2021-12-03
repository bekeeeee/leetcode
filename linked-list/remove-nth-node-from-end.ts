export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// console.log(
//   removeNthFromEnd(
//     new ListNode(
//       1,
//       new ListNode(
//         2,
//         new ListNode(
//           3,
//           new ListNode(
//             4,
//             new ListNode(
//               5,
//               new ListNode(
//                 6,
//                 new ListNode(7, new ListNode(8, new ListNode(9, null)))
//               )
//             )
//           )
//         )
//       )
//     ),
//     2
//   )
// );
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // head = new ListNode(5,new ListNode(3,null))
  let headNode = head;

  let nodes: ListNode[] = [];

  while (headNode?.next !== null) {
    nodes.push(headNode!);
    headNode = headNode?.next!;
    console.log("headNode", headNode);
  }
  nodes.push(headNode);
  if (nodes.length === 1 && n === 1) {
    return null;
  }
  const removedNodeIndex = nodes.length - n;
  if (removedNodeIndex === 0) {
    return nodes[1];
  } else if (removedNodeIndex === nodes.length - 1) {
    nodes[nodes.length - 2].next = null;
  } else {
    nodes[removedNodeIndex - 1].next = nodes[removedNodeIndex + 1];
  }
  return nodes[0];
}
