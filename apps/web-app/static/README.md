# FamBot Web - Static Assets

This directory contains static assets for the FamBot web application.

## Contents

- `favicon.png` - Application favicon
- Icons, images, and other static resources

## Adding Assets

To add new static assets:

1. Place files in this directory
2. Reference them in your Svelte components using the path `/filename.ext`
3. For example: `<img src="/logo.png" alt="Logo" />`

## Build Process

During the build process, all files in this directory will be copied to the root of the built application and served directly by the web server.
