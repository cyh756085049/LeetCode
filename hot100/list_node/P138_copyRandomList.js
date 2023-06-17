function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

/**
 * 138. 复制带随机指针的链表
 * @param head
 */
const copyRandomList = (head) => {
    if (head === null) {
        return head;
    }

    // 使用哈希表保存链表
    let map = new Map();
    const clone = head => {
        if (head === null) {
            return null;
        }
        let newNode = new Node(head.val);
        map.set(head, newNode);
        newNode.next = clone(head.next);
        newNode.random = map.get(head.random) || null;

        return newNode;
    }

    return clone(head);
}

/**
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 *
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 */

const nextNode = new Node(2, null);
const head = new Node(1, new Node(2, null, 1), 1);
console.log(head);
console.log(copyRandomList(head));