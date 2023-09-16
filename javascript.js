function add(array) {
    function getSum(total, num) {
        return total + num
    };
    return array.reduce(getSum,0);
};

function subtract(array) {
    function sub(total, num) {
        return total - num;
    };
    return array.reduce(sub);
}