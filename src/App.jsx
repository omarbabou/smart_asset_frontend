// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
// import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/img.svg";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
// import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import NewsletterSubscription from "./components/Subscriptions";

const BannerData = {
  image: Img1,
  tag: "QUICK PROJECT OVERVIEW",
  title: "Description",
  subtitle:
    "A Smart Assets Management System for Academic Examinations is an innovative, integrated digital platform that revolutionizes the entire examination process in educational institutions. This cutting-edge system leverages IoT, cloud computing, and AI technologies to create a seamless, secure, and efficient examination ecosystem.",
  link: "#"
};

const App = () => {
  return (
    <main className='overflow-x-hidden bg-[#F6F6F6]'>
      <Navbar />
      <NavbarBanner />
      <Hero />
      {/* <NumberCounter /> */}
      <WhyChooseUs />
      <Banner {...BannerData} />
      {/* <Banner {...BannerData2} reverse={true} /> */}
      <SubjectCard />
      {/* <Testimonial /> */}
      <NewsletterSubscription />
      <Footer />
    </main>
  );
};

export default App;
