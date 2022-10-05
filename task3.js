const printSegitiga = 6
let hasil = '';
for(let i=1; i<=printSegitiga; i++){
    for(let j=0; j<i; j++){
         hasil += i;
    }
    hasil += '\n';
}

console.log(hasil)