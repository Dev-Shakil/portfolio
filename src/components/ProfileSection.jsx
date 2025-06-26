import React from "react";

const ProfileSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4" id="about">
      <div className="container mx-auto">
        {/* About Me Button */}
        <div className="text-center mb-6">
          <button className="text-primary text-4xl font-extrabold ">
            ABOUT ME
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center">
          {/* Name and Intro */}
          <h1 className="text-3xl font-bold mb-2">Hi! I am Mohammed Shakil</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
          As a Front-End Developer, I possess an impressive arsenal of skills in Next.Js HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
          </p>
        </div>

        {/* Information Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-10 text-gray-400 text-center">
          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-300">Contact</h4>
            <p>shakilhossain1007@gmail.com</p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="font-bold text-gray-300">Phone</h4>
            <p>+88 01609317035</p>
          </div>

          {/* Date of Birth */}
          <div>
            <h4 className="font-bold text-gray-300">Date of Birth</h4>
            <p>July, 2000</p>
          </div>

          {/* Spoken Languages */}
          <div>
            <h4 className="font-bold text-gray-300">Spoken Languages</h4>
            <p>English - Bangla</p>
          </div>

          {/* Interests */}
          <div>
            <h4 className="font-bold text-gray-300">Interest</h4>
            <p>Movie, Reading, Journey</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-gray-300">Social Media</h4>
            <div className="flex justify-center space-x-4 text-2xl">
              <a href="#" className="text-purple-500 hover:text-purple-600">
                <i className="fab fa-figma"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-800">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;