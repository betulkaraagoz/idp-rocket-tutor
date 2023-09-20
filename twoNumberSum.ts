function twoNumberSum(nums: number[], target: number): number[] {
	const numTracker: { [key: number]: boolean } = {};

	for (const num of nums) {
		const complement = target - num;
		if (numTracker[complement]) {
			return [num, complement];
		}
		numTracker[num] = true;
	}

	return [];
}

const input: number[] = [3, 5, -4, 8, 11, 1, -1, 6];
const target: number = 10;
const result: number[] = twoNumberSum(input, target);
console.log("The result for the Two Number Sum: ", result); // This should print [-1, 11] for the given
