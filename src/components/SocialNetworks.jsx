import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import {AiOutlineWhatsApp} from 'react-icons/ai'
import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, socialLink: 'https://www.linkedin.com/in/pedroricardocordova/' },
  { name: "github", icon: <FaGithub /> , socialLink: 'https://github.com/prcordova' },
  { name: "instagram", icon: <FaInstagram /> , socialLink: 'https://www.instagram.com/prcordova/' },
  { name: "whatsapp", icon: <AiOutlineWhatsApp /> , socialLink: 'https://wa.me/51991934216' },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a key={network.name} href={network.socialLink} target='_blank' className="social-btn" id={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
