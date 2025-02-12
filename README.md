# Blog App Monorepo

This is a monorepo setup for a blog application using **NestJS** (backend) and **Next.js** (frontend). The project is managed with **Turbo** and **pnpm workspaces** for efficient dependency management and development workflows.

## 📂 Project Structure

```
blog-app/
│── apps/
│   │── backend/   # NestJS application
│   │── frontend/  # Next.js application
│── package.json   # Global package.json
│── pnpm-lock.yaml # Lockfile for dependencies
│── turbo.json     # Turbo configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS version recommended)
- **pnpm** (v9.15.4)
- **Turbo** (installed as a dev dependency)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/blog-app.git
cd blog-app
pnpm install
```

### Development

To start the development servers for all apps:

```sh
pnpm dev
```

Alternatively, you can run specific apps:

```sh
pnpm turbo run dev --filter=backend
pnpm turbo run dev --filter=frontend
```

### Building the Project

To build all apps:

```sh
pnpm build
```

### Linting

```sh
pnpm lint
```

## 🛠 Tech Stack

- **Backend:** NestJS
- **Frontend:** Next.js
- **Package Manager:** pnpm
- **Monorepo Management:** Turbo

## 📜 License

This project is licensed under the **ISC License**.

---

Feel free to customize this README based on your project needs! 🚀
