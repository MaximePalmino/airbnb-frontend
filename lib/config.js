// lib/config.js
export const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
     dataset: "production",
     projectId: 'izr025pt',
     useCdn: process.env.NODE_ENV === "production",
  }