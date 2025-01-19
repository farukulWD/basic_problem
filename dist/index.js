"use strict";
// function twoSum(nums: number[], target: number): number[] {
//     for( let i = 0; i < nums.length; i++){
//         for( let j = i + 1; j < nums.length; j++ ){
//             if( nums[i] + nums[j] === target ){
//                 return [i,j]
//             }
//         }
//     }
//     return []
// };
// function addTwoNumbers(
//     l1: number[] | null,
//     l2: number[] | null
//   ): number[] | null {
//     let carry = 0;
//   const dummyHead = new ListNode(0);
//   let current = dummyHead;
//   while (l1 !== null || l2 !== null || carry !== 0) {
//     const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
//     carry = Math.floor(sum / 10);
//     current.next = new ListNode(sum % 10);
//     current = current.next;
//     if (l1 !== null) l1 = l1.next;
//     if (l2 !== null) l2 = l2.next;
//   }
//   return dummyHead.next;
//   }
//   const result = addTwoNumbers([2, 4, 3], [5, 6, 4]);
//   console.log(result);
// function lengthOfLongestSubstring(s: string): number {
//   let set = new Set();
//   let j = 0;
//   let maxLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     while (set.has(s[i])) {
//       set.delete(s[j]);
//       j++;
//     }
//     set.add(s[i]);
//     console.log(i - j + 1);
//     maxLength = Math.max(maxLength, i - j + 1);
//   }
//   return maxLength;
// }
// console.log(lengthOfLongestSubstring("pwwkew"));
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const nums = nums1.concat(nums2);
//   const sortsNums = nums.sort((a, b) => a - b);
//   let median;
//   if (sortsNums.length % 2 != 0) {
//     const midleIndex = Math.floor(sortsNums.length / 2);
//     median = sortsNums[midleIndex];
//   } else {
//     const midleIndex = Math.floor(sortsNums.length / 2);
//     median = (sortsNums[midleIndex] + sortsNums[midleIndex - 1]) / 2;
//   }
//   return median;
// }
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
// function longestPalindrome(s: string): string {
//   if (s.length === 0) return "";
//   let start = 0;
//   let end = 0;
//   function expand(left: number, right: number): number {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       left--;
//       right++;
//     }
//     return right - left - 1;
//   }
//   for (let i = 0; i < s.length; i++) {
//     const len1 = expand(i, i);
//     const len2 = expand(i, i + 1);
//     const len = Math.max(len1, len2);
//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2);
//       end = i + Math.floor(len / 2);
//     }
//   }
//   return s.substring(start, end + 1);
// }
// console.log(longestPalindrome("cbbd"))
