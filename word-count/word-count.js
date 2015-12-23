var words = function(input) {

    //object to return with words and counts
    this.wordCount = new Object;

    //local var to store input
    var phrase = input;

    //split the phrase on spaces, newlines, or tabs to get words in an array
    var wordArray = phrase.split(/\s+/);

    //loop through the array, and look at each word
    for(i = 0; i < wordArray.length; i++){
        var word = wordArray[i];

        this.wordCount[word] = (typeof this.wordCount[word] === "function") ? this.wordCount[word] + 1 : 1;

        // if((typeof this.wordCount[word]) === "function"){
        //     this.wordCount[word] = 1;
        // }else if((typeof this.wordCount[word]) !== "undefined"){
        //     this.wordCount[word] += 1;
        // }else{
           //this.wordCount[word] = 1;

        // }
    }
    return this.wordCount;
};

module.exports = words;