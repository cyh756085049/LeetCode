/**
 * 编写函数parseParams，解析url 的参数成一个数组。
 * var a = '?token=abc&id=123&id=456';
 * 执行parse(a) 返回 {'token':'abc', 'id':[123, 456]}
 * var b = '?name=john&age';
 * 执行parse(b) 返回 {'name':'john', 'age':null}
 * @param url
 * @returns {{}|null}
 */
function parseParams(url) {
    if (!url) return null;
    const paramObj = {};
    // 解构赋值
    const [, queryString] = url.split('?');
    const queryStringArr = queryString.split('&');
    for (const queryObj of queryStringArr) {
        let [key, value] = queryObj.split('=');
        // 如果值存在
        if (value) {
            // 将已编码 URI 中所有能识别的转义序列转换成原字符
            value = decodeURIComponent(value);
        } else {
            // 将值置为null
            value = null;
        }
        // 如果参数对象中存在该key对于的value
        if (paramObj[key]) {
            paramObj[key] = Array.isArray(paramObj[key]) ? paramObj[key] : [paramObj[key]];
            paramObj[key].push(value);
        } else {
            // 否则，直接添加到对象中
            paramObj[key] = value;
        }
    }
    return paramObj;
}

const url = '?token=abc&id=123&id=456';
const url1 = '?name=john&age';
const paramObj = parseParams(url1);
const paramObj1 = parseParams(url);
console.log(paramObj);
console.log(paramObj1);
