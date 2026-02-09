import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import * as React from "react";
import Navbar from "./components/Navbar";
import BlackRibbon from "./components/BlackRibbon";
import Footer from "./components/Footer";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <BlackRibbon />
        <Navbar />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ClientReduxProvider>
      <Outlet />
    </ClientReduxProvider>
  );
}

// Client-only Redux Provider wrapper to prevent SSR hydration issues
function ClientReduxProvider({ children }: { children: React.ReactNode }) {
  // Lazy load Redux Provider and store to ensure it's only used on the client
  const [ReduxProvider, setReduxProvider] = React.useState<typeof import("react-redux").Provider | null>(null);
  const [reduxStore, setReduxStore] = React.useState<typeof import("./store").store | null>(null);

  React.useEffect(() => {
    // This only runs on the client
    import("react-redux").then((module) => {
      setReduxProvider(() => module.Provider);
    });
    import("./store").then((module) => {
      setReduxStore(module.store);
    });
  }, []);

  // During SSR or before Redux loads, render children without Redux.
  // Components using Redux hooks should handle the case where the store is not available.
  if (!ReduxProvider || !reduxStore) {
    return <>{children}</>;
  }

  return <ReduxProvider store={reduxStore}>{children}</ReduxProvider>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
