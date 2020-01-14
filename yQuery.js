(function (global) {
    function yQuery(selector) {
        return new yQuery.prototype.init(selector)
    }

    yQuery.fn = yQuery.prototype = {
        constructor: yQuery,
        init: function (selector) {
            const elements = document.querySelectorAll(selector);
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                this[i] = element;
            }
            this.length = elements.length;
            console.log(this, 'this')
        },
        css: function (name, value) {
            for (let i = 0; i < this.length; i++) {
                const element = this[i];
                element.style[name] = value
            }
        }
    }

    yQuery.fn.init.prototype = yQuery.fn

    yQuery.fn.extend = yQuery.extend = function (...args) {
        let target = [],
            source = [];
        source = [...args]
        if (this === yQuery) {
            target = args[0];
            source.splice(0, 1)
        } else {
            target = this
        }
        source.forEach(item => {
            Object.keys(item).forEach(key => {
                target[key] = item[key]
            })
        })
        return target
    }


    window.$ = window.yQuery = yQuery;
})(window)