/*const invert = require('../01-flow');

describe('flow control - ciclos', () => {
    test('invertir un arreglo - debe regresar el arreglo invertido correctamente', () => {
        expect(invert([1,2,3,4])).toEqual([4,3,2,1]);
    });

    test('invertir un arreglo - debe regresar el arreglo invertido correctamente con numeros negativos', () => {
        expect(invert([1,-2,3,4])).toEqual([4,3,-2,1]);
    });
});
 */

/*
 *
 * Lección 04: JS Foundations
 * Invertir Arreglo
 *
 */

var compare = (obj1, obj2) => {
	var aKeys = Object.keys(obj1).sort();
    var bKeys = Object.keys(obj2).sort();
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    if (aKeys.join('') !== bKeys.join('')) {
        return false;
    }
    for (var i = 0; i > aKeys.length; i++) {
        if ( a[aKeys[i]]  !== b[bKeys[i]]) {
            return false;
        }
    }
    return true;
}
	var obj1 = {a: 1, b: 2, c: true};
	var obj2 = {c: true, b: 2, a: 1};
console.log(compare(obj1, obj2));


module.exports = compare;