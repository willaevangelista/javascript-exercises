const removeFromArray = function(array, ...removeArgument) {

    /**
     * Removes specified elements from an array.
     *
     * @param {Array} array - The original array to filter.
     * @param {...*} removeArgument - One or more values to remove from the array.
     * @returns {Array} A new array without the specified values.
     *
     * @example
     * removeFromArray([1, 2, 3, 4], 2, 3); // returns [1, 4]
     * removeFromArray(['a', 'b', 'c'], 'a'); // returns ['b', 'c']
     *
     * @breakdown
     * array.filter(...)
     *   - filter() loops through every element of the array.
     *   - It keeps only the elements where the condition returns true.
     *
     * item =>
     *   - This is an arrow function. For each element in the array,
     *     filter() passes it here as "item" and evaluates the condition.
     *
     * removeArgument.includes(item)
     *   - includes() checks if "item" exists inside the removeArgument array.
     *   - Returns true if found, false if not found.
     *
     * !removeArgument.includes(item)
     *   - The "!" inverts the result.
     *   - So if includes() returns true (item should be removed),
     *     "!" turns it into false, and filter() discards the item.
     *   - If includes() returns false (item should stay),
     *     "!" turns it into true, and filter() keeps the item.
     */

    let result = array.filter(item => !removeArgument.includes(item));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
