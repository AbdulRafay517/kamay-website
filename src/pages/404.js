// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        404 - Page Not Found
      </h1>
      <Link href="/">
        <a className="text-primary hover:text-secondary transition-colors">
          Return to KAMAY Solutions
        </a>
      </Link>
    </div>
  );
}