import CloneBanner from "@/components/CloneBanner";
import FreeDeliveryBanner from "@/components/FreeDeliveryBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-white">
      <CloneBanner />
      <FreeDeliveryBanner />
      <div className="flex items-center justify-center h-full w-full">
        <Image
          className="animate-pulse"
          src="/logo.webp"
          alt="Fruitoholic logomark"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
