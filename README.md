# Figma Mockup Project

This is a React+Vite based frontend project imported from a Figma mockup.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

Push the code to a GitHub repository, then connect the repository to Vercel. Vercel will:

- Detect the project as a Vite app
- Install dependencies with `npm install`
- Build using `npm run build`
- Serve the output from the `dist/` directory

You can optionally add a `vercel.json` configuration for custom settings.

```json
{
  "builds": [
    { "src": "package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

Ensure you set the project’s Node version in `engines` if required.
