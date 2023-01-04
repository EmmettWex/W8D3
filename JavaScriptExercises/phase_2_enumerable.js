Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        callback(element);
    }
    return undefined;
}

// function callback(el) {
//     console.log(el);
// }

// [1,2,3].myEach(callback);

// Array.prototype.myMap = function(callback) {
//     let mapped = [];

//     this.myEach(element => {
//         mapped.push(callback(element));
//     });

//     return mapped;
// }

// function callback(el) {
//     return el + 1;
// }

// console.log([1, 2, 3].myMap(callback));



// This worked, but probably only in the specific test-cases
// This won't work for multiplication

// Array.prototype.myReduce = function(callback, initialValue = this[0]) {

//     let total = 0;


//     if (initialValue !== this[0]) {
//         this.myEach(element => {
//             total = callback(total, element);
//         });
//         return total + initialValue;
//     } else {
//         this.myEach(element => {
//             total = callback(total, element);
//         });
//         return total;
//     }
// }

Array.prototype.myReduce = function (callback, initialValue = undefined) {

    let total;

    if (initialValue !== undefined) {
        total = initialValue;
        this.myEach(element => {
            total = callback(total, element);
        });
        return total;
    } else {
        total = this[0];
        this.slice(1, this.length).myEach(element => {
            total = callback(total, element);
        });
        return total;
    }
}

// without initialValue
console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
})); // => 6

// with initialValue
console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25)); // => 31