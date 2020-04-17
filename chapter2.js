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