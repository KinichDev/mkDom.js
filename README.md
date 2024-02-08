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

(Continúa con la documentación detallada de las demás funciones)
