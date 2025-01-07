import img from "../assets/a.jpg";

const countdownData = [
  { value: "00", label: "Days" },
  { value: "00", label: "Hours" },
  { value: "00", label: "Mins" },
  { value: "00", label: "Secs" },
];

const Deals = () => {
  return (
    <section className="p-10 md:p-20 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-6 items-center container mx-auto px-4">
        {/* Left Section */}
        <div className="relative">
          <img src={img} alt="image" className="w-full max-w-[300px] md:max-w-none" />
          <div className="absolute top-6 left-6 bg-orange-500 text-white text-center rounded-full shadow-lg p-6 w-[100px] h-[100px] flex flex-col justify-center items-center">
            <span className="text-xl font-bold">30%</span>
            <span className="text-sm">off per kg</span>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col space-y-4 max-w-lg">
          <div className="space-y-4">
            <h2 className="font-bold text-3xl md:text-4xl">
              <span className="text-orange-500">Deal</span> Of The Month
            </h2>
            <h3 className="text-lg font-semibold">HIKAN STRAWBERRY</h3>
            <p className="leading-6 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae dicta beatae quod Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Alias, optio ipsum nulla nesciunt
              obcaecati, provident illum excepturi tempore eos eaque corrupti
              veniam? Delectus illum quo ab earum quisquam saepe corrupti
              numquam deleniti voluptates omnis!!
            </p>
          </div>
          <div className="flex items-center gap-4">
            {countdownData.map((item, index) => (
              <div
                key={index}
                className="bg-transparent p-4 h-[80px] rounded-sm flex justify-center items-center flex-col border-orange-500 border-2"
              >
                <div className="text-2xl text-orange-500 font-bold">
                  {item.value}
                </div>
                <span className="text-gray-600 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
