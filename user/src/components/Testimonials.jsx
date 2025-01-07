import { useState, useEffect } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
const testimonials = [
  {
    name: "John Doe",
    role: "Event Organizer",
    feedback: "This platform has revolutionized the way I manage events. Highly recommended!",
    image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    name: "Jane Smith",
    role: "Event Attendee",
    feedback: "The ticketing process was smooth, and I loved the overall user experience!",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
  },
  {
    name: "Samuel Green",
    role: "Event Sponsor",
    feedback: "It has made sponsorship tracking seamless. Great platform!",
    image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Event Attendee",
    feedback: "As an attendee, the event information was easy to find, and the purchasing process was simple and fast.",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
  },
  {
    name: "Michael Brown",
    role: "Event Organizer",
    feedback: "Managing multiple events through this platform has been a game-changer. Highly efficient and user-friendly.",
    image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    name: "Ava Davis",
    role: "Event Attendee",
    feedback: "The entire event experience was incredible. I got all the details I needed, and the registration was a breeze.",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
  },
  {
    name: "Liam Wilson",
    role: "Event Sponsor",
    feedback: "This platform provided us with all the tools we needed to track our sponsorship. It’s definitely made our job easier.",
    image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Event Attendee",
    feedback: "I attended an event last week, and I was really impressed with the seamless ticketing process and the overall experience.",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
  },
  {
    name: "James Taylor",
    role: "Event Organizer",
    feedback: "This platform has made my job so much easier. From registration to managing attendees, everything is so well-organized.",
    image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    name: "Charlotte White",
    role: "Event Sponsor",
    feedback: "We’ve seen a significant increase in engagement with our sponsorships. This platform offers valuable insights.",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="p-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">What Our Users Say</h2>
        <div className="relative flex items-center justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center space-y-6 px-8 py-6 bg-white  "
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-orange-500 text-lg">{testimonial.role}</p>
                <p className="text-gray-600 text-lg max-w-md italic mt-4">
                  "{testimonial.feedback}"
                </p>
                <RiDoubleQuotesR className="mt-3" size={26} color="gray"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
