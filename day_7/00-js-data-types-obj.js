// sintaxe 
const myObj = {
  prop1: 'valor 1',
  prop2: false,
  prop3: 3
}

// criar com construtor
const constructedObj = new Object();

// exemplo: recordes olímpicos
const olympicRecords = {
  athletics100Men: 'Justin Gatlin',
  athleticsLongJumpMen: 'Mike Powel'
}

// ACESSANDO VALORES
console.log(olympicRecords);
// dot notation -> notação de ponto
console.log(olympicRecords.athletics100Men); // <-- mais usado
// bracket notation -> notação de colchetes
console.log(olympicRecords['athleticsLongJumpMen']); // <-- usado quando precisa ser dinâmico

// ATUALIZANDO VALORES
olympicRecords.athletics100Men = 'Usain Bolt';
console.log(olympicRecords);

// ADICIONANDO PROPRIEDADES E VALORES
olympicRecords.swimming200Men = 'Michael Phelps';
olympicRecords['swimming400Women'] = 'Katie Ledecky';
console.log(olympicRecords);

// VERIFICANDO QUE UMA PROPRIEDADE EXISTE
console.log('athletics100Men' in olympicRecords);
console.log('goiaba' in olympicRecords);

// REMOVENDO UMA PROPRIEDADE (E SEU VALOR)
olympicRecords.doubleOllie = 'Chris Chann';
console.log(olympicRecords);
// delete olympicRecords.doubleOllie;
delete olympicRecords['doubleOllie'];
console.log(olympicRecords);

// LISTANDO PROPRIEDADES
console.log(Object.keys(olympicRecords));

// for .. in
for (let record in olympicRecords){
  // console.log(record); // <-- propriedades
  console.log(olympicRecords[record]); // <-- valores
}

// LISTANDO VALORES
Object.values(olympicRecords);