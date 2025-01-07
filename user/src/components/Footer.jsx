const Footer = () => {
  const sections = [
    {
      title: "Company",
      items: ["About Us", "Careers", "Press", "Blog"],
    },
    {
      title: "Support",
      items: ["Help Center", "Contact Us", "FAQs", "Terms & Conditions"],
    },
    {
      title: "Contact",
      content: (
        <>
          <p className="mb-2">Email: support@digi.com</p>
          <p className="mb-2">Phone: +91 9382898643</p>
          <div className="flex gap-4 mt-4">
            <span className="hover:text-gray-300">Facebook</span>
            <span className="hover:text-gray-300">Twitter</span>
            <span className="hover:text-gray-300">LinkedIn</span>
          </div>
        </>
      ),
    },
    {
      title: "Newsletter",
      content: (
        <>
          <p className="mb-4">
            Subscribe to stay updated on the latest news and offers.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded  text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-teal-600 text-white py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#051922] text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index} className=" p-6">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            {section.items ? (
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-2 hover:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              section.content
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; 2025 @Digital Mitro. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
