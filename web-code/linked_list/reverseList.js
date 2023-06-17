/**
 * leetcode206：反转链表
 * @param head
 * @returns {null|{next}|*}
 */
function reverseLIst(head) {
    let pre = null, cur = head;
    if (head || head.next) return head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = ListNode(1);
head.val = 1;
head = head.next;
head = ListNode(2);
head = head.next;
head = ListNode(3);
head = head.next;
head = ListNode(4);
head = head.next;
head = ListNode(5);
head = head.next;
head = ListNode(null);
console.log(head);
console.log(reverseLIst(head));
