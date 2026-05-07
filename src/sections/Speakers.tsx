import React from 'react';
import {Carousel} from "@/components/ui/Carousel";

const Speakers = () => {

    const slideData = [
        {
          title: "EFA IWARA",
          details: "Actor/Film Producer",
          src: "/assets/Efa.png",
        },
        {
          title: "FOLAKE AYO-DAVIS",
          details: "Lawyer & Policy Analyst",
          src: "/assets/Folake.jpg",
        },
        {
          title: "SOPE ADELAJA",
          details: "Founder/Creative Director, LFD Media",
          src: "/assets/Sope.jpg",
        },
        {
          title: "AYANIME EDEM",
          details: "Author/Fashion Entrepreneur",
          src: "/assets/Ayanime.jpg",
        },
        {
          title: "CHISOM EMENIKE",
          details: "Beauty & Fashion/Lifestyle Creative Director",
          src: "/assets/Chisom.jpg",
        },
        {
          title: "SIMI DAPSON",
          details: "YouTuber/Content Creator/Fashion Influencer",
          src: "/assets/Simi.png",
        },
        {
          title: "OVIE THE STUNNER",
          details: "Content Creator/Influencer",
          src: "/assets/Ovie.png",
        },
      ];

  return (
    <section id="speakers" className="relative overflow-hidden w-full h-full py-24">
        <h2 className="text-center mb-16 text-3xl md:text-4xl lg:text-5xl font-bold">Meet Our Speakers</h2>
      <Carousel slides={slideData} />
    </section>
  )
}

export default Speakers
