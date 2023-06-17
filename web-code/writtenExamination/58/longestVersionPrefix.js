function longestVersionPrefix( versions ) {
    // write code here
    if (versions === null || versions.length === 0) return "";
    // 默认把第一个当做前缀，如果后边的比它短的话，最后总能缩小前缀
    let prefix = versions[0];
    for (let i = 1; i < versions.length; i++) {
        // 比较的是第二个词与第一个词的匹配长度
        prefix = lcp(prefix, versions[i]);
        if (prefix.length === 0) break;
    }
    if (prefix[prefix.length - 1] === '.') {
        prefix = prefix.substr(0, prefix.length - 1);
    }
    return prefix;
}

function lcp(prefix, str) {
    const len = Math.min(prefix.length, str.length);
    let stride = 0;
    for (let i = 0; i < len; i++) {
        if (prefix.charCodeAt(i) === str.charCodeAt(i)) {
            stride++;
        } else break;
    }
    return prefix.substr(0, stride);
}

const arr = ["2.3.4","2.3.4.1","2.2.2"];
console.log(longestVersionPrefix(arr));
console.log("2."[1]);