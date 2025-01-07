const logos = [
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/Adidas.png",
  "https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609375996518-DZU53FYNB3FMBYB1JHG6/HP-logo+2021.jpg",
  "https://logomak.com/blog/wp-content/uploads/2023/09/PG-logo-500x334-min.png",
  "https://i.pinimg.com/736x/f5/bc/bb/f5bcbb6f47cdc2b00beae1137b5bd029.jpg",
  "https://www.designrush.com/uploads/users/customer-12/image_1532370597_fxvyDE7rRXPffHwfK04VsV3Fxr8YGOlSNmmfQ7mH.png",
];

const Client = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Our Partners</h2>
      <div className="overflow-hidden">
        <div className="flex space-x-12 animate-marquee">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-20 w-auto object-contain bg-transparent"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
