function makeCounter(){

    let count = 0;

    function ct(){
        return ++count;
    }
    return ct;
}

console.log(makeCounter)