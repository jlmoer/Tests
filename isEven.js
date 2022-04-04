// isEven function:

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else if (num % 2 === 1) {
        return false;
    }
    return;
}

module.exports = isEven;