var Anagram = function(){};

Anagram.compute = function(inputA, inputB) {
    var isAnagram = false;
    
    var listA = inputA.split("");
    var listB = inputB.split("");
    for(i = 0; i < listA.length; i++){
        if(listA[i] !== listB[i]){
            result += 1;
        }
    }  
    return isAnagram;
    
}

module.exports = Anagram;