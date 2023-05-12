# Week 10 README input

## How to convert a array of objects into JSON

Javascript Object Notation:
The way we convert an array of objects into JSON string is to use JSON.stringify on the object array like this:

        const myarr = []
            user: "user",
            user: "user",
            user: "user"
        
        const jsonConversion = JSON.stringify(myarr)

