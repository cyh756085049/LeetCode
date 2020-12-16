var makeConnected = function (n, connections) {
    // 连接n台电脑至少需要n-1根线缆
    if (connections.length < n - 1) {
        return -1;
    }
    let father = Array.from({length: n}, (v, i) => i);
    console.log(father);
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

console.log(makeConnected(4, [[0,1],[0,2],[1,2]]));
console.log(makeConnected(6, [[0,1],[0,2],[0,3],[1,2],[1,3]]));
console.log(makeConnected(5, [[0,1],[0,2],[3,4],[2,3]]));