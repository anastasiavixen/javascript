var words = function(input) {   
    /*
        split on white space; ignores leading and trailing white space
    */
    var wordArray = input.trim().split(/\s+/);
    /*
        the object to hold all words and their count
    */
    var countObject = {};

    wordArray.forEach( function(word) { // search every word
        /*
            if object does not contain the word already then set its count inside the object
            or it's an object property
        */
        if ( (!(word in countObject)) || (isNaN(countObject[word])) )
            countObject[word] = 1; // is not in result
        else
            countObject[word] ++; // it is already in the result 
    });

    return countObject; // the result of word frequency
};

module.exports = words;