const compress = (s) => {
    let results = '';

    if (s.length === 1) {
        results = s[0];
        return results;
    }

    let i = 0;
    let j = 0;

    while (j <= s.length) {
        let letter = s[i];

        if (letter === s[j]) {
            j++;
        } else {
            if (j - i === 1) {
                results += letter;
                i = j;
            } else {
                results += (j - i).toString();
                results += letter;
                i = j;
            }
        }
    }
    return results;
};

// aabbcd
// 012345

console.log(compress('aaaaaaaaaa'));
console.log(compress('aaabbb'));
console.log(compress('y'));
console.log(compress('aabbcd'));
