
//  Вариант в синтаксисе export default
/*
function logger (msg) {
    console.log('Logger said from the logger.js file: ' + msg);
}

export default logger;
*/


export function log (msg) {
    const text = 'Logger said from the logger.js file: ' + msg;
    console.log(text);
    return text;
}