export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
      <p className="text-muted-foreground">
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="mt-4 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/80"
      >
        Go Home
      </a>
    </div>
  );
}
