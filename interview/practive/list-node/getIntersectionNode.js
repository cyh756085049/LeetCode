function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const getIntersectionNode = (headA, headB) => {
    if (headA === null || headB === null) {
        return null;
    }

    let listNodeA = headA;
    let listNodeB = headB;

    while (listNodeA !== listNodeB) {
        listNodeA = listNodeA !== null ? listNodeA.next : headB;
        listNodeB = listNodeB !== null ? listNodeB.next : headA;
    }

    return listNodeA;
}
