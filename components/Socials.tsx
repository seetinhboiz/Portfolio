import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface Props {
  containerStyle: string;
  iconStyle: string;
}

const Socials = ({ containerStyle, iconStyle }: Props) => {
  const socials = [
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/ngh%C4%A9a-tru%C6%A1ng-8b81002b1/",
    },
    {
      icon: <FaGithub />,
      path: "https://github.com/seetinhboiz",
    },
  ];

  return (
    <div className={containerStyle}>
      {socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyle}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
