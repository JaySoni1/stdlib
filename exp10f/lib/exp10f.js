/**
* Compute 10 raised to the power of x (single-precision).
*
* @param {number} x - input value
* @returns {number} 10^x
*
* @example
* var v = exp10f( 1.0 );
* // returns 10.0
*/
function exp10f(x) {
    return Math.pow(10.0, x);
}

// Export the function:
module.exports = exp10f;
