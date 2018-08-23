function selectionSort(array){
	for(let i=0;i<array.length;i++){
		let temp,index=i;
		for(let j=0;j<array.length;j++){
			if(array[j]>array[index]){
				index = j;
			}
			if(index !=i){
				temp = array[j];
				array[j] = array[index];
				array[index] = temp;
			}
		}

	}
	return array;
}

module.exports = selectionSort;