/* //sets (arrays)

// tira valores repetidos de arrays

console.log(new Set("jonas"))
const orderSet = new Set(['item1', 'item2', 'item3', 'item3', 'item2'])
console.log(orderSet)
console.log(orderSet.size)
console.log(orderSet.has('item1'))
orderSet.add('item4')
orderSet.add('item4')
orderSet.delete('item2')
console.log(orderSet)

const staff= ['waiter','chef','manager','waiter','chef']
const uniqueStaff = new Set(staff)
console.log(uniqueStaff)
const newStaff= [...uniqueStaff]
console.log(newStaff)

//intersection() mostra o que ha em comum entre 2 arrays
const itemSet = new Set(['item1','item2','item3','item4']) 
const itemSet2 = new Set(['item0','item1','item2','item5']) 
const seeItem =  itemSet.intersection(itemSet2)
console.log('o que ha em comum entre os 2 itemSet',seeItem)
// union() - junta 2 arrays sem repetir
const fusionItens = itemSet.union(itemSet2)
console.log('fusao dos itemSets sem levar repetidos:',fusionItens)

// diference () mostra o que ha de diferente entre os 2 arrays
console.log('o que ha apenas no primeiro itemSet é: ',itemSet.difference(itemSet2))

//maps()
const rest = new Map();
rest.set('name:','restNome')
rest.set('1','Porto,Portugal')
console.log(rest.set('2','Berlim, German'))
rest.set('open',11);
rest.set('close',23)
rest.set(true,'we are open :)')
rest.set(false,'we are close');
rest.set('categoria',['italina','portuguese','chinese']);
console.log(rest.get('name:'))
console.log(rest.get(true))

const time= 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categoria'))
console.log(rest.size)
//rest.clear()
const arr= [1,2]

rest.set(arr,'teste')
console.log(rest)
console.log(rest.get(arr))


const question= new Map([
['question','what is the best programing language in the world?'],
[1,'JavaScript'],
[2,'C'],
[3,'Python'],
['correct',1],
[true,'correct!'],
[false,'try again']
])
console.log(question)

//convert object to maps
// const newMap= new Map(Object.entries(openingHours))
// pega no array dentro do objecto e transforma em map

console.log(question.get('question'))
for (const [key,value] of question){
  if(typeof key=== 'number'){console.log(`answer: ${key}: ${value}`)}
}

//const answer= Number(prompt('your answer'))
//console.log(answer)
//if (answer === 1) console.log(question.get(true));

const gameevents= new Map([
  [17, 'goal'],
  [25, 'yellow card'],
  [36, 'goal'],
  [45, 'Red card'],
  [55, 'goal'],
  [67, 'Substitution'],
  [87, 'goal'],
  [90, 'Substitution']
])

console.log(gameevents.values())
const events = new Set(gameevents.values())
console.log(events)

gameevents.delete(25)
console.log(gameevents)

for (const[key,value] of gameevents)
  if (key<=45) console.log(`o evento ${value} aconteceu ao min ${key} que corresponde á primeira parte`)
  else console.log(`o evento ${value} aconteceu ao min ${key} que corresponde á segunda parte`)


function checkSeat (seat){

  const letras= seat.length  
  const see =seat.slice(letras-1);
  console.log(see)
   see==='B'?console.log(('that seat is in the middle')): console.log('that seat is not in the middle')
    

}

checkSeat('11B');
checkSeat('11A');
checkSeat('1B');
checkSeat('1C');

//......

const bookings= []

const createBooking= function(flightNumb='0000', numbPassengers=0,price= numbPassengers*20){

  const booking= {
    flightNumb,
    numbPassengers,
    price
  }
  bookings.push(booking)
  console.log(booking)
}

createBooking('bnnn',12)
createBooking('bjhbb')

const miguel= {
  name: 'miguel',
  passport:2222020
}

flightNumbers=1292

const checkIn= function(flightNumber, passenger){

  let nome = []
  nome.push( passenger.name.split(''))
  nome[1] = nome[2]
  console.log(nome[1])
  
}
checkIn(flightNumbers,miguel)

const oneWord = function(str){
  return str.replace(/ /g, '').toLowerCase();
}
  const upperFirstWord = function(str){
    const [first, ...others] = str.split('');
  return[first.toUpperCase(),...others].join(' ')
}

const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey= greet('hey')

greeterHey('jonas')
greet('hello')('jonas')

const greetArrow = greeting=> name=> console.log(`${greeting}, ${name}`)


greetArrow('hey')('tito')

const lufthansa ={
  airline:"Lufthansa",
  iataCode:'LH',
  bookings:[],
  book(flightNum, name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
      this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  }

}

lufthansa.book(239,'tiago')
lufthansa.book(898,'raquel')
console.log(lufthansa)

const euroWings ={
  airline:'EuroWing',
  iataCode:'EW',
bookings:[],
}
console.log(euroWings)

const book= lufthansa.book;

//CALL method
book.call(euroWings,2343,'sarah williams');
console.log(euroWings)
console.log(euroWings)

const Tap= {
  airline:'TAP',
  iataCode:'TP',
  bookings:[],
}

book.call(Tap, 1212,'Morgado')
console.log(Tap)

// Apply method
const fligtData=[232, 'Morgado']
book.apply(Tap, fligtData)
console.log(Tap)

book.call(Tap, ...fligtData) 

// bind method

const bookEW= book.bind(euroWings)
const bookLH= book.bind(lufthansa)
const bookTP= book.bind(Tap)

bookEW(23,'joao neto')

const bookEW23 =book.bind(euroWings, 23);
bookEW23('martha')

lufthansa.planes= 300;
lufthansa.buyPlane = function(){
  console.log(this)
  this.planes++
  console.log(this.planes)
};

// quando usamos o dom, o this passa a ser o botao/div que puxarmos, precisamos fazer bind para levar para o objecto
document.body.addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

const addTax = (rate,value)=> value +value *rate;
const addVAT = addTax.bind(null, 0.23)

console.log(addVAT(100))


const exemploFuncion = function(value){
 return addVAT(value)
 
} 

console.log(exemploFuncion(200))

const poll={
  question:"What is your favorite programaing language?",
  optionArr:['0: javascript','1:java','2:python','3: php'],
  optionReply:[],
  
}
poll.registerNewAnswer=function(){

  //const x = prompt(`${poll.question} \n ${poll.optionArr} `)
  //if (x===0) console.log('escolheste 0')
}

//poll.registerNewAnswer()


// work with arrays */

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////