<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Git & Deployment Rules
1. **Main Branch Only**: Always work on the `main` branch. Avoid using `master`.
2. **Auto-Deploy**: The repository is configured with GitHub Actions for deployment. Every push to `main` triggers a build and deploy.
3. **Next Config**: Never remove `basePath: '/portfolio'` or `output: 'export'` from `next.config.ts`, as they are essential for GitHub Pages.
4. **Push after changes**: After completing a task, always commit and push the changes to `origin main` so the user doesn't have to use the terminal.
<!-- END:nextjs-agent-rules -->

