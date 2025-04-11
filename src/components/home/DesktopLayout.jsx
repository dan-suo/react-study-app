import HDCard from "../ui/cards/HDCard";
import brainSpaceImg from "../../assets/brain-space-img.jpg";

export default function DesktopLayout() {
  return (
    <div className="flex justify-center mt-16">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <HDCard />
      </div>
      <img
        src={brainSpaceImg}
        alt="Дизайн Человека"
        className="rounded-box shadow-lg max-h-[600px] object-cover mt-12 ml-8"
        width="400"
        height="500"
      />
    </div>
  );
}