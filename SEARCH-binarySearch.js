/**
 * Binary Search  (n log n)
 * Use only in sorted array
 * steps: 
 * 1. identify a middle index  
 * 2. use pointers Left and Right to limit the array where the target is
 * 3. compare the value at that middle index with the target value
 * 4. move the the pointer to limit the subarray where the target is 
 */

export const binarySearch = (arr, target) => {

    if (arr == null) return -1;

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return -1;



};
export const main = () => {
    //Main
    let arr = [1, 4, 5, 6, 8, 9];
    let target = 8;
    const answer = binarySearch(arr, target);
    console.log(answer);
}

