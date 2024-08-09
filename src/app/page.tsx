import Form from "@/components/Form";
import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen min-w-full grid place-items-center p-8">
      <div className="flex flex-col items-center gap-16 mx-auto mb-8 relative">
        <Image width={160} height={160} src="/logo.webp" alt="Logo del City Hall de Los Santos" priority />
        <Form />
      </div>
    </div>
  );
}

export default HomePage;
