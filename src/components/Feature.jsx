import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { AnimateWithGsap } from "../utils/Animate";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

const Feature = () => {

  const videoref = React.useRef(null);

  

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoref.current.play();
      }
    })

    AnimateWithGsap('#features_title', { y:0, opacity:1})
    AnimateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    AnimateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);


  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iphone</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flexitems-cnter">
              <video
                playsInline
                id="exploreVideo"
                className="w-full rounded-lg h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoref}
              >
                <source src={exploreVideo} type="video/mp4"></source>
              </video>
            </div>
            <div className="flex flex-col relatie ">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">

                <div className="fle-1 flex-center">
                    <p className="feature-text g_text">
                        iphone 15 pro {''}
                        <span className="text-white">
                        the first iPhone to feature an aerospace-grade titanium design
                        </span>,
                        using the same alloy that spacecrafts use for missions to Mars.
                    </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;