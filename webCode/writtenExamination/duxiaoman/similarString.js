function similarString(s) {
    if (s.length % 3 !== 0) return 'No';
    let a = s.slice(0, 3);
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 3; j < s.length; j++) {
            arr.push(s.slice(i, j));
        }
    }
    console.log(arr);
    console.log(a);
}

const str = "ABCABDABDABEABEABF";
console.log(similarString(str));