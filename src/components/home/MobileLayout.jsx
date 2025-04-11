import HDCard from "../ui/cards/HDCard";
import brainSpaceImg from "../../assets/brain-space-img.jpg";

export default function MobileLayout() {
  return (
    <div className="mt-8 space-y-6">
      <HDCard />
      <img
        src={brainSpaceImg}
        alt="Дизайн Человека"
        className="rounded-box shadow-lg w-full h-auto object-cover mx-auto"
      />
    </div>
  );
}