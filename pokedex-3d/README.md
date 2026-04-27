# PokéDex 3D

Una aplicación web interactiva que consume la PokéAPI para mostrar información de los primeros 50 Pokémon de Kanto, con una Pokéball 3D animada e interactiva.

## Tecnologías usadas

- **React + Vite** — Framework principal
- **PokéAPI** — API pública gratuita (https://pokeapi.co/)
- **Three.js / React Three Fiber** — Elemento 3D (Pokéball animada)
- **Axios** — Consumo de la API

## Funcionalidades

- Catálogo de 50 Pokémon en tarjetas con imagen, tipos y estadísticas
- Buscador en tiempo real por nombre
- Pokéball 3D animada e interactiva (puedes girarla con el mouse)
- Estados de carga y manejo de errores
- Diseño responsive adaptable a cualquier pantalla

## API utilizada

**PokéAPI** — https://pokeapi.co/

API pública y gratuita que provee información completa sobre Pokémon, incluyendo nombres, imágenes, tipos y estadísticas. No requiere autenticación.

Endpoints usados:
- `GET https://pokeapi.co/api/v2/pokemon?limit=50` — Lista de Pokémon
- `GET https://pokeapi.co/api/v2/pokemon/{id}` — Detalle de cada Pokémon

## Elemento 3D

Se integró una **Pokéball 3D** usando **React Three Fiber** (wrapper de Three.js para React). La bola:
- Rota automáticamente sobre su eje
- Es interactiva: el usuario puede girarla con el mouse (OrbitControls)
- Está compuesta por geometrías 3D reales (esferas y torus)

##  Cómo ejecutar el proyecto

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/pokedex-3d.git
cd pokedex-3d
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el proyecto:
```bash
npm run dev
```

4. Abre el navegador en `http://localhost:5173`