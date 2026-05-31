import Image from 'next/image'
export const metadata = {
  title: 'Car Finance Coimbatore | Moneyline Finance',
  description:
    'Best car finance solutions in Coimbatore with low interest rates and quick approvals.',
}

export default function Page() {
  return (
    <main className="bg-[#030712] min-h-screen text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_25%)]"></div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#071B34] to-[#020617] text-white py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-white/60 mb-8">
            Home / Car Finance Coimbatore
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Best Car Finance in Coimbatore
          </h1>

          <p className="text-xl text-white/80 max-w-3xl">
            Premium vehicle finance solutions with low interest
            rates and instant approvals.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/services/car-finance-coimbatore.webp"
            alt="Car Finance Coimbatore"
            width={800}
            height={600}
            className="rounded-[36px] shadow-[0_20px_80px_rgba(0,0,0,0.45)] border border-white/10"
          />

          <div>
            <h2 className="text-4xl font-bold mb-8">
              Trusted Vehicle Finance Experts
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Moneyline Finance provides used car finance
              and two wheeler finance
              across Coimbatore with transparent processing and
              competitive interest rates.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Instant Approval',
                'Low Interest Rates',
                'Flexible EMI',
                'Trusted Team',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:border-emerald-400/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}