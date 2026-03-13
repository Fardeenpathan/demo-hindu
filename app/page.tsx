import Image from "next/image";
import MarriageCountdown from "./components/MarriageCountdown";
import CoupleMessage from "./components/CoupleMessage";

export default function Home() {
  const events = [
    {
      title_ceremony: "Mehandi",
      image: "/assets/mehandi.png",
      date: "Tuesday, March 10th 2026",
      venue: "Hyatt Regency Delhi",
      venue_address: <>Ring Road, Bhikaji Cama Place, <br />  RK Puram, New Delhi 110066</>,
      time: "7:00 pm onwards",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Haldi",
      image: "/assets/haldi_m.png",
      date: "Friday, March 13th 2026",
      venue: "Golden Gate Banquet",
      venue_address: <>Block B, Mayapuri Industrial Area Phase I, Mayapuri<br /> Delhi 110064</>,
      time: "4:00pm Onwards",
      link: "https://maps.app.goo.gl/ywMPWwHjbXvqwiWc8",
    },
    {
      title_ceremony: "Cocktail",
      image: "/assets/cocktail_w.png",
      date: "Sunday, March 15th 2026",
      venue: "The Ashok Hotel",
      venue_address: <>50-B, Diplomatic Enclave,<br /> Chanakyapuri, New Delhi – 110021</>,
      time: "8pm Onwards",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },

    {
      title_ceremony: "Engagement",
      image: "/assets/engagement_w.png",
      date: "Tuesday, March 10th 2026",
      venue: "Hyatt Regency Delhi",
      venue_address: <>Ring Road, Bhikaji Cama Place, <br />  RK Puram, New Delhi 110066</>,
      time: "7:00 pm onwards",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Shaadi",
      image: "/assets/shaadi_w.png",
      date: "Friday, March 13th 2026",
      venue: "The Leela Palace",
      venue_address: <>Africa Ave, Diplomatic Enclave, Chanakyapuri,<br /> Delhi 110023</>,
      time: "4:00pm Onwards",
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },
    {
      title_ceremony: "Reception",
      image: "/assets/reception_w.png",
      date: "Sunday, March 15th 2026",
      venue: "The Ashok Hotel",
      venue_address: <>50-B, Diplomatic Enclave,<br /> Chanakyapuri, New Delhi – 110021</>,
      time: "8pm Onwards",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },


  ];
  return (
    <div>
      <div
        className="
    bg-[url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1772020634/aura_demo_mobile_ejxmkd.webp')]
    md:bg-[url('/assets/water_bg.jpg')]
    bg-cover bg-no-repeat bg-top md:bg-center w-full px-4 sm:px-8 overflow-hidden relative">
      <div className=" pt-24 md:pb-50 lg:pb-100 relative z-10 pb-24">
          <h2 className="text-[#15528A]  text-center leading-tight text-[70px] sm:text-5xl lg:text-[100px] md:pb-370 pb-0 flex flex-col items-center gap-y-2">
            <span className="font-parisienne">Dhiraj</span>
            <span className="text-xl sm:text-3xl tracking-[10px] font-cormorant">WEDS</span>
            <span className="font-parisienne">Ritika</span>
          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0  lg:pt-200 pt-150">
            <img
              src="/assets/ganesh_inter.png"
              alt="ganesh"
              className="md:w-40 w-28 h-auto"
            />
            <h2 className="text-white md:text-2xl text-[17px] text-center">
              || श्री गणेशाय नमः ||
            </h2>
            <h2 className="text-white md:text-2xl text-[17px] text-center">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
              <br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </h2>


            <h2 className="text-white lg:text-[30px] md:text-2xl text-[20px] font-Cormorant-upright">
              With the heavenly blessings of
              <br /> Late Smt. Kamla Kapoor
            </h2>

            <hr className="lg:w-24 w-16 border-white my-4" />

            <h2 className="text-white font-Cormorant-upright lg:text-[34px] md:text-2xl text-[26px]">
              The Kapoor Family
            </h2>
          </div>


          <div className="mt-8 text-center">
            <h2 className="text-white font-cormorant 
            text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[19px] mt-6">
              you to join us in the wedding celebrations of
            </p>



            <h2 className="text-white font-Cormorant-upright text-center mt-14
            md:text-5xl text-[64px] lg:text-[100px] leading-tight font-bold">
              Ritika
            </h2>


            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl mt-2 text-[16px]">
              (D/o Mrs. Kalpana kapoor and Mr. Raj Kapoor)
              <br /> (Granddaughter of Shri J.S. Kapoor)
            </p>




            <h2 className="text-white font-Cormorant-upright text-center mt-4
            text-[64px] sm:text-7xl lg:text-[100px] leading-tight font-bold">
              <span className="text-white font-Cormorant-upright text-center lg:mt-10 mt-4 
            md:text-5xl text-[82px] lg:text-[150px] leading-tight">&</span>   <br />
              Dhiraj
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[16px] mt-2">
              (S/o Mrs. Reena and Mr. Manjit Singh)
            </p>

            <p className="text-white font-Cormorant-upright lg:text-3xl md:text-2xl text-[24px] mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-32 gap-16 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 w-95 sm:w-76 h-auto"
                  />

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[37px] mt-4 font-bold">
                    {event.title_ceremony}
                  </h2>



                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[22px]">{event.date}</span>  <br />
                    <span className="text-[24px] uppercase"> {event.venue}</span> <br />
                    <span className="text-[20px]">{event.venue_address}</span> <br />
                    <span className="text-[22px]">  {event.time} </span>
                  </p>

                  <a
                    href={event.link}
                    className="text-white underline md:text-sm text-[18px] mt-2 font-cormorant"
                    target="_blank"
                  >
                    See the route
                  </a>


                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className=" bg-[url('/assets/meet.png')] md:bg-cover bg-contain bg-no-repeat">
        <div className="lg:h-300 md:h-180 h-86 md:pt-20 md:pr-100 pr-40 flex flex-col justify-center items-center text-center">

          <h1 className="lg:text-3xl md:text-xl text-2xl text-[#E1EF1E] font-Cormorant">
            MEET THE
          </h1>

          <h2 className="lg:text-[130px] md:text-2xl text-3xl text-[#00EAFF] lg:pt-12 font-Cormorant-upright md:leading-12 leading-8">
            <span className="text-[#ADBAFF]">Bride</span> <br />
            & <br />
            <span className="text-[#3FA9FF]">Groom</span>
          </h2>

        </div>
      </div>
      <CoupleMessage />
      <MarriageCountdown />
    </div>
  );
}
