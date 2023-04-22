/**
 * 剑指 Offer 06. 从尾到头打印链表
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）
 */

const ListNode = function (val) {
    this.val = val;
    this.next = null;
}

let reversePrint = function (head) {
    if (!head) {
        return [];
    }

    // 结果链表
    let dummy = null;
    // 记录当前的节点
    let cur = head;

    while (cur) {
        // 保留下一个结点
        const next = cur.next;
        // 修改当前结点
        cur.next = dummy;
        // 平移结点
        dummy = cur;
        cur = next;
    }

    let arr = [];
    while (dummy) {
        arr.push(dummy.val);
        dummy = dummy.next;
    }

    return arr;
}

let reversePrintByStack = function (head) {
    let stack = [];
    while (head) {
        stack.push(head.val);
        head = head.next;
    }
    stack.reverse();
    return stack;
}
const node = new ListNode(1);
const node1 = new ListNode(2);
const node2 = new ListNode(3);
node.next = node1;
node1.next = node2;

// console.log(reversePrint(node));
console.log(reversePrintByStack(node));


