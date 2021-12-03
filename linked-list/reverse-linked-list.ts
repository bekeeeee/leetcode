import { ListNode } from "./remove-nth-node-from-end";

var reverseList = function (head: ListNode | null): ListNode | null {
  function loop(
    previuosNode: ListNode | null,
    nextNode: ListNode | null
  ): ListNode | null {
    if (previuosNode === null) {
      return nextNode;
    } else {
      const tail = previuosNode.next;
      previuosNode.next = nextNode;
      return loop(tail, previuosNode);
    }
  }

  return loop(head, null);
};

console.log(
  reverseList(
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(
              5,
              new ListNode(
                6,
                new ListNode(7, new ListNode(8, new ListNode(9, null)))
              )
            )
          )
        )
      )
    )
  )
);
