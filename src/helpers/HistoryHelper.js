import {createHashHistory} from 'history';
const HISTORY = createHashHistory();

export const navigate = (url) => {
    HISTORY.push(url)
}

console.log("@@ HISTORY: ", HISTORY);
export default HISTORY;