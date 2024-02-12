import {
  ContactForm,
  Description,
  Download,
  Footer,
  Header,
  Hero,
  Reviews,
  Steps,
  ScrollToTopButton,
} from "../components";

export default function Home() {
  return (
    <main className="flex flex-col justify-between gap-10">
      <div className="gradient w-full px-12 pt-14 h-[800px] ">
        <Header />
        <Hero />
      </div>

      <Description />
      <Steps />
      <Download />
      <div className="bg-lightBlue mt-14">
        <Reviews />
      </div>
      <ContactForm />
      <div className="bg-skyBlue">
        <Footer />
      </div>
      <ScrollToTopButton />
    </main>
  );
}
