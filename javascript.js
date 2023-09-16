function add(array) {
    function getSum(total, num) {
        return total + num
    };
    return array.reduce(getSum,0);
};