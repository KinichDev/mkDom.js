// mkDomer ----'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'
// mkDomer /              ##### ##
// mkDomer #/            /#####  /##
// mkDomer ##          //    /  / ###
// mkDomer ##         /     /  /   ###
// mkDomer ##              /  /     ###
// mkDomer ### /### /###    ##  /##        ## ##      ##    /###    ### /### /###       /##    ###  /###
// mkDomer ##/ ###/ /##  / ## / ###       ## ##      ##   / ###  /  ##/ ###/ /##  /   / ###    ###/ #### /
// mkDomer ##  ###/ ###/  ##/   /        ## ##      ##  /   ###/    ##  ###/ ###/   /   ###    ##   ###/
// mkDomer ##   ##   ##   ##   /         ## ##      ## ##    ##     ##   ##   ##   ##    ###   ##
// mkDomer ##   ##   ##   ##  /          ## ##      ## ##    ##     ##   ##   ##   ########    ##
// mkDomer ##   ##   ##   ## ##          #  ##      ## ##    ##     ##   ##   ##   #######     ##
// mkDomer ##   ##   ##   ######            /       /  ##    ##     ##   ##   ##   ##          ##
// mkDomer ##   ##   ##   ##  ###      /###/       /   ##    ##     ##   ##   ##   ####    /   ##
// mkDomer ###  ###  ###  ##   ### /  /   ########/     ######      ###  ###  ###   ######/    ###
// mkDomer ###  ###  ###  ##   ##/  /       ####        ####        ###  ###  ###   #####      ###
// mkDomer            #
// mkDomer             ##

// Extiende el prototipo de HTMLElement para agregar funciones personalizadas

// Método para ocultar un elemento con una animación de desvanecimiento
HTMLElement.prototype.displayNone = function () {
    this.style.animation = "fadeOut 0.5s forwards"; // Agrega una animación de desvanecimiento
    setTimeout(() => {
        this.style.display = "none"; // Cambia el display a "none" después de la animación
        this.style.animation = ""; // Limpia la propiedad de animación
        return this;
    }, 1000); // Tiempo suficiente para que la animación termine
};

// Método para mostrar un elemento con una animación de aparición en modo "flex"
HTMLElement.prototype.displayFlex = function () {
    this.style.animation = "fadeIn 0.5s forwards"; // Agrega una animación de aparición
    setTimeout(() => {
        this.style.display = "flex"; // Cambia el display a "flex" después de la animación
        this.style.animation = ""; // Limpia la propiedad de animación
        return this;
    }, 1000); // Tiempo suficiente para que la animación termine
};

// Método para aplicar una animación de entrada cinematográfica lenta
HTMLElement.prototype.entradaSuave = function () {
    if (!(this instanceof HTMLElement)) {
        console.error("Este método solo se puede usar en elementos HTML.");
        return;
    }

    // Define los estilos de animación como una regla CSS
    let animacionEstilos = `
        @keyframes tomasCinematicasLentas {
            0% {
                background-color: black;
                filter: brightness(0.2) blur(10px);
                transform: scale(1) translate(0, 0);
            }
            25% {
                background-color: black;
                filter: brightness(0.4) blur(8px);
                transform: scale(1.2) translate(10%, -10%);
            }
            50% {
                background-color: black;
                filter: brightness(0.6) blur(6px);
                transform: scale(1.3) translate(20%, -12%);
            }
            75% {
                background-color: black;
                filter: brightness(0.8) blur(3px);
                transform: scale(1.2) translate(10%, 10%);
            }
            100% {
                background-color: transparent;
                filter: brightness(1) blur(0);
                transform: scale(1) translate(0, 0);
            }
        }
    `;

    // Inserta la animación en el documento si aún no existe
    if (!document.querySelector("style#tomasCinematicasLentas")) {
        let estilo = document.createElement("style");
        estilo.id = "tomasCinematicasLentas";
        estilo.textContent = animacionEstilos;
        document.head.appendChild(estilo);
    }

    // Aplica la animación al elemento
    this.style.animation = "tomasCinematicasLentas 60s ease-in-out infinite";
};

// Método para ejecutar un callback cuando el elemento entra en el viewport
HTMLElement.prototype.onScrollIntoView = function (callback, options = { root: null, threshold: 0.1 }) {
    if (typeof callback !== 'function') {
        throw new Error('Callback must be a function.');
    }

    // Crea un observador para detectar la intersección del elemento
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            callback(entry); // Llama al callback con la entrada correspondiente
        });
    }, options);

    // Observa el elemento actual
    observer.observe(this);

    // Devuelve el observador para permitir su desconexión manual
    return observer;
};

// Método para calcular el porcentaje de scroll dentro de un elemento
HTMLElement.prototype.nivelScroll = function () {
    let scrollTop = this.scrollTop; // Distancia desde la parte superior
    let scrollHeight = this.scrollHeight; // Altura total del contenido
    let clientHeight = this.clientHeight; // Altura visible del contenedor

    // Calcula el porcentaje de scroll
    let porcentajeScroll = (scrollTop / (scrollHeight - clientHeight)) * 100;
    return porcentajeScroll.toFixed(2); // Retorna el porcentaje con dos decimales
};

// Método para eliminar un elemento con una animación de desvanecimiento
HTMLElement.prototype.removeElement = function () {
    this.style.animation = "fadeOut 0.3s forwards"; // Aplica una animación de desvanecimiento

    setTimeout(() => {
        if (this.parentNode) {
            this.remove(); // Elimina el elemento después de la animación
        }
    }, 1000); // Tiempo suficiente para que la animación termine
};

// Método para alternar entre display "flex" y "none"
HTMLElement.prototype.toggleDisplayFlexNone = function () {
    if (!(this instanceof HTMLElement)) {
        console.error("Esta función solo se puede llamar con objetos HTML.");
        return;
    }

    // Obtén el estilo actual del elemento
    let currentDisplay = getComputedStyle(this).display;

    // Alterna entre "flex" y "none"
    if (currentDisplay === "none") {
        this.style.display = "flex";
    } else if (currentDisplay === "flex") {
        this.style.display = "none";
    } else {
        console.warn("Este elemento no cuenta con los estilos necesarios:", currentDisplay);
    }
};

// mkDomer ----'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'
// mkDomer /              ##### ##
// mkDomer #/            /#####  /##
// mkDomer ##          //    /  / ###
// mkDomer ##         /     /  /   ###
// mkDomer ##              /  /     ###
// mkDomer ### /### /###    ##  /##        ## ##      ##    /###    ### /### /###       /##    ###  /###
// mkDomer ##/ ###/ /##  / ## / ###       ## ##      ##   / ###  /  ##/ ###/ /##  /   / ###    ###/ #### /
// mkDomer ##  ###/ ###/  ##/   /        ## ##      ##  /   ###/    ##  ###/ ###/   /   ###    ##   ###/
// mkDomer ##   ##   ##   ##   /         ## ##      ## ##    ##     ##   ##   ##   ##    ###   ##
// mkDomer ##   ##   ##   ##  /          ## ##      ## ##    ##     ##   ##   ##   ########    ##
// mkDomer ##   ##   ##   ## ##          #  ##      ## ##    ##     ##   ##   ##   #######     ##
// mkDomer ##   ##   ##   ######            /       /  ##    ##     ##   ##   ##   ##          ##
// mkDomer ##   ##   ##   ##  ###      /###/       /   ##    ##     ##   ##   ##   ####    /   ##
// mkDomer ###  ###  ###  ##   ### /  /   ########/     ######      ###  ###  ###   ######/    ###
// mkDomer ###  ###  ###  ##   ##/  /       ####        ####        ###  ###  ###   #####      ###
// mkDomer            #
// mkDomer             ##


function div(c,i,inner) { // ! CREAR UNA ETIQUETA DIV (clase, id, inner)
    c?true:c="";i?true:i="";inner?true:inner="";
    let div = document.createElement("div")
    c=""?true:div.setAttribute("class",c)
    i=""?true:div.setAttribute("id",i)
    inner=""?true:div.innerHTML=inner

    return div
}


function mkObj(n,obj_class,obj_id,inner) {  // ! CREAR UN OBJETO DIV (nodo, clase, id, inner)
    n?true:n="";obj_class?true:obj_class="";obj_id?true:obj_id="";inner?true:inner="";

    let obj_temp=div(obj_class,obj_id,inner)
    n.appendChild(obj_temp)

    return obj_temp
}

function mkObjObj(n,obj_class,obj_id,inner) {  // ! CREAR UN OBJETO DIV (nodo, clase, id, inner)
    n?true:n="";obj_class?true:obj_class="";obj_id?true:obj_id="";inner?true:inner="";
    let obj_temp=mkObj(n,"c_"+obj_class,"c_"+obj_id)
    let obj_temp_=mkObj(obj_temp,obj_class,obj_id)
    console.log()
    return obj_temp
}

// TODO IMAGES ///////////////////////////////////

function img(c,i,src) { // ! CREAR UNA ETIQUETA IMG (clase, id, inner)
    c?true:c="";i?true:i="";src?true:src="";

    let img = document.createElement("img")
    c=""?true:img.setAttribute("class",c)
    i==""?true:img.setAttribute("id",i)
    src=""?true:img.setAttribute("src",src)

    return img
}

function mkObjImg(n,img_class,img_id,src_) { // ! CREAR UN OBJETO IMG (nodo, clase, id, recurso imagen)
    n?true:n="";img_class?true:img_class="";img_id?true:img_id="";src_?true:src_="";

    img_class?cont_img_class="cont_"+img_class:cont_img_class="";img_id?cont_img_id="cont_"+img_id:cont_img_id="";


    let obj_temp=div(cont_img_class,cont_img_id)
    n.appendChild(obj_temp)

    img_class?img_class=img_class:img_class=""
    img_id?img_id=img_id:img_id=""

    let img_temp = img(img_class,img_id,src_)
    obj_temp.appendChild(img_temp)

    return obj_temp
}

function verImg(nodo,clase,id){ // ! VIZUALIZAR UNA IMAGEN EN UNA PESTAÑA ()
    nodo=nodo||"body";clase=clase||"";id=id||"";

    let temp_img = event.target

    let body = document.body

    nodo.style.position="relative" // ! ASIGNAR PROPIEDAD RELATIVE AL NODO PARA PERMITIR UBICACION ABSOLUTA DE LA IMAGEN

        // ! SI EXISTE LA VENTANA CON LA IMGEN SE ELIMINA PARA VOLVER A CREAR
    let _hipercapa = document.getElementById(id+"_hipercapa")
    let _hipercapa_ = document.querySelector("."+clase+"_hipercapa")
    if (_hipercapa) {_hipercapa.remove()}
    if (_hipercapa_) {_hipercapa_.remove()}

    // ? CREACION DE HIPERCAPA
    let mk_hipercapa_img = mkObj(nodo,clase+"_hipercapa",id+"_hipercapa");mk_hipercapa_img.style.position="absolute";
        let mk_ventana_img = mkObj(mk_hipercapa_img,clase) //document.createElement("div")
            let mk_header_ventana_img = mkObj(mk_ventana_img,clase+"_header",id+"_header")

                    // ? INNER TITULO
                let inner_titulo_ventana = temp_img.getAttribute("src")/*.split("/").pop()*/
            let mk_titulo_hvi = mkObj(mk_header_ventana_img,clase+"titulo_header",id+"_titulo_header",inner_titulo_ventana) /// objeto del eveneto -> atributo directorio -> formato arreglo por directorios -> ultimo elemto

            let mk_btn_cerrar_ventana_img = mkObj(mk_header_ventana_img,"btn_cerrar_"+clase,"btn_cerrar_"+id,"X")
                mk_btn_cerrar_ventana_img.style.cursor="pointer"
    
                mk_btn_cerrar_ventana_img.addEventListener("click",function() {
                    history.replaceState({},document.title,window.location.href.replace(/#.*$/,"")) // ! MODIFICAR LINK DE NAVEGADOR
                    mk_hipercapa_img.remove()
                })

        let mk_cuerpo_ventana_img = mkObj(mk_ventana_img,clase+"_cuerpo_ventana_img")
                
                let atributo_img = temp_img.getAttribute("src")
            let mk_img_hipercap = mkObjImg(mk_cuerpo_ventana_img,"img_"+clase,"img_"+id,atributo_img)
            history.pushState({},"",`#${inner_titulo_ventana}`) // ! MODIFICAR LINK DE NAVEGADOR
}

// TODO  INPUTS ///////////////////////////////////

function input(c,i,p) { // ! CREAR UNA ETIQUETA INPUT (clase, id, placeholder)
    c?true:c="";i?true:i="";p?true:p="";
    
    let input = document.createElement("input")

    c=""?true:input.setAttribute("class",c)
    i=""?true:input.setAttribute("id",i)
    p=""?true:input.setAttribute("placeholder",p)
    return input
}

function textarea(c,i,p) { // ! CREAR UNA ETIQUETA TEXTAREA (clase, id, placeholder)
    c?true:c="";i?true:i="";p?true:p="";

    let textarea = document.createElement("textarea")
    c=""?true:textarea.setAttribute("class",c)
    i=""?true:textarea.setAttribute("id",i)
    p=""?true:textarea.setAttribute("placeholder",p)

    return textarea
}

function mkObjDatalist(n,c,i,...elementos){ // compatibilidad con objetos
    n?n:""
    c?c:""
    i?i:""
    elementos?elementos:""

    // let obj_temp = mkObj(n,"cont_"+c,"cont_"+i)

    let input_datalist = n.querySelector("input")
    input_datalist.setAttribute("list",i)

    let data_list_temp = document.createElement("datalist")
    data_list_temp.setAttribute("class",c)
    data_list_temp.setAttribute("id",i)

    for (let j = 0; j < elementos.length; j++) {
        let option_temp = document.createElement("option")
        option_temp.setAttribute("value",elementos[j])
        data_list_temp.appendChild(option_temp)
    }

    n.appendChild(data_list_temp)
    return data_list_temp
}


function mkObjInput(nodo,c,i,type,t,p,f,s,color){ // ! CREAR UN OBJETO INPUT (clase, id, placeholder, type, titulo_obj, placeholder, fuente, tamaño, color del texto)
    nodo?true:nodo="";c?true:c="";i?true:i="";t?true:t="";p?true:p="";f?true:f="";s?true:s="";color?true:color="";
    c?cont_clase="cont_input_"+c:cont_clase="";i?cont_id="cont_input_"+i:cont_id="";c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase="";
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id="";c?titulo_clase="tittle_"+c:titulo_clase="";i?titulo_id="tittle_"+i:titulo_id="";
    c?nodo_cont_input_class="nodo_cont_input_"+c:nodo_cont_input_class="";i?nodo_cont_input_id="nodo_cont_input_"+i:nodo_cont_input_id="";
    c?cont_input_clase="cont_in_"+c:cont_input_clase="";i?cont_input_id="cont_in_"+i:cont_input_id="";c?input_clase="in_"+c:input_clase="";
    i?input_id="in_"+i:input_id="";input_placeholder=p;

    let obj_temp = mkObj(nodo,c,i)

        let cont_temp = mkObj(obj_temp,cont_clase,cont_id)
            let cont_titulo = mkObj(cont_temp,cont_titulo_clase,cont_titulo_id)
                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

            let nodo_cont_input = mkObj(cont_temp,nodo_cont_input_class,nodo_cont_input_id)
                let cont_input = mkObj(nodo_cont_input,cont_input_clase,cont_input_id)
                    let input_temp = input(input_clase,input_id,p)
                    input_temp.setAttribute("type",type)
                    cont_input.appendChild(input_temp)

                        obj_temp.addEventListener("mouseup",function () {
                            input_temp.focus()
                        })

    return obj_temp
}

function mkObjInputPassword(nodo,c,i,t,p,url){// ! CREAR UN OBJETO INPUT (clase, id, placeholder, titulo, placeholder, directorio_img)
    nodo?true:nodo="";c?true:c="";i?true:i="";t?true:t="";p?true:p="";
    c?cont_clase="cont_input_"+c:cont_clase="";i?cont_id="cont_input_"+i:cont_id="";c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase="";
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id="";c?titulo_clase="tittle_"+c:titulo_clase="";i?titulo_id="tittle_"+i:titulo_id="";
    c?nodo_cont_input_class="nodo_cont_input_"+c:nodo_cont_input_class="";i?nodo_cont_input_id="nodo_cont_input_"+i:nodo_cont_input_id="";
    c?cont_input_clase="cont_in_"+c:cont_input_clase="";i?cont_input_id="cont_in_"+i:cont_input_id="";c?input_clase="in_"+c:input_clase="";
    i?input_id="in_"+i:input_id="";c?img_ver_pass_clase="ver_pass_"+c:img_ver_pass_clase="";i?img_ver_pass_id="ver_pass_"+i:img_ver_pass_id="";
    c?ver_pass_clase="ver_pass_"+c:ver_pass_clase="";i?ver_pass_id="ver_pass_"+i:ver_pass_id="";

    input_placeholder=p

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)

        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)

            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)

                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

                //
            let obj_cont_input = div(nodo_cont_input_class,nodo_cont_input_id)
            cont_temp.appendChild(obj_cont_input)
                //

            let cont_input = div(cont_input_clase,cont_input_id)
            obj_cont_input.appendChild(cont_input)

                let input_temp = input(input_clase,input_id,p)
                input_temp.style.padding="6px"
                input_temp.setAttribute("type","password")
                cont_input.appendChild(input_temp)

            let ver_pass = div(ver_pass_clase,ver_pass_id)
            obj_cont_input.appendChild(ver_pass)

                let img_ver_pass = mkObjImg(ver_pass,"img_"+img_ver_pass_clase,"img_"+img_ver_pass_id,url)

                toggleVerContraseña(img_ver_pass)

                function toggleVerContraseña(x) {
                    let obj_temp = document.getElementById(x.getAttribute("id"))

                    obj_temp.addEventListener("mouseup",function () {
                        let style_temp = window.getComputedStyle(obj_temp).backgroundColor
                        console.log(style_temp)
                        if (style_temp==="rgb(255, 255, 255)") {
                            obj_temp.style.background="var(--colorButtonToggle)"
                        } else {
                            obj_temp.style.background="white"
                        }
                    })

                }

                ver_pass.addEventListener("mouseup",function() {
                    if (input_temp.type==="password"){
                        input_temp.type = "text"
                    } else{
                        input_temp.type = "password"
                    }
                })
                console.log(obj_temp)
    obj_temp.addEventListener("mouseup",function () {
        obj_temp.querySelector("input").focus()
    })

    return obj_temp
}

function mkObjTextarea(nodo,c,i,t,p){ // ! CREAR UN OBJETO TEXTAREA (clase, id, titulo_obj, placeholder)
    nodo?true:nodo="";c?true:c="";i?true:i="";t?true:t="";p?true:p="";c?cont_clase="cont_textarea_"+c:cont_clase="";
    i?cont_id="cont_textarea_"+i:cont_id="";c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase="";
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id="";c?titulo_clase="tittle_"+c:titulo_clase="";
    i?titulo_id="tittle_"+i:titulo_id="";c?nodo_cont_textarea_class="nodo_cont_textarea_"+c:nodo_cont_textarea_class="";
    i?nodo_cont_textarea_id="nodo_cont_textarea_"+i:nodo_cont_textarea_id="";c?cont_textarea_clase="cont_in_"+c:cont_textarea_clase="";
    i?cont_textarea_id="cont_in_"+i:cont_textarea_id="";c?textarea_clase="in_"+c:textarea_clase="";i?textarea_id="in_"+i:textarea_id="";

    textarea_placeholder=p

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)
        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)
            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)
                let titulo_temp = mkText(cont_titulo,titulo_clase,titulo_id,t)

            let nodo_cont_textarea = div(nodo_cont_textarea_class,nodo_cont_textarea_id)
            cont_temp.appendChild(nodo_cont_textarea)
                let cont_textarea = div(cont_textarea_clase,cont_textarea_id)
                nodo_cont_textarea.appendChild(cont_textarea)
                    let textarea_temp = textarea(textarea_clase,textarea_id,p)
                    cont_textarea.appendChild(textarea_temp)

    return obj_temp
}

// TODO  BUTTON ///////////////////////////////////

function button(c,i,inner) { // ! CREAR UNA ETIQUETA BUTTON (clase, id, inner)
    c?true:c="";i?true:i="";inner?true:inner="";

    let button = document.createElement("button")
    c=""?true:button.setAttribute("class",c)
    i=""?true:button.setAttribute("id",i)
    inner=""?true:button.innerHTML=inner

    return button
}

function mkObjButton(nodo,c,i,inner,event) { // ! CREAR UN OBJ BUTTON (nodo, clase, id, inner)
    nodo?true:nodo="";c?true:c="";i?true:i="";inner?true:inner="";

    let btn_temp = button(c,i,inner)

    c=""?true:cont_btn_class="cont_"+c
    i=""?true:cont_btn_id="cont_"+i

    let obj_temp = div(cont_btn_class,cont_btn_id)



    /// ->
    nodo.appendChild(obj_temp)
        obj_temp.appendChild(btn_temp)

    return obj_temp
}

// TODO DISPLAY ///////////////////////////////////

function flex(f){ // ! DISPLAY FLEX
    f.style.display="flex"
    return f
}

function flexNone(f) { // ! DISPLAY NONE
    f.style.display="none"
    return f
}

// TODO INPUT ///////////////////////////////////

    // ACTUALIZADO DE BIBLIOTECA VALIDACION A9

                    // OPTIMIZACIONES:
                        // optimizaciones: [div() remplazados por mkObj()]

                            // MODIFICACIONES:
                                // modificaciones: [CAMBIAR NOMBRE DE "validarStr()" a "validarInputA9()"]

function validarInputA9(x,texto_aviso) { // ! (elemento_input,texto_aviso)

    let ex = /^[a-zA-Z0-9/s']+$/
    let nodo = x.parentNode
    let c = x.getAttribute("class")
    let i = x.getAttribute("id")

    if (document.getElementById("aviso_formulario_"+i)) {
        document.getElementById("aviso_formulario_"+i).remove()
    }

    if (x.value=="") {
        document.getElementById("aviso_formulario_"+i).remove()
    }

    if (!ex.test(x.value)) {
        let aviso_formulario = div("aviso_formulario_"+c,"aviso_formulario_"+i,texto_aviso)
        nodo.appendChild(aviso_formulario)
        x.style.border="none"
        x.style.borderBottom="solid 1px red"
    } else {
        x.style.border="solid 1px var(--colorBorderAviso)"
    }
}

// Actualizado: [SI] | Acutalizado de: [mkDomer/controlador/bibliotecaPruebas.js]
    // Modificaciones :
        // Modificaciones :
function vistaToggle(element) { // ! VERIFICAR LA VARIABLE DE ESTILO DISPLAY PARA INTERCAMBIAR ENTRE FLEX Y NONE
    console.log(window.getComputedStyle(element).display)
    let obj_temp = window.getComputedStyle(element).display
    if (obj_temp==="flex") {
        obj.style.display="none"
    } else {
        obj.style.display="flex"
    }

}

function checkAndDeleteId(x) {
    if (document.getElementById(x)) {
        document.getElementById(x).remove()
    }
}

// gest // //
// Actualizado: [NO] | Acutalizando en: [Sin subcarpeta de optimizacion]
function confirmarPass(x,y){ // ! AÑADIR DOS INPUTS, VALIDAR SI SON IGUALES Y MODIFICAR EL BORDE DE SUS NODOS
    let nodo_x = x.parentNode
    let nodo_y = y.parentNode


    if (x.value==y.value) { // gest
        checkAndDeleteId("aviso_formulario_contraseña")
        checkAndDeleteId("aviso_formulario_confirmar_contraseña")

        x.style.border="solid 1px #10101088" // GEST MODIFICAR COLOR A UNA VARIABLE CSS PERSONALIZADA PARA FACILITAR SU USO
        y.style.border="solid 1px #10101088" // GEST MODIFICAR COLOR A UNA VARIABLE CSS PERSONALIZADA PARA FACILITAR SU USO
    } else {
        checkAndDeleteId("aviso_formulario_contraseña")
        checkAndDeleteId("aviso_formulario_confirmar_contraseña")

        let aviso_x = div("aviso_formulario","aviso_formulario_contraseña","Las contraseñas no coinciden")
        nodo_x.appendChild(aviso_x)
        let aviso_y = div("aviso_formulario","aviso_formulario_confirmar_contraseña","Las contraseñas no coinciden")
        nodo_y.appendChild(aviso_y)

        x.style.border="none"
        x.style.borderBottom="solid 1px red" // GEST MODIFICAR COLOR A UNA VARIABLE CSS PERSONALIZADA PARA FACILITAR SU USO
        y.style.border="none"
        y.style.borderBottom="solid 1px red" // GEST MODIFICAR COLOR A UNA VARIABLE CSS PERSONALIZADA PARA FACILITAR SU USO
    }
}

// TODO TEXTO ////////////////////////

function mkText(n,c,i,inner) { // ! GENERAR EL CONTENIDO  [<div><p>  </p></div>] 
    n = n || ""
    c = c || ""
    i = i || ""
    inner = inner || ""

    c==""?c_c="":c_c="cont_"+c
    i==""?c_i="":c_i="cont_"+i

    let obj_temp = div(c_c,c_i)
    n.appendChild(obj_temp)

    let p_temp = document.createElement("p")
    p_temp.setAttribute("class",c)
    p_temp.setAttribute("id",i)
    p_temp.innerHTML=inner
    obj_temp.appendChild(p_temp)

    return obj_temp

}

function mkTextList(n,c,i,...inner) { // ! GENERAR EL CONTENIDO  [<div><p>  </p></div>] 
    n = n || ""
    c = c || ""
    i = i || ""
    inner = inner || ""

    c==""?c_c="":c_c="cont_"+c
    i==""?c_i="":c_i="cont_"+i

    let obj_temp = div(c_c,c_i)
    n.appendChild(obj_temp)

    let p_temp = document.createElement("p")
    p_temp.setAttribute("class",c)
    p_temp.setAttribute("id",i)
    for (let j = 0; j < inner.length; j++) {
        let element = inner[j];
        // ! console.log(element)
        let sub_text = mkText(obj_temp,"sub_text_"+c,"sub_text_"+i+"_"+j,element)
        // ! console.log(sub_text)
            
    }

    return obj_temp

}

function placerMenu(btn,menu) {
    menu.style.display="none"
    let timer;
    btn.addEventListener("mouseenter", function(x) {
        menu.style.display = "flex"; // Mostrar el elemento "menu" con estilo flex
        clearTimeout(timer); // Limpiar el temporizador existente
        // Añadir un evento "mouseup" al documento
        document.addEventListener("mouseup", function(n) {
            if (!menu.contains(n.target)) {
                menu.style.display = "none"; // Ocultar "menu" si el clic no está dentro de él
            }
        });
    });

    menu.addEventListener("mouseenter", function(x) {
        menu.style.display = "flex"; // Mostrar el elemento "menu" con estilo flex
        clearTimeout(timer); // Limpiar el temporizador existente
        // Añadir un evento "mouseup" al documento
        document.addEventListener("mouseup", function(n) {
            if (!menu.contains(n.target)) {
                menu.style.display = "none"; // Ocultar "menu" si el clic no está dentro de él
            }
        });
    });

    // Añadir un evento "click" al elemento "btn"
    btn.addEventListener("click", function(x) {
        menu.style.display = "flex"; // Mostrar el elemento "menu" con estilo flex
        clearTimeout(timer); // Limpiar el temporizador existente
        // Añadir un evento "mouseup" al documento
        document.addEventListener("mouseup", function(n) {
            if (!menu.contains(n.target)) {
                menu.style.display = "none"; // Ocultar "menu" si el clic no está dentro de él
            }
        });
    });

    // Añadir un evento "mouseleave" al elemento "btn"
    btn.addEventListener("mouseleave", function(x) {
        // Establecer un temporizador para ocultar "menu" después de 1100 ms (1.1 segundos)
        timer = setTimeout(function() {
            menu.style.display = "none"; // Ocultar el elemento "menu"
        }, 1100);
    });

    menu.addEventListener("mouseleave", function(x) {
        // Establecer un temporizador para ocultar "menu" después de 1100 ms (1.1 segundos)
        timer = setTimeout(function() {
            menu.style.display = "none"; // Ocultar el elemento "menu"
        }, 1100);
    });
}

function stylerColor(element,color) {
    element.style.color=color
    // console.log(element)
    return element
}

function stylerFontFamily(element,font) {
    element.style.fontFamily=font
    // console.log(element)
    return element
}

function stylerFontSize(element,size) {
    element.style.fontSize=size
    // console.log(element)
    return element
}

function stylerPadding(element,padding) {
    element.style.padding=padding
    // console.log(element)
    return element
}

function stylerFlexDirection(element,direction) {
    element.style.flexDirection=direction
    // console.log(element)
    return element
}

function stylerWidth(element,width) {
    element.style.width=width
    // console.log(element)
    return element
}

function stylerHeight(element,height) {
    element.style.height=height
    // console.log(element)
    return element
}

function stylerUserSelect(element,userSelect) {
    element.style.userSelect=userSelect   
    // console.log(element)
    return element
}

function stylerAlingItems(element,alignItems) {
    element.style.alignItems=alignItems
    // console.log(element)
    return element
}

function stylerJustifyContent(element,justifyContent) {
    element.style.justifyContent=justifyContent
    // console.log(element)
    return element
}

function stylerCursor(element,cursor) {
    element.style.cursor=cursor
    // console.log(element)
    return element
}

function stylerBackground(element,background) {
    element.style.background=background
    // console.log(element)
    return element
}

function stylerWordWrap(element,wordWrap) {
    element.style.wordWrap=wordWrap
    // console.log(element)
    return element
}

function stylerMaxWidth(element,maxWidth) {
    element.style.maxWidth = maxWidth
    // console.log(element)
    return element
}

// // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest // gest 

function insertSpan(elemento, textoCoincidente, color) {
    // Obtener el contenido del elemento <p>
    var contenido = elemento.innerHTML;
    
    // Crear una expresión regular para buscar el texto coincidente de manera global e insensible a mayúsculas/minúsculas
    var regex = new RegExp(textoCoincidente, 'gi');
    
    // Reemplazar el texto coincidente con el span resaltado
    var nuevoContenido = contenido.replace(regex, function(match) {
        return '<span class="resaltado" style="color: ' + color + ';font-weight: bold;">' + match + '</span>';
    });
    
    // Establecer el nuevo contenido en el elemento <p>
    elemento.innerHTML = nuevoContenido;
}

function etiquetaElemento(nodo,clase,id,titulo,img_ruta,descripcion) {
    nodo?true:"";clase?true:"";id?true:"";titulo?true:"";img_ruta?true:"";descripcion?true:"";

    let obj_temp = mkObj(nodo,"cont_"+""+clase,"cont_"+""+id)
    obj_temp.style.flexDirection="column"

        let header_temp = mkObj(obj_temp,"header_"+clase,"header_"+id)
            let header_temp_titulo = mkText(header_temp,"header_temp_titulo"+clase,"header_temp_titulo"+id,titulo)

        let cuerpo_temp = mkObj(obj_temp,"cuerpo_"+clase,"cuerpo_"+id)
            let cuerpo_temp_imagen = mkObjImg(cuerpo_temp,"cuerpo_temp_imagen"+clase,"cuerpo_temp_imagen"+id,img_ruta)

        let footer_temp = mkObj(obj_temp,"footer_"+clase,"footer_"+id)
            let footer_temp_descripcion = mkText(footer_temp,"footer_temp_descripcion"+clase,"footer_temp_descripcion"+id,descripcion)

    obj_temp.addEventListener("mouseup",function () {
        let hc = document.querySelectorAll(".hipercapa_")
        if (hc) {hc.forEach(element => {
            element.remove()
    });}

        let hipercapa_temp = mkObj(contenedor_principal,"hipercapa_"+clase,"hipercapa_"+id)
        hipercapa_temp.style.position="absolute"
        hipercapa_temp.style.zIndex="255"

                        var nuevaURL = window.location.href.replace('&actividades', '');


            let ventana_descripcion_actividad = mkObj(hipercapa_temp,"ventana_descripcion_actividad","ventana_descripcion_actividad_"+id)

                let ventana_descripcion_actividad_header = mkObj(ventana_descripcion_actividad,"ventana_descripcion_actividad_header","ventana_descripcion_actividad_header"+id)
                    let ventana_descripcion_actividad_header_titulo = mkText(ventana_descripcion_actividad_header,"ventana_descripcion_actividad_header_titulo","ventana_descripcion_actividad_header_titulo"+id,"Información de Actividades "+titulo)
                    let ventana_descripcion_actividad_header_cerrar = mkObjImg(ventana_descripcion_actividad_header,"ventana_descripcion_actividad_header_cerrar","ventana_descripcion_actividad_header_cerrar"+id,"./vista/img/cerrar_ventana.png")
                        ventana_descripcion_actividad_header_cerrar.addEventListener("mouseup",function () {
                            hipercapa_temp.remove()
                            
                            // Crear una nueva URL eliminando '&actividades'
                            // var nuevaURL = window.location.href.replace('&actividades', '');

                            // Cambiar la URL y el título sin recargar la página
                            history.pushState({}, document.title, nuevaURL);
                            
                            // history.back()
                        })

                let ventana_descripcion_actividad_cuerpo = mkObj(ventana_descripcion_actividad,"ventana_descripcion_actividad_cuerpo","ventana_descripcion_actividad_cuerpo"+id)
                    let ventana_descripcion_actividad_cuerpo_fila_producto = mkObj(ventana_descripcion_actividad_cuerpo,"ventana_descripcion_actividad_cuerpo_fila","ventana_descripcion_actividad_cuerpo_fila_"+id)

                        let ventana_descripcion_actividad_cuerpo_fila_img = mkObjImg(ventana_descripcion_actividad_cuerpo_fila_producto,"ventana_descripcion_actividad_cuerpo_fila_img","ventana_descripcion_actividad_cuerpo_fila_img"+id,img_ruta)

                let ventana_descripcion_actividad_footer = mkObj(ventana_descripcion_actividad,"ventana_descripcion_actividad_footer","ventana_descripcion_actividad_footer"+id)
                    let ventana_descripcion_actividad_footer_contactos = mkTextList(ventana_descripcion_actividad_footer,"ventana_descripcion_actividad_footer_contactos","ventana_descripcion_actividad_footer_contactos"+id,
                        "Solicitar más informes por WhatsApp: 81 3101 0497 (click)",
                    )
                        ventana_descripcion_actividad_footer_contactos.addEventListener("mouseup",function () {
                            mandarMensajeWhats("8131010497","Informes acerca de "+titulo)
                        })


                function mandarMensajeWhats(phone,text) {
                    text = text.replace(/[\s]/g,"%20")
                    url = "https://wa.me/"
                    window.open(url+phone+"?text=[Mensaje automático de Portafolio]: "+text)
                }

                // Agregar evento para manipular el historial al cerrar la ventana
                window.addEventListener("popstate", function () {
                    if (hipercapa_temp) {
                        hipercapa_temp.remove();
                        // Crear una nueva URL eliminando '&actividades'
                        // var nuevaURL = window.location.href.replace('&actividades', '');

                        // Cambiar la URL y el título sin recargar la página
                        history.pushState({}, document.title, nuevaURL);
                        
                    }
                });

                // Modificar el historial al abrir la ventana
                history.pushState({ action: "open" }, null, "&actividades"); // Puedes personalizar la URL según tu necesidad

    })

    return obj_temp
}

                // TODO CALENDARIO

                function mkCalendario(n, c, i, t, input_fecha, ...filas) { // nodo clase id titulo fecha filas
                    n = n || "";c = c || "";i = i || "";t = t || "";input_fecha = input_fecha || "";
                    filas = filas || [];

                    let array_dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

                    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/; // dd-mm-aa
                    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/; // dd/mm/aa
                    let fecha_;let dia_;let dias_transcurridos;let lunes;let dates = [];

                    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000 milisegundos por dia

                    if (
                            input_fecha && 
                            (Date.parse(input_fecha) || 
                            expresion_regular_1.test(input_fecha) || 
                            expresion_regular_2.test(input_fecha))
                            
                        ) {

                        function mkFormatoInputFechaCalendario() {
                            if (expresion_regular_1.test(input_fecha)) {
                                let [d, m, y] = input_fecha.split("-").map(Number);
                                fecha_ = new Date(y, m - 1, d);

                            } else if (expresion_regular_2.test(input_fecha)) {
                                let [d, m, y] = input_fecha.split("/").map(Number);
                                fecha_ = new Date(y, m - 1, d);

                            } else {
                                fecha_=new Date(input_fecha)
                            }    
                        }
                        mkFormatoInputFechaCalendario()

                        
                        console.log("fecha: "+fecha_)

                        function mkFormatoIsoString() {
                            dia_ = fecha_.getDay()+1;
                            dias_transcurridos = dia_ === 0 ? 6 : dia_
                            lunes = new Date(fecha_.getTime() - (dias_transcurridos * milisegundos_dia) + milisegundos_dia);
                            martes = new Date(lunes.getTime() + milisegundos_dia)
                            miercoles = new Date(martes.getTime() + milisegundos_dia)
                            jueves = new Date(miercoles.getTime() + milisegundos_dia)
                            viernes = new Date(jueves.getTime() + milisegundos_dia)
                            sabado = new Date(viernes.getTime() + milisegundos_dia)
                            domingo = new Date(sabado.getTime() + milisegundos_dia)
                    
                            lunes.setUTCHours(0, 0, 0, 0)
                            martes.setUTCHours(0, 0, 0, 0)
                            miercoles.setUTCHours(0, 0, 0, 0)
                            jueves.setUTCHours(0, 0, 0, 0)
                            viernes.setUTCHours(0, 0, 0, 0)
                            sabado.setUTCHours(0, 0, 0, 0)
                            domingo.setUTCHours(0, 0, 0, 0)
                    
                            lunes = lunes.toISOString()
                            martes = martes.toISOString()
                            miercoles = miercoles.toISOString()
                            jueves = jueves.toISOString()
                            viernes = viernes.toISOString()
                            sabado = sabado.toISOString()
                            domingo = domingo.toISOString()
                        }

                        mkFormatoIsoString()

                    } else {
                        console.error("Formato de fecha incorrecto, revisa el formato: " + input_fecha)
                        return
                    }

                    dates.push(lunes,martes,miercoles,jueves,viernes,sabado,domingo)
                    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

                    let obj_temp = mkObj(n,c,i)
                        obj_temp.style.flexDirection="column"

                    for (let j = 0; j < filas.length + 1; j++) {
                        let element_j = filas[j]
                        let fila_calendario = div(c + "_fila", i + "_fila_" + filas[j-1]);
                        fila_calendario.setAttribute("date", input_fecha);
                        obj_temp.appendChild(fila_calendario);

                        for (let j_ = 0; j_ < array_dias.length + 1; j_++) {
                            let element_day = array_dias[j_]

                            let celda_calendario = div(c + "_celda", i + "_celda_" + array_dias[j_ - 1] + "_fila_" + filas[j - 1]+"_columna_"+array_dias[j_-1]);
                            if (j === 0 && j_ === 0) {  //ESQUINA
                                let p_titulo_table_celda_calendario = mkText(celda_calendario,"p_celda_titulo_"+c,"p_celda_titulo_"+i,t+"<br>"+meses[fecha_.getMonth()])
                                celda_calendario.setAttribute("class", c + "_celda_titulo_table");
                                celda_calendario.setAttribute("id", i + "_celda_titulo_table_");
                    
                            } else if (j === 0 && j_ > 0) { //HEADER
                                let dateCalendario = dates[j_-1].replace(/T00:00:00.000Z/,"")//;console.log(dateCalendario)
                                let [año,mes,dia]=dateCalendario.split("-")
                                dateCalendario=dia+" - "+meses[parseInt(mes-1)]
                                let p_head_table_celda_calendario = mkText(celda_calendario,"p_celda_head_"+c,"p_celda_head_"+i,array_dias[j_-1]+"<br>"+dateCalendario)
                                celda_calendario.setAttribute("class", c + "_celda_day");
                                celda_calendario.setAttribute("id", i + "_day_table" + "_celda_" + array_dias[j_ - 1] + "_" + j_);
                    
                            } else if (j > 0 && j_ === 0) { //COLUMNA PRINCIPAL
                                let p_columna_main_table_celda_calendario = mkText(celda_calendario,"p_columna_main_"+c,"p_columna_main_"+i,filas[j-1])
                                celda_calendario.setAttribute("class", c + "_celda_titulo_fila");
                                celda_calendario.setAttribute("id", i + "_celda_titulo_fila_main" + filas[j-1] + "_columna_main");
                            } else {                        //CONTENIDO TABLA
                                celda_calendario.setAttribute("date",dates[j_-1])
                                celda_calendario.setAttribute("id","cell_fila_"+filas[j-1]+"_columna_"+array_dias[j_-1])
                                celda_calendario.setAttribute("fila_name",filas[j - 1])
                    
                                peticionCategoriaFecha(celda_calendario,"./modelo/solicitudCeldaCalendario.php")

                                function peticionCategoriaFecha(obj,dir) {
                                    let ot_c = obj.getAttribute("class")
                                    let ot_i = obj.getAttribute("id")
                                    let ot_date = obj.getAttribute("date")
                                    let ot_r_name = obj.getAttribute("fila_name")
                                
                                    let formData = new FormData()
                                    formData.append("categoria",ot_r_name)
                                    formData.append("fecha",ot_date)
                                
                                    let peticionCellCalendario = new XMLHttpRequest()
                                    peticionCellCalendario.open("POST",dir)
                                    peticionCellCalendario.send(formData)
                                    peticionCellCalendario.onreadystatechange=function() {
                                        if (peticionCellCalendario.readyState==4&&peticionCellCalendario.status==200) {
                                            let res = peticionCellCalendario.response
                                            console.log(res)
                                            let obj_text = mkText(obj,"p_"+ot_c,"p_"+ot_i,res)
                                        }
                                    }
                                }
                                // celda_calendario.innerHTML="Registro dinámico"
                                let obj_text = mkText(celda_calendario,"p_","p_","Registro en bases de datos")

                    
                                celda_calendario.addEventListener("click",(x)=>{

                                let ventana_update_celda = mkObj(obj_temp,"ventana_update_celda_"+c,"ventana_update_celda_"+i)
                                    ventana_update_celda.innerHTML=""
                                    let header_update_celda = mkObj(ventana_update_celda,"header_update_celda","header_update_celda")
                                        let header_update_celda_titulo = mkText(header_update_celda,"header_update_celda_titulo","header_update_celda_titulo","Editar: "+celda_calendario.getAttribute("fila_name")+" | "+celda_calendario.getAttribute("date").replace("T00:00:00.000Z",""))
                                        let cerrar_ventana = mkObjImg(header_update_celda,"cerrar_ventana","cerrar_ventana","./vista/img/cerrar_ventana.png")
                                            cerrar_ventana.addEventListener("mouseup",function () {
                                                ventana_update_celda.remove()
                                            })
                                    let input_update_celda_titulo = mkObjTextarea(ventana_update_celda,"input_update_celda_"+c,"input_update_celda_titulo"+i,"Actualizar Celda")
                                    let input_update_celda_descripcion = mkObjTextarea(ventana_update_celda,"input_update_celda_"+c,"input_update_celda_descripcion"+i,"Actualizar Descripción")
                                    let btn_update_celda = mkObjButton(ventana_update_celda,"btn_update_celda","btn_update_celda","Actualizar Información")


                                    input_update_celda_titulo.querySelector("textarea").value = (celda_calendario.querySelector("p").innerHTML).replace(/<br>/g, '');
                                    input_update_celda_titulo.querySelector("textarea").focus()

                                        btn_update_celda.addEventListener("click",function () {
                                            let in_update_celda_titulo = input_update_celda_titulo.querySelector("textarea")
                                            let in_update_celda_descripcion = input_update_celda_descripcion.querySelector("textarea")

                                            let p_celda = celda_calendario.querySelector("p")
                                            console.log(p_celda)
                                            p_celda.innerHTML = input_update_celda_descripcion.value

                    
                                                // console.log(in_update_celda.value)

                                                let formData = new FormData()
                                                formData.append("titulo",encodeURIComponent(in_update_celda_titulo.value))
                                                formData.append("descripcion",encodeURIComponent(in_update_celda_descripcion.value))
                                                formData.append("categoria",celda_calendario.getAttribute("fila_name"))
                                                formData.append("fecha",celda_calendario.getAttribute("date"))
                    
                                                let peticion = new XMLHttpRequest()
                                                peticion.open("POST","./modelo/actualizarCeldaCalendario.php")
                                                peticion.send(formData)
                                                peticion.onreadystatechange=function() {
                                                    if (peticion.readyState==4&&peticion.status==200) {
                                                        let res = peticion.response
                                                        console.log(res)
                                                        if (verificarPeticion(res)) {
                                                            celda_calendario.innerHTML=""
                                                            peticionCategoriaFecha(celda_calendario,"./modelo/solicitudCeldaCalendario.php")
                                                            ventana_update_celda.remove()
                                                            celda_calendario.scrollIntoView()
                                                        } else {
                                                            console.log(res)
                                                        }
                                                    }
                                                }

                                        })

                            })
                        }
                        fila_calendario.appendChild(celda_calendario);


                    }
                    }
                    console.log(obj_temp)
                    return obj_temp
                }

function mkCarrusel(nodo,clase,id,...url_imagenes) {
    nodo = nodo || "";
    clase = clase || "";
    id = id || "";

    let carrusel = mkObj(nodo,clase,id)
    carrusel.style.flexDirection="column"
    carrusel.style.position="relative"

        let contenedor_imagenes = mkObj(carrusel,"contenedor_imagenes_"+clase,"contenedor_imagenes_"+id)
            url_imagenes.forEach(url => {
                console.log(url)
                let formato = url.split(".")[1]
                console.log(formato)
                if (formato==="png"||formato==="svg") {
                    let img = mkObjImg(contenedor_imagenes,"img_carrusel_"+clase,"img_carrusel_"+id,url)
                }
                if (formato==="mp4") {
                    let video = mkObjVideoLoop(contenedor_imagenes,"img_carrusel_"+clase,"img_carrusel_"+id,url)
                }
            });

        let contenedor_controles = mkObj(carrusel,"contenedor_controles_"+clase,"contenedor_controles_"+id)
        contenedor_controles.style.position="absolute"

            let btn_control_carrusel_anterior = mkObjButton(contenedor_controles,"btn_control_carrusel_"+clase,"btn_control_carrusel_anterior_"+id,"<")
            let btn_control_carrusel_siguiente = mkObjButton(contenedor_controles,"btn_control_carrusel_"+clase,"btn_control_carrusel_siguiente_"+id,">")
            btn_control_carrusel_siguiente.style.justifyContent="end"

            let imagenActual = 1;
            let numero_imagenes = url_imagenes.length
            let intervaloCarrusel;


            function cambiarImagen(direccion) {
                imagenActual += direccion;

                // Ajustar la imagen actual si se llega al límite
                if (imagenActual > numero_imagenes) {
                    imagenActual = 1;
                } else if (imagenActual < 1) {
                    imagenActual = numero_imagenes;
                }

                // Calcular la posición de la transformación
                let posicionTransform = -100 * (imagenActual - 1);
                contenedor_imagenes.style.transform = `translateX(${posicionTransform}%)`;
            }

            function iniciarIntervalo() {
                intervaloCarrusel = setInterval(() => cambiarImagen(1), 6000);
            }

            btn_control_carrusel_anterior.addEventListener('click', function () {
                cambiarImagen(-1);
                // clearInterval(intervaloCarrusel); // Detener el intervalo al hacer clic
                // iniciarIntervalo(); // Volver a iniciar el intervalo después de cambiar la imagen manualmente
            })
            btn_control_carrusel_siguiente.addEventListener('click', function () {
                cambiarImagen(1);
                // clearInterval(intervaloCarrusel); // Detener el intervalo al hacer clic
                // iniciarIntervalo(); // Volver a iniciar el intervalo después de cambiar la imagen manualmente
            })
}
function displayScroll(parentContainer) {
    var elements = Array.from(parentContainer.children);
    console.log(elements);

    elements.forEach(element => {
        element.style.transition = "opacity 1s";
        element.style.opacity = "0"; // Establecer la opacidad inicial en 0
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function checkVisibility() {
        elements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.opacity = "1"; // Cambiar la opacidad a 1 si está en la vista
            } else {
                element.style.opacity = "0"; // Cambiar la opacidad a 0 si está fuera de la vista
            }
        });
    }

    // Agregar evento de desplazamiento al contenedor
    parentContainer.addEventListener('scroll', checkVisibility);

    // Llamar a la función inicialmente para verificar elementos visibles al cargar la página
    checkVisibility();
}
