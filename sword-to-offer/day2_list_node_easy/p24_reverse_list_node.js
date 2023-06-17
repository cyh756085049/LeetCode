/**
 * 剑指 Offer 24. 反转链表
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 */

const ListNode = function (val) {
    this.val = val;
    this.next = null;
}

const reverseList = function (head) {
    // 定义一个空节点
    let dummy = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = dummy;
        dummy = cur;
        cur = next;
    }

    const arr = [];
    while (dummy) {
        arr.push(dummy.val);
        dummy = dummy.next;
    }

    return arr;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(reverseList(node1));
