/*

Write a loop that makes seven calls to console.log to output
the following triangle:

_________________________
#
##
###
####
#####
######
__________________________

*/

for (let index = 1; index < 7; index++) {
    console.log('#'.repeat(index));
}

/*

Write a program that uses console.log to print all the
numbers from 1 to 100, with two exceptions. For numbers divisible by 3,
print "Fizz" instead of the number, and for numbers divisible by 5
(and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz"
for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).

*/

for (let index = 1; index <= 100; index++) {
    var divisibleByThree = index % 3 == 0;

    var divisibleByFive = index % 5 == 0;
    
    console.log(index);

    if (divisibleByThree) {
        console.log('Fizz');
    }
    if (divisibleByFive && !divisibleByThree) {
        console.log('Buzz');
    }
    if (divisibleByFive && divisibleByThree) {
        console.log('FizzBuzz');
    }
    
}

/*

Write a program that creates a string that represents an 8x8 grid,
using new-line characters to separate lines. At each position of the
grid there is either a space or a # character. The characters should
form a chessboard.

Passing this string to console.log should show something like this:

________________________________________________

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
________________________________________________

When you have a program that generates this pattern, define a binding
size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.

*/

function chessboard(size) {
    var rawLine = '# # # #';
    
    for (index = 0; index < size;) {
        var divisibleByTwo = index % 2 == 0;
        if (divisibleByTwo) {
            console.log(' ' + rawLine);
        }
        else {
            console.log(rawLine);
        }
        index++;
    }
}

chessboard(8);