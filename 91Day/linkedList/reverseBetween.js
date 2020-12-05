/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head || !head.next) return head;
    let pre = new ListNode(-1);
    pre.next = head;
    let cur = pre;
    for (let i = 1; i < m; i++) {
        cur = cur.next;
    }
    let pre_node = null;
    let node = cur.next;
    for (let i = m; i < n; i++) {
        let next = node.next;
        node.next = pre_node;
        pre_node = node;
        node = next;
    }
    cur.next.next = node;

};