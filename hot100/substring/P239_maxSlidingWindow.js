/**
 * 239. 滑动窗口最大值
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。
 * 滑动窗口每次只向右移动一位。
 *
 * 思路：维护一个单调递减队列，保证队列里的元素是从大到小的
 * 出队 enqueue(value): 如果队列移除的元素 value 等于单调队列的出口元素，那么队列弹出该元素，否则，不进行任何操作
 * 入队 dequeue(value): 如果入队的元素 value 大于单调队列的入口元素，那么就将队列入口元素弹出，不断比较，直到入队的元素的值小于等于
 * 队列的入口元素值为止
 * front(): 返回当前队列元素最大值
 *
 * @param nums
 * @param k
 */
const maxSlidingWindow = function (nums, k) {
    let helpQueue = new MonoQueue();
    // 定义左指针和右指针
    let left = 0, right = 0;
    // 定义结果集
    let resArr = [];

    // 先把首次的k个元素添加到单调递减队列中
    while (right < k) {
        helpQueue.enqueue(nums[right]);
        right++;
    }
    resArr.push(helpQueue.front());
    while (right < nums.length) {
        helpQueue.enqueue(nums[right]);
        helpQueue.dequeue(nums[left]);
        resArr.push(helpQueue.front());
        left++;
        right++;
    }

    return resArr;
}

/**
 * 维护一个单调递减队列
 */
class MonoQueue {
    constructor() {
        this.queue = [];
    }

    /**
     * 入队
     * @param value
     */
    enqueue(value) {
        // 队列入口元素：队列先进先出，入口相当于数组末尾
        let enter = this.queue[this.queue.length - 1];
        // 入队元素大于队列入口元素，队列入口出队，直到入队元素小于等于队列入口元素，进行入队，保证队列的单调递减性
        while (enter !== undefined && enter < value) {
            this.queue.pop();
            enter = this.queue[this.queue.length - 1];
        }
        this.queue.push(value);
    }

    /**
     * 出队
     * @param value
     */
    dequeue(value) {
        const front = this.front();
        // 如果当前窗口移除的元素和队列中出队口的元素相等，则将出队口元素删除掉
        if (front === value) {
            this.queue.shift();
        }
    }

    /**
     * 返回队列的最大值
     */
    front() {
        return this.queue[0];
    }
}

const nums = [1,3,-1,-3,5,3,6,7];
const k = 3;

console.log(maxSlidingWindow(nums, k));