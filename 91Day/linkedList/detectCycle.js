/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head, slow = head;
    while(true) {
        if (fast == null || fast.next == null) return null;
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }
    fast = head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
}