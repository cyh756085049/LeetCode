#### 回溯问题抓住三个要点：

* 选择，当前你有什么选择，一个选择代表一个分支，基于一种选择，又会展开出一些选择
* 约束条件，利用它去做剪枝，减少不必要的搜索，让你的搜索树“瘦身”
* 目标，明确了何时将部分解加入解集，结束当前的递归

#### 模板 choose -- explore -- unchoose：

* 用 for 循环枚举出当前的选择
* 作出一个选择，基于这个选择，继续递归
* 递归结束了，撤销这个选择，进入下一轮迭代

#### 参考：
回溯相关题解可参考：https://leetcode.cn/problems/palindrome-partitioning/solutions/639915/shou-hua-tu-jie-san-chong-jie-fa-hui-su-q5zjt/