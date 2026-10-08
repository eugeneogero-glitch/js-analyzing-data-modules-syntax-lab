// Step 5:Import datejs module outside of combineUsers
const datejs = require("datejs");

// Step 1: Create a combineUsers function taking rest parameter ...args
function combineUsers(...args) {
  // Step 2: Initialize the return object with a key 'users' set to an empty array
  const combinedObject = {
    users: [],
  };

  // Step 3 & 4: Loop through args and merge arrays into combineObject.users using spread operator
  for (const array of args) {
    combinedObject.users = [...combinedObject.users, ...array];
  }

  // Step 5: Add 'merge_date' formatted as M/d/yyyy using datejs
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Step 7: Return the completed object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
