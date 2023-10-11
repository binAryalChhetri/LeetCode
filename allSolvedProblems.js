// Here are all the problems of Leet Code I have solved to date 


// 1480. Running Sum of 1d Array

// In this problem we take an array as input from the user.
// Then we return the running sum of that array by using the map method.
const runningSum = nums => {
    let sum =0;
    return nums.map( num => sum+= num )
};

// Here the ouput will be calculated as given below.
// Output = [2, 2+3, 2+3+4, 2+3+4+5, 2+3+4+5+6] => [2,5,9,14,20]
runningSum([2,3,4,5,6]);
