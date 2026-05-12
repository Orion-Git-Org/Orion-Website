# Orion Website

Website for [ORION](https://www.orion-org.net)

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
3. Run the app:
   `npm run dev`

## Deployment

The waitlist form posts to Web3Forms from the client bundle. Before building on Netlify, add this environment variable in **Site configuration > Environment variables**:

`VITE_WEB3FORMS_ACCESS_KEY`

After adding or changing it, trigger a fresh deploy so Vite bakes the value into the production build.
