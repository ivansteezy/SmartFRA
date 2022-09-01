# **Coding Standard SmartFRA**

### ※ Archivos
- Los archivos generados manualmente deben ser nombrados con [*Pascal Case ó Upper Camel Case*]("https://es.wikipedia.org/wiki/Camel_case") seguido de su respectiva extensión, los nombres deben ser claros y descriptivos, por ejemplo:


    Correcto | Incorrecto
    ------------ | -------------
    StoreInventory.ts | StrInv.ts

- En el caso de utilizar los Angular los archivos generados deberán respetan el nombramiento default. En el caso de los que se generen manualmente, acatar al estandar.

### ※ Variables
- Las variables deben de tener nombres descriptivos teniendo una mayor prioridad la claridad del nombre que el tamaño del nombre.

- Entre más uso tenga una variable, más descriptivo deberá ser su nombre, por ejemplo:
    ```javascript
    for (const item of myCollection) {
        //do some stuff...
    }
    ```
    Es aceptable puesto a que ``` item ``` unicamente existirá dentro del [Scope](https://es.wikipedia.org/wiki/%C3%81mbito_(programaci%C3%B3n)) del bucle.

- Por lo que:

    ```javascript
        let usersInLocalDatabase = { 
            /* .. */
        }
    ```
    Es aceptable, puesto que es una variable que posiblemente será usada en más de un lugar.

- Para el uso de variables ```boolean``` se recomiendan los sufijos *is* o *has*.

- Se recomienda evitar a toda costa el uso de variables globales, en el caso de usar se debe utilizar el prefijo ```"global"``` seguido del nombre en notación [*Pascal Case ó Upper Camel Case*]("https://es.wikipedia.org/wiki/Camel_case") por ejemplo:
    ```javascript
    var globalGreetMessage = "Hola mundo!";

    function ShowGlobalMessage() {
        alert(globalGreetMessage);
    }
    ```

#### Nombramiento

### ※ Funciones / Variables
- Las funciones o métodos deben de tener nombres descriptivos teniendo una mayor prioridad la claridad del nombre que el tamaño del nombre.

- El nombre de una función debe entenderse como una acción.

- Al declarar una función o método se utilizará notación [*Pascal Case ó Upper Camel Case*]("https://es.wikipedia.org/wiki/Camel_case"): 
    ```javascript
    function DoVeryImportantTask() {
        //...
    }
    ```

- En el caso de que una función reciba argumentos, estos deberan usarse con notación [*Camel Case*]("https://es.wikipedia.org/wiki/Camel_case"), el mismo caso para las variables locales de una función, por ejemplo:
    ```javascript
    function GreetUser(userName) {
        let greetMessage = "Hola " + userName;
        //...
    }
    ```
- Para las variables y constantes se hara uso del camel case de la misma manera:
```javascript
    // Correct
    let currentDateTime: DateTime;
    let age: number;
    const imageDirectory = "images/";

    // Incorrect
    let currentdatetime: DateTime;
    let CurrentDateTime: DateTime;
    let AGE: number;
    const imagedirectory = "images/";

```
### ※ Idioma
- Todas las convenciones anteriormente mencionadas debes hacer uso del idioma **Inglés** sin ninguna excepción.


## **Formato de código.**
### ※ Identación
- La identación del código debe de ser de 4 espacios, Visual Studio y Visual Studio Code por defecto tienen esta identación al tabular el texto, una correcta identacion de código dberia verse tal que:

```javascript
function DoSomeImportantTask(isImportantValue) {
    if(isImportantValue == true) {
        for(let step = 0; step < 5; step++) {
            //...
        }
    }
}
```

### ※ Cierre y apertura de llaves
- Para el caso de codigo de Javascript o Typescript, hacer uso del _egyptian style_, es decir colocando la llave de apertura en la misma linea. 

```javascript
// Egyptian style
function GetAge(edad) {
    //...
}

// Non-egyptian style
function GetAge(edad) 
{
    //...
}
```
- Para el caso de C++, C# y demas C-type languages, conservaremos el _non egyptian style_, es decir haciendo un salto de linea antes de colocar la apertur de las llaves, por ejemplo: 

```cpp
float GetFormattedLocation(float xCoord, float yCoord) 
{
    //...
}
```

### ※ Funciones flecha (Javascript y Typescript)
- Unicamente se deberá rodear la lista de parámetros con ```( )``` si existe más de uno:

Incorrecto | 
-------- | 
```javascript
(x) => x + x;
```

- Cualquiera de estas opciones es correcta:

Correcto | 
-------- |
```javascript
x => x + x;

(x, y) => x + y;
```
#### Estilos
- Para identificar una clase CSS esta deberá estar escrita en kebab-case, ejemplo: bg-dark, cursor-pointer, text-center.

- Los identificadores HTML serán nombrados en PascalCase.

- Los estilos se aplicarán únicamente mediante clases e identificadores, prohibiendo el uso del atributo "style" en los elementos HTML.


#### Switch's Legibles:
- Cuando un bloque switch se vuelve grande, se convierte difícil de leer que es lo que hace especificamente cada caso, para casos como el mencionado se recomendará encapsular las tareas de cada caso en funciones (ya sean anónimas o definidas), es importante identificar que recursos se procesan en esos "bloques" ya que estos principalmente indican el argumento de las posibles funciones a encapsular y termina formalizando la limpieza en donde puedes leer facilmente los casos del switch e identificar que datos son los que se manejan.

Incorrecto | 
-------- | 
```javascript 
...
switch(value)
{
    case 'AddUserCase':
        let recentlyCreatedUser = {name,pass,email,rights};
        recentlyCreatedUser.name = "example";
        //... some magical stuff inbetwen
        elementList.add(recentlyCreatedUser);
        break;

    case 'DeleteUser':
        someArray.forEach(e =>{
            if(e.name == selectedUser.name)
                someArray.remove(e);
            });
        break;         
}
...
```

Correcto | 
-------- | 
```javascript 
let AddUser(elementList)
{
    let recentlyCreatedUser = {name,pass,email,rights};
    recentlyCreatedUser.name = "example";
    //... some magical stuff inbetwen
    elementList.add(recentlyCreatedUser);
}

let DeleteUser(someArray,userName)
{
    someArray.forEach(e =>{
        if(e.name == userName)
            someArray.remove(e);
    });
}

switch(value)
{
    case 'AddUser':
        AddUser(elementList);
        break;
    case 'DeleteUser':
        DeleteUser(elementList,selectedUser.name);
        break;         
}
```
## ※ Buenas practicas

- En el caso del desarrollo de anguar, abstraer toda la logica posible en servicios, no debera existir ningun tipo de logica de negocio en la los viewmodels, (archivos **.component.ts** en Angular), unicamente llamadas a dichos servicios.
