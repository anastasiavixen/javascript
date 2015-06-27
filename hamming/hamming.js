var Hamming = function(){};

Hamming.compute = function(inputA, inputB) {
    var result = 0;
   
    if(inputA.length != inputB.length){
        throw new Error("DNA strands must be of equal length.");
    }else{
        var listA = inputA.split("");
        var listB = inputB.split("");
        for(i = 0; i < listA.length; i++){
            if(listA[i] !== listB[i]){
                result += 1;
            }
        }
    }
        
    return result;
};

module.exports = Hamming;