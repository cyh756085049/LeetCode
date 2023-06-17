/**
 * leetcode141：判断一个单链表是否有环
 * @param head
 * @returns {boolean}
 */
// 1、标志位法：给每个遍历过的节点加标志位，遍历链表，当出现下一个节点已经
// 被标记时，则证明单链表有环  时间复杂度O(n) 空间复杂度O(n)
function hasCycle(head) {
    while (head) {
        if (head.flag) return true;
        head.flag = true;
        head = head.next;
    }
    return false;
}

// 2、快慢指针：设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，
// 如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向 null 时，
// 快慢指针都不可能相遇  时间复杂度O(n) 空间复杂度O(1)
function hasCycle1(head) {
    if (!head || !head.next) return false;
    let fast = head.next.next, slow = head.next;
    while (fast !== slow) {
        if (!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
}

// 利用 JSON.stringify() 不能序列化含有循环引用的结构
function hasCycle2(head) {
    try {
        JSON.stringify(head);
        return false;
    } catch (err) {
        return true;
    }
}