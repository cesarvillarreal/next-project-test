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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**SPA** Single-Page Application works by rendering and data fetching taking place in the browser itself.
This results in the First Contentful Paint (FCP) taking longer, affecting the user experience.

**SSR**
In contrast, SSR mitigates these issues by rendering the initial page in the server itself, reducing the time taken for FCP and vastlyimproving the user experience. However the page will not become interactive inmediately, and the browser needs to wait till it completes downloading the JS bundle to add interactivity.

**RSC React Server Component**
is a new way of doing server-side rendering by allowing developers to write components that run on the server and stream their output to the client.

Ins RSC, there are two types of components: server components, which can be rendered on the server, and client components, which are rendered on the browser. Server components can be defined as any component that doesn't involve user interactivity like a mouse click or keyboard input or use React hooks like the useState hook and the useEffect.


generateStaticParams es para generar paginas estaticas (que no cambian)


**Templates**

are the exact same as Layouts, except the do render every time a route changes. This is usefull for things like enter and exit animations and useEffect logic that happends on render.

Server component are regular functions that only return HTML
