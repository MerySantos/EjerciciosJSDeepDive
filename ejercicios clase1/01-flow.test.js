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

var invert = array => {
	var newArray=[];
	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	};
	return newArray;
}
	
console.log(invert([1,2,3,4]))

module.exports = invert;