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
  alert('Perfetto,mi faccia fare un rapido calcolo...mhhhh... sono' +" "+ prezzoMinori +" "+ 'euro');
}else if(etaUtente > 64){
  var prezzoOver = prezzoUniversale - scontoOver;
  alert('Perfetto,mi faccia fare un rapido calcolo...mhhhh... sono' +" "+ prezzoOver +" "+ 'euro');
}else{
  alert('Perfetto, sono' +" "+ prezzoUniversale);
}
