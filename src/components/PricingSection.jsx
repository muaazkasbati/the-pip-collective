export default function PricingSection() {
  const plans = [
    {
      title: "Monthly Subscription PipCollector EA",
      price: "£49.99/Month",
      features: [
        "5 Account Licenses",
        "Step-By-Step Setup Guides",
        "Strategy Education & Training",
        "Exclusive Access to Discord & Web App",
        "Access to Settle Finder",
        "Ready to Trade Settfiles",
      ],
      buttonText: "Checkout Now",
    },
    {
      title: "6 Month Subscription PipCollector EA",
      price: "£249.00/6 Months",
      features: [
        "5 Account Licenses",
        "Step-By-Step Setup Guides",
        "Strategy Education & Training",
        "Exclusive Access to Discord & Web App",
        "Access to Settle Finder",
        "Ready to Trade Settfiles",
      ],
      buttonText: "Checkout Now",
    },
    {
      title: "Annual Subscription PipCollector EA",
      price: "£449.00/Year",
      features: [
        "5 Account Licenses",
        "Step-By-Step Setup Guides",
        "Strategy Education & Training",
        "Exclusive Access to Discord & Web App",
        "Access to Settle Finder",
        "Ready to Trade Settfiles",
      ],
      buttonText: "Checkout Now",
    },
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full mb-4 hover:bg-purple-700">
          Join Us ThePipCollective
        </button>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Select A Plan. Start Trading Smarter.
        </h2>
        <p className="text-gray-400 mb-8">
          All plans include full access to the EA (including future updates), ready to trade setfiles, settle finder, dashboard tools & 24/7 support.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
            Subscribe & Get Access
          </button>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
            FREE Access via Broker
          </button>
        </div>
        <p className="text-gray-400 mb-8 text-sm">
          Flexible Plans: Monthly, 6 Month, Annual & Lifetime subscriptions.
          <br />
          Join Our Partnered Broker & Get FREE Lifetime Access
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700/50 text-left">
              <h3 className="text-xl font-semibold text-white mb-4">Get INSTANT Access</h3>
              <h4 className="text-2xl font-bold text-purple-400 mb-2">{plan.title}</h4>
              <p className="text-3xl font-bold text-white mb-4">{plan.price}</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 w-full">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-400 flex flex-wrap justify-center space-x-4">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span> No lock-in contracts - cancel anytime
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span> Trusted by real traders. No gimmicks. No BS
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span> Instant activation - get trading in minutes
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span> Weekly setfile drops - tested & ready to go
          </span>
        </div>
      </div>
    </section>
  );
}