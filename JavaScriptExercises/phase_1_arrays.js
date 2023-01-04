Array.prototype.uniq = function() {
    let indices = [];
    let finalArr = [];
    
    this.forEach(element => {
        if (!finalArr.includes(element)) {
            finalArr.push(element);
        }
    });

    // this.forEach(element => {
    //     if (!indices.includes(this.indexOf(element))) {
    //         indices.push(this.indexOf(element));
    //     }
    // });

    // let that = this;

    // indices.forEach(idx => {
    //     finalArr.push(that[idx]);
    // });

    return finalArr;
};

Array.prototype.twoSum = function(){
    const pair = [];

    for (let i = 0; i < this.length; i++) {
        const num1 = this[i];
        for (let j = i+1; j < this.length; j++) {
            const num2 = this[j];
            if (num1 + num2 === 0){
                pair.push([i, j]);
            }
        }
    }

    return pair;
}

// console.log([2,-2,1,1,1,1,1,4,67,3,-1].twoSum());

Array.prototype.transpose = function(){
    let tMatrix = [];
    let tempArr;

    for (let i = 0; i < this[0].length; i++) {
        tempArr = [];

        for (let j = 0; j < this.length; j++) {
            const num = this[j][i];
            tempArr.push(num);
        }
        tMatrix.push(tempArr);
    }

    return tMatrix;
}

let arr = [
    [1,2,3],
    [4,5,6]
]

console.log(arr.transpose());