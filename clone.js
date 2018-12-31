   Object.prototype.clone = function () {
        var newObject = Object.create(this);
 
        Object.getOwnPropertyNames(this).map((prop) => { 
            newObject[prop] = this[prop];
        });

        return newObject;
    }

    var array = [10, 20, 30, 40, 50];
    var newArray = array.clone();
    
    console.log("Array Before " + array);
    console.log("NewArray Before " + newArray);

    newArray[1] = 100;

    console.log("Array after " + array);
    console.log("NewArray after " + newArray);
