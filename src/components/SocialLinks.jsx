// src/components/SocialLinks.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-2 scale-75 items-center">
      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:scale-110 transition-transform duration-200"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/YOUR_USERNAME/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:scale-110 transition-transform duration-200"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://twitter.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:scale-110 transition-transform duration-200"
      >
        <FaTwitter />
      </a>

      <a
        href="mailto:your@email.com"
        className="text-xl hover:scale-110 transition-transform duration-200"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
