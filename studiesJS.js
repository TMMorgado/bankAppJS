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


/////////////////////////////////////////////////
/////////////////////////////////////////////////


// ***metodos arrays***


//push()-> coloca um valor no fim do array()
const exemploPush= [10,20,30,40,50]
exemploPush.push(60)
//unshift()coloca um valor no inicio do array
exemploPush.unshift(5)


//****** new Set() ->  tira valores repetidos do array
const staff= ['waiter','chef','manager','waiter','chef']
const uniqueStaff = new Set(staff)
// unique Staff expectavel = ['waiter','chef','manager']



//****** intersection() mostra o que ha em comum entre 2 arrays
const itemSet = new Set(['item1','item2','item3','item4']) 
const itemSet2 = new Set(['item0','item1','item2','item5']) 
const itemTogether =  itemSet.intersection(itemSet2)
//itemTogether expectavel -> [item1, item 2]


//****** union() - junta 2 arrays sem repetir
const fusionItens = itemSet.union(itemSet2)
// fusionItens expectavel ->  [item0,item1,item2,item3,item4,item5]


//****** diference () mostra o que ha de diferente entre os 2 arrays
const diferencee1= itemSet.difference(itemSet2)
const diferencee2= itemSet2.difference(itemSet)
//diferencee1 expectavel -> [item3,item4]
//diferencee1 expectavel -> [item0,item5]



let arr2 = ['a','b','c','d','e']

//****** slice() -> recorta o array para um NOVO array
console.log(arr2.slice(2))
console.log (arr2.slice(2,4))
console.log(arr2.slice(-1)) // o negativo anda ao contrario no array

//*
//****** splice change the ORIGINAL array
arr2.splice(2) // retira do array
arr2.splice(-1) // retira do array
arr2.splice(1,0,'1') // vai ao array posicao 1, acrescenta '1'
arr2.splice(1,1,'2') // vai ao array posicao 1, modifica '1' para '2'
// toSpliced() faz igual ao splice, mas nao muda o array original
arrSpliced= arr2.toSpliced(2)
//arr2 nao altera
//*

//*
//******reverse()-> muda a ordem do array -> modifica o original
const arr3= ['j','i','h','g','f']
const exemplo1= arr3.reverse()
//exemplo1 neste momento tem o arr3 trocado, mas o arr3 tambem ficou trocado

//******toReversed()-> muda a ordem do array -> nao altera o original
const exemplo2 = arr3.toReversed()
//exemplo2 vai ter o arr3 trocado, mas o arr3 mantem igual
//* 


//sort() method -> altera o array original
// organiza o array por ordem alfabetica
const owners =['Jonas','Zach','Adam','Matha'];
owners.sort();
//toSorted()-> nao altera o array original
const exemploToSorted= owners.sort()
// o owners mantem o array igual, o exemploToSorted fica com o array ordenado


//with()-> cria um novo array com base num outro e altera um valor especifico
const exemploArr= [100,200,300,400]
const exemploArr2 = exemploArr.with(1,500)
// exemploArr2 vai ser [100,500,300,400] mudou na posicao 1 para o valor 500

//******concat()  -> junta os arrays
const letters= arr2.concat(arr3)
console.log(letters)

//******join()-> trabalhar o que vai no "meio do array"
console.log(letters.join('-'))
console.log(letters.join(','))

//******at() procura o valor do array numa posicao especifica 
console.log(arr2.at(-1))

//******map() mapeia cada elemento do array
const nome=['Tiago','Luis','Filipe']
const nomes = nome.map(e=> e = e + 's')

//****** filter() filtra o array
const tiagoName= nome.filter(e=> e==='Tiago')
//tiagoName -> expected 1 -> ['Tiago']
const numbers= [0,1,2,3,4,5,6,7,8,9,10]
const numberBiggerFive = numbers.filter(e=> e>5)
// numberBiggerFive -> expected 5- >[6,7,8,9,10]


//****** reduce() -> calcula o valor de cada elemento do array, tem como parametro um accumulador, um current e pode levar o array tambem
const movements= [100,200,300,400,100,200]
const balance = movements.reduce((acc, curr) => acc+curr, 0);
//expected value = 0+ 100 + 200 +(...)+ 200 =1300
const balance2 = movements.reduce((acc,curr)=> acc+curr,movements[4])
//expected value =  100 + 100 + 200 +(...)+ 200 = 1400

 
//****** find() -> encontra o primeiro elemento
const found= movements.find(e=> e>200)
//expected -> 300
const found2 = movements.find(e=> e<1000)
//expected -> 100


//****** findLast() -> encontra o ultimo elemento
const foundLast= movements.findLast(e=>e>200)
//expected 400

//****** findLastIndex() -> encontra o ultimo index do elemento
const foundLastIndex= movements.findLastIndex(e=> e<1000)
// expected index 5

//****** some() -> procura se existe algum valor que corresponda a condicao - true ou false
const anyDeposit = movements.some(e=>e>5000)
//expected false

//****** every() -> procura se todos os valores correspondem a condicao - true false
const everyDeposit = movements.every(e=> e<5000)
//expected true

//****** flat() -> consegue retirar arrays de dentro de arrays, funciona por nivel em paramentros
const arr4 =[[[1,2],3],[4,5,6],[7,8,9]]
const arr5 = arr4.flat()
// expected [[1,2],3,4,5,6,7,8,9]

const arr6 = arr4.flat(2)
//expeceted [1,2,3,4,5,6,7,8,9]

//****** flatMap() -> combina o map() e o flat()
//nota  o falpMap() apenas vai ao lvl 1 do array ( flat(1) )
arr7= arr6.flatMap(e=> e = e+1)
//expected [2,3,4,5,6,7,8,9,10]


//***** fill() -> modifica o array original, preenche o array 

arr8= [1,2,3,4,5,6]
arr8.fill(20,2,5)
//expected arr8= [1, 2, 20, 20, 20, 6]


//Array.from -> uma maneira de preencher um array vazio
const x = Array.from( { length:7 } , ( _ , i) => i +1 );
console.log(x)

const y = Array.from ({length:100}, (_,i)=> i =  Math.floor(Math.random() * 201) )
console.log(y)



// ***Numbers js***


// converting string to number
console.log(Number('23'))
console.log(+'23')

//parsing
//take the numbers and leave the strings (the secound argument '10' means the numbers are from 0 to 9)
console.log(Number.parseInt('30px',10));
console.log(Number.parseFloat('40.3434px'));

//check if value is not a number
console.log(Number.isNaN('20'))
console.log(Number.isNaN(20))
console.log(Number.isNaN(+'20x'))
console.log(Number.isNaN(20/0))

//checking if value is a number
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite(+'20x'))
console.log(Number.isFinite(20/3))

console.log(Number.isInteger(2))


//Math and Rounding
console.log(Math.sqrt(25)) // ve qual o numero que multiplicado por ele mesmo da 25, neste caso 5

console.log(Math.max(5,10,25,30)) // ve qual o valor maior
console.log(Math.min(5,10,25,30)) // ve qual o valor menor

console.log(Math.Pi*Number.parseFloat('10px')**2)// area de um circulo

console.log(Math.random())// valor de 0 a 0.9
console.log(Math.random()*7)// valor de 0 a 5.9
console.log(Math.trunc(Math.random()*7)) // coloca o valor inteiro 
console.log(Math.floor(Math.random()*7)) // coloca o vaor inteiro (numeros negativos arredonda para cima (-1.4 = -2))
console.log(Math.round(23.9))// coloca o valor inteiro consoante a ultima casa decimal
console.log(Math.ceil(23)) // coloca o valor inteiro arredonda sempre para cima
console.log(Math.abs())// tira os valores negativos


// formula para calcular um valor random entre um valor min e um valor max
const randomInt = (min, max)=> Math.floor( (Math.random()*(max-min +1) ) ) + min
console.log(randomInt(0,3))


//rounding decimals
console.log((2.7).toFixed(0)) //converte o numero de casas decimais especificado no parametro e faz o arredondamento, o return é STRING



// remainder operator
console.log(8%3)// 8= 2*3 +2 // o +2 é o remainder
console.log(3%3)// 3= 3 // remainder 0
console.log(4%3) // 4= 3 +1 // remainder 1
console.log(4%7) // 1+1+1+1 //remainder 4

const isEven= n=> n%2 ===0;
console.log(isEven(2))
console.log(isEven(78))
console.log(isEven(123))



//numeric separation '_'
const diameter= 287_460_000_000;
console.log(diameter);

const priceCents= 345_99;

const tranferFee1= 15_00;
const transferFee2= 1_500;

const PI= 3.1415

console.log(Number('230000')) 

// ****BIG INT
// o valor max de js pode armazenar sem ser com big int é:Number.MAX_SAFE_INTEGER

// criar um big int
console.log(246821487216471264872164872164218n)
console.log(BigInt(338535835))

//Operations

/* console.log(1923891n+1241241241) -> erro , nao posso usar bigint com numeros normais */

console.log(324983275329875983275329857235328573298572393528n*26154183746n)



const huge=2782657836857623875n
const normalNumber= 23

//cannot mix bigint with normal types - we always have to convert the nomal type to bigint()
console.log(huge* BigInt(normalNumber))

// exception that we can work with normal and bigint
console.log(20n>5)
console.log(20n===20)
console.log(20== 20n)
console.log(huge + 'is really big')
console.log(11n/3n) // resultado 3n corta as partes decimais 11/3=3.3333333


// ****CREATING DATE

const now = new Date()
console.log(now)
console.log(new Date('December 24,2025'))


const future= new Date(2037,10,19,15,23)
console.log(future)
console.log(+future) 

const calcDaysPassed= (d1,d2)=> Math.abs(d2-d1)/(1000*60*60*24); // a divisao é para converter os milseg para dias

const diferencaDias =  calcDaysPassed(new Date(2025,12,17), new Date(2025,12,18))
console.log(diferencaDias) 

//internationalizing

const num = new Intl.NumberFormat('en-US').format()