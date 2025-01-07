import { FaShippingFast } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { GrPowerCycle } from "react-icons/gr";

const features = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    description: "When order over $75",
  },
  {
    icon: <MdOutlineWifiCalling3 />,
    title: "24/7 Support",
    description: "Get support all day",
  },
  {
    icon: <GrPowerCycle />,
    title: "Refund",
    description: "Get refund within 3 days!",
  },
];

const Features = () => {
  return (
    <section className=" min-h-28 px-4 bg-gray-100 p-8">
      <div className="flex justify-around gap-4">
        {features.map((item, index) => (
          <div key={index} className=" p-8 flex gap-4 items-center">
            <div className="flex items-center justify-center gap-4 w-16 h-16 rounded-full border-2 border-dotted border-orange-500">
              <span className="text-orange-500 text-4xl">{item.icon}</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
