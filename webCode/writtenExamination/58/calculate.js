function calculate( str ) {

    let map = new Map();
    map.set('零', 0);
    map.set('壹', 1);
    map.set('贰', 1);
    map.set('叁', 3);
    map.set('肆', 4);
    map.set('伍', 5);
    map.set('陆', 6);
    map.set('柒', 7);
    map.set('捌', 8);
    map.set('玖', 9);
    map.set('壹拾', 10);
    map.set('壹拾壹', 11);
    map.set('壹拾贰', 12);
    map.set('壹拾叁', 13);
    map.set('壹拾肆', 14);
    map.set('壹拾伍', 15);
    map.set('壹拾陆', 16);
    map.set('壹拾柒', 17);
    map.set('壹拾捌', 18);
    map.set('壹拾玖', 19);
    map.set('贰拾', 20);
    map.set('贰拾壹', 21);
    map.set('贰拾贰', 22);
    map.set('贰拾叁', 23);
    map.set('贰拾肆', 24);
    map.set('贰拾伍', 25);
    map.set('贰拾陆', 26);
    map.set('贰拾柒', 27);
    map.set('贰拾捌', 28);
    map.set('贰拾玖', 29);
    map.set('叁拾', 30);
    map.set('叁拾壹', 31);
    map.set('叁拾贰', 32);
    map.set('叁拾叁', 33);
    map.set('叁拾肆', 34);
    map.set('叁拾伍', 35);
    map.set('叁拾陆', 36);
    map.set('叁拾柒', 37);
    map.set('叁拾捌', 38);
    map.set('叁拾玖', 39);
    map.set('肆拾', 40);
    map.set('肆拾壹', 41);
    map.set('肆拾贰', 42);
    map.set('肆拾叁', 43);
    map.set('肆拾肆', 44);
    map.set('肆拾伍', 45);
    map.set('肆拾陆', 46);
    map.set('肆拾柒', 47);
    map.set('肆拾捌', 48);
    map.set('肆拾玖', 49);
    map.set('伍拾', 50);
    map.set('伍拾贰', 52);
    map.set('伍拾壹', 51);
    map.set('伍拾叁', 53);
    map.set('伍拾肆', 54);
    map.set('伍拾伍', 55);
    map.set('伍拾陆', 56);
    map.set('伍拾柒', 57);
    map.set('伍拾捌', 58);
    map.set('伍拾玖', 59);
    map.set('陆拾', 60);
    map.set('陆拾贰', 62);
    map.set('陆拾壹', 61);
    map.set('陆拾叁', 63);
    map.set('陆拾肆', 64);
    map.set('陆拾伍', 65);
    map.set('陆拾陆', 66);
    map.set('陆拾柒', 67);
    map.set('陆拾捌', 68);
    map.set('陆拾玖', 69);
    map.set('柒拾', 70);
    map.set('柒拾贰', 72);
    map.set('柒拾壹', 71);
    map.set('柒拾叁', 73);
    map.set('柒拾肆', 74);
    map.set('柒拾伍', 75);
    map.set('柒拾陆', 76);
    map.set('柒拾柒', 77);
    map.set('柒拾捌', 78);
    map.set('柒拾玖', 79);
    map.set('捌拾', 80);
    map.set('捌拾贰', 82);
    map.set('捌拾壹', 81);
    map.set('捌拾叁', 83);
    map.set('捌拾肆', 84);
    map.set('捌拾伍', 85);
    map.set('捌拾陆', 86);
    map.set('捌拾柒', 87);
    map.set('捌拾捌', 88);
    map.set('捌拾玖', 89);
    map.set('玖拾', 90);
    map.set('玖拾贰', 92);
    map.set('玖拾壹', 91);
    map.set('玖拾叁', 93);
    map.set('玖拾肆', 94);
    map.set('玖拾伍', 95);
    map.set('玖拾陆', 96);
    map.set('玖拾柒', 97);
    map.set('玖拾捌', 98);
    map.set('玖拾玖', 99);

    let res = [];
    let tmp = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "加") {
            res.push(map.get(str.slice(tmp, i)));
            res.push('+');
            tmp = i + 1;
        } else if (str[i] === '减') {
            res.push(map.get(str.slice(tmp, i)));
            res.push('-');
            tmp = i + 1;
        }
    }
    res.push(map.get(str.slice(tmp, str.length)));
    let sum = res[0];
    for (let i = 1; i < res.length; i++) {
        if (res[i] === '+') {
            sum += res[i + 1];
        } else if(res[i] === '-') {
            sum -= res[i + 1];
        }
    }
    return sum;
}

console.log(calculate("玖拾玖加叁拾陆减贰拾伍加叁拾"));