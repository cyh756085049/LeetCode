function drawColor(s, t) {
    let arr_s = s.split('');
    arr_s = [...new Set(arr_s)];
    console.log(arr_s);
    let res = [];
    let count = 0;
    arr_s.forEach(item => {
        console.log(t.includes(item));
        if (t.includes(item)) {
            res.push(item);
            count++;
        }
    });







    // let map = new Map();
    // let arr_t = t.split('');
    // arr_t.forEach(item => {
    //     console.log(item);
    //     let b = map.has(item);
    //     console.log(b);
    //     if (map.get(item)) {
    //         map[item] += 1;
    //     } else {
    //         map[item] = 1;
    //     }
    // })
    //
    // console.log(map);
    return count;
}

const s = "AAB";
const t = "ABC";
console.log(drawColor(s, t));