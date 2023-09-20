function sortedSquaredArray(nums: number[]): number[] {
	const result: number[] = new Array(nums.length);

	let leftPointer = 0;
	let rightPointer = nums.length - 1;

	let i = nums.length - 1;
	while (leftPointer <= rightPointer) {
		const squareLeft = nums[leftPointer] ** 2;
		const squareRight = nums[rightPointer] ** 2;

		if (squareRight > squareLeft) {
			result[i] = squareRight;
			rightPointer--;
		} else {
			result[i] = squareLeft;
			leftPointer++;
		}
		i--;
	}

	return result;
}

const inputArray: number[] = [-4,-1,0,3,10];
const result: number[] = sortedSquaredArray(inputArray);
console.log(result);
