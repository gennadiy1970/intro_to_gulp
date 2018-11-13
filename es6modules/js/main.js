//  Вариант в синтаксисе export default
/*
import log from './logger.js';
import msg from './message.js';
*/

import {log} from './logger.js';
import {msg} from './message.js';


console.log(log)
log(msg)
document.body.innerHTML = `
    <h1>${msg}</h1>
    <h2>${log(msg)}</h2>
`;