let tuttigatti = 44;
let gattifila = 6;

let file = Math.floor(tuttigatti / gattifila) ;
let gattimancanti = tuttigatti % file ;
let gattinuovafila = gattifila - gattimancanti;
console.log(file);
console.log(gattimancanti);
console.log(gattinuovafila);


