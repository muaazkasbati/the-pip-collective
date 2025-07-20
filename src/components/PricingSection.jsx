export default function PricingSection() {
  const plans = [
    {
      title: "Monthly Subscription PipCollector EA",
      price: "£49.99",
      priceTime: "Month",
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
      price: "£249.00",
      priceTime: "6 Months",
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
      price: "£449.00",
      priceTime: "Year",
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
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
          Join Us ThePipCollective
        </span>
        <h2 className="text-4xl md:text-[48px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-4">
          Select A Plan. Start Trading Smarter.
        </h2>
        <p className="text-[24px] text-[#767676] mb-8 max-w-4xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white/10 py-8 px-10 rounded-xl text-left">
              <h3 className="text-[21px] font-semibold text-white mb-2">Get INSTANT Access</h3>
              <h4 className="text-[17px] text-white mb-2">{plan.title}</h4>
              <p className="text-[35px] font-semibold text-white mb-10">{plan.price}/<small className="text-[14px] font-semibold">{plan.priceTime}</small></p>
              <ul className="text-white text-[14px] space-y-3 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-purple-600 mr-2">
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="border border-[#A200F5] shadow shadow-[#A200F5] text-[18px] font-medium text-white px-6 py-2 rounded-full cursor-pointer w-full">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-white text[15px] font-medium flex flex-wrap justify-center space-x-4">
          <span className="flex items-center">
            <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span> No lock-in contracts - cancel anytime
          </span>
          <span className="flex items-center">
            <span className="w-4 h-4 bg-purple-400 rounded-full mr-2"></span> Trusted by real traders. No gimmicks. No BS
          </span>
          <span className="flex items-center">
            <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span> Instant activation - get trading in minutes
          </span>
          <span className="flex items-center">
            <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span> Weekly setfile drops - tested & ready to go
          </span>
        </div>
      </div>
    </section>
  );
}