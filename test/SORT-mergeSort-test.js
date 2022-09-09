import { mergeSort } from '../SORT-mergeSort.js';
import assert from 'assert';
import { expect } from 'chai';


describe('Array sorted', function () {
    it('should return true if array is sorted', function () {
        let arr = [3, 2, 1];
        mergeSort(arr);
        expect(arr).to.deep.equal([1, 2, 3]);
    });
});

describe('Array sorted for 1 element ', function () {
    it('should return true if array is sorted', function () {
        let arr = [3];
        mergeSort(arr);
        expect(arr).to.deep.equal([3]);
    });
});

describe('Array sorted with repeated elements ', function () {
    it('should return true if array is sorted', function () {
        let arr = [9, 9, 4, 4, 1, 8, 10];
        mergeSort(arr);
        expect(arr).to.deep.equal([1, 4, 4, 8, 9, 9, 10]);
    });
});

