import Image from "next/image";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main>
      <div className="pt-20">
        <Hero />
      </div>
    </main>
  );
}
