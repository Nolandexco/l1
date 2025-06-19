"use client"; // WAJIB: Karena kita akan menggunakan hook 'useTheme'.

import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LOGOS = [
  {
    name: "Next.js",
    image: "/images/techStack/nextjs.svg",
  },
  {
    name: "React",
    image: "/images/techStack/react.svg",
  },
  {
    name: "Tailwind",
    image: "/images/techStack/tailwind.svg",
  },
  {
    name: "Framer",
    image: "/images/techStack/framer.svg",
  },
  {
    name: "Shadcnui",
    image: "/images/techStack/shadcnui.svg",
  },
  {
    name: "Nextui",
    image: "/images/techStack/nextui.svg",
  },
  {
    name: "TS",
    image: "/images/techStack/typescript.svg",
  },
  {
    name: "Vercel",
    image: "/images/techStack/vercel.svg",
  },
];

const Hero = ({
  locale,
  langName,
  CTALocale,
}: {
  locale: any;
  langName: string;
  CTALocale: any;
}) => {
  const { theme } = useTheme();

  return (
    <>
      {/* Tata letak didorong ke bawah dengan padding, ini tetap dipertahankan */}
      <section
        lang={langName}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-24 md:pt-32 text-center"
      >
        <h1
          // DIUBAH: Kelas untuk wrapping diubah agar LineText selalu inline.
          // "[&>*]:block sm:[&>*]:inline-block" diubah menjadi "[&>*]:inline-block"
          // Ukuran font sedikit lebih besar di layar sm ke atas.
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight
                     [&>*]:inline-block" 
          // DIHAPUS: style={{ fontSize: "clamp(...)" }} dihapus untuk mengembalikan responsivitas standar.
        >
          {locale.title1}{" "}
          <LineText>{locale.title2}</LineText>{" "}
          {locale.title3}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {locale.description}
        </p>
      </section>

      <CTAButton locale={CTALocale}></CTAButton>

      {/* Jarak vertikal dipertahankan untuk alur yang baik */}
      <section className="mx-auto w-full md:max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 pt-24 pb-12">
        <Marquee direction="left" autoFill pauseOnHover>
          {LOGOS.map((image, index) => (
            <div className="mx-6 text-gray-500" key={index}>
              <Image
                src={image.image}
                alt={image.name}
                width={50}
                height={50}
                style={{
                  objectFit: "cover",
                }}
                className={`${
                  theme === "dark" ? "filter dark:invert grayscale" : ""
                } hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}
              />
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default Hero;
