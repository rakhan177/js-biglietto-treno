alert('Buongiorno caro utente.')

var prezzoKilometro = 0.21;
console.log('prezzokilometro' + prezzoKilometro);

var kilometriUtente = prompt('Quanti chilometri desidera fare?');
console.log('kilometriUtente' + kilometriUtente);

var prezzoUniversale = (prezzoKilometro * kilometriUtente);
var scontoMinori = prezzoUniversale * 20 / 100;
var scontoOver = prezzoUniversale * 40 / 100;
console.log('prezzoUniversale' + prezzoUniversale);
console.log('scontoMinori' + scontoMinori);
console.log('scontoOver' + scontoOver);

var etaUtente = prompt('Quanti anni ha?');
console.log('etaUtente' + etaUtente);

if(etaUtente < 19){
  var prezzoMinori = prezzoUniversale - scontoMinori;
  alert('Sono' +" "+ prezzoMinori);
}

if(etaUtente > 65){
  var prezzoOver = prezzoUniversale - scontoOver;
  alert('Sono' +" "+ prezzoOver);
}
