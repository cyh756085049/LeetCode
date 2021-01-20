const isUnique = function(str) {
    let flag = 0
    for(let char of str) {
        const c = char.charCodeAt() - 97
        if((flag & (1<<c))!== 0) return false
        flag = flag | (1<<c)
    }
    return true
}

console.log(isUnique("leetcode"));