/**
 * Merge Sort  (n log n)
 * Based on recursion 
 * uses divide and conquer algorithm
 * steps: 
 * 1. Identify base condition 
 * 2. Split the array in half 
 * 2. Call recusion
 * 3. Merge arrays  
 */

const mergeSort = (arr) => {
    //base condition 
    if (arr.length < 2) return null;

    let mid = arr.length / 2;
    let left_arr = arr.slice(0, mid);
    let rigth_arr = arr.slice(mid, arr.length)
    console.log(left_arr);
    console.log(rigth_arr);

    //recursion
    mergeSort(left_arr);
    mergeSort(rigth_arr);

    //merge array
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left_arr.length && j < rigth_arr.length) {
        if (left_arr[i] < rigth_arr[j]) {
            arr[k] = left_arr[i];
            i++;
        } else {
            arr[k] = rigth_arr[j];
            j++;
        }
        k++;
    }
    while (i < left_arr.length) {
        arr[k] = left_arr[i];
        i++;
        k++;
    }
    while (j < rigth_arr.length) {
        arr[k] = rigth_arr[j];
        j++;
        k++;
    }

};

//Main
arr = [1, 12, 5, 6, 8, 9, 4];
mergeSort(arr);
console.log(arr);