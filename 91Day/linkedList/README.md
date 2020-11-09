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
### [61. 旋转链表](https://leetcode-cn.com/problems/rotate-list/)
#### 思路
快慢指针：
* 首先让快慢指针都等于头节点，然后先让快指针走k步
* 然后当快慢指针相等时，说明k可以被链表长度整除，直接返回head
* 然后快慢指针同时移动，当快指针到达链表的最后一项时，将其下一节点指向head，慢指针处于链表处于需要拆分的位置
#### 代码
```js
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let fast =  head, slow = head;
    while(k--) {
        if (fast && fast.next) {
            fast = fast.next;
        } else {
            fast = head;
        }
    }
    if (slow === fast) return head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
}
```
#### 复杂度
时间复杂度：O(n)<br/>
空间复杂度：O(1)
### [61. 旋转链表](https://leetcode-cn.com/problems/rotate-list/)
#### 思路
快慢指针：首先使用快慢指针，找到中间点，然后使用分治的思路去处理中间点的左右两边。
#### 代码
```js
var sortedListToBST = function(head) {
    return makeTree(head, null);
};

function makeTree(head, tail) {
    if(head === tail) return null;
    let p1 = head, p2 = head;
    while (p2 !== tail) {
        p2 = p2.next;
        if(p2 !== tail) {
            p1 = p1.next;
            p2 = p2.next;
        }
    }
    let treeNode = new TreeNode(p1.val);
    treeNode.left = makeTree(head, p1);
    treeNode.right = makeTree(p1.next, tail);
    return treeNode;
}
```
#### 复杂度
时间复杂度：O(n)<br/>
空间复杂度：O(1og(n))

