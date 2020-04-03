# NoteTaker

## How it Works

Uses fs, express, and path dependencies to navigate html pages and communicate with json database. 

## Error Log

My code was originally running well, with successful navigation and json returns. However, after loading the code up on Friday afternoon, despite NO changes being made, the code no longer worked. The error seems to be in part due to index.js not being found. 

## Debug Strategies: 

1. Roll back code to previous commits in effort to get pages to work - Failure
2. Delete all code and completely rewrite homework, this time modelling routing and functions off of instructor solutions as provided in class activities - Failure (same error persists on both versions of code)
3. Go back once again to my original working code, trying to retrace any steps I have made that might have caused this error. Additionally, search google for solution - In Progress
    - changed script src to ./assets/js/index.js to make file path relative to local - Failed
    - restart OS - Failed
4. Running localhost:3000 in browser instead of the local html file - Partial Success (the html navigation now works, but index.js still fails to load)