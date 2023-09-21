import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import whatsapp from "../assets/whatsapp.png";

function Header() {
  const handleClick = () => {
    Swal.fire({
      imageUrl: whatsapp,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Whatsapp Link",
      customClass: "bg-black",
      confirmButtonColor: "#f7ab0a",
      html: `
        <div className="flex items-center justify-center">
          
          <p>
            <a href="https://wa.me/message/S7S353UQWWYDM1" target="_blank" rel="noopener noreferrer">
              Click here to Connect With me on Whatsapp
            </a>
          </p>
        </div>
      `
    });
  };
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-screen-lg mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.facebook.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/muhammad-ramzan-605575279/"
          target="blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          network="whatsapp"
          onClick={handleClick}
          target="blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <a href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </a>
    </header>
  );
}

export default Header;
