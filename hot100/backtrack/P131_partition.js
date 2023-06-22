/**
 * 131. 分割回文串
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 回文串 是正着读和反着读都一样的字符串。
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];

    // 基于当前的部分解，切分从start到末尾的子串
    const dfs = (temp, start) => {
        // 找到满足条件的子集，将其加入结果集中
        if (start === s.length) {
            // 新建一个和temp等长的切片,temp还要在递归中继续被修改，不能将它的引用推入res
            res.push(temp.slice());
            // 结束掉当前这个递归（分支）
            return;
        }

        // 枚举出当前的所有选项，从索引start到末尾索引
        for (let i = start; i < s.length; i++) {
            // 如果当前start到i是回文串，就进行切割，将其添加到子集中
            if (isPail(start, i, s)) {
                temp.push(s.substring(start, i + 1));
                dfs(temp, i + 1);
                // 上面递归结束了，撤销当前选择i，去下一轮迭代
                temp.pop();
            }
        }
    }


    dfs([], 0);
    return res;
};

// 双指针，判断字符串s是否是回文串
const isPail = (leftIndex, rightIndex, s) => {
    while (leftIndex < rightIndex) {
        if (s[leftIndex] !== s[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}

// 加入记忆数组。剪枝，避免重复计算
var partitionII = function(s) {
    const res = [];
    // 记忆数组，用于剪枝，将计算过的子问题结果存下来
    const memo = new Array(s.length).fill(0).map(_ => new Array(s.length).fill(0));

    // 基于当前的部分解，切分从start到末尾的子串
    const dfs = (temp, start) => {
        // 找到满足条件的子集，将其加入结果集中
        if (start === s.length) {
            // 新建一个和temp等长的切片,temp还要在递归中继续被修改，不能将它的引用推入res
            res.push(temp.slice());
            // 结束掉当前这个递归（分支）
            return;
        }

        // 枚举出当前的所有选项，从索引start到末尾索引
        for (let i = start; i < s.length; i++) {
            if (memo[start][i] === false) {
                continue;
            }

            // 如果当前start到i是回文串，就进行切割，将其添加到子集中
            if (memo[start][i] || isPailII(start, i, s, memo)) {
                temp.push(s.substring(start, i + 1));
                dfs(temp, i + 1);
                // 上面递归结束了，撤销当前选择i，去下一轮迭代
                temp.pop();
            }
        }
    }


    dfs([], 0);
    return res;
};

// 双指针，判断字符串s是否是回文串
const isPailII = (leftIndex, rightIndex, s, memo) => {
    while (leftIndex < rightIndex) {
        if (s[leftIndex] !== s[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    memo[leftIndex][rightIndex] = true;
    return true;
}

/**
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 */

const s = "aab";
console.log(partition(s));
console.log(partitionII(s));