/*Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"
*/
function searchWordCount(text, word) {

    var x = 0;
    var y = 0;

    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

console.log(searchWordCount('The quick brown fox', 'fox'));
console.log(searchWordCount('aa, bb, cc, dd, aa', 'aa'))