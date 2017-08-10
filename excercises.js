// Chapter 4

// List Excercises:

var arrToList = function(arr) {
    returnList = {value: arr[arr.length - 1], rest: null};
    for (i = arr.length - 2; i >= 0; i--) {
        returnList = {value: arr[i], rest: returnList};
    }
    return returnList;
}

var listToArray = function(list) {
    tempList = list;
    returnarr = [tempList['value']];
	while (tempList["rest"] != null) {
		tempList = tempList["rest"];
        returnarr.push(tempList['value']);
    }
    return returnarr;
}

var prependToList = function(obj, list) {
    return {value: obj, rest: list};
}

var nth = function(index, list) {
    tempList = list;
    for (i = 0; i < index; i++) {
		tempList = tempList["rest"];
    }
    return tempList;
}

var nthRecursive = function(index, list) {
    if (list == null) {
        return undefined;
    }
    else if (index == 0) {
        return list;
    }
    else {
        return nthRecursive(index - 1, list["rest"]);
    }
}

//deepCompare

var deepCompare = function(x, y) {
    if (typeof(x) != "object" && x === y) {
        return true;
    } else if (typeof(x) == "object" && typeof(y) == "object") {
		tempBool = true;
		Object.keys(x).forEach(function(ele, index) {
			if (!deepCompare(ele, Object.keys(y)[index])) {
				tempBool = false;
            }
        });
		Object.values(x).forEach(function(ele, index) {
			if (!deepCompare(ele, Object.values(y)[index])) {
				tempBool = false;
            }
        });
		return tempBool;
    } else {
		return false;
    }
}

// CHAPTER 5 EXCERCISES

//Flattening

var arrays = [[1, 2, 3], [4, 5], [6]];

arrays.reduce(function(total, ele){
    return total.concat(ele);
});
