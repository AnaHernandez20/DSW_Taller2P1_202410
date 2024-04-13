var Serie = /** @class */ (function () {
    function Serie(id, nombre, canal, temporadas, descripcion, webSite, imagen, imagenLocal) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.webSite = webSite;
        this.imagen = imagen;
        this.imagenLocal = imagenLocal;
        //Lo dejo vacío porque TS entiende solo que los parámetros los debe poner como valores de atributos al instanciar
    }
    return Serie;
}());
export { Serie };
