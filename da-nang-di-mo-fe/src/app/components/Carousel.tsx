"use client";
import Image from "next/image";

import AntdCarousel from "antd/lib/carousel";
export function Carousel() {
  const images = [
    {src: "/images/carousel/carousel3.png", alt: "Ảnh 1"},
    {src: "/images/carousel/carousel3.png", alt: "Ảnh 2"},
    {src: "/images/carousel/carousel3.png", alt: "Ảnh 3"},
  ];
  return (
    <div className="page-root">
      {(() => {
        return (
          <div className="carousel-container">
            <AntdCarousel autoplay>
              {images.map((img, idx) => (
                <div key={idx}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="responsive"
                    width={100}
                    height={60}
                    style={{
                      width: "100%",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: 16,
                    }}
                  />
                </div>
              ))}
            </AntdCarousel>
          </div>
        );
      })()}
    </div>
  );
}
