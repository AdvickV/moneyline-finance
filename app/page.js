export const metadata = {
  title: 'Car Loan Coimbatore | Moneyline Finance',
  description:
    'Lowest interest car loans in Coimbatore with instant 3-hour approval.',
}

export default function Page() {
  const services = [
    {
      title: 'Used Car Loans',
      description:
        'Fast approval used car finance solutions with competitive interest rates and minimal documentation.',
    },
    {
      title: 'Commercial Car Loans',
      description:
        'Flexible business vehicle finance for taxis, travel operators, and commercial use.',
    },
    {
      title: 'Two Wheeler Loans',
      description:
        'Affordable bike and scooter loans with quick processing and easy eligibility.',
    },
    {
      title: 'Car & Bike Finance',
      description:
        'Vehicle finance solutions tailored for customers across Coimbatore.',
    },
  ]

  const testimonials = [
    {
      name: 'Arun Kumar',
      review:
        'Very smooth and professional process. My used car loan was approved within hours.',
    },
    {
      name: 'Vignesh R',
      review:
        'Lowest interest rates I found in Coimbatore. Excellent support from the team.',
    },
    {
      name: 'Pradeep S',
      review:
        'Quick approval, transparent process, and very helpful finance advisors.',
    },
  ]

  return (
    <main className="bg-[#F5F8FC] text-[#162033] min-h-screen font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#071B34]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Moneyline Finance
            </h1>

            <p className="text-sm text-emerald-300">
              Used Car Finance in Coimbatore
            </p>
          </div>

          <div className="hidden md:flex gap-8 text-white/90 text-sm">
            <a href="#home" className="hover:text-emerald-300 transition">
              Home
            </a>

            <a href="#services" className="hover:text-emerald-300 transition">
              Services
            </a>

            <a href="#about" className="hover:text-emerald-300 transition">
              About
            </a>

            <a href="#contact" className="hover:text-emerald-300 transition">
              Contact
            </a>
          </div>

          <a
            href="https://wa.me/919994044442"
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 rounded-full font-medium shadow-xl transition"
          >
            WhatsApp Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#071B34] via-[#10294D] to-[#071B34] text-white py-28 px-6"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#0FAE7B,transparent_35%)]" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-2 mb-8">
              <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></span>

              <span className="text-sm font-medium">
                Instant 3-Hour Loan Approval
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Lowest Interest{' '}
              <span className="text-emerald-400">Car Loans</span> in
              Coimbatore
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-10">
              Moneyline Finance provides low interest used car loans, two
              wheeler finance, and commercial vehicle loans in Coimbatore with
              minimal documentation and hassle-free processing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919994044442"
                className="bg-emerald-500 hover:bg-emerald-400 px-7 py-4 rounded-2xl font-semibold transition shadow-2xl"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919994044442"
                className="border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 px-7 py-4 rounded-2xl font-semibold transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="bg-white/10 rounded-3xl p-6">
                <p className="text-white/70 text-sm mb-2">
                  Used Car Loan Coimbatore
                </p>

                <h3 className="text-3xl font-bold text-emerald-300">
                  Lowest Interest Rates
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white/10 rounded-3xl p-6">
                  <p className="text-sm text-white/70">Approval Time</p>

                  <h3 className="text-2xl font-bold mt-2">3 Hours</h3>
                </div>

                <div className="bg-white/10 rounded-3xl p-6">
                  <p className="text-sm text-white/70">Documentation</p>

                  <h3 className="text-2xl font-bold mt-2">Minimal</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-semibold mb-4 uppercase tracking-wider">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#071B34]">
              Vehicle Finance Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <a
                key={service.title}
                href={
                  service.title.includes('Used')
                    ? '/used-car-loan-coimbatore'
                    : service.title.includes('Commercial')
                    ? '/commercial-car-loan-coimbatore'
                    : service.title.includes('Two')
                    ? '/two-wheeler-loan-coimbatore'
                    : '/car-finance-coimbatore'
                }
                className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 block"
              >
                <img
                  src={
                    service.title.includes('Used')
                      ? '/services/used-car-loan-coimbatore.webp'
                      : service.title.includes('Commercial')
                      ? '/services/commercial-car-loan-coimbatore.webp'
                      : service.title.includes('Two')
                      ? '/services/two-wheeler-loan-coimbatore.webp'
                      : '/services/car-finance-coimbatore.webp'
                  }
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#071B34]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 px-6 bg-[#071B34] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-300 font-semibold mb-4 uppercase tracking-wider">
              Why Choose Moneyline Finance
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted Car Finance in Coimbatore
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              'Lowest Interest Rates in Coimbatore',
              'Instant 3-Hour Loan Approval',
              'Minimal Documentation',
              'Transparent & Secure Process',
              'Experienced Finance Team',
              'Hassle-Free Loan Processing',
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              >
                <img
                  src="/why/finance-icon.webp"
                  alt={item}
                  className="w-16 h-16 object-cover rounded-2xl mb-5"
                />

                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 bg-[#071B34] text-white"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-emerald-300 font-semibold mb-4 uppercase tracking-wider">
              About Moneyline Finance
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Trusted Finance Experts in Coimbatore
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Moneyline Finance provides used car loans, commercial
              vehicle finance, and two wheeler loans with instant approvals and
              transparent processing.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              We proudly serve customers across RS Puram, Gandhipuram,
              Peelamedu, Singanallur, Avinashi Road, and surrounding areas in
              Coimbatore.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[36px] p-10 shadow-2xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-300">
                  Our Mission
                </h3>

                <p className="text-white/80">
                  Deliver fast, transparent, and customer-friendly finance
                  solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-300">
                  Our Vision
                </h3>

                <p className="text-white/80">
                  Become one of the most trusted vehicle finance companies in
                  Coimbatore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#071B34] to-[#10294D] rounded-[40px] p-10 md:p-16 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-emerald-300 font-semibold uppercase tracking-wider mb-4">
                  Contact Us
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Get Your Loan Approved Today
                </h2>

                <div className="space-y-6 text-lg">
                  <div>
                    <p className="text-white/60 mb-1">Phone / WhatsApp</p>

                    <p className="font-semibold">+91-9994044442</p>
                  </div>

                  <div>
                    <p className="text-white/60 mb-1">Email</p>

                    <p className="font-semibold">
                      mlfvijay@gmail.com
                    </p>
                  </div>

                  <div>
                    <p className="text-white/60 mb-1">Address</p>

                    <p className="font-semibold leading-relaxed">
                      New No. 91 Old No. 58, W Sambandam Rd,
                      R.S. Puram, Coimbatore, Tamil Nadu 641002
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <a
                    href="tel:+919994044442"
                    className="bg-emerald-500 hover:bg-emerald-400 px-7 py-4 rounded-2xl font-semibold transition"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919994044442"
                    className="bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 px-7 py-4 rounded-2xl font-semibold transition"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-[30px] overflow-hidden min-h-[420px]">
                <iframe 
                  title="Moneyline Finance Location"
                  src="https://www.google.com/maps?q=Money+Line+Finance,+Coimbatore&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* FOOTER */}
<footer className="bg-[#071B34] text-white py-12 px-6 border-t border-white/10">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
    {/* BRAND */}
    <div>
      <h3 className="text-3xl font-bold mb-4">
        Moneyline Finance
      </h3>

      <p className="text-white/70 leading-relaxed">
        Vehicle finance solutions in Coimbatore with
        instant approvals, low interest rates, and transparent
        processing.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="text-xl font-semibold mb-5">
        Quick Links
      </h4>

      <div className="flex flex-col gap-3 text-white/70">
        <a href="#home" className="hover:text-emerald-300 transition">
          Home
        </a>

        <a href="#services" className="hover:text-emerald-300 transition">
          Services
        </a>

        <a href="#about" className="hover:text-emerald-300 transition">
          About
        </a>

        <a href="#contact" className="hover:text-emerald-300 transition">
          Contact
        </a>
      </div>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="text-xl font-semibold mb-5">
        Contact Info
      </h4>

      <div className="space-y-4 text-white/70">
        <p>
          +91-9994044442
        </p>

        <p>
          mlfvijay@gmail.com
        </p>

        <p className="leading-relaxed">
          New No. 91 Old No. 58,
          W Sambandam Rd,
          R.S. Puram,
          Coimbatore,
          Tamil Nadu 641002
        </p>
      </div>
    </div>
  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
    © 2026 Moneyline Finance. All Rights Reserved.
  </div>
</footer>
    </main>
  )
}