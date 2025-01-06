```javascript
// This code attempts to access a nested property that might not exist.
const data = await firebase.firestore().collection('myCollection').doc('myDoc').get();
const nestedValue = data.data().nested.property;
// ...use nestedValue
```