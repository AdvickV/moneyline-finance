import Image from 'next/image'
export const metadata = {
  title: 'Commercial Car Loan Coimbatore | Moneyline Finance',
  description:
    'Commercial vehicle finance and taxi loans in Coimbatore with instant approval.',
}

export default function Page() {
  return (
    <main className="bg-[#030712] min-h-screen text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_25%)]"></div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#071B34] to-[#020617] text-white py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-white/60 mb-8">
            Home / Commercial Car Loan Coimbatore
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Commercial Vehicle Finance
          </h1>

          <p className="text-xl text-white/80 max-w-3xl">
            Taxi loans, business vehicle finance, and commercial
            transport vehicle loans in Coimbatore.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/services/commercial-car-loan-coimbatore.webp"
            alt="Commercial Car Loan Coimbatore"
            width={800}
            height={600}
            className="rounded-[36px] shadow-[0_20px_80px_rgba(0,0,0,0.45)] border border-white/10"
          />

          <div className="space-y-6">
            {[
              'Taxi finance',
              'Business vehicle loans',
              'Fast commercial approvals',
              'Flexible repayment options',
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:border-emerald-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}