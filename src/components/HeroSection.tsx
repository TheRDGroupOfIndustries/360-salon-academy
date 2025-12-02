'use client';

export default function HeroSection () {
  return (
    <section id="home" className="">
      <div
        className="w-full h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('/hero-background.jpg')",
        }}
      >
        <div className="flex items-center justify-center flex-col h-full bg-black/50 p-4">
          <h1 className="text-5xl lg:text-7xl text-center font-bold text-gray-200 mb-4 font-playfair">
            Redefining Beauty.
          </h1>
          <h2 className="text-5xl lg:text-7xl text-center font-bold text-yellow-500 mb-6 font-playfair">
            Empowering Artists.
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-center text-xl mb-8">
            Experience premium salon services and professional beauty education
            under one roof. Transform your look or launch your career with us.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-8">
            <a  href="#services" className="bg-linear-to-tr from-yellow-500 to-yellow-600 hover:to-yellow-700 text-white cursor-pointer px-8 py-3 rounded-md font-medium text-lg">
              Explore Services
            </a>
            <a  href="#academy" className="border-yellow-500 border-2 text-yellow-600 font-bold px-8 py-3 rounded-md text-lg">
              Explore Cources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
