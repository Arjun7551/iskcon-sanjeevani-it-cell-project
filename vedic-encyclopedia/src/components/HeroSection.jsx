export default function HeroSection() {
  return (
    <section className="w-full px-12 mb-24">
      <div className="bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 rounded-[2.5rem] p-14 shadow-lg">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-orange-900 mb-10">
          Discover Timeless Vedic Knowledge
        </h2>

        <div className="mx-auto max-w-xl flex bg-white rounded-2xl border border-orange-300 overflow-hidden">
          <input
            type="text"
            placeholder="Search scriptures, deities, concepts..."
            className="flex-1 px-5 py-4 outline-none text-orange-800"
          />
          <button className="px-8 bg-orange-600 text-white font-semibold hover:bg-orange-700">
            Search
          </button>
        </div>
      </div>


      <div className="py-8 h-90">
        <img src="/categories/temple.jpeg"
             alt="krishna"
            className="w-350 h-100 object-cover rounded-xl"
        ></img>
      </div>
    </section>
  );
}
