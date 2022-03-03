Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: does not take any parameter.
   - Return: return calling string to uppercase.
   - Examples:
     ```js
     let name = "jhon";
     name.toUpperCase(); // 'JHON'
     "arya".toUpperCase(); // 'ARYA'
     "MeGan".toUpperCase(); // 'MEGAN'
     ```
   - `toUpperCase` convert the string to uppercase string.

3. `toLowerCase`

   - Parameter: does not take any parameter.
   - Return: return calling string to lowercase.
   - Examples:
     ```js
     let name = "JHON";
     name.toLowerCase(); // 'jhon'
     "ARYA".toLowerCase(); // 'arya'
     "mEgAN".toLowerCase(); // 'megan'
     ```
   - `toLowerCase` convert the string to lowercase string.

4. `trim`

   - Parameter: does not take any parameter.
   - Return: return new string stripped of whitespace from both its beginning and end.
   - Examples:
     ```js
     let string = "   How are you?    ";
     string.trim(); // 'How are you?'
     "   foo   ".trim(); // 'foo';
     "  Hello ".trim(); // 'Hello';
     ```
   - `trim` remove the whitespace from both its beginning and end of string.

5. `trimEnd`

   - Parameter: does not take any parameter.
   - Return: return new string stripped of whitespace from its end.
   - Examples:
     ```js
     let string = "   How are you?    ";
     string.trimEnd(); // '   How are you?'
     "   foo   ".trimEnd(); // '   foo'
     "  Hello   ".trimEnd(); // '  Hello'
     ```
   - `trimEnd` remove the whitespace from end of the string.

6. `trimStart`

   - Parameter: does not take any parameter.
   - Return: return new string stripped of whitespace from its beginning.
   - Examples:
     ```js
     let string = "   How are you?    ";
     string.trimStart(); // 'How are you?    '
     "   foo   ".trimStart(); // 'foo   '
     "  Hello   ".trimStart(); // 'Hello   '
     ```
   - `trimStart` remove the whitespace from beginning of the string.

7. `concat`

   - Parameter: one or more string - (string data type).
   - Return: return a new string combined with parameter provided.
   - Examples:

     ```js
     "How".concat(" are", " you"); // 'How are you'
     let str1 = "Hello";
     let str2 = "world";
     str1.concat(" ", str2); // 'Hello world'
     str2.concat(" ", str1); // 'world Hello'
     ```

   - `concat` concat the string arguments with calling string.

8. `endsWith`

   - Parameter:
     - searchString - (string data type)
     - length - (optional) - (number data type), default - str.length
   - Return: return true if the given character found at the end of string otherwise false.
   - Examples:

     ```js
     let str = "Cats are the best";
     str.endsWith("s", 3); // false
     str.endsWith("s", 4); // true
     str.endsWith("t"); // true
     ```

   - `endsWith` look for the given character at the end of the string if found return true else false.

9. `includes`

   - Parameter:
     - searchString - (string data type)
     - position - (optional) - (number data type) position in the string at which to begin searching for, default - 0
   - Return: return true if search string found within the given string else false.
   - Examples:

     ```js
     "How are you".includes("you"); // true
     "Jump over the rope".includes("fox"); // false
     "to be or not to be".includes("to be", 1); // true
     ```

   - `includes` look for string within another string if serach string found in given string return ture else false.

10. `indexOf`

    - Parameter:

      - searchString - (string data type)
      - position - (optional) - (number data type) position in the string at which to begin searching for, default - 0
      - Return: index of first occurence of serach string found else -1.
      - Examples:

        ```js
        "How are you".indexOf("are"); // 4
        "How are you".indexOf("are", 5); // -1
        "out of blue".indexOf("o"); // 0
        ```

      - `indexOf` search the entire string and return the index of first occurence of search string else return -1

11. `lastIndexOf`

    - Parameter:

      - searchString - (string data type)
      - position - (optional) - (number data type) at a position less than or equal to position, default - Infinity
      - Return: index of last occurence of serach string found else -1.
      - Examples:

        ```js
        "Hello, Hi, Hello".lastIndexOf("Hello"); // 11
        "Everything you need to know about".lastIndexOf("e"); // 17
        "Everything you need to know about".lastIndexOf("z"); // -1
        ```

      - `lastIndexOf` search the entire string and return the index of last occurence of search string else return -1

12. `padEnd`

    - Parameter:

      - targetLength: length of result string once the current string has beed padded - (number data type)
      - padString: the string to be pad. (optional) - (string data type)
      - Return: return a string of the specific targetLength with the padString applied at the end of current.
      - Examples:

        ```js
        "hello".padEnd(10); // 'hello     '
        "abc".padEnd(10, "12345"); // 'abc1234512'
        "Hey".padEnd(1); // 'Hey'
        ```

      - `padEnd` pad the current string with given string until the given lenght reaches. if given length is less than current string length it will return string.

13. `padStart`

    - Parameter:

      - targetLength: length of result string once the current string has beed padded - (number data type)
      - padString: the string to be pad. (optional) - (string data type)
      - Return: return a string of the specific targetLength with the padString from the start.
      - Examples:

        ```js
        "hello".padStart(10); // '     hello'
        "abc".padStart(10, "12345"); // '1234512abc'
        "Hey".padEnd(1); // 'Hey'
        ```

      - `padStart` pad the current string with given string until the given lenght reaches. if given length is less than current string length it will return string.

14. `repeat`

    - Parameter:
      - count: an integer between 0 and +Infinity.
    - Return: return new string containing a specified number of copies of given string
    - Examples:
      ```js
      "hello".repeat(3); // 'hellohellohello'
      "foo".repeat(); // ''
      "bar".repeat(4.4); // 'barbarbarbar'
      ```
    - `repeat` repeat the string specific number of times.

15. `replace`

    - Parameter:
      - substr: string that we want to replace
      - newsubstr: string that is to be replaced by newsubstr
    - Return: return new string with some or all matches of a pattern replaced by a replacement.
    - Examples:
      ```js
      let str = "How are you brother";
      str.replace("brother", "sister"); // 'How are you sister'
      "change one".replace("one", "two"); // 'change two'
      ```
    - `replace` replace the character or specific set of character from the string.

16. `slice`

    - Parameter:
      - beginIndex: (number data type)
      - endIndex: (optional) - default (end of string) - (number data type)
    - Return: return new string contaning extracted section of string.
    - Examples:
      ```js
      let str = "How are you brother";
      str.slice(0, 9); // 'How are y'
      str.slice(0); // 'How are you brother'
      str.slice(-1); // 'r'
      ```
    - `slice` extract section of string and return a new string.

17. `split`

    - Parameter:
      - separator: (optional) (string data type)
      - limit: (optional) - (number data type)
    - Return: return array of string split at each point where separator occurs.
    - Examples:
      ```js
      let str = "How are you brother";
      str.split(" "); // ['How', 'are', 'you', 'brother']
      str.split(""); // ['H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'b', 'r', 'o', 't', 'h', 'e', 'r']
      str.split("", 4); // ['H', 'o', 'w', ' ']
      ```
    - `split` divide string in order list of substring

18. `substring`

    - Parameter:
      - indexStart: (number data type)
      - indexEnd: (optional) - (number data type)
    - Return: return new string contain specific part of given string.
    - Examples:
      ```js
      let str = "How are you brother";
      str.substring(0); // 'How are you brother'
      str.substring(3, 7); // ' are'
      str.substring(-2, 4); // 'How '
      ```
    - `split` return part of the string.
