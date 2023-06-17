/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let headSize = nums.length;
    // 构建一个大顶堆
    buildMaxHeap(nums, headSize);
    // 进行下沉，大顶堆最大的元素下沉到末尾
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i);
        --headSize;
        maxHeapify(nums, 0, headSize);
    }

    return nums[0];
};

// 自下而上构建大顶堆
const buildMaxHeap = (nums, headSize) => {
    for (let i = Math.floor(headSize / 2) - 1; i >= 0; i--) {
        maxHeapify(nums, i, headSize);
    }
}

// 从左到右，自上而下的调整节点
const maxHeapify = (nums, i, headSize) => {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    if (left < headSize && nums[left] > nums[largest]) {
        largest = left;
    }
    if (right < headSize && nums[right] > nums[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // 进行节点调整
        swap(nums, i, largest);
        // 继续调整下面的非叶子节点
        maxHeapify(nums, largest, headSize);
    }
}

// 交换两个值
const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}


// 暴力解法
var findKthLargest2 = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};


/**
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 */

const nums = [3,2,1,5,6,4], k = 2;
console.log(findKthLargest(nums, k));
console.log(findKthLargest2(nums, k));