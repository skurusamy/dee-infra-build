import "./globals.css";
import Header from "./view/layouts/Header";
import Footer from "./view/layouts/Footer";

export const metadata = {
  title: "DEE INFRA BUILDTEC",
  description: "We Build Your Needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth antialiased [text-rendering:optimizeLegibility]">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>     
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
