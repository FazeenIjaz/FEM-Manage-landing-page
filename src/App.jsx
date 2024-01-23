import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-vietnam">
      <div className="  bg-tablet-bg bg-no-repeat lg:bg-[right_top_-8rem] bg-[right_-3rem_top_-6rem] lg:bg-[length:46rem_47rem] md:bg-[length:30rem_41rem] bg-[length:26rem_31rem] -z-1 ">
        <Navbar />
        <Intro />
      </div>

      <div className=" bg-tablet-bg bg-no-repeat md:bg-[left_-14rem_bottom_11rem] bg-[right_-3rem_top_-6rem] md:bg-[length:32rem_34rem] bg-[length:22rem] -z-10">
        <Features />
        <Testimonials />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
