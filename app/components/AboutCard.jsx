import Image from "next/image"
import Link from "next/link"
import aboutCardPic from '../img/ahmetse.png';

export default function AboutCard() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="max-w-screen-xl w-11/12 md:w-3/4 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 order-2 md:order-1">
            <Image
                src={aboutCardPic}
                alt="Fotoğraf"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="w-full md:w-1/2 p-6 order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Merhaba 👋, Ben Ahmet Semih</h2>
            <p className="text-sm md:text-base">
                Üretken Akademi'nin Yoğun Yazılımcı Fabrikası Programı mezunu ve Emlak Yönetim A.Ş. stajyerliği yaptım. HTML, CSS, JavaScript ile birlikte React ve Next.js gibi teknolojilere hakimim. Figma ve GitHub gibi teknolojilere çalışabilirim. Detaylara önem verir, projeleri yaratıcı ve işlevsel bir şekilde hayata geçiririm. Yeni projelerde birlikte çalışmak için sabırsızlanıyorum.
            </p>
            <br />
            <Link href="/about" className='bg-white text-black border-black border-2 py-2 px-4 rounded-lg hover:bg-black hover:text-white hover:border-white transition duration-300'>
                CV'mi Gör
            </Link>
        </div>
    </div>
</div>

  )
}
