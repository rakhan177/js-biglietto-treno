alert('Buongiorno caro utente.')

var prezzoKilometro = 0.21;
console.log('prezzokilometro' + prezzoKilometro);

var kilometriUtente = parseInt(prompt('Quanti chilometri desidera fare?'));
console.log('kilometriUtente' + kilometriUtente);

var prezzoUniversale = (prezzoKilometro * kilometriUtente);
var scontoMinori = prezzoUniversale * 20 / 100;
var scontoOver = prezzoUniversale * 40 / 100;
console.log('prezzoUniversale' + prezzoUniversale);
console.log('scontoMinori' + scontoMinori);
console.log('scontoOver' + scontoOver);

var etaUtente = parseInt(prompt('Quanti anni ha?'));
console.log('etaUtente' + etaUtente);

var stampPrice = document.getElementById('prezzo');

if (isNaN(kilometriUtente) || isNaN(etaUtente)) {
  alert('Deve specificare un numero.');
}

if(etaUtente < 19){
  var prezzoMinori = prezzoUniversale - scontoMinori;
  stampPrice.innerText = 'Perfetto,mi faccia fare un rapido calcolo...mhhhh... sono' +" "+ prezzoMinori.toFixed(2) +" "+ 'euro.';
}else if(etaUtente > 64){
  var prezzoOver = prezzoUniversale - scontoOver;
  stampPrice.innerText = 'Perfetto,mi faccia fare un rapido calcolo...mhhhh... sono' +" "+ prezzoOver.toFixed(2) +" "+ 'euro.';
}else{
  stampPrice.innerText = 'Perfetto, sono' +" "+ prezzoUniversale.toFixed(2) +" "+ 'euro.';
}
