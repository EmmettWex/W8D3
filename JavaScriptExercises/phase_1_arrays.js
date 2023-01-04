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

