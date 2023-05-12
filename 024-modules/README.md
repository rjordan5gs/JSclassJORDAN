# Week 10 README input

## How to convert a array of objects into JSON:

Javascript Object Notation:
The way we convert an array of objects into JSON string is to use JSON.stringify on the object array like this:

        const myarr = []
            user: "user",
            user: "user",
            user: "user"
        
        const jsonConversion = JSON.stringify(myarr)

## Local Storage:

    -Local storage isn't persistent
    -Local storage has no expiration time
    -Local storage exists on RAM
    -RAM is Volitile
    -The alternative to local storage is:
        1. Web SQL database
        2. Web Storage API's
        3. Cookies(expires)

## JSON conversion
    To convert the JSON I input a local sotrage command into the FORM it works for some of the functionality, but doesn't seem to edit other settings.