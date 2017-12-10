// Quick Sort algorithm 1
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1],
        less = [],
        more = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else more.push(arr[i])
    }
    return [...quickSort(less), pivot, ...quickSort(more)];
}

// Quick Sort algorithm 2
function qsort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const [pivot, ...rest] = arr;
    const left = [], right = [];
    rest.forEach( el => el < pivot ? left.push(el) : right.push(el) );
    return [...qsort(left), pivot, ...qsort(right)];
}