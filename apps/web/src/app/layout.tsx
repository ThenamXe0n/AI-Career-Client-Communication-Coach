import "./globals.css"
import {
  QueryProvider,
} from "@/shared/providers/query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-white">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}