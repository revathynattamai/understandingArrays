if (!Array.prototype.copyingWithin) {
    Object.defineProperty(Array.prototype, 'copyingWithin', {
        value: function (value) {
            if (this == null) {
                throw new TypeError('this is null or not defined');
            }
            let a = Object(this);
            let len = a.length;
            let start = arguments[1] ? arguments[1] : 0;
            let end = arguments[2] ? arguments[2] : len;
            let count = arguments[0];
            let i = 1;
            while (count > 0 && i <= arguments[0]) {
                if (count in a ) {
                    a[count] = a[start]
                }
                count++;
                start++;
                i++;
            }
            console.log(a);
        }

    })
}


[1, 2, 3, 4, 5].copyingWithin(2);