function pwdStrong(str) {
    if (str.length < 8 || str.length > 16) return 'NG';
    let set = new Set();
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= "Z") {
            set.add(1);
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            set.add(2);
        } else if (str[i] >= '0' && str[i] <= '9') {
            set.add(3);
        } else {
            set.add(4);
        }
    }
    if (set.size === 1) {
        return "OK 简单";
    } else if (set.size >= 3) {
        return "OK 复杂";
    } else {
        return "OK 超棒";
    }
}