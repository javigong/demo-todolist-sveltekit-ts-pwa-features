# SvelteKit Todo List: an SvelteKit PWA demo

A simple SvelteKit Todo List app that works as a Progressive Web App (PWA) and can function offline

🔗 [Open live Demo](https://demo-todolist-sveltekit-ts-pwa-features.vercel.app/)

## Tech Stack

- TypeScript
- SvelteKit
- Svelte/Store
- PWA

## Features

- List/Add/Remove Todos. 
- Service worker configured to cache the built app and any files in static eagerly, and cache all other requests as they happen. This would make each page work offline once visited.

## Screenshots

<img width="1226" alt="Screen Shot 2023-12-20 at 5 32 17 PM" src="https://github.com/javigong/demo-todolist-sveltekit-ts-pwa-features/assets/42308135/e02e9aef-3f4b-4d5b-bbce-fce375aa78c2">
<img width="750" alt="Screen Shot 2023-12-20 at 5 28 29 PM" src="https://github.com/javigong/demo-todolist-sveltekit-ts-pwa-features/assets/42308135/5144ab51-31a2-4aa7-9b6f-8de46d9f4cde">
<img width="750" alt="Screen Shot 2023-12-20 at 5 29 53 PM" src="https://github.com/javigong/demo-todolist-sveltekit-ts-pwa-features/assets/42308135/ff1f1107-5414-4664-b456-3c4bc806a7b9">

## Installation

First, clone the project and open it with Visual Studio Code:

```bash
git clone https://github.com/javigong/demo-todolist-sveltekit-ts-pwa-features.git

cd demo-todolist-sveltekit-ts-pwa-features

code .
```

Finally, install the npm dependencies and run the application:

```bash
npm install

npm run dev
```

Now the application is running on http://localhost:5173 🚀

## Deployment details

SvelteKit Todo List deployed using Vercel: 

[https://demo-todolist-sveltekit-ts-pwa-features.vercel.app/](https://demo-todolist-sveltekit-ts-pwa-features.vercel.app/)

