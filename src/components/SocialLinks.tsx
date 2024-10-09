import React from 'react';
import './SocialLinks.css';
import { FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

const SocialLinks: React.FC = () => {
    const iconsRow1 = [
        {
          key: 1,
          icon: <FaInstagram />,
          href: 'https://www.instagram.com/ivangg._ ',
        },
        {
          key: 2,
          icon: <FaLinkedin />,
          href: 'https://www.linkedin.com/in/ivan-garcia-garcia',
        },
        {
          key: 3,
          icon: <IoLogoGithub />,
          href: 'https://github.com/ivangarciagarcia',
        },
        {
          key: 4,
          icon: <FaSpotify />,
          href: 'https://open.spotify.com/user/30b4asmwa0ay0m8ll0wc0rvto?si=f1d1588c08db4828',
        },
      ];
  
  return (
    <section className="social-links-container">
        <p className="social-links-title">Social Links</p>
        <div className="icons-row">
            {iconsRow1.map((icon) => (
                <a
                    key={icon.key}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="square"
                >
                    <div className="icon">
                        {icon.icon}
                    </div>
                </a>
            ))}
        </div>
    </section>
  );
};

export default SocialLinks;
