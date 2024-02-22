import Link from "next/link";

import { SiWhatsapp } from "react-icons/si";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 md:hidden z-10">
      <Link href="https://wa.link/dmr42e" target="_blank">
        <SiWhatsapp className="rounded-lg text-[2.7rem] bg-[#8ABC3A] p-[6px]" />
      </Link>
    </div>
  );
};

export default WhatsappButton;
