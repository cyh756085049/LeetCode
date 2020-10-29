/**
 * leetcode876：求链表的中间结点
 * @param head
 */
// 快慢指针：快指针一次走两步，慢指针一次走一步，当快指针走到终点时，慢指针刚好走到中间
var middleNode = function(head) {
    let fast = head, slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}




// 遍历链表，把值添加到数组中，求中间值
function middleNode(head) {
    if (!head) return [];
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    // 向上取整
    return arr[Math.ceil(arr.length - 1) / 2];
}

