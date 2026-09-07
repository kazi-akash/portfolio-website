export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1260px] px-6 py-24">
      <div className="flex min-h-[508px] flex-col justify-center rounded-[32px] bg-white p-8 ring-1 ring-black/5 sm:p-12">
        <h2 className="font-pixel text-[50px] leading-[1em] font-medium">
          Do you have a Question
          <br />
          We&rsquo;d love to help
        </h2>

        <form className="mt-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-full border border-[#1248fc] bg-white px-5 py-3.5 text-sm text-black placeholder:text-black outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-full border border-[#1248fc] bg-white px-5 py-3.5 text-sm text-black placeholder:text-black outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="rounded-full border border-[#1248fc] bg-white px-5 py-3.5 text-sm text-black placeholder:text-black outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_260px]">
            <textarea
              placeholder="Messege"
              rows={6}
              className="rounded-[20px] border border-[#1248fc] bg-white px-5 py-4 text-sm text-black placeholder:text-black outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center rounded-[20px] bg-[#1248fc] text-2xl font-medium text-white transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
