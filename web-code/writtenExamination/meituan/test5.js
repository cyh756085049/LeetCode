/**
 * 题目描述：
 小美有N张牌，牌上分别写有数字1到N，她打算用这些牌和小团玩洗牌游戏。
 小美将牌叠成一堆放在桌上，每次可以从桌上的牌堆的顶部取走一张牌，
 叠放在自己手上，或者将自己手上的牌堆的顶部或底部的一张牌交给小团，
 直到N张牌都交给小团。通俗地说，一开始桌上的牌堆有N张牌，小美手上的牌堆有0张牌，
 她每次可以将桌上牌堆顶的一张牌放到自己手上的牌堆顶，
 或者将手上牌堆顶或牌堆底的一张牌交给小团。小团收到的牌上面的数字（按收到的顺序）
 依次为A[1]到A[N]。现在，小美问小团是否有可能，初始时桌上的牌堆从顶部到底部，
 牌上所写的数字依次为1到N。

 第一行输入一个整数T（1<=T<=10），表示数据组数。

 每组数据占两行，第一行输入一个整数N（1<=N<=10^5）；

 第二行输入N个由空格隔开的整数，表示A[1]到A[N]（保证是1到N的一个排列）。


 每组数据输出占一行，如果初始时桌上的牌堆从顶部到底部，牌上所写的数字依次为1到N是有可能的，则输出“Yes”，否则输出“No”（均不包括引号）。


 2
 5
 3 1 5 2 4
 5
 3 5 2 1 4

 Yes
 No
 **/