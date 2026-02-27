import "@/styles/globals.css";

export const metadata = {
  title: "Varun UD Portfolio",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

<html lang="en">

<body className="bg-black text-white overflow-x-hidden">

{children}

</body>

</html>

  );

}