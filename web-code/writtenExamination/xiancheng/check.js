/**
 * 携程为庆祝中秋节，举办了中秋晚会，在晚会活动中有一个词语对对碰环节。该环节要求参赛选手两两组队，每队由其中一人A提出词型，另外一人B根据词型给出相匹配的答案，匹配成功进入下一轮。
 请帮助主办方设计一个算法识别B给出的答案是否能够匹配A提出的词型。
 要求：答案只能是纯英文字母，不同单词间以空格分隔，如果输入的内容中含有数字、中文或特殊符号等，直接返回-1。已知判定字符串是否是纯英文字母或空格的正则为："^[A-Za-z ]+$"

 输入数据，两个单词之间以空格分隔，举例：
 A提出：ABAC词型     B回答：jin sheng jin shi（ABAC），B回答正确，输出1
 A提出：ABCD词型     B回答：xiao xin yi yi（ABCC），B回答错误，输出0
 A提出：AABC词型     B回答：人 人 you ze（有中文），B回答错误，输出-1

 回答正确输出1，回答错误输出0，程序异常或回答中有非英文内容，输出-1
 ABAC
 jin sheng jin shi

 1
 */

function check(str1, str2) {
    if (!/^[A-Za-z ]+$/.test(str1) || !/^[A-Za-z ]+$/.test(str2)) {
        return -1;
    }
    let arr = str2.split(' ');
    console.log(arr1);
    if (str1 === 'ABAC') {
        if (arr[0] === arr[2] && arr[0] !== arr[1] && arr[0] !== arr[3] && arr[1] !== arr[3]) {
            return 1;
        }
    }
    if (str1 === 'ABCD') {
        if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr[0] !== arr[3] && arr[1] !== arr[2] && arr[1] !== arr[3] && arr[2] !== arr[3]) {
            return 1;
        }
    }
    if (str1 === 'AABC') {
        if (arr[0] === arr[1] && arr[0] !== arr[2] && arr[0] !== arr[3]) {
            return 1;
        }
    }
    if (str1 === 'ABBC') {
        if (arr[1] === arr[2] && arr[1] !== arr[0] && arr[1] !== arr[3]) {
            return 1;
        }
    }
    if (str1 === 'ABBC') {
        if (arr[1] === arr[2] && arr[1] !== arr[0] && arr[1] !== arr[3]) {
            return 1;
        }
    }
}

const str1 = 'ABAC';
const str2 = 'jin sheng jin shi';
console.log(check(str1, str2));