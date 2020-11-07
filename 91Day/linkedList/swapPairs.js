/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let cur = head;
    let res = head.next;
    let pre = new ListNode();
    pre.next = head;
    while (cur && cur.next) {
        let tmp = cur.next;
        let node = tmp.next;
        cur.next = node;
        tmp.next = cur;
        pre.next = tmp;
        pre = cur;
        cur = node;
    }
    return res;
};
