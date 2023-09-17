import React from 'react';
import { FaEnvelope, FaGithub, FaCodepen, FaLinkedin, FaYoutube, FaNetworkWired } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  // Doğum tarihinin 4 Ocak 2004 olduğunu varsayalım
  const birthDate = new Date(2004, 0, 4);
  const today = new Date();
  const ageInMillis = today - birthDate;

  // Yaşı hesapla
  const age = Math.floor(ageInMillis / (365 * 24 * 60 * 60 * 1000));

  return (
    <header className="bg-black text-center p-16 text-white">
      <div className="flex justify-center">
        <img
          id="avatar"
          src="https://patika-prod.s3-eu-central-1.amazonaws.com/userFiles/ahmetse/profilePicture"
          alt="Ahmet Semih Dur"
          className="border-4 border-white rounded-full"
        />
      </div>
      <h1 className="text-4xl font-semibold mt-4">Ahmet Semih Dur</h1>
      <p className="italic">{age} yaşındayım - ahmetsedur@gmail.com</p>
      <div className="flex m-3 justify-center items-center">

          <Link href="mailto:ahmetsecodr@gmail.com"
            target="_blank"
            title="Ahmet Semih Gmail"
            className="flex m-3 justify-center items-center hover:text-gray-500"
          >
            <FaEnvelope size={32} />
        </Link>

        
          <Link href="https://www.linkedin.com/in/ahmet-semih-dur/"
            target="_blank"
            title="Ahmet Semih Gmail"
            className="flex m-3 justify-center items-center hover:text-gray-500"
          >
            <FaLinkedin size={32} />
          
        </Link>

        
          <Link href="https://www.youtube.com/@ahmetsemihdur"
            target="_blank"
            title="Ahmet Semih Gmail"
            className="flex m-3 justify-center items-center hover:text-gray-500"
          >
            <FaYoutube size={32} />
          
        </Link>

        
          <Link href="https://ahmetsedr.github.io/ahmetsemihdur/"
            target="_blank"
            rel="nofollow"
            className="flex m-3 justify-center items-center hover:text-gray-500"
          >
            <FaNetworkWired size={32} />
            <p> (Eski)</p>
          
        </Link>

        
          <Link href="https://github.com/ahmetsedr"
            target="_blank"
            rel="nofollow"
            className="flex m-3 justify-center items-center hover:text-gray-500"
          >
            <FaGithub size={32} />
        </Link>

        
          <Link href="https://codepen.io/ahmetsedr"
            target="_blank"
            rel="nofollow"
            className="flex m-3 justify-center items-center hover:text-gray-500"
          >
            <FaCodepen size={32} />
        </Link>
      </div>

      <p className="mt-4">Merhaba 👋, Ben Front-end tarafında kendini geliştiren bir gencim</p>
    </header>
  );
}

export default Header;
