function rotatesList(arr, k) {
    var rotatedList = [];

    for(var i = 0, j = k; i < arr.length; i++) {
        rotatedList[i] = arr[j];
    }

    return rotatedList;
}