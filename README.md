# INICIO DE SESION



Se desarrolla un inicio de sesión 

#### NOTA: 	

```
La respuesta de si el inicio de sesión fue aprovada la puede ver en la consola del navegador:)
```



#### INSTALACIÓN

1. Para descargar Node.js ve a la siguiente página "[Download | Node.js (nodejs.org)](https://nodejs.org/en/download)".

2. Descarga la versión de Node.js correspondiente a su sistema operativo.

3. Clona este repositorio en tu máquina local.

   - https://github.com/JhonEduardAlmeidaHernandezCampus/Inicio-de-sesion-REACT.git

4. Abra la terminal y ejecute el siguiente comando

   ```
   cd Inicio-sesion
   ```

   

   1. Se va a parar dentro de la carpeta Inicio-sesion, ahí se encuentra el archivo package.json

5. Ejecuta el siguiente comando para instalar las dependencias:

   `NOTA:` Las dependencias a utilizar ya vienen dentro del proyecto, solo clone el repositorio y abra la terminal e ingrese el siguiente comando.

```
npm install;
```



#### PRUEBA

Para probar el proyecto abra la terminal y ejecute el siguiente comando 	

```
npm run dev
```

Ahora proceda a abrir otra terminal para levantar el servidor de petición a la api con el siguiente comando 	

```
npm run start
```

Una vez le arroje el link del servidor, proceda a entrar en el navegador y copiar el link o puede mantener la tecla de control presionado y darle click derecho en el enlace que le arroje en la terminal.

Una vez en el navegador se va a encontrar con el formulario, para probarlo abra la terminal del navegador de la siguiente manera 

 1. Click derecho en la ventana del navegador

 2. Dele en la opción de inspeccionar 

 3. Se le va a abrir el editor de código del navegador, busque un apartado que se llame `consola`

 4. proceda a probar el formulario con los siguientes datos 

    ```
    {
      "usuario": "jhon",
      "password": 123
    }
    ```

    **NOTA:** Puede ver la funcionalidad en consola del navegador, si el usuario o la contraseña son incorrectos le va a decir "Inicio de sesión fallido", de lo contrario le va a arrojar el mensaje de "Inicio de sesión exitoso"