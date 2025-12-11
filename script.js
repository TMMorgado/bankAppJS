'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  iban: 1220,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  iban: 1230,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  iban: 1240,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  iban: 1250,
};

const accounts = [account1, account2, account3, account4];


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements= function(movements, sort=false){

    containerMovements.innerHTML= ''

    const movs= sort? movements.slice().sort((a,b)=>a-b): movements;

    movs.forEach(function(mov,i){
    const type = mov >0? 'deposit' :'withdrawal'

    const html = 
    `
     <div class="movements">
        <div class="movements__row">
          <div class="movements__type
           movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov} €</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin',html)
})
}


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


let arr2 = ['a','b','c','d','e']

// slice recorta o array para um novo array
console.log(arr2.slice(2))
console.log (arr2.slice(2,4))
console.log(arr2.slice(-1)) // o negativo anda ao contrario no array

// splice change the original array, retira parte do array 
//console.log(arr2.splice(2))
arr2.splice(-1)
console.log('splice'+arr2)
arr2.splice(1,1) //primeiro numero diz onde começar o segundo diz quantas casas 
console.log(arr2)

//reverse muda a ordem do array
const arr3= ['j','i','h','g','f']
console.log(arr3.reverse())

//concat 
const letters= arr2.concat(arr3)
console.log(letters)


//join
console.log(letters.join('-'))


//getting the last element of array
console.log(arr2.at(-1))


// for each array

for (const movement of movements){
  movement > 0 ? console.log(`you deposit ${movement}`) : 
  console.log(`you withdrew ${Math.abs(movement)}`)
}

console.log('----------for each--------------')

movements.forEach(function(movement){
   movement > 0 ? console.log(`you deposit ${movement}`) : 
  console.log(`you withdrew ${Math.abs(movement)}`)
})

// for each array with index
console.log('----------for each with index--------------')
movements.forEach(function(movement, i, arr){
   movement > 0 ? console.log(`Movement ${i+1} you deposit ${movement}`) : 
  console.log(`Movement ${i+1} you withdrew ${Math.abs(movement)}`)
})


// for each map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key) {
  console.log(`${key}: ${value}`)
});


// for each set
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR'])
console.log(currenciesUnique)

currenciesUnique.forEach((value, key) => {
  console.log(`${value}`)
});


const juliasDog =[3,5,2,12,7];
const KateDog=[9,16,6,8,3]

let newJuliaDog = juliasDog.slice(1,3)

let bouthDogs= [...newJuliaDog, ...KateDog]
console.log(bouthDogs)

const checkDogs= function(dogs){
  dogs.forEach((dog) => {
      dog <5 ? console.log(`the dog have ${dog} years old, so its a puppy`): console.log(`the dog have ${dog} years old, so its an adult`)

  });
  
}
console.log(checkDogs(bouthDogs))


//map method 

const eurtoUsd=1.1;
const movementsUSD = movements.map(function(mov){
  return mov* eurtoUsd
})

console.log(movements)
console.log(movementsUSD)


const movementsUSDfor=[]
for (const mov of movements) movementsUSDfor.push(mov*eurtoUsd)
  console.log(movementsUSDfor)

const example= [1,2,3,4,5]
const exampleNames= ['tiago','ana','rita','ze']
const mult=3

const newExample= example.map(function(e){
  return e * mult 
})

const newNames = exampleNames.map(e=>
  e + '\'s'
)

console.log(example)
console.log(newExample)
console.log('---------------------------')
console.log(exampleNames)
console.log(newNames)


const newName= exampleNames.map((e,i,arr)=>{
  if (e==='tiago') return `a posicao ${i} do array é o ${e} esta certo`
  else return `a posicao ${i} do array nao é o tiago`
})

console.log(newName)

// using map() method to create a username on a object




const usernames = function (name){
  const username = name.toLowerCase().split(' ').map(e=>{
    return e[0]
  }).join('')
  return username
};

console.log(usernames('Filipe Carvalho Silva'));

const newAccounts= accounts.map(e=>{
  const usernamesArr= usernames(e.owner)
  return usernamesArr
})
console.log(newAccounts)


const createUser = function (accountss){
  accountss.forEach(acc => {
    acc.newUserName = acc.owner
    .toLowerCase()
    .split(' ')
    .map(e=>{return e[0]})
    .join('')
  });
};
console.log('----------------------')
createUser(accounts)
console.log(accounts)


// *************filter method*************

const deposits= movements.filter(function(mov){
return mov > 0
})

console.log(movements)
console.log(deposits)

//com o ciclo for como ficaria a mesma operacao do filter
const depositFor=[]
for (const mov of movements){
if(mov>0) depositFor.push(mov)
}
console.log(depositFor)

// filter com arrow function
const withdrawals = movements.filter(mov=>
   mov<0
)

console.log(withdrawals)

// *************reduce method*************

console.log(movements)

// acc is like  snowball
const balance= movements.reduce(function(acc,curr,i,arr){
  console.log(`iteration ${i} : ${acc}`)
return acc + curr
},0)

console.log(balance)

//same as the reduce method but with a for loop 
/* let acc=0
for( const mov of movements){
  acc = acc + mov
}
console.log(acc)
 */

const calcPrintBalance = function(account){
account.balance = account.movements.reduce((acc, curr) => acc
+ curr, 0);
labelBalance.textContent=`${account.balance} €`;
};





const max = movements.reduce((acc,mov)=>{
if(acc< mov) acc=mov
return acc
},movements[0])

console.log(max)

console.log('-----------------*********---------------')

//exercicios 

//map
let testedog=[5,2,4,1,15,8,3]

const calcAverageHumanAge = array=>{
 const newAge = array.map(e=>{
  e<=2? e = e*2: e = (16+e*4) 
 return e
 })
 return newAge
};

console.log('julia dogs:',calcAverageHumanAge(juliasDog))
console.log('Kate dog:s',(calcAverageHumanAge(KateDog)))
console.log('teste dogs:',calcAverageHumanAge(testedog))


//filter
const excludeDog = function (array){
  const excludedDogs = array.filter(e=>
    e>18
  )
  return excludedDogs
}
console.log('novo array:',excludeDog(calcAverageHumanAge(KateDog)))
console.log('novo array:',excludeDog(calcAverageHumanAge(juliasDog)))
console.log('teste novo array:',excludeDog(calcAverageHumanAge(testedog)))


//reduce

const calculateAvarage= function(array){
let avarageArray = array.reduce((total,mov)=>{
  total = (total + mov)
  return total
},0)
avarageArray= avarageArray/array.length
return avarageArray
}

console.log(calculateAvarage(testedog))
console.log(calculateAvarage(calcAverageHumanAge(juliasDog)))
console.log(calculateAvarage(calcAverageHumanAge(KateDog)))


// chaining methods (todos os metodos seguidos)
const euroToUsd= 1.1;

//PIPELINE
const totalDepositUSD = movements
.filter(mov=>mov>0)
.map(mov=> mov* euroToUsd)
.reduce((acc,mov)=> acc+ mov,0);

console.log(totalDepositUSD);


//total de income na app
const calcDisplaySummary = function (obj){

  const incomes = obj.movements.filter(mov=> mov>0)
  .reduce((acc,mov)=> acc +mov,0);
  labelSumIn.textContent =`${incomes} €`

 const out = obj.movements.filter(e=>e<0).reduce((total,curr)=> total + curr,0);
  labelSumOut.textContent=`${out} €`

  const interest= obj.movements.filter(e=> e>0)
  .map(e=>e*obj.interestRate/100)
  .filter(e=>e>=1)
  .reduce((acc,curr)=> acc+curr)
  labelSumInterest.textContent=`${interest}€`
}


// Total out app

/* const calcDisplaySummaryNeg= function(movements){
    const incomes = movements.filter(e=>e<0).reduce((total,curr)=> total + curr,0);
    labelSumOut.textContent=`${incomes} €`
} */

/* 
const calcDisplayInterest= function(movements){
    let interest= movements.filter(e=> e>0)
    .map(e=>e*1.2/100)
    .filter(e=>e>=1)
    .reduce((acc,curr)=> acc+curr)
    labelSumInterest.textContent=`${interest}€`
}
 */




//exerc

const testdata= [5,2,4,1,15,8,3]
const testdata2= [16,6,10,5,6,1,4]
let x=0


const calcAverageHumanAge3 = e=>e
.map(e=> e<=2? e*2 : 16 + e * 4)
.filter(e=>e>=18)
.reduce((acc,mov,i,arr)=>acc+mov/arr.length,0)

console.log('------')
console.log(calcAverageHumanAge3(testdata))
console.log(calcAverageHumanAge3(testdata2))

// find method
// em comparacao ao filter() o find () retorna apenas 1 elemento e nao o array, alem de que encontra o primeiro elemento que corresponde a true
const firstEithdrwal= movements.find(e => e < 0 )
console.log(movements)
console.log(firstEithdrwal)

console.log(accounts)
console.log('------')

const account = accounts.find(e=> e.owner.toLowerCase()==="jessica davis")
console.log(account)

for(let acc of accounts){
    acc.owner.toLowerCase()==="jessica davis"? console.log('encontrei!'): console.log('erro');
}


//implementing login

let currentAcc;

btnLogin.addEventListener('click',function(e){
e.preventDefault();

currentAcc = accounts.find(e=> e.newUserName===inputLoginUsername.value);


if (currentAcc?.pin === Number(inputLoginPin.value)){

  labelWelcome.textContent=`Welcome back, ${currentAcc.owner.split(' ')[0]}`
  containerApp.style.opacity = 1
  inputLoginPin.value=''
  inputLoginUsername.value=''
  inputLoginPin.blur()
  updateUI(currentAcc);
} 
})


// Create the function of transfer money

const tranferMoney= function(value,accRec){
value = Number(inputTransferAmount.value)
accRec = accounts.find(acc=> acc.iban === Number(inputTransferTo.value))
console.log(value,accRec)


if(accRec && value>0 && value<= currentAcc.balance&& accRec?.iban!==currentAcc.iban){
console.log('tranferencia valida')
currentAcc.movements.push(-value)
console.log(currentAcc.movements)
accRec.movements.push(value)
console.log(accRec.movements)
updateUI(currentAcc); 
console.log(`a tranferencia da conta do titular ${currentAcc.owner} com o iban "${currentAcc.iban}" no valor de "${value}" para a conta de destino do titular ${accRec.owner} com o iban "${accRec.iban}" foi realizada com sucesso!`)
}

inputTransferTo.value = inputTransferAmount.value= ''

}

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  tranferMoney()
})


const updateUI= function(currentAcc){
displayMovements(currentAcc.movements)
  calcPrintBalance(currentAcc)
  calcDisplaySummary(currentAcc) 
}


// close account

btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if (currentAcc?.newUserName === inputCloseUsername.value && currentAcc.pin === Number(inputClosePin.value)){
alert('Conta fechada com sucesso! \n Até breve!')
const index= accounts.findIndex(e=>e.newUserName=== inputCloseUsername.value)
console.log(index)
//delete account
accounts.splice(index, 1);

//hide ui
containerApp.style.opacity=0



}
  else
    console.log('A conta nao pode ser fechada, credenciais invalidas');

  inputClosePin.value=inputCloseUsername.value='';
})


// findlast() and findLastIndex() method

console.log(movements)
const lastWithdrawal=  movements.findLast(e=> e<0)
console.log(lastWithdrawal)

const latestLargeMovementIndex= movements.findLastIndex(e=> Math.abs(e)>1000)
console.log(`you lastest large movement was ${movements.length-latestLargeMovementIndex-1} movements ago`)


// some() and every() method

//some procura se existe algum valor que corresponda a condicao - true ou false
const anyDeposit = movements.some(e=>e>5000)
console.log(anyDeposit)

const everyDeposit= movements.every(e=> e>0)
console.log(everyDeposit)


// every() procura se todos os valores comprem a mesma condição


//requet loan app

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const requestAmount= Number(inputLoanAmount.value)

  if(requestAmount > 0 && currentAcc.balance>0 && currentAcc.movements.some(e=>e > requestAmount*0.1)){
    alert('O empréstimo foi concedido!')

    currentAcc.movements.push(requestAmount)
    updateUI(currentAcc)
    inputLoanAmount.value=''
  }
  else{
    alert('Não foi possivel realizar a operação!')
  }

  
})

let sorted = false;

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAcc.movements,!sorted);
  sorted=!sorted;
})



// flat() and flatMap()

const arr =[[1,2,3],[4,5,6],[7,8,9]]
console.log(arr.flat())

const arrDeep =[[[[1],2],3],[4,[5,6]],[[7,8],9]]
console.log(arrDeep.flat(3))

// com flat() conseguimos tirar os elementos de dentro do array, mesmo os arrays dentro de arrays, metendo o lvl no parametro

const overalBalance = accounts
.map(e=>e.movements)
.flat()
.reduce((total,mov)=> total+mov,0)
console.log(overalBalance)


// como vemos no exemplo usamos o map para mapear e so depois o flap. Nasce assim o flapMap() que faz essa operacao ja, é uma combinacao dos 2 metodos



const overalBalance2 = accounts
.flatMap(e=>e.movements)
.reduce((total,mov)=> total+mov,0)
console.log(overalBalance2)

//apenas notar que o falpMap() apenas vai ao lvl 1 do array, nao conseguimos descer mais lvl



//challange 171 #4




const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];


//1
const huskyWeight = breeds.find(breed=> breed.breed===('Husky')).averageWeight
console.log(` ${huskyWeight}`)


//2
const findActiv = breeds.find(breed=>
   breed.activities.includes('fetch') && breed.activities.includes('running')
).breed
console.log(findActiv)

//3
const allAtivities = breeds.flatMap(ativ=> ativ.activities ) 
console.log(allAtivities)

//4
const allAtivitiesNoRepeat = [...new Set(allAtivities)]
console.log(allAtivitiesNoRepeat)

//5
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

//6
console.log(breeds.every(breed=> breed.averageWeight>10))

// 7
console.log(breeds.some(breed=> breed.activities>3))

//extra
const showDog= breeds
.filter(breed=> breed.activities.includes('fetch'))
.map(breed=> breed.averageWeight)
const heaviestFetchBreed = Math.max(...showDog);


console.log(showDog)
console.log(heaviestFetchBreed)


//ecercicios extra chatgpt

/*
YOUR TASKS: 
1. Store the average weight of a "Boxer" in a variable "boxerWeight"
2. Find the name of the only breed that likes both "running" and "guarding" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). 
   HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to dig. What other activities do these dogs like?
   Store all the OTHER activities these breeds like to do, in a unique array called "diggingAdjacent".
6. Do all the breeds have an average weight of 15kg or more? 
   Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? 
   "Active" means that the dog has 3 or more activities. 
   Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to play "fetch"? 
HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds2 = [
  {
    breed: 'Golden Retriever',
    averageWeight: 30,
    activities: ['fetch', 'swimming', 'obedience'],
  },
  {
    breed: 'Boxer',
    averageWeight: 29,
    activities: ['running', 'guarding'],
  },
  {
    breed: 'Corgi',
    averageWeight: 13,
    activities: ['herding', 'fetch'],
  },
  {
    breed: 'Rottweiler',
    averageWeight: 45,
    activities: ['guarding', 'obedience', 'tracking'],
  },
  {
    breed: 'Border Collie',
    averageWeight: 20,
    activities: ['herding', 'running', 'agility'],
  },
  {
    breed: 'Dachshund',
    averageWeight: 10,
    activities: ['digging', 'barking'],
  },
  {
    breed: 'Terrier',
    averageWeight: 11,
    activities: ['digging', 'running', 'fetch'],
  },
];

//1
const boxerWeight= breeds2
.find(breed=> breed.breed==='Boxer').averageWeight
console.log(boxerWeight)

//2
const likesRuningGuarding = breeds2
.find(breed=> breed.activities.includes('running') && breed.activities.includes('guarding')).breed
console.log(likesRuningGuarding)

//3
const arrayAlldogs= breeds
.flatMap(breed=> breed.activities)
console.log(arrayAlldogs)

//4
const arrayAlldogsUnique =[...new Set(arrayAlldogs)]
console.log(arrayAlldogsUnique)

//5
const showDog3= [
  ... new Set(
    breeds2
.filter(breed=> breed.activities
.includes('digging'))
 .flatMap(breed => breed.activities)
  .filter(activity => activity !== 'digging'))
]

console.log(showDog3)


//sort() method
// organiza o array por ordem alfabetica
const owners =['Jonas','Zach','Adam','Matha'];
console.log(owners)
owners.sort();
console.log(owners)

console.log (movements)

// ordena o array de numeros
// forma ascendente
movements.sort((a,b)=>a-b)
// forma descendente
movements.sort((a,b)=>a+b)
console.log(movements)

console.log('------------------------')

// array grouping
const groupMovements=Object.groupBy(movements, mov=> mov >0? 'deposit': 'withdrawals');
console.log(groupMovements)

const groupByActivity = Object.groupBy(accounts, acc=>{
  const movementCount= acc.movements.length

  if(movementCount>=8) return 'very active'
    if(movementCount>=4) return 'active'
        if(movementCount>=1) return 'moderate'
        return 'inactive'
} )
console.log(groupByActivity)