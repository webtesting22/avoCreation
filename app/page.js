import Image from "next/image";
import About from "./about/page"
import AvoHome from "./avoHome/page";
import BestProduct from "./BestProducts/page";

export default function Home() {
  return (
    <div style={{ height: "700vh" }}>
      <AvoHome />
      <BestProduct />
    </div>
  );
}
