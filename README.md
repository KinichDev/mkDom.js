### Función: `div(c, i, inner)`

Crea y devuelve una nueva etiqueta `div` con las siguientes características:

- **Parámetros:**
  - `c` (opcional): Clase de la etiqueta `div`.
  - `i` (opcional): ID de la etiqueta `div`.
  - `inner` (opcional): Contenido interno (innerHTML) de la etiqueta `div`.

- **Uso:**
  ```javascript
  let nuevaDiv = div("miClase", "miID", "Contenido Interno");
  ```

---

### Función: `mkObj(n, obj_class, obj_id, inner)`

Crea un nuevo objeto `div` y lo añade como hijo al nodo proporcionado. Tiene las siguientes características:

- **Parámetros:**
  - `n`: Nodo al que se añadirá el objeto `div`.
  - `obj_class` (opcional): Clase del objeto `div`.
  - `obj_id` (opcional): ID del objeto `div`.
  - `inner` (opcional): Contenido interno (innerHTML) del objeto `div`.

- **Uso:**
  ```javascript
  let nuevoObj = mkObj(document.body, "miClase", "miID", "Contenido Interno");
  ```

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

### Función: `verImg(nodo, clase, id)`

Visualiza una imagen en una pestaña emergente. Tiene las siguientes características:

- **Parámetros:**
  - `nodo` (opcional): Nodo al que se añadirá la pestaña emergente.
  - `clase` (opcional): Clase de la pestaña emergente.
  - `id` (opcional): ID de la pestaña emergente.

- **Uso:**
  ```javascript
  verImg(document.body, "miClase", "miID");
  ```

...

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
