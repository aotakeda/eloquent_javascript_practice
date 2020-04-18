/*

Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and includ-
ing) end.

Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.

As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used when building the array.
If no step is given, the elements go up by increments of one, corresponding
to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5,
7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].

*/

function range(start, end) {
    arr = [];
    for (start; start <= end; start++) {
       arr.push(start); 
    }
    return arr;
}

function sumFunction(numbers) {
    var sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];    
    }

    return sum;
}

function rangeBonus(start, end, step = 1) {
    arr = [];
    if (step > 0) {
        for (step; start <= end; start+=step) {
           arr.push(start); 
        }
    }
    else {
        for (step; end >= start; end+=step) {
            arr.push(end); 
        }
    }
    console.log(arr);
}