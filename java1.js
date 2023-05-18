class leguaje {
    constructor(nombre,año) {
        this.nombre = nombre;
        this.año = año;
    }
    descripcion() {
        console.log("${this.nombre}) fue creado en ${this.año}");
        
    }
}

let javaScript = new leguaje("javaScript",2023)
javaScript.descripcion();

let html = new leguaje("HTML",2023)
html.descripcion();

let css = new leguaje("CSS",2023)
css.descripcion();