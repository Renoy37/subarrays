//given an array and a chunk size, divide the array  into sub arrays where each subarray is of the length the chunk size

//([1,2,3,4,5,6,7]3) == ([1,2,3], [3,4,5], [6,7])
//([1,2,3,4,5,6,7]1) == ([1][2] [3],[4] [5] [6] [7])

arr = [1, 2, 3, 4, 5, 6, 7];
size = 2;

function chunkArray(arr, size) {
  //variable to store the array
  let chunks = [];
  //looping through the array and ensuring it has values
  while (arr.length) {
    //pushing the subarrays in the enpty chunks array
    chunks.push(arr.splice(0, size));
  }
  return chunks;
}

console.log(chunkArray(arr, size));

