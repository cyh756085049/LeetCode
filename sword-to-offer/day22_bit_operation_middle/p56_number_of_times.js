/**
 *  I. 数组中数字出现的次数
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
 *
 * 输入：nums = [4,1,4,6]
 * 输出：[1,6] 或 [6,1]
 */

// 暴力法 通过map映射找值
const singleNumbers = function (nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.delete(nums[i]);
        } else {
            map.set(nums[i], nums[i]);
        }
    }

    const res = [];
    map.forEach(value => res.push(value));
    return res;
}

/**
 * 位运算
 * 异或运算，两个相同的数字异或为0，如果数组中只有一个只出现一次的数字，可直接用数组中的所有值进行异或，最终结果就是只出现一次的数字
 * @param nums
 */
const singleNumbersTwo = function (nums) {
    let n = 0, m = 1;
    // 遍历异或
    for (let i of nums) {
        n ^= i;
    }

    // 循环左移，计算 m
    while ((n & m) == 0) {
        m <<= 1;
    }

    let x = 0, y = 0;
    for (let i of nums) {
        if ((i & m) == 0) {
            x ^= i;
        } else {
            y ^= i;
        }
    }

    console.log(x, y);
    return [x, y];
}

console.log(singleNumbers([4,1,4,6]));
console.log(singleNumbersTwo([4,1,4,6]));


/**
 *  II. 数组中数字出现的次数 II
 * 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
 *
 * 输入：nums = [3,4,3,3]
 * 输出：4
 */

// map 哈希统计法
const singleNumber = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let num of nums) {
        if (map.get(num) === 1) {
            return num;
        }
    }

    return 0;
};

// 位运算
const singleNumberTwo = function(nums) {
    
};

console.log(singleNumber([3,4,3,3]));
console.log(singleNumberTwo([3,4,3,3]));


