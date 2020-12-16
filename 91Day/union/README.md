## 并查集
### [1319. 连通网络的操作次数](https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/)
#### 思路
并查集：网络总会有部分节点连接形成子网，只要我们找到网络中的子网数目，使得整个网络连通的操作次数其实就是将所有子网🔗的次数。求子网数量其实就是求图中联通分量的数量，求联通分量可以用DFS或者并查集
#### 代码
```js
var makeConnected = function (n, connections) {
    // 连接n台电脑至少需要n-1根线缆
    if (connections.length < n - 1) {
        return -1;
    }
    let father = Array.from({length: n}, (v, i) => i);
    let count = n;
    for (connection of connections) {
        union(...connection);
    }
    return count - 1;

    function union(x, y) {
        if (find(x) !== find(y)) {
            // 联通分量数减一
            count--;
            father[find(x)] = find(y);
        }
    }

    function find(value) {
        if (father[value] !== value) {
            father[value] = find(father[value]);
        }
        return father[value];
    }
}
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(n)