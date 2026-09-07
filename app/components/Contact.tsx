export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1260px] px-6 py-24">
      <div className="mx-auto max-w-[653px] rounded-[24px] bg-white/70 p-8 text-center ring-1 ring-black/5 sm:p-12">
        <h2 className="font-pixel text-3xl font-semibold sm:text-4xl">
          Do you have a Question? We&rsquo;d love to help.
        </h2>

        <form className="mt-8 flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm outline-none focus:border-[#1248fc]"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm outline-none focus:border-[#1248fc]"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="rounded-[20px] border border-black/15 bg-white px-5 py-3 text-sm outline-none focus:border-[#1248fc]"
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-[#1248fc] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
