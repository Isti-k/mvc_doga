


export default class Kartya{
    #szuloelem;
    #index;
    #elem;

    constructor(szuloelem, index, elem){
        this.#szuloelem=szuloelem;
        this.#elem=elem;
        this.#index=index;
    }


    megjelenit(){
        `<div class=lap>
            <p>${this.#elem}</p>
        </div>`
    }


    kattintas(){
        this.#kattintas.on("click" (lista) =>{

        })
    }
    

}

