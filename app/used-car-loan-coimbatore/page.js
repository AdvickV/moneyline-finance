import Image from 'next/image'
export const metadata = {
  title: 'Used Car Loan Coimbatore | Moneyline Finance',
  description:
    'Get low interest used car loans in Coimbatore with instant 3-hour approval and minimal documentation.',
}

export default function Page() {
  return (
    <main className="bg-[#F5F8FC] min-h-screen text-[#162033]">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#071B34] to-[#10294D] text-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-white/60 mb-8">
            Home / Used Car Loan Coimbatore
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Used Car Loan Coimbatore
          </h1>

          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            Get low interest used car finance in Coimbatore with
            instant approval, flexible EMI options, and minimal
            documentation.
          </p>
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/services/used-car-loan-coimbatore.webp"
            alt="Used Car Loan Coimbatore"
            width={800}
            height={600}
            className="rounded-[36px] shadow-2xl object-cover"
          />

          <div>
            <p className="text-emerald-600 font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-bold mb-8">
              Fast & Transparent Used Car Finance
            </h2>

            <div className="space-y-5">
              {[
                'Lowest interest rates',
                'Instant 3-hour approval',
                'Minimal documentation',
                'Flexible EMI plans',
                'Trusted local finance experts',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <p className="font-semibold text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}