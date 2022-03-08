Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: separator(optional) Specifies a string to separate each pair of adjacent elements of the array. if separator is empty string all elements are join without any string between them.
   - Return: a string with all array elements joined. if array is empty, empty string is returned.
   - Example:
     ```js
     let colors = ["aqua", "red", "blue"];
     colors.join(); // 'aqua,red,blue'
     colors.join(""); // 'aquaredblue'
     colors.join(" and "); // 'aqua and red and blue'
     ```
   - `join` method return a string with all the array method concatenating by the separator. If separator is not provide all elements are join by comma.
   - No it does not mutate the original array.

3. `flat`

   - Parameter: depth (optional) (number data type) how deep nested array should be flattened. default to 1.
   - Return: return a array with the sub array element concatenated into it.
   - Example:
     ```js
     let arr = [0, 1, 3, [3, 49, [4, 5]]];
     arr.flat(3); // [0, 1, 3, 3, 49, 4, 5]
     arr.flat(); //  [0, 1, 3, 3, 49, [4, 5]]
     let arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
     arr1.flat(Infinity); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     ```
   - `flat` return a new array with all the sub array element concatenated into it to a certain depth.
   - No it does not mutate the original array

4. `push`

   - Parameter: the element to add at the end of the array.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     let arr = ["red", "blue", "black"];
     arr.push("green"); // ['red', 'blue', 'black', 'green']
     arr.push("tomato", "pink"); // ['red', 'blue', 'black', 'green', 'tomato', 'pink']
     let array = [1, 2];
     array.push(...arr); // 1, 2, 'red', 'blue', 'black', 'green', 'tomato', 'pink']
     ```
   - `push` method add a item at the end of the array and return the length of new array.
   - Yes it does mutate the original array

5. `indexOf`

   - Parameter:
     - serachElement: element to serach in array.
     - formIndex: index to start search at. (number data type)
   - Return: first index of the element in the array; -1 if not found.
   - Example:
     ```js
     let arr = ["red", "blue", "black"];
     arr.indexOf("blue"); // 1
     arr.indexOf("pink"); // -1
     let arr1 = [3, 99, 0, 4, 0, 9];
     arr1.indexOf(0, 3); // 4
     ```
   - `indexOf` method return the first index of searchElement in the array. if element not found it return -1;
   - No it does not mutate the original array

6. `lastIndexOf`

   - Parameter:
     - serachElement: element to serach in array.
     - formIndex: index to start search at. (number data type). In last index it start searching backwards.
   - Return: last index of the element in the array; -1 if not found.
   - Example:
     ```js
     let arr = ["red", "blue", "black"];
     arr.lastIndexOf("blue"); // 1
     arr.lastIndexOf("pink"); // -1
     let arr1 = [3, 99, 0, 4, 0, 9];
     arr1.lastIndexOf(0); // 4
     ```
   - `lastIndexOf` method return the last index of searchElement in the array. if element not found it return -1;
   - No it does not mutate the original array

7. `includes`

   - Parameter:
     - serachElement: element to serach in array.
     - formIndex: index to start search at. (number data type).
   - Return: return boolean value `true` if searchElement found in array else `false`.
   - Example:
     ```js
     let arr = ["red", "blue", "black"];
     arr.includes("blue"); // true
     arr.includes("pink"); // false
     let arr1 = [3, 99, 0, 4, 0, 9];
     arr1.includes(0, 3); // true
     ```
   - `includes` method return the boolean value true if value found inside array else return false.
   - No it does not mutate the original array

8. `reverse`

   - Parameter: does not take any parameter.
   - Return: return a reversed array.
   - Example:
     ```js
     let arr = ["one", "two", "three"];
     arr.reverse(); // ['three', 'two', 'one']
     [1, 2, 3].reverse(); // [3,2,1];
     ["foo", "bar"].reverse(); // ['bar', 'foo']
     ```
   - `reverse` return a reversed array.
   - Yes it does mutate the original array

9. `every`

   - Parameter:
     - callbackFn: a callback function to test for each element. take three argument.
       - element: the current element being processed.
       - index: index of the current element. (optional)
       - array: the array every was called upon. (optional)
   - Return: return true if callback function return truthy value for every array element else false.
   - Example:
     ```js
     let arr = [1, 3, 55, 89, 90];
     arr.every((num) => num < 100); // true;
     let arr = [33, 36, 48, 9, 10];
     arr.every((num) => num % 2 === 0); // false
     let even = [2, 8, 16, 32, 48];
     even.every((num) => num % 2 === 0); // true
     ```
   - `every` method test all the element inside array passed the test implemented by provided function.
   - No it does not mutate the original array

10. `shift`

    - Parameter: does not take any parameter.
    - Return: The removed element from the array; undefined if the array is empty.
    - Example:
      ```js
      let arr = ["red", "blue", "black"];
      arr.shift(); // red
      arr.shift(); // blue
      let array = [1, 2];
      array.shift(); // 1
      ```
    - `shift` method remove the first element from the array and return the removed element.
    - Yes it does mutate the original array

11. `splice`

    - Parameter:
      - start: index at which start changing the array (number data type)
      - deleteCount: number of element to be delete from the array (number data type);
      - itemN: items to add instead of delete item.
    - Return: an array containing deleted elements.
    - Example:
      ```js
      let arr = ["red", "blue", "black"];
      arr.splice(0); // ["red", "blue", "black"]
      let arr1 = [2, 6, 8, 9, 10];
      arr1.splice(1, 2); // [6, 8]
      let arr = [1, 2];
      arr.splice(0, 1, "blue", "green"); // 1
      console.log(arr); //['blue', 'green', 2]
      ```
    - `splice` method return an array of elements which is removed from origianl array. it takes three parameter start: from where start deleting elements, deleteCount: numbers of element to be deleted, itemN: item to put in array instead of deleting item. splice method can be use to update array elements.
    - Yes it does mutate the original array

12. `find`

    - Parameter:
      - callbackFn: a callback function to test for each element. take three argument.
        - element: the current element being processed.
        - index: index of the current element. (optional)
        - array: the array find was called upon. (optional)
    - Return: return first element in array that satisfies the provided testing function. Otherwise, undefined is returned.
    - Example:
      ```js
      let arr = [1, 3, 55, 89, 90];
      arr.find((num) => num < 100); // 1;
      let arr = [33, 36, 48, 9, 10];
      arr.find((num) => num % 2 === 0); // 36
      let even = [2, 8, 16, 32, 48];
      even.find((num) => num % 2 === 0); // 2
      ```
    - `find` method return the first element that satisfies the test of callback function otherwise it return undefined.
    - No it does not mutate the original array

13. `unshift`

    - Parameter: elements to add at the begining of the array.
    - Return: The new length property of the object upon which the method was called.
    - Example:
      ```js
      let arr = ["red", "blue", "black"];
      arr.unshift("tomato"); // 4
      console.log(arr); // ['tomato', 'red', 'blue', 'black']
      arr.unshift("pink", "orange"); // 6
      console.log(arr); // ['pink', 'orange', 'tomato', 'red', 'blue', 'black']
      let arr = [1, 3, 4];
      arr.unshift(9, 8, 7); // 6
      console.log(arr); // [9, 8, 7, 1, 3, 4]
      ```
    - `unshift` method add elements at the begining of the array and return the lenght of new array.
    - Yes it does mutate the original array

14. `findIndex`

    - Parameter:
      - callbackFn: a callback function to test for each element. take three argument.
        - element: the current element being processed.
        - index: index of the current element. (optional)
        - array: the array findIndex was called upon. (optional)
    - Return: return index of the first element in the array that passes the test. Otherwise, -1.
    - Example:
      ```js
      let arr = [1, 3, 55, 89, 90, 120];
      arr.findIndex((num) => num > 100); // 5;
      let arr = [33, 36, 48, 9, 10];
      arr.findIndex((num) => num % 2 === 0); // 1
      let arr = [2, 8, 16, 32, 48];
      even.findIndex((num) => num < 0); // -1
      ```
    - `findIndex` method return the index of first element that satisfies the test of callback function otherwise it return -1.
    - No it does not mutate the original array

15. `filter`

    - Parameter:
      - callbackFn: a callback function to test for each element. take three argument.
        - element: the current element being processed.
        - index: index of the current element. (optional)
        - array: the array filter was called upon. (optional)
    - Return: new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
    - Example:
      ```js
      let arr = [1, 3, 55, 89, 90, 120, 150, 200];
      arr.filter((num) => num > 100); // [120, 150, 200]
      let arr = [33, 36, 48, 9, 10];
      arr.filter((num) => num % 2 === 0); // [36, 48, 10]
      let arr = [2, 8, 16, 32, 48];
      even.filter((num) => num < 0); // []
      ```
    - `filter` method return the new array that passes test of callback function if nobody passes test and empty function will be returned.
    - No it does not mutate the original array

16. `forEach`

    - Parameter:
      - callbackFn: a callback function to test for each element. take three argument.
        - element: the current element being processed.
        - index: index of the current element. (optional)
        - array: the array forEach was called upon. (optional)
    - Return: undefined
    - Example:

      ```js
      let arr = ["a", "b", "c"];
      arr.forEach((element) => console.log(element));
      // a
      // b
      // c

      let sum = 0;
      let arr = [1, 3, 55, 89, 90, 120, 150, 200];
      arr.forEach((num) => (sum += num)); // undefined
      console.log(sum); // 708

      let arr = ["a", "b", "c"];
      let copyArr = [];
      arr.forEach((item) => copyArr.push(item)); // undefined
      console.log(copyArr); // ['a', 'b', 'c']
      ```

    - `forEach` method execute the callback function for each element in the array and return undefined.
    - No it does not mutate the original array

17. `map`

    - Parameter:
      - callbackFn: a callback function to test for each element. take three argument.
        - element: the current element being processed.
        - index: index of the current element. (optional)
        - array: the array forEach was called upon. (optional)
    - Return: A new array with each element being the result of the callback function.
    - Example:

      ```js
      let arr = [1, 2, 3];
      arr.map((num) => num * 2); // [2, 4, 6]
      let arr1 = ["1", "2", "3"];
      arr1.map((element) => parseInt(element)); // [1, 2, 3]
      let arr2 = [34, 55, 99, 87, 6, 9];
      arr2.map((num) => {
        if (num < 50) {
          return num;
        }
      }); // 34, undefined, undefined, undefined, 6, 9]
      ```

    - `map` method return a new array of same length of original array on which map method is called upon. a new array with each element being the result of callback function.
    - No it does not mutate the original array

18. `pop`

    - Parameter: does not take any parameter.
    - Return: The removed element from the array; undefined if the array is empty.
    - Example:
      ```js
      let arr = ["red", "blue", "black"];
      arr.pop(); // black
      arr.pop(); // blue
      let array = [1, 2];
      array.pop(); // 2
      ```
    - `pop` method remove the last element from the array and return the removed element.
    - Yes it does mutate the original array

19. `reduce`

    - Parameter:
      - callbackFn: a callback function to test for each element. take four argument.
        - PreviousValue: the value resulting from previous callback function.
        - CurrentValue: value of the current Element.
        - index: index of the current element. (optional)
        - array: the array filter was called upon. (optional)
      - initialValue: (optional) any data type(string, number, array, object)
    - Return: The value that results from running the "reducer" callback function to completion over the entire array.
    - Example:
      ```js
      let arr = [1, 3, 55, 89, 90, 120, 150, 200];
      arr.reduce((acc, cur) => (acc += cur), 0); // 708
      let colors = ["red", "blue", "green", "pink"];
      colors.reduce((acc, cur) => (acc += cur), ""); // 'redbluegreenpink'
      let arr1 = [
        [1, 2],
        [3, 4],
        [4, 5],
      ];
      arr1.reduce((acc, cur) => acc.concat(cur)); // [1, 2, 3, 4, 4, 5]
      ```
    - `reduce` method reduce the collection of values into a single value.
    - No it does not mutate the original array

20. `slice`

    - Parameter:
      - start: (optional) index at which to start extraction.
      - end: (optional) index befor which to end extraction. but not including end
    - Return: a new array containing extracted elements.
    - Example:
      ```js
      let arr = ["red", "blue", "black"];
      arr.slice(); // ['red', 'blue', 'black']
      arr.slice(0, 2); // ['red', 'blue']
      arr.slice(-2); // ['blue', 'black']
      ```
    - `slice` method return a shallow copy of porition of array into a new array.
    - No it does not mutate the original array

21. `some`

    - Parameter:
      - callbackFn: a callback function to test for each element. take three argument.
        - element: the current element being processed.
        - index: index of the current element. (optional)
        - array: the array every was called upon. (optional)
    - Return: return true if callback function return truthy value for at least one array element else false.
    - Example:
      ```js
      let arr = [1, 101, 300, 200, 4];
      arr.some((num) => num < 100); // true;
      let arr = [33, 36, 48, 9, 10];
      arr.some((num) => num % 2 === 0); // true
      let even = [2, 8, 16, 32, 48, 5];
      even.some((num) => num % 2 !== 0); // true
      ```
    - `some` method return true if at least one element satisfies the test of callback function else return false.
    - No it does not mutate the original array
