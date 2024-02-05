import {
  ContactForm,
  Description,
  Download,
  Footer,
  Header,
  Hero,
  Reviews,
  Steps,
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
      <div className="bg-lightBlue">
        <Reviews />
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
