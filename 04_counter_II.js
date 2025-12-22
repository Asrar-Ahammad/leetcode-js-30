/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    count = init
    return {
        increment: () => {
            return count = count + 1
        },
        reset: () => {
            return count = init
        },
        decrement: () => {
            return count = count - 1
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */