let max = 0;

async function GetSum(arr) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }
    throw new Error('input data is incorrect');
}

async function f() {
    try {
        let result = await GetSum([1, 24, 234, 2132, 33, 4, 332])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

f()