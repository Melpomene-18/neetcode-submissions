class Solution {
    /**
     * @param {number[]}
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let noDupes = new Set();
        nums.forEach(num => {
            noDupes.add(num);
        });
        if (noDupes.size < nums.length) {
            return true;
        }
        return false;
    }
}

let sol = new Solution();
let nums1 = [1, 2, 3, 3];
let nums2 = [1, 2, 3, 4];

sol.hasDuplicate(nums1);