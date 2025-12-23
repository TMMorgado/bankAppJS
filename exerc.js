
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

const breeds = [
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
const pesoBoxer= breeds.find( breed => breed.breed === 'Boxer').averageWeight
console.log(pesoBoxer)

//2
const breedThatLike = breeds
 .find(breeds=> breeds.activities.includes('running') && breeds.activities.includes('guarding')).breed
console.log(breedThatLike)

//3/4

const allActivities = new Set (breeds
.flatMap(breed=> breed.activities))
console.log(allActivities)

//5
const diggingAdjacent = new Set (breeds
.filter(breed=> breed.activities.includes('digging'))
.flatMap(breed => breed.activities)
.filter(actv=>actv !== 'digging'))
console.log(diggingAdjacent)

//6
const allkg= breeds.every(breed=> breed.averageWeight >=19)
console.log(allkg)

//7
const anyBreed= breeds.some(breed=>breed.activities.length >= 3)
console.log(anyBreed)


/*
TAREFAS:
1) Guarda a avaliação (rating) do filme "Inception" em "inceptionRating".
2) Encontra o nome do único filme que tem os géneros "action" E "sci-fi" -> "movieBothGenres".
3) Cria um array "allGenres" com todos os géneros de todos os filmes (com repetições).
4) Cria "uniqueGenres" só com géneros únicos (sem repetições). (Dica: Set)
5) Muitos filmes têm o género "drama". Que OUTROS géneros esses filmes têm?
   Guarda num array único "dramaAdjacent".
6) Todos os filmes têm duração >= 120 min? Faz console.log(true/false).
7) Há algum filme "popular"? "popular" = rating >= 8.8. Faz console.log(true/false).

BÓNUS: Qual é a maior duração entre os filmes com género "crime"?
Dica: Math.max(...array)
*/

const movies = [
  { title: 'Inception', rating: 8.8, duration: 148, genres: ['action', 'sci-fi', 'thriller'] },
  { title: 'Parasite', rating: 8.5, duration: 132, genres: ['drama', 'thriller'] },
  { title: 'The Dark Knight', rating: 9.0, duration: 152, genres: ['action', 'crime', 'drama'] },
  { title: 'Whiplash', rating: 8.5, duration: 106, genres: ['drama', 'music'] },
  { title: 'Se7en', rating: 8.6, duration: 127, genres: ['crime', 'drama', 'mystery'] },
  { title: 'Mad Max: Fury Road', rating: 8.1, duration: 120, genres: ['action', 'adventure'] },
];

//1
const inceptionRating = movies
.find(e=> e.title==='Inception')
.rating
console.log(`1. inceptionRationg = ${inceptionRating}`)

//2
const movieBothGenres = movies
.find(e=> e.genres.includes('sci-fi') && e.genres.includes('action')).title
console.log(`2. movieBothGenres= ${movieBothGenres}`)

//3
const allGenres= movies
.flatMap(e=> e.genres)
console.log(`3. todos os generos : ${allGenres}`)

//4
const allGenres1= new Set( allGenres)
console.log(`4. todos os generos sem repeticao : ${[...allGenres1]}`)

//5
const dramaAdjacent= new Set( movies
.filter(e=>e.genres.includes('drama'))
.flatMap(e=>e.genres)
.filter(e=> e!=='drama'))
console.log(`5. Outros generos dos filmes de drama sao: ${[...dramaAdjacent]}`)

//6
const timeMovie= movies.some(e=>e.duration>=120)
console.log(`6. alguns filmes têm durancao maior que 120 min? : ${timeMovie}`)

//7
const popularMovie= movies
.every(e=>e.rating >=8.6)
console.log(`7. todos os filmes tem pontuacao maior que 8.6?: ${popularMovie}`)

//extra 
let duracao=0;
let nameMovie=''
const maiorDuracao= movies
.map(e=>{

    if(e.duration>duracao){
        duracao= e.duration
        nameMovie= e.title
    }
    return duracao,nameMovie
})
 console.log(`o filme com maior duracao é o ${nameMovie} com a duracao de : ${duracao}`) 



 /*
TAREFAS:
1) Guarda o total (total) da encomenda com id "o3" em "orderO3Total".
2) Encontra o nome do cliente que comprou "mouse" E "keyboard" -> "customerBothItems".
3) Cria "allItems" com todos os items comprados (com repetições).
4) Cria "uniqueItems" sem repetições. (Dica: Set)
5) Quem comprou "monitor"? Que OUTROS items esses clientes compraram?
   Guarda num array único "monitorAdjacent".
6) Todas as encomendas têm total >= 25? console.log(true/false)
7) Existe alguma encomenda "grande"? "grande" = 4 ou mais items. console.log(true/false)

BÓNUS: Qual é o maior total entre encomendas do método de pagamento "mbway"?
*/

const orders = [
  { id: 'o1', customer: 'Ana', total: 79.9, payment: 'card', items: ['mouse', 'pad'] },
  { id: 'o2', customer: 'Bruno', total: 129.0, payment: 'mbway', items: ['keyboard', 'headphones'] },
  { id: 'o3', customer: 'Carla', total: 249.0, payment: 'card', items: ['monitor', 'cable', 'mouse'] },
  { id: 'o4', customer: 'Diogo', total: 39.9, payment: 'mbway', items: ['mouse', 'keyboard'] },
  { id: 'o5', customer: 'Eva', total: 19.9, payment: 'cash', items: ['cable','monitor'] },
];


//1.
const orderO3Total= orders
.find(e=> e.id==='o3')
.total
console.log(`1. o totl da order o1 é de ${orderO3Total} eur`)

//2.
const nameClient = orders
.find(e=> e.items.includes('mouse') && e.items.includes('keyboard'))
.customer
console.log(`o nome do cliente é : ${nameClient}`)

//2 em funcao, consoante um objeto e um artigo
const nameCliente1 = (obj,artigo)=> obj.find(e=> e.items.includes(artigo) && e.items.includes('mouse'))
.customer

console.log(`o cliente é: ${nameCliente1(orders,'pad')}`)

//3
const allItems= orders
.map(e=>e.items)
.flat()
console.log(`3. a lista de itens é: ${allItems}`)

//4 
let allItemsNRepeat = [...new Set(allItems)]
console.log(`4. todos os itens sem repeticao: ${[...allItemsNRepeat]}`) 

//5
const moreBuys= [...new Set(orders
.filter(e=>e.items.includes('monitor'))
.flatMap(e=>e.items
    .filter(item=>item!=='monitor')))]

console.log(moreBuys)
console.log(`quem comprou monitor tambem comprou: ${moreBuys}`)

//6
const totalEncomendas= orders.every(e=>e.total>=25)
console.log(`todas as encomendas tem um valor maior que 25! : essa afirmacao é ${totalEncomendas}`)

//7
const encomendaGrande= orders.some(e=>e.items.length>=4)
console.log(`algumas encomedas sao consideradas grande?: essa afirmacao é ${encomendaGrande} `)

/*
TAREFAS:
1) Cria um Map "productById" (id -> objeto do produto).
2) Calcula o total (em €) da encomenda "o103" e guarda em "o103Total".
   (Usa price * qty e soma.)
3) Cria um array "allProductTags" com todas as tags de todos os produtos (com repetições).
4) Cria "uniqueProductTags" só com tags únicas. (Dica: Set)
5) Cria um objeto "revenueByProductId" do tipo { p1: 123.45, p2: 0, ... } com a receita total por produto.
6) Qual o cliente que gastou mais no total? Guarda o id em "topCustomerId".
7) Há alguma encomenda “suspeita”? Suspeita = tem um item com qty >= 5. console.log(true/false)
8) Todas as encomendas têm pelo menos 1 item? console.log(true/false)

BÓNUS:
A) Cria "top3ProductsByRevenue" com os 3 ids de produto com maior receita.
B) Cria "customersSummary" (array) com:
   { id, name, segment, ordersCount, totalSpent, avgOrderValue }
   Ordena por totalSpent desc.

TEST DATA:
*/

const products = [
  { id: 'p1', name: 'Keyboard', price: 49.9, tags: ['peripherals', 'office'] },
  { id: 'p2', name: 'Mouse', price: 19.9, tags: ['peripherals', 'budget'] },
  { id: 'p3', name: 'Monitor', price: 159.0, tags: ['display', 'work'] },
  { id: 'p4', name: 'USB-C Hub', price: 29.9, tags: ['accessories', 'office'] },
  { id: 'p5', name: 'SSD 1TB', price: 89.9, tags: ['storage', 'fast', 'upgrade'] },
];

const customers = [
  { id: 'c1', name: 'Ana', segment: 'consumer' },
  { id: 'c2', name: 'Bruno', segment: 'pro' },
  { id: 'c3', name: 'Carla', segment: 'consumer' },
  { id: 'c4', name: 'Diogo', segment: 'pro' },
];

const orders5 = [
  { id: 'o101', customerId: 'c1', createdAt: '2025-12-01', items: [{ productId: 'p2', qty: 2 }, { productId: 'p4', qty: 1 }] },
  { id: 'o102', customerId: 'c2', createdAt: '2025-12-03', items: [{ productId: 'p1', qty: 1 }, { productId: 'p3', qty: 2 }] },
  { id: 'o103', customerId: 'c1', createdAt: '2025-12-04', items: [{ productId: 'p5', qty: 1 }, { productId: 'p2', qty: 1 }, { productId: 'p4', qty: 3 }] },
  { id: 'o104', customerId: 'c3', createdAt: '2025-12-06', items: [{ productId: 'p3', qty: 1 }] },
  { id: 'o105', customerId: 'c4', createdAt: '2025-12-07', items: [{ productId: 'p2', qty: 5 }] },
];



//1
/* const indicProduto= (obj,ids) => obj.find(e=>e.id===ids)
console.log(indicProduto(products,'p1')) */

/* const productById1= new Map(products.map(e=> [e.id,e]))
console.log(productById1.get('p1')) */

//2

/* const valorEncomenda = (orders, products, id) => {

  const productById = new Map(products.map(p => [p.id, p]));

  const encomenda = orders.find(o => o.id === id);


  return encomenda.items.reduce((acc, i) => {
    const produto = productById.get(i.productId);
    
    return acc + produto.price * i.qty;
  }, 0);
};
 */


/* const valorEncomenda =(id)=>{

    const productById = new Map(products.map(e=>[e.id,e]));
    const order= orders5.find(e=>e.id===id);

    return order.items.reduce((acc,i)=>{
        const produtoInd= productById.get(i.productId)
        return acc + produtoInd.price *i.qty
    },0)

    
}

console.log(valorEncomenda('o101')) */



/* //3
const allProductTags= products.flatMap(e=>e.tags)
console.log(allProductTags)

//4 

const uniqueTag= [...new Set(allProductTags)]
console.log(uniqueTag) */


//array method pratice

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


console.log("Total movimentos banco:")
console.log(accounts.flatMap (e=> e.movements))
const bankDepositSum= accounts.flatMap (e=> e.movements).reduce((acc,i)=> acc+i,0)
console.log(`o total da soma de movimentações do banco tem um balanco de : ${bankDepositSum}` )

let totalDepositos=0
const depositosTotal=accounts.flatMap(e=> e.movements).filter(e=>e>0).map(e=>{
totalDepositos+=e
return totalDepositos
})
console.log(`o total de depositos no banco de todas as contas deu um balanco de : ${totalDepositos}`)
let totalRet=0
const totalRetiradas = accounts.flatMap(e=>e.movements).filter(e=>e<0).map(e=>{
totalRet+=e
return totalRet
})
console.log(accounts.flatMap(e=>e.movements).filter(e=>e<0))
console.log(`o total de tiradas de dinheiro foi de : ${totalRet}`)

const movimentacoes= {
  depositos: totalDepositos,
  retiradas: totalRet,
}
console.log(movimentacoes)


const convertTitle= (title) => {

  const exepctions= ['java','javascript','php','typescript','python']

  const titleCase = 
  title
  .toLowerCase()
  .split(' ')
  .map( word=> 
    exepctions.includes(word)? word.toUpperCase() : word)
  .join(' ')

  return titleCase

}

console.log(convertTitle('criei um programa que le as linguagens, python , laravel, JAVASCRIPT ... TODAS AS LINGUAGENS QUE EU ESCREVER ELE VAI DESTACAR EM LETRAS GRANDES'))



// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
*/


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];



//1 recommendedFood = weight ** 0.75 * 28 -> gr

dogs.forEach(dog => { dog.recFood =Math.floor(dog.weight**0.75*28)

});

console.log(dogs)

//2

const saraDogs = dogs
.filter(e=>e.owners.includes('Sarah'))
console.log(`o cao da sarah come ${saraDogs.curFood < saraDogs.recFood? 'less than should' : 'more than should'}`)

//3

const toomuchFood=[]
const toolessFood= []
const showDogFood= dogs.filter(e=>{
  e.curFood <= e.recFood? toolessFood.push(e.owners) : toomuchFood.push(e.owners) 
})

console.log(toomuchFood.flat())
console.log(toolessFood.flat())

//4

console.log(`${toomuchFood.flat().join(' and ')}'s dogs are eating to much `)

//5
const anyDog= dogs.some(e=>e.curFood===e.recFood)
console.log(anyDog)

//6
const allDog= dogs.every(e=>e.curFood===e.recFood)
console.log(allDog)

//7
const novoarr=dogs.filter(e=> e.curFood===e.recFood)

console.log(novoarr)

//8
const selectDog= (arr)=>{
const eatingLess=[]
const eatingMuch=[]
arr.filter(e=>{
  e.curFood<e.recFood? eatingLess.push(e) : eatingMuch.push(e)
})
const newDogs={
   eatingWell: novoarr,
   eatingL: eatingLess,
   eatingM: eatingMuch,
}
return newDogs
}

console.log(selectDog(dogs))

//9
const dogsOrder= Object.groupBy(dogs,dog=>{
  if(dog.owners.length<2){
    return 'less then 2'
  }
  else{
    return 'more than 2'
  }
})

console.log(dogsOrder)

  

