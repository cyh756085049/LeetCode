/**
 * 207. 课程表 https://leetcode.cn/problems/course-schedule/description/
 * 思路：拓扑排序
 * @param {number} numCourses 需选修的课程数
 * @param {number[][]} prerequisites 所有待修习课程的依赖关系，<a,b>，表示想要修习课程 b，必须首先修习课程 a
 * @return {boolean}
 */
// 题解：https://leetcode.cn/problems/course-schedule/solutions/250377/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/
var canFinish = function(numCourses, prerequisites) {
    // 入度数组
    const inDegree = new Array(numCourses).fill(0);
    // 邻接表
    const map = {};

    for (let i = 0; i < prerequisites.length; i++) {
        // 求课程的初试入度值
        inDegree[prerequisites[i][0]]++;
        // 当前课已经存在于邻接表中
        if (map[prerequisites[i][1]]) {
            // 添加依赖它的后续课程
            map[prerequisites[i][1]].push(prerequisites[i][0]);
        } else {
            // 当前课程不存在于邻接表中
            map[prerequisites[i][1]] = [prerequisites[i][0]];
        }
    }

    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        // 所有入度为0的课程入队
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // 记录选了的课程数量
    let count = 0;
    while (queue.length > 0) {
        // 当前选的课，出列
        const selected = queue.shift();
        // 选课数加1
        count++;
        // 获取这门课程对应的后续课程
        const toEnQueue = map[selected];
        // 如果确实有后续课程
        if (toEnQueue && toEnQueue.length > 0) {
            for (let i = 0; i < toEnQueue.length; i++) {
                // 依赖它的后续课程的入度 -1
                inDegree[toEnQueue[i]]--;
                // 如果减为0，入队
                if (inDegree[toEnQueue[i]] === 0) {
                    queue.push(toEnQueue[i]);
                }
            }
        }
    }
    return count === numCourses;
};

/**
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 */

const numCourses = 2, prerequisites = [[1,0]];
console.log(canFinish(numCourses, prerequisites));