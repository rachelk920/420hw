function chunkArrayInGroups(arr, size) {
    var groups = [];
    while (arr.length > 0) {
      groups.push(arr.slice(0,size));
      arr = arr.slice(size);
    }
    return groups;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);



// chunkArrayInGroups(["a", "b", "c", "d"], 2) returned [["a", "b"], ["c", "d"]]

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) returned [[0, 1, 2], [3, 4, 5]]


// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) returned [[0, 1], [2, 3], [4, 5]]


// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) returned [[0, 1, 2, 3], [4, 5]]


// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) returned [[0, 1, 2], [3, 4, 5], [6]]


// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) returned [[0, 1, 2, 3], [4, 5, 6, 7], [8]]


// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) returned [[0, 1], [2, 3], [4, 5], [6, 7], [8]]









function bouncer(arr) {
    var truthies = [];
  
    for (var elem of arr) {
      if (elem) truthies.push(elem);
    }
  
    return truthies;
  }
  
  bouncer([7, "ate", "", false, 9]);



function bouncer(arr) {
    return arr.filter(function (elem){
      return elem;
    });
    }
    bouncer([7, "ate", "", false, 9]);


// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].

// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].

// bouncer([false, null, 0, NaN, undefined, ""]) should return [].

// bouncer([null, NaN, 1, 2, undefined]) should return [1, 2]