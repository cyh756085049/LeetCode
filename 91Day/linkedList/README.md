## 链表
### [24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)
#### 思路
创建一个空节点，让其next指针指向head,然后两两交换链表中相邻的节点，返回交换后的链表。
#### 代码
```js
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let pre = new ListNode();
    pre.next = head;
    let cur = head;
    let res = head.next;
    while (cur && cur.next) {
        let tmp = cur.next;
        let node = tmp.next;
        cur.next = node;
        tmp.next = cur;
        pre.next = tmp;
        pre = cur;
        cur = node;
    }
    return res;
};
```
#### 复杂度
时间复杂度：O(n)<br/>
空间复杂度：O(1)

