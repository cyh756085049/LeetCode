function Node(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    // 头节点
    this.head = new Node("head");
}

LinkedList.prototype = {
    // 查找某一节点
    find: function (item) {
        let curNode = this.head;
        while (curNode.val !== item) {
            curNode = curNode.next;
        }
        return curNode;
    },
    // 向某一个元素后边插入新节点
    insert: function (newVal, item) {
        let newNode = new Node(newVal);
        let cur = this.find(item);
        newNode.next = cur.next;
        cur.next = newNode;
    },
    // 查找某一节点的前一个节点（前驱）
    findPrevious: function (item) {
        let curNode = this.head;
        while (!(curNode.next === null) && (curNode.next.val !== item)) {
            curNode = curNode.next;
        }
        return curNode;
    },
    // 删除某一个节点
    remove: function (item) {
        let prevNode = this.findPrevious(item);
        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next;
        }
    },
    // 修改某一个节点的数据
    edit: function (item, newItem) {
        let node = this.find(item);
        node.val = newItem;
    },
    // 在控制台打印出所有节点方便预览
    display: function () {
        let cur = this.head;
        while (!(cur.next === null)) {
            console.log(cur.next.val);
            cur = cur.next;
        }
    }
}

let node = new LinkedList();
node.insert("n1", "head");
node.insert("n2", "n1");
node.insert("n3", "n2");
node.insert("n4", "n3");
node.display();
console.log('--------------------------');
node.remove("n3");
node.display();
console.log('--------------------------');
node.edit("n2", "ramona");
node.display();
