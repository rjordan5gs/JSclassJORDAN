# Week 12 README Higher order functions

# Video Notes

## What is a Higher Order Function?

- Takes a function as a parameter or returns a function

## Why would a function take another as a parameter?

- a function takes a parameter to perform an operation on it or within it.

(ie): function double(n) {
    return n * 2
}

or

function hello(s) {
    return 'Hello ${s}
}

- Some functions will not take primitives and need additional logic in order to be used.

(ie): setTimeout() , array.filter(), array.map()

- Any function that is not a higher order function is called a first order function


# CODE CHALLENGE:

For the first 2 problems all you would need to do is change these since we changed the code:

    const avgMPG = Number((sums.MPG/numberOfObj).toFixed(2))
    const avgTripCost = Number((sums.tripCost/numberOfObj).toFixed(2))

    I have no idea how I would change the updateDOM functions.

