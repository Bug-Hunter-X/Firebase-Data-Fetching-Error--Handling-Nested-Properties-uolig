# Firebase Data Fetching Error: Handling Nested Properties

This repository demonstrates a common error when fetching data from Firebase Firestore: attempting to access nested properties without proper error handling.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a robust solution.

**Problem:**
When retrieving documents from Firestore, there's no guarantee that nested properties always exist.  Accessing `data.data().nested.property` directly will throw an error if either `data.data()`, `nested`, or `property` is undefined.

**Solution:**
The solution uses optional chaining (`?.`) and nullish coalescing (`??`) operators to safely access nested properties, providing default values if the properties are missing.