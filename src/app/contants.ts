import { FaFacebookF, FaInstagram, FaMobileAlt } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const constants = {
  routes: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "FAQs",
      link: "/faqs",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ],
  social: [
    {
      img: FaFacebookF,
      link: "https://facebook.com",
      color: "#194DA8",
    },
    {
      img: FaInstagram,
      link: "https://instagram.com",
      color: "#E878E8",
    },
    {
      img: GrLinkedin,
      link: "https://linkedin.com",
      color: "#2F82D6",
    },
    {
      img: SiWhatsapp,
      link: "https://wa.link/dmr42e",
      color: "#8ABC3A",
    },
    {
      img: FaMobileAlt,
      link: "tel:+923337734529",
      color: "#E878E8",
    },
    {
      img: IoMdMail,
      link: "mailto:someone@example.com",
      color: "#194DA8",
    },
  ],
  metadata: {
    businessName: "Crystaline Water Engineer",
    businessPhone: "(+92) 333 7734529",
    businessUrl: "https://crystalline-water-engineer.vercel.app/",
  },
};

export default constants;
