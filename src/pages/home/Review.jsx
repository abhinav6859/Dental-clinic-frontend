// import Swiper core and required modules
import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const reviews = [
     {
    _id: 1,
    comment:
      "The dentist explained everything so clearly and made me feel very comfortable. My tooth extraction was quick and painless!",
    name: "Aarav Sharma",
    location: "Delhi",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    _id: 2,
    comment:
      "Super clean clinic with friendly staff. I got my teeth whitening done here and the results were amazing. Highly recommend!",
    name: "Priya Mehta",
    location: "Mumbai",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    _id: 3,
    comment:
      "I was nervous before my root canal, but the doctor made sure I was at ease. The entire process was smooth and pain-free.",
    name: "Rohit Verma",
    location: "Bangalore",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    _id: 4,
    comment:
      "Very professional and caring dentist. My kids had a great experience during their first dental checkup. Will definitely come again.",
    name: "Neha Singh",
    location: "Pune",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    _id: 5,
    comment:
      "The dentist used modern equipment and explained every step. I got a dental implant and it feels just like my natural tooth.",
    name: "Karan Patel",
    location: "Ahmedabad",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    _id: 6,
    comment:
      "Excellent service! The staff is so polite and professional. I recommend this clinic to anyone looking for quality dental care.",
    name: "Salma Akther",
    location: "Hyderabad",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  ];
  return (
    <Swiper
     
      modules={[Autoplay, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="flex justify-center items-center flex-col bg-white shadow-xl">
            <div className="pt-4">
              <img src={review.img} alt="Shoes" className="rounded-xl h-20" />
            </div>
            <div className="text-center pb-7 pt-3">
              <div>
                <p className="text-lg font-bold mb-0">{review.name}</p>
                <p className="text-xs pb-2">{review.location}</p>
              </div>
              <i class="ri-chat-quote-line text-3xl text-[orange]"></i>
              <p className="">"{review.comment}"</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Review;
