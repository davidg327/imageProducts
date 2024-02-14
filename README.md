Pasos para descargar el proyecto e instalar en un celular android.
# Para empezar

## Paso 1: Descargar proyecto

Debe clonar el proyecto con git clone bien sea por HTTPS o SHH,
ya depende de la configuración que tenga


```bash
# git clone HTTPS
git clone https://github.com/davidg327/imageProducts.git

# git clone SSH
git clone git@github.com:davidg327/imageProducts.git
```

## Paso 2: Instalar librerias

Una vez el repositorio este en el equipo ir al archivo desde la terminal
y ejecutar npm install

## Paso 3: Limpiar build de android

No es obligatorio pero siempre lo hago para que no tenga errores del 
proyecto, ejecuto el siguiente comando desde la carpeta de android en 
la terminal

```bash
## cd android
./gradlew clean
```

## Paso 4: Correr aplicación en emulador

Si desea correr la aplicación en el emulador de android studio ejecutar
el siguiente comando

```bash
## iniciar metro
   npm start
## correr en el emulador dos opciones
## primera opción en la terminal que se creo de metro
  a
## segunda opción en una terminal diferente
  react-native run-android
```

## Paso 5: Crear como apk

Si desea crear una apk para probar en varios celulares sin tener 
que conectarlo al pc, lo hace de la siguiente manera

```bash
## cd android
   ./gradlew clean
   ./gradlew assembleRelease
```

## Gracias!
