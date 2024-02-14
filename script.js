var isDate = function (input) {
  // If input is a Date object, return true
  if (Object.prototype.toString.call(input) === '[object Date]') {
      return !isNaN(input.getTime());
  }
  
  // If input is a string, try to parse it into a Date object
  if (typeof input === 'string') {
      // Attempt to create a new Date object from the string
      const date = new Date(input);
      // Check if the created date is valid
      return !isNaN(date.getTime());
  }
  
  // If input is a number, assume it's a timestamp and create a Date object
  if (typeof input === 'number') {
      const date = new Date(input);
      return !isNaN(date.getTime());
  }
  
  // If none of the above conditions are met, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
