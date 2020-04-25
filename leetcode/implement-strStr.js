/**Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack. 
*/

var strStr = function (haystack, needle) {
  if (needle.length === 0 || haystack === needle) return 0;

  for (let i = 0; i < haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }
  return -1;
}