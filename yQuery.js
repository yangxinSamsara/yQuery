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
        //$.extend({})  -->给$添加属性
        //$.fn.extend({}) -->给$.fn添加属性
        if (args.length === 1) {
            //$.extend({})
            target = this;
        } else {
            //$.fn.extend({})
            target = args[0];
            source.splice(0, 1)
        }
        Object.assign(target, ...source)
        return target
    }

    // 添加工具类方法
    yQuery.extend({
        each() {
            console.log('each')
        },
        ajax() {
            console.log('ajax')
        }
    })

    //添加dom方法
    yQuery.fn.extend({
        attr() {
            console.log('attr方法');
        },
        on() {
            console.log('on方法');
        }
    })


    window.$ = window.yQuery = yQuery;
})(window)