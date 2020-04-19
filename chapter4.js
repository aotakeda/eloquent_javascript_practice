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
    return arr;
}

/*

Arrays have a reverse method that changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace.

The first, reverseArray, takes an array
as argument and produces a new array that has the same elements in the
inverse order.

The second, reverseArrayInPlace, does what the reverse
method does: it modifies the array given as argument by reversing its ele-
ments. Neither may use the standard reverse method.

*/

array = [1,2,3,4,5,6]

function reverseArray(arr) {
    var newArray = new Array;
    for (let index = 0; index < arr.length; index++) {
        newArray.unshift(arr[index])
    }
    return newArray;
}

function reverseArrayInPlace(arr) {
    var newArray = new Array;
    for(var i = arr.length-1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

array = reverseArrayInPlace(array);