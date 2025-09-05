import QuoteForm from "../components/get-quotes-form";

const WRAP = "mr-auto w-full max-w-[1200px] pl-4 sm:pl-8 lg:pl-24 pr-4";

export default function GetQuote() {
  return (
    <section id="quote" className="relative py-20 bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-10 bg-[url('/project-bg.png')] bg-cover bg-center" />
      <div className={`relative ${WRAP}`}>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-sky-700 mb-4">
          READY TO START YOUR PROJECT
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-center mb-10">
          Connect with our team today to discuss your vision and get tailored construction solution.
        </p>
        <div className="max-w-3xl mx-auto">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
