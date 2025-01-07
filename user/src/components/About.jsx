import { useState } from 'react';
import { MdClose } from 'react-icons/md'; 

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-6 w-full ">
      <div className="flex justify-center  items-center gap-12  p-8">
       
        <div className=" relative">
          
          <div className="relative max-w-lg">
            <img
              src="https://img.youtube.com/vi/M1xCnjp7SQc/sddefault.jpg" 
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={handleModalToggle}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button
                onClick={handleModalToggle}
                className="p-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition"
              >
                Play
              </button>
            </div>
          </div>
        </div>

    
        <div className=" w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
          <h3 className="text-xl font-semibold text-orange-500">Since Year 1999</h3>
          <h1 className="text-4xl font-bold text-gray-800">We are Fruitkha</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi.
            Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit.
            Nam eu molestie lorem.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus,
            et labore minima mollitia qui ducimus.
          </p>
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
            Know More
          </button>
        </div>
      </div>

      
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalToggle}
        >
          <div
            className="bg-white rounded-lg p-6 w-full md:w-2/3"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="relative">
              <button
                onClick={handleModalToggle}
                className="absolute top-4 right-4 text-gray-800 text-3xl"
              >
                <MdClose />
              </button>

              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/M1xCnjp7SQc"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
