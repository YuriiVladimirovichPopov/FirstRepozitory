var countSquares = function(cuts){
    if (!cuts){
      return 1;
    }
      const allCubes = Math.pow(cuts + 1, 3);
      const thisCubes = Math.pow(cuts - 1, 3);
      
      return allCubes - thisCubes;
    }