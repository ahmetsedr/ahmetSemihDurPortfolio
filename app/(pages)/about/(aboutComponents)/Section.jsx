import React from 'react';
import Image from 'next/image';

const educationData = [
  {
    id: 1,
    date: '2019 - 2022',
    institution: 'Sultangazi Mesleki ve Teknik Anadolu Lisesi',
    degree: 'Web Tasarımı',
  },
  {
    id: 2,
    date: '2022 - 2026',
    institution: 'İstanbul Üniversitesi AUZEF',
    degree: 'Yönetim Bilişim Sistemleri',
  },
  {
    id: 3,
    date: '2022 - 2024',
    institution: 'Atatürk Üniversitesi',
    degree: 'Bilgisayar Programcılığı',
  },
];

const projectData = [
  {
    id: 1,
    name: 'codepen',
    link: 'https://codepen.io/ahmetsedr/',
  },
  {
    id: 2,
    name: 'patika.dev',
    link: 'https://app.patika.dev/ahmetse',
  },
  {
    id: 3,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/ahmet-semih-dur/',
  },
];

const Section = () => {
  return (
    <section className="text-white">
      <article className="container bg-black p-5 mt-5 rounded">
        <h2 className="text-2xl font-semibold">Açıklama</h2>
        <p>
          Eğitimim ve deneyimlerim sayesinde çeşitli insanlarla işbirliği yaparak takım içinde çalışmanın ve üretmenin değerini öğrendim. Bu yüzden takımınıza hızla uyum sağlayabileceğime inanıyorum. İş dünyasında etkin ve verimli olmak konusundaki isteğim yüksek, pozisyonun gerektirdiği sorumluluğu hevesle üstlenmek istiyorum. İstekli, özenli ve dikkatli çalışmanın her zaman başarıya götüreceğine inanıyorum. Yeteneklerim ve çalışma disiplinimle size katkı sağlayabileceğimden eminim.
        </p>
      </article>

      <article className="container bg-black p-5 mt-5 rounded" id="contico">
        <figure className="containerHeader flex items-center">
          <Image
            src="/staticFiles/books-m.png"
            alt="icon"
            width={100}
            height={100}
            className="w-12 h-12 mr-2"
          />
          <h2 className="text-2xl font-semibold">Eğitim</h2>
        </figure>
        {educationData.map((item) => (
          <figure key={item.id} className="mt-4">
            <p>{item.date}</p>
            <p>{item.institution} - {item.degree}</p>
          </figure>
        ))}
      </article>

      <article className="container bg-black p-5 mt-5 rounded" id="contico">
        <figure className="containerHeader flex items-center">
          <Image
            src="/staticFiles/female-technologist-v2.png"
            alt="icon"
            width={100}
            height={100}
            className="w-12 h-12 mr-2"
          />
          <h2 className="text-2xl font-semibold">Projeler</h2>
        </figure>
        <ul className="list-disc ml-6 mt-4">
          {projectData.map((project) => (
            <li key={project.id}>
              <a target="_blank" rel="nofollow" href={project.link}>{project.name}</a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Section;
