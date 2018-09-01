function insertionSort(array){
	var currentVal;
    for(var i = 1; i < array.length; i++){
        currentVal = array[i];
        for(var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j+1] = array[j]
        }
        array[j+1] = currentVal;
    }
    return array;
}

module.exports = insertionSort;
