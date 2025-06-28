"use client";
import Image from "next/image";

const logos = [
  { name: 'Company A', src: '/images/image1.png', hint: 'company logo' },
  { name: 'Company B', src: '/images/image2.png', hint: 'company logo' },
  { name: 'Company C', src: '/images/image3.png', hint: 'company logo' },
  { name: 'Company D', src: '/images/image4.png', hint: 'company logo' },
  { name: 'Company E', src: '/images/image5.png', hint: 'company logo' },
  { name: 'Company F', src: '/images/image6.png', hint: 'company logo' },
  { name: 'Company G', src: '/images/image7.png', hint: 'company logo' },
  { name: 'Company H', src: '/images/image8.png', hint: 'company logo' },
  { name: 'Company I', src: '/images/image9.png', hint: 'company logo' },
  { name: 'Company J', src: '/images/image10.png', hint: 'company logo' },
];

export function LogoCloud() {
  const extendedLogos = [...logos, ...logos]; // Duplicate for seamless scroll

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-logo-scroll">
            {extendedLogos.map((logo, index) => (
            <li key={index}>
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={140} 
                  height={60} 
                  className="object-contain max-h-16 max-w-[140px]"
                  style={{
                    width: 'auto',
                    height: 'auto'
                  }}
                  data-ai-hint={logo.hint}
                />
            </li>
            ))}
      </ul>
    </div>
  );
}
