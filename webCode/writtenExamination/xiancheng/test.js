window.charc = "a";
let charc = "b";
let obj = {
    charc: "c",
    getCharc: ()=> {
        return this.charc;
    }
};
let sayCharc = ()=> {
    return this.charc;
};
let charObj = {
    charc: "d"
};
obj.getCharc();
sayCharc();
sayCharc.apply(charObj);