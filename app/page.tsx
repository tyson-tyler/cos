import Feature from "@/components/feature/feature";
import Banner from "@/components/mainlayout/banner";
import Line from "@/components/mainlayout/line";

import { Navbar } from "@/components/navbar";
import SketchfabEmbed from "@/components/videoban/3d";
import Accc from "@/components/videoban/accordian";
import Endban from "@/components/videoban/endban";
import Footer from "@/components/videoban/footer";
import WorkoutSection from "@/components/videoban/imageban";
import FitnessApp from "@/components/videoban/mobil";
import NewVideoban from "@/components/videoban/newvid";
import Pricing from "@/components/videoban/pricing";
import Review from "@/components/videoban/review";
import Review2 from "@/components/videoban/review2";
import Teams from "@/components/videoban/team";
import Videoban from "@/components/videoban/videoban";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
        <Navbar />
        <Banner />
      </div>
      <div>
        <Line />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <WorkoutSection />
      </div>
      <div>
        <Videoban />
      </div>
      <div>
        <FitnessApp />
      </div>
      <div>
        <SketchfabEmbed />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <Review2 />
      </div>
      <div>
        <Pricing />
      </div>
      <div className="mt-[40px] mb-[20px]">
        <Teams />
      </div>
      <div>
        <NewVideoban />
      </div>
      <div>
        <Endban />
      </div>
      <div>
        <Accc />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
