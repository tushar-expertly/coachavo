import React from "react";
import Layout from "../layout";
import Slider from "../slider/slider";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import lowerimage from "../../Assets/lowerimage.jpg";
// import { Link } from "react-router-dom";
function Home() {
  return (
    <Layout>
      <Slider />

      <section className="">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                Reasons to choose us!
              </h2>
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Enabling Learners with Interactive Online Training Experiences
              </p>
              {/* <p className="mt-4 max-w-2xl text-lg  lg:mx-auto">
                Empowering Learners Through Engaging Online Training
              </p> */}
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/503163/api-settings.svg" /> */}
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold ">
                      Our Influence
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base ">
                    We offer a dynamic online learning platform featuring a wide
                    variety of courses tailored to equip you with essential
                    skills and knowledge for success. Many satisfied learners
                    have benefited from our training.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/503138/webpack.svg" /> */}
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold ">
                      The Challenge We Address
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base ">
                    In our fast-evolving world, conventional learning methods
                    can seem limiting. We recognize the difficulties posed by
                    hectic schedules, location constraints, and the growing
                    demand for adaptable learning solutions.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" /> */}
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold ">
                      Get to Know the Experts
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base ">
                    {" "}
                    Our team consists of enthusiastic instructors and seasoned
                    industry professionals with extensive experience. Visit our
                    dedicated page to learn more about each team member!
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" /> */}
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold ">
                      Training Tailored to You
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base ">
                    We focus on providing engaging, interactive online learning
                    experiences. Whether you learn best through visuals,
                    listening, or hands-on practice, our training is designed to
                    match your unique learning style.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              {/* <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2> */}
              <p className="mt-4 text-lg">
                At Coachavo, we’re committed to providing exceptional training
                that’s accessible to all. We understand the value of online
                learning in helping individuals acquire essential skills, stay
                ahead of trends, and unlock their full capabilities. Our mission
                is to make impactful education available to everyone, empowering
                them to thrive in today’s fast-paced world.
              </p>
              <div className="mt-8">
                {/* <Link
                  to="/"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </Link> */}
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={lowerimage}
                alt="About Us"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
