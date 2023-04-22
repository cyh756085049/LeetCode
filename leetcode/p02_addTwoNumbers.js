/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbersWay1 = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    // 处理两个链表不等长，且最后有进位的情况。
    if (carry > 0) {
        tail = new ListNode(carry);
    }
    return head;
};

// 头节点、计算进位数、链表值相加
const addTwoNumbersWay2 = function (l1, l2) {
    // 定义一个头结点链表
    let dumpy = new ListNode(-1);
    // 定义进位
    let carry = 0;
    // 定义结果值
    let val = 0;
    let node = dumpy;

    while (l1 || l2 || carry > 0) {
        val = carry;
        if (l1) {
            val += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            val += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(val / 10);
        node.next = new ListNode(val % 10);
        node = node.next;
    }

    return dumpy.next;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbersWay1(l1, l2));
console.log(addTwoNumbersWay2(l1, l2));
