import Image from 'next/image';

export default function SubscriptionSection() {
  return (
    <section className="bg-black py-16 px-4 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <Image src="/trader-image.jpg" alt="Trader" width={300} height={400} className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-2/3 md:pl-12 text-center md:text-left bg-gray-900/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700/50">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          Unlock Your Edge In The Markets
        </h2>
        <p className="text-gray-400 mb-6">
          Be the first to get EA updates and exclusive offers — straight to your inbox.
          <br />
          We respect your privacy. Unsubscribe anytime.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-1">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
              placeholder="Your Email"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}