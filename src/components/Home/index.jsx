import React from "react";
import Layout from "../layout";
import Slider from "../slider/slider";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import lowerimage from "../../Assets/lowerimage.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Layout>
      <Slider />

      <section className="bg-gradient-to-r from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transform Your Future With
            <span className="text-orange-600">
              {" "}
              Interactive Online Learning
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn industry-relevant skills from experienced professionals.
            Flexible, practical, and designed for real-world success.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/training">
              <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transition duration-300">
                Explore Courses
              </button>
            </Link>

            <Link to="/about-us">
              <button className="px-6 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              A Better Way to Learn Online
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Expert Mentors",
                desc: "Learn from industry professionals with real-world experience.",
              },
              {
                title: "Flexible Learning",
                desc: "Access courses anytime, anywhere, at your own pace.",
              },
              {
                title: "Practical Training",
                desc: "Hands-on projects and real case studies for skill mastery.",
              },
              {
                title: "Career Growth",
                desc: "Boost your confidence and unlock better opportunities.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Empowering You Through Digital Education
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              At Coachavo, we provide accessible, practical, and impactful
              online training programs. Our mission is to help individuals
              acquire essential skills, stay ahead of industry trends, and
              unlock their full potential.
            </p>

            {/* <button className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition">
              Discover More
            </button> */}
          </div>

          <div>
            <img
              src={lowerimage}
              alt="About Coachavo"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
