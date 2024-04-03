import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ab
            asperiores in, qui laboriosam at neque. Quaerat fuga veritatis
            dignissimos!
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex items-center justify-center h-12 w-12 bg-white rounded-full"
                key={icon.src}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-4 font-montserrat text-white-400 leading-normal hover:text-slate-gray cursor-pointer"
                    >
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
<img src={copyrightSign} alt="copy right sign" width={20} height={20} className="m-0 rounded-full"/>
<p>
  Copyright.All rights reserved.
</p>
</div>
<p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
