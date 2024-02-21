import Image from "next/image";
import Link from "next/link";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10">
      <Link href="https://wa.link/dmr42e">
        <Image
          src="/images/whatsapp.png"
          alt="whatsapp"
          width={55}
          height={55}
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default WhatsappButton;
