/**
 * leetcode21: 合并两个有序链表
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @param l1
 * @param l2
 * @returns {*}
 */
function mergeTwoList(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val <= l2.val) {
        l1.next = mergeTwoList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoList(l2.next, l1);
        return l2;
    }
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}