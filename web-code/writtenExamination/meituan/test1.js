/**
 * 服装店新进了a条领带，b条裤子，c个帽子，d件衬衫，现在要把这些搭配起来售卖。有三种搭配方式，一条领带和一件衬衫，一条裤子和一件衬衫，一个帽子和一件衬衫。卖出一套领带加衬衫可以得到e元，卖出一套裤子加衬衫可以得到f元，卖出一套帽子加衬衫可以得到g元。现在你需要输出最大的获利方式。
 *
 * 一行7个整数，空格隔开，分别表示a,b,c,d,e,f,g。
 (1≤a,b,c,d,e,f,g≤1e5)

 输出最大获利的值。

 2 3 4 5 6 7 8

 39

 4个帽子加4件衬衫获利32元，1条裤子加1件衬衫获利7元，一共得到39元。
 * @param str
 * @returns {number}
 */
function maxPrice(str) {
    // const arr = str.split(" ");
    // console.log(str.length);
    let a = str[0], b = str[1], c = str[2], d = str[3],
        e = str[4], f = str[5], g = str[6];
    let sum = 0;
    if (d <= 3) {
        if (d === 1 && c >= 1) {
            sum += g;
        } else if (d === 2 && c >= 2) {
            sum += (g * 2);
        } else if (d === 3 && c >= 3) {
            sum += (g * 3);
        } else if (d === 1 && b >= 1 && c <= 0) {
            sum += f;
        } else if (d === 1 && b <= 0 && c <= 0 && a >= 1) {
            sum += e;
        } else if (d === 2 && b >= 1 && c >= 1) {
            sum += (g + f);
        } else if (d === 2 && b >= 2 && c <= 0) {
            sum += (f * 2);
        } else if (d === 2 && b <= 0 && a >= 2) {
            sum += (e * 2);
        } else if (d === 3 && b >= 3 && c <= 0) {
            sum += (f * 3);
        } else if (d === 3 && c === 1 && b >= 2) {
            sum += (g + f * 2);
        } else if (d === 3 && c === 2 && b >= 1) {
            sum += (g * 2 + f);
        } else if (d === 3 && b === 2 && c <= 0 && a >= 1) {
            sum += (f * 2 + e);
        } else if (d === 3 && b === 1 && c <= 0 && a >= 2) {
            sum += (f + e * 2);
        } else if (d === 3 && b <= 0 && c <= 0 && a >= 3) {
            sum += (e * 3);
        } else if (d <= 0) {
            sum += 0;
        }
    } else {
        if (c <= d && b >= (d - c)) {
            sum += (g * c + (d - c) * f) ;
        } else if (c <= d && a >= (d - c) && b <= 0) {
            sum += (g * c + (d - c) * e) ;
        } else if (c >= d) {
            sum += (g * d);
        } else if (c <= d && b <= (d - c) && a ) {
            sum += (g * c + f * b)
        }
    }
    return sum;
}

// const str = [2, 3, 4, 5, 6, 7, 8];
const str = "2 3 4 5 6 7 8";
const arr = str.split(" ");
let t = [];
arr.forEach(item => {
    t.push(+item);
})
console.log(t);
console.log(maxPrice(t));
