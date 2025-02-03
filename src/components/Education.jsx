import React from "react";

const Education = () => {
  const data = [
    {
      year: "2017 - 2021",
      title: "Lakshmipur Govt. Polytechnic Institute",
      description:
        "As a student of Computer Engineering at this institute, I have learne the basic fundamentals of Computer Science and Technologies.",
        degree: "Diploma In Computer Science & Engineering",
    },
    {
      year: "2024 - Present",
      title: "Northern University Bangladesh",
      description:
        "As a Computer Science and Engineering student at this university, I am building a strong foundation in core computer science principles and modern technologies",
      degree: "BSc In Computer Science & Engineering",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="w-[95%] sm:container mx-auto px-4">
        <h2 className="text-center text-4xl text-primary font-extrabold mb-2">
          EDUCATION
        </h2>
        <p className="text-center text-gray-400 mb-8">
          
        </p>
        <div className="relative">
          {/* Dashed Line in the Center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-r border-dashed border-gray-600"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? "text-right" : "text-left"
                  }`}
              >
                {/* Yellow Dot */}
                <div
                  className={`absolute top-0 ${index % 2 === 0 ? "right-full" : "left-full"
                    } transform ${index % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
                    } h-4 w-4 bg-yellow-500 rounded-full`}
                ></div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                  <p className="text-yellow-400 font-bold text-sm">{item.year}</p>
                  <p className="text-gray-300 text-xl mt-2">{item.degree}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;