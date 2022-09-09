import { binarySearch } from '../SEARCH-binarySearch.js';
import assert from 'assert';
import { expect } from 'chai';


describe('Search target that exists', function () {
    it('should return the index for the target', function () {
        let arr = [1, 3, 4, 5, 7, 8, 10, 13, 34, 56, 57, 78, 100, 101, 124, 132];
        let target = 100;
        const answer = binarySearch(arr, target);
        expect(answer).to.equal(12);
    });
});

describe('Search target doesn\'t exist', function () {
    it('should return -1 if the target doesn\'t exist', function () {
        let arr = [1, 3, 4, 5, 7, 8, 10, 13, 34, 56, 57, 78, 100, 101, 124, 132];
        let target = 55;
        const answer = binarySearch(arr, target);
        expect(answer).to.equal(-1);
    });
});



