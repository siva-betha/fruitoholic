import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
     <Image
              className=""
              src="/logo.webp"
              alt="Fruitoholic logomark"
              width={300}
              height={300}
            /> 
    </div>
  );
}
