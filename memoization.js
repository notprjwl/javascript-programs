// lets see how map works

const map = new Map();

function memoizeOne(fn) {
    function temp(...args) {
        const key = args.join("_");
        // console.log(key, ...args)

        if (map.has(key)) {
            console.log("getting data from cache")
            return map.get(key);
        }

        const result = fn(...args);
        console.log("added data =>", result);
        map.set(key, result);
        return result;
    }
    return temp
}

const add = (a, b) => a + b;

const addMemo = memoizeOne(add);

console.log(addMemo(1, 2));
console.log(addMemo(1, 2));
console.log(addMemo(2, 2));
console.log(addMemo(3, 2));
console.log(addMemo(2, 2));
console.log(addMemo(3, 2));




