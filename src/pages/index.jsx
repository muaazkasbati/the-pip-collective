import FifthSection from "@/components/FifthSection";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Header from "@/components/Header";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FAQSection from "@/components/FAQSection";
import Head from "next/head";
import SubscriptionSection from "@/components/SubscriptionSection";
import PricingSection from "@/components/PricingSection";
import CallToActionSection from "@/components/CallToActionSection";
import ImageBGSection from "@/components/ImageBGSection";


export default function Home() {
  return (
    <>
      <Head>
        <title>The Pip Collective</title>
      </Head>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <PricingSection />
      <ImageBGSection />
      <FAQSection />
      <SubscriptionSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}
