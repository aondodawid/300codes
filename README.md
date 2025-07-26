# 300codes

# Project Setup Guide

This document outlines the steps required to set up and run the full-stack application, including both the server (Strapi backend) and client (frontend) parts.

## 📁 1. Clone the Repository

Unpack or clone the repository into your desired directory:

```bash
git clone <repository-url> <target-folder>
cd <target-folder>
```

## Replace <repository-url> and <target-folder> with your actual values.

## 📦 2. Backend Setup (Strapi Server)

Navigate to the server directory:

```bash

cd server
```

Install Yarn (if not already installed)
Check if Yarn is installed:

```bash

yarn --version
```

If Yarn is not installed, install it globally via npm:

```bash

npm install --global yarn
```

Install Server Dependencies
Install all server dependencies using Yarn:

```bash

yarn install
```

---

### ⚙️ 3. Environment Configuration

Set up your environment variables:

Create a .env file in the server directory if it doesn't already exist.

Add the required environment variables (e.g. database connection, admin credentials, etc.).

## Refer to .env.example or project-specific documentation for the correct variables.

### 🔐 4. Access Strapi Admin Panel

Start the Strapi development server:

```bash

yarn develop
```

Once the server is running, open your browser and go to:

```bash

http://localhost:1337/admin
```

## Create your administrator account or log in using existing credentials.

### 🔓 5. Set Permissions in Strapi

Go to Settings → Roles → Public and enable the following permissions:

dashboard: find

globals: find

## Save the changes to apply updated access rules.

### 💻 6. Frontend Setup (Client)

Navigate to the client directory:

```bash

cd ../client
```

Install Client Dependencies
Use npm to install all frontend dependencies:

```bash

npm install
```

### 🚀 7. Start the Application

To run the frontend application:

```bash

npm run restart
```

This command will rebuild and start the development server.

✅ Summary
Step Description
✅ 1 Clone the repository
✅ 2 Navigate to server/ and install dependencies with Yarn
✅ 3 Configure environment variables in .env
✅ 4 Log in to Strapi Admin
✅ 5 Set public role permissions
✅ 6 Navigate to client/ and install dependencies
✅ 7 Run the frontend app using npm run restart

💡 Make sure both the backend (Strapi) and frontend servers are running simultaneously for full functionality.

---

```

```
