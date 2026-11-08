import { ClientInfo } from "@/components/ClientInfo";
import { Coverage } from "@/components/Coverage";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImageMarquee } from "@/components/ImageMarquee";
import { Owner } from "@/components/Owner";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";
import { StickyBar } from "@/components/StickyBar";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ImageMarquee />
        <Trust />
        <Services />
        <Gallery />
        <Owner />
        <Coverage />
        <ClientInfo />
        <Quote />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
