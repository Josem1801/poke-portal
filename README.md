# PokePortal

Desarrollo de una interfaz responsiva con Next.js y Tailwind, consumiendo la PokéAPI, integrando buscador, favoritos y secciones esenciales.

## 🚀 Características

- Explore Pokémon.
- Search by name.
- Save favorites.
- Clear sections.
- Responsive design.

## 🛠️ Tecnologías

- React
- Next.js
- Tailwind CSS
- Axios
- React Query
- React Hook Form
- Zustand
- [PokéAPI](https://pokeapi.co/api/v2/)

## 📋 Prerrequisitos

- Node.js (v18 o superior)
- Npm, Yarn o Pnpm
- Git

## 🏗️ Estructura del Proyecto

```
public/                   # Static assets
src/
├── app/                  # Next.js router
├── features/             # Specific app features
│   └── .../              # Feature name
│       └── components/   # Feature components
│       └── store/        # Zustand store
│       └── api/          # Api services
├── shared/               # Reusable and shared code
│       └── lib/          # Utility libraries and helper functions
│       └── hooks/        # Custom React hooks for shared logic
├── ui/                   # Global styles and themes
│   └── components/       # Reusable components
│   └── icons/            # JSX Icons
```

## 🔒 Características de Seguridad

- Almacenamiento local encriptado
- Validación y sanitización de entradas
- Rutas API protegidas

## 📊 Estructura de Datos

La aplicación utiliza una estructura de datos basada en árbol para la gestión de tareas, proporcionando:

- Organización eficiente de tareas
- Acceso rápido a tareas anidadas
- Actualizaciones de estado optimizadas

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🔗 Recursos

- [Next.js](https://nextjs.org/)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://zustand-demo.pmnd.rs)
- [React Hook Form](https://react-hook-form.com)
- [Tailwind](https://tailwindcss.com)
- [PokéAPI](https://pokeapi.co/api/v2/)
