# 🐾 MeowPedia

MeowPedia es una aplicación móvil desarrollada con **Ionic Angular** que permite explorar información sobre razas de gatos utilizando [TheCatAPI](https://thecatapi.com/).  
Su objetivo es brindar a los amantes de los felinos una experiencia sencilla y atractiva para conocer características, fotos y datos curiosos de cada raza.

---

## 📱 Tecnologías utilizadas

- [Ionic Framework](https://ionicframework.com/) + [Angular](https://angular.io/)  
- [Capacitor](https://capacitorjs.com/) para integraciones nativas  
- [TheCatAPI](https://thecatapi.com/) como fuente de datos  

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/ZALETHDEV/MeowPedia
cd meowpedia
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Levantar en modo desarrollo
```bash
ionic serve
```
La aplicación se abrirá en el navegador en `http://localhost:8100/`.

---

## 📦 Compilación para dispositivos

### Android
```bash
ionic build
npx cap sync android
npx cap open android
```

### iOS
```bash
ionic build
npx cap sync ios
npx cap open ios
```

> ⚠️ Necesitas Android Studio o Xcode instalados según la plataforma.

---

## ✨ Funcionalidades principales

- 🔍 Buscar y filtrar razas de gatos  
- 📊 Ver estadísticas de cada raza (energía, inteligencia, adaptabilidad, etc.)  
- 🖼️ Visualizar imágenes asociadas a las razas  
- ❤️ Interfaz amigable y responsiva  

---

## 📂 Estructura del proyecto

```
src/
 ├── app/                # Módulos y configuración principal
 ├── pages/              # Páginas de la aplicación (Home, Detalles, etc.)
 ├── services/           # Servicios (ej: conexión a TheCatAPI)
 └── assets/             # Recursos estáticos (íconos, imágenes, estilos)
```

---
## ✍️ Autor

Desarrollado con ❤️ por **Zaleth Mata**  

---
## 🐱 Créditos

- Datos: [TheCatAPI](https://thecatapi.com/)  
- Framework: [Ionic](https://ionicframework.com/)  
---


