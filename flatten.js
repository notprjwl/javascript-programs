const arr = [1, 2, 3, {'car': 'benz'}, [4, 5, [6, 7]], 8, 9]; 
//res = [ 1, 2, 3, { car: 'benz' }, 4, 5, 6, 7, 8, 9 ]

function flattenArr(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArr(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flattenArr(arr, []));
