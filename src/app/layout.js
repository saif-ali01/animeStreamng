import "./globals.css";
import Sidebar from "./component/sidebar/Sidebar";
import Head from "next/head";
import Footer from "./component/footer/footer";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400;1,900&family=Protest+Revolution&family=Roboto:ital,wght@0,100;0,500;0,700;0,900;1,100;1,400;1,500;1,900&display=swap" rel="stylesheet" />
      </Head>
      <body className="flex h-screen ">
        {/* Sidebar - Hide on Mobile */}
        <div className="w-[15vw] h-screen fixed left-0 top-0  ">
          <Sidebar />
        </div>

        {/* Main Content - Adjust Width on Mobile */}
        <div className="flex-1 lg:ml-[15vw] w-full lg:w-[85vw] sm:ml-[100px] overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
