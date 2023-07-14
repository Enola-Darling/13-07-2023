This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
#   1 3 - 0 7 - 2 0 2 3 
 
 


Client-Side Rendering (CSR):

    L'esecuzione avviene principalmente sul lato client (navigatore/web browser).
    La pagina viene inizialmente caricata con un HTML vuoto o di base.
    Il caricamento dei dati e la generazione del contenuto avvengono sul lato client utilizzando JavaScript.
    Dopo il caricamento iniziale, il client richiede i dati e li inserisce nel HTML, rendendo dinamico il contenuto della pagina.
    I motori di ricerca possono incontrare difficoltà nell'indicizzare correttamente il contenuto, poiché la generazione avviene dopo il caricamento iniziale.

Server-Side Rendering (SSR):

    L'esecuzione avviene principalmente sul lato server.
    La pagina viene generata completamente sul lato server con i dati richiesti.
    Il server restituisce il markup HTML completo al client, comprensivo di tutto il contenuto dinamico.
    Il contenuto è disponibile immediatamente al caricamento della pagina, poiché è stato generato dal server.
    I motori di ricerca possono indicizzare facilmente tutto il contenuto, poiché è presente nel markup HTML iniziale.