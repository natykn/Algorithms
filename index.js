import { mergeSort } from "./SORT-mergeSort.js";
import { binarySearch } from "./SEARCH-binarySearch.js";

//Merge Sort
let arr = [1, 12, 5, 6, 8, 9, 4];
mergeSort(arr);
console.log(arr);

//Binary Search
arr = [1, 3, 4, 5, 7, 8, 10, 13, 34, 56, 57, 78, 100, 101, 124, 132];
let target = 100;
const answer = binarySearch(arr, target);
console.log(answer);


