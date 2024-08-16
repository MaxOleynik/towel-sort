// You should implement your task here.

module.exports = function towelSort(matrix) {
    const result = [];
    if (!Array.isArray(matrix)) {
        return [];
    } else {
        matrix.forEach((item, index) => {
            if (index % 2 === 0) {
                result.push(...item);
            } else {
                result.push(...item.reverse());
            }
        });
        return result;
    }
};
