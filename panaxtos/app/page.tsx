import LinkButtons from "@/components/home/LinkButtons";
import BrainPD from "@/components/home/BrainPD";
import Review from "@/components/home/Review";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div
        className="h-70 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/banner/banner-1.jpg)' }}
      ></div>

      {/* 버튼들 */}
      <LinkButtons />

      {/* 파낙토스 PD */}
      <BrainPD />

      {/* 후기 */}
      <Review />
    </div>
  );
}
