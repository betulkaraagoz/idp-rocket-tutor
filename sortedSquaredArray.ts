function sortedSquares(nums: number[]): number[] {
	const result: number[] = [];
	for (let i=0; i < nums.length; i++){
		const square: number = nums[i]*nums[i];
		if(i === 0){
			result.push(square);
			continue;
		}

		const lastSquaredItem: number = result[result.length - 1];
		if(lastSquaredItem <= square){
			result.push(square);
		} else if (lastSquaredItem > square){
			for (let j=result.length-1; j>=0 ; j--){
				if(result[j] < square){
					result.splice(j+1, 0, square);
					break;
				}
				if(j === 0){
					result.splice(0, 0, square);
					break;
				}
			}
		}
	}
	return result;
}

const inputArray: number[] = [-4,-1,0,3,10];
const result: number[] = sortedSquares(inputArray);
console.log(result);
