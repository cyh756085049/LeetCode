const ListNode = (val) => {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    let listNodeA = headA;
    let listNodeB = headB;
    // 指定两个指针，listNodeA指针指向A链表的头部，listNodeB指针指向B链表的头部，
    // 两个指针分别向链表末尾遍历，当listNodeA指针到达末尾时，将其指针指向链表B，继续遍历，
    // 当listNodeB指针到达末尾时，将其指针指向链表A，继续遍历，之后如果两指针相遇，则说明
    // 两个链表相交，并直接返回当前指针结点，如果两指针均走到末尾为null，则说明不想交，返回null
    while (listNodeA !== listNodeB) {
        listNodeA = listNodeA === null ? headB : listNodeA.next;
        listNodeB = listNodeB === null ? headA : listNodeB.next;
    }

    return listNodeA;
};

this.headA = ListNode(4);
this.next1 = ListNode(1);
this.headA.next = this.next1;
this.next2 = ListNode(8);
this.next1.next = this.next2;
this.next3 = ListNode(4);
this.next2.next = this.next3;
this.next4 = ListNode(5);
this.next3.next = this.next4;

this.headB = ListNode(5);
this.nextB1 = ListNode(6);
this.headB.next = this.nextB1;
this.nextB2 = ListNode(1);
this.nextB1.next = this.nextB2;
this.nextB3 = ListNode(8);
this.nextB2.next = this.nextB3;
this.nextB4 = ListNode(4);
this.nextB3.next = this.nextB4;
this.nextB5 = ListNode(5);
this.nextB4.next = this.nextB5;

console.log(getIntersectionNode(headA, headB));