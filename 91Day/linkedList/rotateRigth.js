/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let fast =  head, slow = head;
    while(k--) {
        if (fast && fast.next) {
            fast = fast.next;
        } else {
            fast = head;
        }
    }
    if (slow === fast) return head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
}