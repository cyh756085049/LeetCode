function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * 25. K 个一组翻转链表
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 */
const reverseKGroup = (head, k) => {
    // 定义一个头节点
    const dummy = new ListNode(0, head);
    // pre 指向本次要翻转的 k 个结点的头节点的上一个节点
    let pre = dummy;
    // end 指向本次要翻转的 k 个结点的最后一个节点
    let end = dummy;

    while (end.next !== null) {

        // 获取本次要翻转的 k 个节点的尾节点
        for (let i = 0; i < k && end !== null; i++) {
            end = end.next;
        }
        // [pre.next, end] 区间都是本轮要翻转的链表
        if (end === null) {
            break;
        }

        // 保存下一个 k 组中的头节点
        let next = end.next;
        // 与下一个 k 组及之后的节点断链
        end.next = null;

        // pre.next 为本轮要翻转的 k 个节点的头节点，在翻转后会成为本轮 k 个节点链表的尾节点
        // 需要将其先保存下来，用于翻转后与下一轮 k 组的头节点相连
        let start = pre.next;
        // 本轮 k 个一组链表从头节点开始翻转，并将本轮 k 个一组链表的头节点的上一个节点和翻转后的链表相连
        pre.next = reverse(start);
        // 本轮 k 个一组链表翻转后的尾节点与下一轮 k 个一组的链表的头节点相连
        start.next = next;

        // 更新 pre 和 end, 重新指向本轮 k 个一组翻转链表的尾节点，作为下一轮 k 个一组链表的头节点的上一个节点
        pre = start;
        end = pre;
    }

    return dummy.next;
};

// 翻转链表
const reverse = (head) => {
    let pre = null;
    let cur = head;

    while (cur !== null) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}

/**
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 */