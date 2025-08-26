import "./globals.css";
import Header from "./view/layouts/Header";
import Footer from "./view/layouts/Footer";

export const metadata = {
  title: "DEE INFRA BUILDTEC",
  description: "We Build Your Needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased text-gray-900">
        <Header />
        {/* no container here — sections decide their own width */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
