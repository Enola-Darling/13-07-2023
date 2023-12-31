This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


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