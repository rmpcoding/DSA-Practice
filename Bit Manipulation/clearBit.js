const clearBit = (num, bit) => {
    // create a mask by left positioning our set bit
    // invert mask using not operator
    // AND our inverted mask with our orginal number
    // return results

    return ~(1 << bit) & num;
};

console.log(clearBit(11, 1).toString());

/*

Clear one bit

@param {number} number for which user inputs
@param {number} bit position for which we want to clear
@return {number} number result for which function will return


Let's use eleven and four-bit numbers for the sake of ease. 
We want to clear the 2nd bit. How?


     1011 //Eleven. We need to clear the second bit (second from zeroth position)
=> <<0010 //MASK the number by left positioning the 1 to the bit position.
=>  ~1101 //NOT our MASK

=>   1101 //Inverted MASK
=>  &1011 //ANDs with our original number
=>   1001 //Nine. Returns 9 after clearing the single bit.
*/
