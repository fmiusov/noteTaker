# NoteTaker

## Links
Repo: https://github.com/fmiusov/noteTaker
Heroku: 

## How it Works

Uses fs, express, and path dependencies to navigate html pages and communicate with json database. 

**Current Status of App:**
- Successfully runs get requests
- Successfully uses fs.readfile and fs.write file to read the database and append new notes as json objects into the existing array
- Does not yet assign unique ids to new objects, and therefore does not delete objects based on unique ids
- Deployed to Heroku

## Error Log

**Friday 3:00pm** - My code was originally running well, with successful navigation and json returns. However, after loading the code up on Friday afternoon, despite NO changes being made, the code no longer worked. The error seems to be in part due to index.js not being found.

**Friday 5:30pm** See list item 5 of debug strategies. Perhaps on Wednesday and Thursday night I was testing on my localhost and tonight, by habit, I began testing the html by opening in browser from my local path. Despite the error message in both instances, I believe this is working as intended and I am moving on.  

**Friday 5:40pm** Incorrect usage of callback function when using fs to write to db.json file, I will try pushing note data into a javascript object, converting the object to a string, use fs to write to disk, and then append note to db.json file

**Friday 6:10pm** app.post now successfully creates new JSON and writes to a db.json file, but is currently creating a new db.json file instead of appending to existing. 

**Friday 6:20pm** switched from fs.writeFile to fs.appendfile, however, now I am not able to append the new object into the existing array. 

**Friday 7:00pm** fs.writeFile now successfully appends a new object to the array on the db.json when tested in Postman. No unique ids exist yet for these objects, and delete call still needs to be written. 

## Debug Strategies: 

1. Roll back code to previous commits in effort to get pages to work - Failure
2. Delete all code and completely rewrite homework, this time modelling routing and functions off of instructor solutions as provided in class activities - Failure (same error persists on both versions of code)
3. Go back once again to my original working code, trying to retrace any steps I have made that might have caused this error. Additionally, search google for solution - In Progress
    - changed script src to ./assets/js/index.js to make file path relative to local - Failed
    - restart OS - Failed
4. Running localhost:3000 in browser instead of the local html file - Partial Success (the html navigation now works, but index.js still fails to load)
5. **CONCLUSION:** I believe this was a user error and I am too caught up in checking the console for the wrong expected outcome. I am going to move on and come back to this if it causes problems down the line. 