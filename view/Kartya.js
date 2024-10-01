


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
        this.#szuloelem.append(`
            <div class="card kivalaszt col-lg-3 col-md-4 col-sm-6 ">
                <div class="card-body">                 
                    <img src="${this.#elem}" alt="" class="card-img-top">
               </div>
            </div>
            `);
    }


    kattintas(){
        this.#szuloelem.on("click", (lista) =>{
            
        })
    }


}

