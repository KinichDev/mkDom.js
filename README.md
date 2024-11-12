
---

## Función: `div(c, i, inner)`

#### Descripción:
La función `div` crea un elemento HTML de tipo `<div>`. Acepta tres parámetros opcionales: `c` (para la clase), `i` (para el id) e `inner` (para el contenido HTML interno del `<div>`). Si no se proporcionan valores para los parámetros, se dejan vacíos.

#### Parámetros:
1. **`c`** (opcional):  
   - Tipo: `string`
   - Descripción: Define la clase CSS que se asignará al `<div>`. Si no se proporciona, no se asigna ninguna clase.
   
2. **`i`** (opcional):  
   - Tipo: `string`
   - Descripción: Define el id que se asignará al `<div>`. Si no se proporciona, no se asigna ningún id.

3. **`inner`** (opcional):  
   - Tipo: `string`
   - Descripción: Define el contenido HTML que se insertará dentro del `<div>`. Si no se proporciona, el contenido del `<div>` será vacío.

#### Valor de retorno:
- Retorna el elemento `<div>` generado, con los atributos y el contenido especificados (si se proporcionaron).

#### Comportamiento:
- Si algún parámetro no es proporcionado, el valor predeterminado será una cadena vacía (`""`).
- Si los valores de los parámetros son cadenas vacías, el `div` no se les asignará una clase, id ni contenido.
- El elemento `<div>` se crea usando `document.createElement('div')`, y se le asignan los atributos correspondientes si se especifican.

#### Ejemplo de uso:

```javascript
// Crear un div con clase, id y contenido
let div1 = div("mi_clase", "mi_id", "<p>Hola mundo</p>");
document.body.appendChild(div1);

// Crear un div solo con clase
let div2 = div("mi_clase");
document.body.appendChild(div2);

// Crear un div sin atributos ni contenido
let div3 = div();
document.body.appendChild(div3);
```

#### Detalles adicionales:
- La función asegura que los parámetros se asignen correctamente solo si se les da un valor distinto de una cadena vacía.
- Esta función es útil cuando se necesita crear un `<div>` dinámicamente con atributos específicos, y puede ser extendida para incluir más atributos si fuera necesario.
<!-- // -->
--- 
---
---
---
---
---

## Función: `mkObj(n, obj_class, obj_id, inner)`

#### Descripción:
La función `mkObj` crea un objeto HTML dentro de un nodo especificado, al que se le asignan una clase, un id y un contenido interno opcionales. Utiliza la función `div` (previamente definida) para crear un `<div>` y luego lo agrega como un hijo del nodo proporcionado (`n`).

#### Parámetros:
1. **`n`**:
   - Tipo: `HTMLElement`
   - Descripción: El nodo (elemento HTML) al que se agregará el objeto `<div>`. Este parámetro es obligatorio.

2. **`obj_class`** (opcional):
   - Tipo: `string`
   - Descripción: Define la clase CSS que se asignará al `<div>` creado. Si no se proporciona, no se asigna ninguna clase.

3. **`obj_id`** (opcional):
   - Tipo: `string`
   - Descripción: Define el id que se asignará al `<div>` creado. Si no se proporciona, no se asigna ningún id.

4. **`inner`** (opcional):
   - Tipo: `string`
   - Descripción: Define el contenido HTML que se insertará dentro del `<div>`. Si no se proporciona, el contenido del `<div>` será vacío.

#### Valor de retorno:
- Retorna el elemento `<div>` creado y agregado al nodo `n`, con los atributos y el contenido especificados (si se proporcionaron).

#### Comportamiento:
- Si algún parámetro no es proporcionado, se establece como cadena vacía (`""`).
- La función `mkObj` hace uso de la función `div` para crear un `<div>` con los atributos especificados (si los hay).
- El `<div>` generado es luego añadido como un hijo del nodo `n` usando el método `appendChild`.

#### Ejemplo de uso:

```javascript
// Crear un div dentro de un nodo con clase, id y contenido
let contenedor = document.getElementById("contenedor");
let obj1 = mkObj(contenedor, "mi_clase", "mi_id", "<p>Hola Mundo</p>");

// Crear un div dentro de un nodo solo con clase
let obj2 = mkObj(contenedor, "mi_clase");

// Crear un div vacío dentro de un nodo
let obj3 = mkObj(contenedor);
```

#### Detalles adicionales:
- Esta función es útil cuando se quiere agregar dinámicamente un nuevo objeto `<div>` a un nodo ya existente, y permite especificar los atributos del div, como la clase, el id y el contenido interno.
- Si no se especifican valores para `obj_class`, `obj_id` o `inner`, los valores predeterminados serán cadenas vacías, lo que hace que el `<div>` se cree sin esos atributos.

---
---
---
---
---

### Función: `img(c, i, src)`

Crea y devuelve una nueva etiqueta `img` con las siguientes características:

- **Parámetros:**
  - `c` (opcional): Clase de la etiqueta `img`.
  - `i` (opcional): ID de la etiqueta `img`.
  - `src` (opcional): URL de la imagen.

- **Uso:**
  ```javascript
  let nuevaImagen = img("miClase", "miID", "ruta/imagen.jpg");
  ```

---
---
---
---
---

### Función: `mkObjImg(n, img_class, img_id, src_)`

Crea un nuevo objeto `div` que contiene una imagen y lo añade al nodo proporcionado. Tiene las siguientes características:

- **Parámetros:**
  - `n`: Nodo al que se añadirá el objeto `div`.
  - `img_class` (opcional): Clase de la imagen.
  - `img_id` (opcional): ID de la imagen.
  - `src_` (opcional): URL de la imagen.

- **Uso:**
  ```javascript
  let nuevoObjImg = mkObjImg(document.body, "miClase", "miID", "ruta/imagen.jpg");
  ```

---
---
---
---
---
### Función: `verImg(nodo, clase, id)`

#### Descripción:
La función `verImg` permite visualizar una imagen en una ventana emergente (popup) dentro de la misma página web. La imagen seleccionada se muestra en una "ventana" que se crea dinámicamente dentro de un nodo específico de la página. Además, modifica el enlace en el navegador para incluir un hash con el nombre del archivo de la imagen.

#### Parámetros:
1. **`nodo`** (opcional):
   - Tipo: `HTMLElement` o `string`
   - Descripción: El nodo (elemento HTML) donde se insertará la ventana de la imagen. Si no se especifica, se usa el cuerpo del documento (`body`) como valor predeterminado.

2. **`clase`** (opcional):
   - Tipo: `string`
   - Descripción: La clase CSS que se asignará a los elementos dentro de la ventana emergente. Se utiliza para dar estilo a la ventana y sus componentes. Si no se especifica, se usará una cadena vacía como valor predeterminado.

3. **`id`** (opcional):
   - Tipo: `string`
   - Descripción: El id único que se asignará a los elementos dentro de la ventana emergente. Si no se especifica, se usará una cadena vacía como valor predeterminado.

#### Comportamiento:
1. **Identificación de la imagen**: La función obtiene la imagen que fue clickeada a través de `event.target` y extrae su atributo `src` (la URL de la imagen).
2. **Creación de la ventana emergente**: 
   - Se verifica si ya existe una capa (hipercapa) previa para evitar duplicados. Si existe, se elimina.
   - Se crea una nueva capa (`mk_hipercapa_img`) que cubre toda la pantalla, y dentro de ella se crea un contenedor para la imagen (`mk_ventana_img`).
   - Se genera un encabezado para la ventana que incluye el nombre de la imagen (extraído de su URL) y un botón de cierre.
3. **Botón de Cierre**: Se agrega un botón que permite cerrar la ventana emergente al hacer clic, y se actualiza el historial del navegador para eliminar el hash de la URL.
4. **Imagen**: La imagen original seleccionada se inserta en la ventana emergente.
5. **Modificación de URL**: Se actualiza el historial del navegador utilizando `history.pushState()` para reflejar el hash de la imagen visualizada.

#### Valor de retorno:
- La función no retorna un valor específico. Modifica el DOM directamente agregando una ventana emergente con la imagen seleccionada.

#### Ejemplo de uso:

```javascript
// Suponiendo que hay una imagen en la página con el id "myImage"
let imageElement = document.getElementById("myImage");
imageElement.addEventListener("click", function(event) {
    verImg(event.target, "ventana-imagen", "img01");
});
```

En este ejemplo, al hacer clic en la imagen, la función `verImg` es llamada y visualiza la imagen en una ventana emergente.

#### Detalles adicionales:
- **Estilos**: Los estilos de la ventana emergente y sus elementos (como el encabezado, la imagen y el botón de cierre) dependen de las clases proporcionadas en los parámetros `clase` e `id`. Es recomendable definir estilos CSS personalizados para estos elementos.
- **Compatibilidad con el navegador**: La función utiliza `history.pushState()` y `history.replaceState()` para modificar el historial del navegador y reflejar el estado de la imagen visualizada, lo que permite a los usuarios navegar hacia atrás y hacia adelante sin recargar la página.


---
---
---
---
---


### Función: `input(c, i, p)`

Crea y devuelve una nueva etiqueta `input` con las siguientes características:

- **Parámetros:**
  - `c` (opcional): Clase de la etiqueta `input`.
  - `i` (opcional): ID de la etiqueta `input`.
  - `p` (opcional): Placeholder del input.

- **Uso:**
  ```javascript
  let nuevoInput = input("miClase", "miID", "Placeholder");
  ```

---

### Función: `textarea(c, i, p)`

Crea y devuelve una nueva etiqueta `textarea` con las siguientes características:

- **Parámetros:**
  - `c` (opcional): Clase de la etiqueta `textarea`.
  - `i` (opcional): ID de la etiqueta `textarea`.
  - `p` (opcional): Placeholder del textarea.

- **Uso:**
  ```javascript
  let nuevoTextarea = textarea("miClase", "miID", "Placeholder");
  ```

---

### Función: `mkObjDatalist(n, c, i, ...elementos)`

Crea un nuevo objeto `datalist` y lo añade al nodo proporcionado. Tiene las siguientes características:

- **Parámetros:**
  - `n`: Nodo al que se añadirá el objeto `datalist`.
  - `c` (opcional): Clase del objeto `datalist`.
  - `i` (opcional): ID del objeto `datalist`.
  - `elementos`: Lista de elementos para el datalist.

- **Uso:**
  ```javascript
  mkObjDatalist(document.body, "miClase", "miID", "Elemento1", "Elemento2", "Elemento3");
  ```

---

### Función: `mkObjInput(nodo, c, i, type, t, p, f, s, color)`

Crea un nuevo objeto `input` y lo añade al nodo proporcionado. Tiene las siguientes características:

- **Parámetros:**
  - `nodo`: Nodo al que se añadirá el objeto `input`.
  - `c` (opcional): Clase del objeto `input`.
  - `i` (opcional): ID del objeto `input`.
  - `type`: Tipo del input (e.g., "text", "number").
  - `t` (opcional): Título del input.
  - `p` (opcional): Placeholder del input.
  - `f` (opcional): Fuente del texto.
  - `s` (opcional): Tamaño del texto.
  - `color` (opcional): Color del texto.

- **Uso:**
  ```javascript
  mkObjInput(document.body, "miClase", "miID", "text", "Título", "Placeholder", "Arial", "14px", "#000");
  ```

...

### Función: `mkObjInputPassword(nodo, c, i, t, p, url)`

Crea un nuevo objeto `input` de tipo contraseña con un botón de visualización y lo añade al nodo proporcionado. Tiene las siguientes características:

- **Parámetros:**
  - `nodo`: Nodo al que se añadirá el objeto `input`.
  - `c` (opcional): Clase del objeto `input`.
  - `i` (opcional): ID del objeto `input`.
  - `t` (opcional): Título del input.
  - `p` (opcional): Placeholder del input.
  - `url`: URL de la imagen del botón de visualización de contraseña.

- **Uso:**
  ```javascript
  mkObjInputPassword(document.body, "miClase", "miID", "Título", "Placeholder", "ruta/imagen.png");
  ```

---

### Función: `mkObjTextarea(nodo, c, i, t, p)`

Crea un nuevo objeto `textarea` y lo añade al nodo proporcionado. Tiene las siguientes características:

- **Parámetros:**
  - `nodo`: Nodo al que se añadirá el objeto `textarea`.
  - `c` (opcional): Clase del objeto `textarea`.
  - `i` (opcional): ID del objeto `textarea`.
  - `t` (opcional): Título del textarea.
  - `p` (opcional): Placeholder del textarea.

- **Uso:**
  ```javascript
  mkObjTextarea(document.body, "miClase", "miID", "Título", "Placeholder");
  ```

---

### Función: `button(c, i, inner)`

Crea y devuelve una nueva etiqueta `button` con las siguientes características:

- **Parámetros:**
  - `c` (opcional): Clase de la etiqueta `button`.
  - `i` (opcional): ID de la etiqueta `button`.
  - `inner` (opcional): Contenido interno (innerHTML) de la etiqueta `button`.

- **Uso:**
  ```javascript
  let nuevoBoton = button("miClase", "miID", "Contenido Interno");
  ```

---

### Función: `mkObjButton(nodo, c, i, inner, event)`

Crea un nuevo objeto `button` y lo añade al nodo proporcionado. Tiene las siguientes características:

- **Parámetros:**
  - `nodo`: Nodo al que se añadirá el objeto `button`.
  - `c` (opcional): Clase del objeto `button`.
  - `i` (opcional): ID del objeto `button`.
  - `inner` (opcional): Contenido interno (innerHTML) del objeto `button`.
  - `event` (opcional): Evento asociado al botón.

- **Uso:**
  ```javascript
  mkObjButton(document.body, "miClase", "miID", "Contenido Interno", function() { /* Código del evento */ });
  ```
  
---
