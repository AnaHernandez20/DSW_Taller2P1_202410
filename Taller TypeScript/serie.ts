export class Serie{
    constructor(public id: number, public nombre:string, public canal: string, public temporadas: number, public descripcion: string, public webSite: string, public imagen: string, public imagenLocal: string){
        //Lo dejo vacío porque TS entiende solo que los parámetros los debe poner como valores de atributos al instanciar
    }

}