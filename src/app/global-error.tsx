"use client";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Something went wrong</h1>
          <button onClick={() => unstable_retry()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
