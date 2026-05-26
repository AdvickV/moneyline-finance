import Image from 'next/image'
export const metadata = {
  title: 'Car Finance Coimbatore | Moneyline Finance',
  description:
    'Best car finance solutions in Coimbatore with low interest rates and quick approvals.',
}

export default function Page() {
  return (
    <main className="bg-[#F5F8FC] min-h-screen text-[#162033]">
      <section className="bg-gradient-to-br from-[#071B34] to-[#10294D] text-white py-28 px-6">
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
            className="rounded-[36px] shadow-2xl object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold mb-8">
              Trusted Vehicle Finance Experts
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Moneyline Finance provides used car finance,
              commercial vehicle loans, and two wheeler finance
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
                  className="bg-white rounded-3xl p-8 shadow-lg"
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