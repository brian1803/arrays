$movies = array (
  array("action","1917","pearl harbor"),
  array("thriller", "songbird", "run"),
  array("comedy","superbad", "wolf of wall street")
);

let secondthird = $movies [2] [3];

let firstsecond = $movies [1] [0]; 

// loop the outer array
for (let i = 0; i < $movies.length; i++) {
    // get the size of the inner array
    var innerArrayLength = $movies[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + $movies[i][j]);
    }
}  
