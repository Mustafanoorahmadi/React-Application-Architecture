import { ReactNode } from "react";

export default function StudentLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <aside className="bg-gray-500 w-80 flex justify-center items-center" />
      <main>{children}</main>
    </>
  );
}
