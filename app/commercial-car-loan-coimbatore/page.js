import Image from 'next/image'
export const metadata = {
  title: 'Commercial Car Loan Coimbatore | Moneyline Finance',
  description:
    'Commercial vehicle finance and taxi loans in Coimbatore with instant approval.',
}

export default function Page() {
  return (
    <main className="bg-[#F5F8FC] min-h-screen text-[#162033]">
      <section className="bg-gradient-to-br from-[#071B34] to-[#10294D] text-white py-28 px-6">
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
            className="rounded-[36px] shadow-2xl object-cover"
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
                className="bg-white rounded-3xl p-8 shadow-lg"
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