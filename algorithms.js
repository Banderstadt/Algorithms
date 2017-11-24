// Quick Sort algorithm
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
