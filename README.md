# 🧩 PokePortal – Pokémon Explorer
PokePortal is a responsive Pokémon explorer with search, favorites, and details powered by PokeAPI.

## 🚀 Requirements

Make sure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm**

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pokeportal.git
cd pokeportal

# Install dependencies
npm install

## ⚙️ Set Environment Variables
## Copy the example env file and customize your variables with:
## https://pokeapi.co/api/v2/

cp .env.example .env.local

# Start server
npm run dev
```

## 🚀 Features

- Explore Pokémon.
- Search by name.
- Save favorites.
- Clear sections.
- Responsive design.

## 🛠️ Technologies

- React
- Next.js
- Tailwind CSS
- Axios
- React Query
- React Hook Form
- Zustand
- [PokéAPI](https://pokeapi.co/api/v2/)

## 🏗️ Project Structure

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
│       └── config/       # Global config (axios, env, etc)
│       └── helpers/      # Utility libraries and helper functions
│       └── hooks/        # Custom React hooks for shared logic
│       └── provideres/   # Providers configuration
├── ui/                   # Global styles and themes
│   └── core/             # Reusable components
│       └── components/   # Reusable small components
│   └── icons/            # JSX Icons
```

## 🔗 Resources

- [Next.js](https://nextjs.org/)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://zustand-demo.pmnd.rs)
- [React Hook Form](https://react-hook-form.com)
- [Tailwind](https://tailwindcss.com)
- [PokéAPI](https://pokeapi.co/api/v2/)

## 📝 License

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
