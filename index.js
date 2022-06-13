
const Ordenar_insertion = document.querySelector('#insertion')
const ordenar_quick = document.querySelector('#quick')
const reset = document.querySelector('#limpar')

const valores = document.querySelector(".valores")

let vetor = [];
let vetorDesordenado ;
let antes
let duracao

//adcionando evento de clique no botão


function alterarLista(vet){

    for(let i =0; i<10; i++){
        let item = document.createElement('li')
        item.textContent = vet[i];
        valores.appendChild();

    }
}

// função para preencher o vetor 
function preencherVetor(vet, tam){
    let i = tam;
   
    while(i>0){
        console.log(1)
        vet.push(Math.floor(Math.random() * 99999));
        i--;
    }

    vetorDesordenado = vet;
    return vet;
}

preencherVetor(vetor,10000);
vetorDesordenado = vetor

reset.addEventListener('click',()=>{

    vetor = vetorDesordenado
})

Ordenar_insertion.addEventListener('click', ()=>{
    
    vetor = vetorDesordenado
    antes = Date.now()
    insertionSort(vetor)
    duracao = Date.now() - antes

   
    console.log(duracao)
    console.log(vetor)
    alert(`a ordenação com o algoritmo Insertion Sort demorou ${duracao}ms`)

})

ordenar_quick.addEventListener('click',()=>{
    
    vetor = vetorDesordenado
    antes = Date.now()
    quickSort(vetor,0,vetor.length-1);
    duracao = Date.now() - antes

    

    console.log(duracao)
    console.log(vetor)
    alert(`a ordenação com o algoritmo quick sort demorou ${duracao}ms`)

})

       
 
function insertionSort(vetorInserido) {
     

        for (let inicio = 1; inicio < vetorInserido.length; inicio++) {
            
            let atual = vetorInserido[inicio];

         
            let comparado = inicio-1; 


            while ((comparado > -1) && (atual < vetorInserido[comparado])) {
                vetorInserido[comparado+1] = vetorInserido[comparado];
               
                comparado--;
            }
            vetorInserido[comparado+1] = atual;
            
        }
    return vetorInserido;
}


// ========== quick sort ===========

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

//quickSort(vetor, 0, vetor.length -1);

//insertionSort(vetor);

console.log(vetor)













