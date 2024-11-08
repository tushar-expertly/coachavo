import React from "react";
import Layout from "./layout";
// import tailoredSolutions from "../Assets/about/undraw_solution_mindset_re_57bf.svg";
// import experts from "../Assets/about/undraw_experts_re_i40h.svg";
// import patners from "../Assets/about/undraw_team_up_re_84ok.svg";
// import excel from "../Assets/about/undraw_details_8k13.svg";
// import impact from "../Assets/about/24372256_6909933.svg";
import aboutspageimage from "../Assets/about/aboutspageimage.jpg";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold  sm:text-4xl">About Us</h2>
              <p className="mt-4  text-lg">
                At Coachavo, we're passionate about making high-quality,
                impactful training accessible to everyone. We believe that
                online learning offers a powerful way to gain in-demand skills,
                stay ahead of the curve, and unlock your full potential.
              </p>
              <div className="mt-8">
                <Link
                  to="/"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={aboutspageimage}
                alt="About Us"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-100  flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl w-full space-y-8">
          <div className="bg-gray-100 shadow-md rounded-lg p-8">
            <h4 className="text-2xl font-extrabold text-gray-900 text-center mb-4">
              Empowering Learners Through Engaging Online Training
            </h4>
            <h3 className="text-2xl text-gray-700 text-center mb-8">EDUCTER</h3>
            <div className="space-y-6">
              {/* <div>
                <h4 className=" text-gray-800">Our Mission</h4>
                <p className="mt-2 text-gray-600">
                  At Educter, we're passionate about making high-quality,
                  impactful training accessible to everyone. We believe that
                  online learning offers a powerful way to gain in-demand
                  skills, stay ahead of the curve, and unlock your full
                  potential.
                </p>
              </div> */}
              <div>
                <h4 className=" text-gray-800">The Problem We Solve</h4>
                <p className="mt-2 text-gray-600">
                  In today's rapidly changing world, traditional learning
                  methods can feel restrictive. We understand the challenges of
                  busy schedules, geographical limitations, and the need for
                  flexible learning options.
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">Our Impact</h4>
                <p className="mt-2 text-gray-600">
                  We provide a vibrant online learning platform with a diverse
                  range of courses designed to equip you with the skills and
                  knowledge you need to succeed. Our satisfied learners have
                  used our training.
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">Meet the Experts</h4>
                <p className="mt-2 text-gray-600">
                  Our team is comprised of passionate instructors and industry
                  veterans with a wealth of experience. [Briefly introduce a key
                  team member and their expertise]. You can learn more about our
                  team on our dedicated page!
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">Learning Designed for You</h4>
                <p className="mt-2 text-gray-600">
                  We believe in engaging and interactive online training.
                  Whether you're a visual learner, an auditory learner, or a
                  hands-on learner, we have a training approach that caters to
                  your style.
                </p>
              </div>

              <div>
                <h4 className=" text-gray-800">Why Choose Us?</h4>
                <p className="mt-2 text-gray-600">
                  <ul>
                    <li>
                      • Skill Up, Get Ahead: Our courses are designed to equip
                      you with the in-demand skills needed to thrive in today's
                      job market.
                    </li>
                    <li>
                      • Learn on Your Schedule: Enjoy the flexibility of
                      learning anytime, anywhere with our user-friendly online
                      platform.
                    </li>
                    <li>
                      • Join a Community: Connect with fellow learners, ask
                      questions, and share your experiences in our online
                      learning community.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h4 className=" text-gray-800">
                  Ready to Start Your Learning Journey?
                </h4>
                <p className="mt-2 text-gray-600">
                  Browse our course catalog to find the perfect training program
                  for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Aboutus;
