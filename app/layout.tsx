import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-neutral-900 text-white">
        <Navbar />
        <div
          id="page-top-spacer"
          className="h-12 bg-gradient-to-t from-transparent to-neutral-800"
        ></div>
        {children}
        <div id="page-bottom-spacer" className="h-16"></div>
      </body>
    </html>
  );
}
