const flip=(d, a)=>{
    if (d == 'R') return a.sort((n1, n2) => (n1 - n2))
     return a.sort ((n1, n2) => -1 * (n1 - n2))
   }