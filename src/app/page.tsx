import Intro from "@/components/intro";
import Description from "@/components/description";
import Experiences from "@/components/experiences";
import Section from "@/components/section";
import Kpi from "@/components/kpi";
import InsightsTechTransition from "@/components/insights-tech-transition";
import Stacks from "@/components/stacks";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <Description />
      <Experiences />
      <Section />
      <Kpi />
      <InsightsTechTransition />
      <div className="relative -mt-[200vh]">
        <Stacks />
      </div>
      <Footer />
    </main>
  );
}
