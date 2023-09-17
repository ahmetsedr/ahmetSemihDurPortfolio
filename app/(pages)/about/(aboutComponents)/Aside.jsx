

const experiences = [
  {
    title: 'Deneyim ve Bootcampler',
    companies: ['Bilgi işlem - Toki istanbul', 'Üretken Akademi'],
    date: '06.09.2021-17.06.2022',
    descriptions: [
      'Front-End Geliştirmeyi Burada Sevdim. Güzel tecrübe edindiğim, insan ilişkileri, iş düzeni, öz saygı, vb. birçok alanda kendimi geliştirdiğim yer oldu.',
      'Bu program, kodlama yeteneklerimin yanı sıra iletişim becerilerimi geliştirme ve sektördeki bağlantılarımı artırma fırsatı oldu.'
    ],
  },
  // Diğer deneyimler
];

const roadmap = [
  {
    title: 'Yol Haritası',
    items: [
      'HTML+CSS',
      'JavaScript',
      'Git & Github',
      'Sass',
      'React',
      'Figma',
      'NextJS'
    ],
  },
  // Diğer yol haritaları
];

const activities = [
  {
    title: 'Yapmış Olduğu Aktiviteler',
    items: ['Bir Web Sitesi Programlama','Yeni Teknolojileri Deneyimleme','At Biniciliği', 'Yüzücülük', 'Futbol', 'Fitness', 'Tekwando'],
  },
  // Diğer aktiviteler
];

const skills = [
  {
    title: 'Beceri ve Yetkinlikler',
    items: [
      'Yazılım Mimarisi',
      'Ön Uç Geliştirme',
      'Analitik Düşünme',
      'Akış Diyagramları',
      'HTML5, CSS3, JavaScript',
      ' React, Next.js ',
      ' Bootstrap, Tailwind CSS ',
      ' Figma, Canva ',
      ' TypeScript ',
      'React-Redux',
      'Git, GitHub'
    ],
  },
  // Diğer beceri listeleri
];

const Article = ({ title, items }) => {
  return (
    <article className="container bg-black p-5 mt-5 rounded">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ul className="list-disc ml-6">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

const Aside = () => {
  return (
    <aside className="text-white me-4 mb-4">
      {experiences.map((exp, index) => (
        <Article key={index} title={exp.title} items={exp.companies.map((company, idx) => `${company}: ${exp.descriptions[idx]}`)} />
      ))}

      {roadmap.map((road, index) => (
        <Article key={index} title={road.title} items={road.items} />
      ))}

      {activities.map((act, index) => (
        <Article key={index} title={act.title} items={act.items} />
      ))}

      {skills.map((skill, index) => (
        <Article key={index} title={skill.title} items={skill.items} />
      ))}

    </aside>
  );
};

export default Aside;
