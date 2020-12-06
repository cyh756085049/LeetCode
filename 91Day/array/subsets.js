/**
 * 78. 子集
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    const dfs = (index, list) => {
        if (index === nums.length) {
            res.push(list.slice());
            return;
        }
        list.push(nums[index]);
        dfs(index + 1, list);
        list.pop();
        dfs(index + 1, list);
    }
    dfs(0, []);
    return res;
};

var subsets1 = function(nums) {
    return nums.reduce((total, num) => total.concat(total.map(item => item.concat(num))), [[]]);
};

var subsets2 = function(nums) {
    const res = [];
    for (let i = 0; i < 1 << nums.length; i++) {
        let cur = [];
        for (let j = 0; j < nums.length; j++) {
            if ((i >> j) & 1) cur.push(nums[j]);
        }
        res.push(cur);
    }
    return res;
};
const nums = [1,2,3];
console.log(subsets(nums));
console.log(subsets1(nums));
