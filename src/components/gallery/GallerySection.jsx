import React from "react";
import Gallery01 from "../../assets/images/gallery-01.webp";
import Gallery02 from "../../assets/images/gallery-02.webp";
import Gallery03 from "../../assets/images/gallery-03.webp";
import Gallery04 from "../../assets/images/gallery-04.webp";
import Gallery05 from "../../assets/images/gallery-05.webp";
import Gallery06 from "../../assets/images/gallery-06.webp";
import Gallery07 from "../../assets/images/gallery-07.webp";
import Gallery08 from "../../assets/images/gallery-08.webp";
import Gallery09 from "../../assets/images/gallery-09.webp";
import Gallery10 from "../../assets/images/gallery-10.webp";

export default function GallerySection() {
  const galleryImages = [
    Gallery01,
    Gallery02,
    Gallery03,
    Gallery04,
    Gallery05,
    Gallery06,
    Gallery07,
    Gallery08,
    Gallery09,
    Gallery10,
  ];

  return (
    <>
      <section className="min-h-screen bg-[#F4F1EE]">
        <div className="container px-3 py-10 md:px-5 md:py-20">
          <div className="section-badge">SALON OVERVIEW</div>
          <h2 className="section-title max-w-xl">
            YOUR TRUSTED LOCAL BARBER SERVICES
          </h2>
          <br />
          <div className="gallery-box grid grid-cols-1 gap-10 md:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="item">
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
