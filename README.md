

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/salomontillaUni/landing_negocios_gastronomicos.git

# Step 2: Navigate to the project directory.
cd landing_negocios_gastronomicos

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.


## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase

## Supabase Local Development

To manage your database and services locally, you can use the Supabase CLI.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/) installed and running.

### Common Commands

```sh
# Start Supabase locally
npx supabase start

# Link to your remote project
npx supabase link --project-ref <project-id>

# Pull the remote schema to your local environment
npx supabase db pull

# Push local database migrations to the remote project
npx supabase db push

# Stop Supabase
npx supabase stop
```
```
