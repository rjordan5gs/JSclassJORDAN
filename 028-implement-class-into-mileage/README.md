# Week 13 Implement Class into Mileage


## Challenge
I decided to try and put my class in handleinput.js and called it Trip. Since trackMPGandCost was the only function with an obvious object i decided to try and encapsulate it functionality into the class. I also tried exporting the class, but it hasn't been referenced yet, but I'm assuming I would replace all trackMPGandCost refrences with the class.

# Where would we implement trip class?

The class will need to go in any refrence that was previously trackMPGandCost.

Things that broke:

- Submit button
- Average MPG
- Average Trip Cost

For the first one all I had to do was set MY_DATA.push(trip), for the Average MPG and Tripcost, I will have to probably reference new trip.


## Why did we not include methods in the Trip class?
The way out code was written, generating multipule unreferenced objects that wouldn't work with the code.

## Do you have a better understanding of implementing a class?

I think making classes at the beggining of a project would be smart simply because you can generate most of the objects you would need faster. Hierarchy is easy to keep track of because everything would belong in its container. It also ensures inheritance flows through the code neatly.