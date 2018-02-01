
A World Without Developers
====

A chrome extension that rewinds websites back to when they were just ideas on paper. Project for HAR-371: Creative Programming II.

- - -

### FILES
While there are lots of ways to structure an extension, we need at least two files: some Javascript to run and a "manifest" file.

**EXTENSION.JS**  
The code! This is the extension code itself, which is called by `background.js` when the button is pressed. 

**BACKGROUND.JS**  
A script that runs constantly, waiting for the extension button to be clicked. No need to change this if using our template, but if you wanted the extension to run automatically or access other parts of the Chrome API, you'd likely need to do it here.

**MANIFEST.JSON**  
A metadata file in [JSON format] that lists properties and permissions for the extension. 
