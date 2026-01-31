import React from 'react'
import Image from 'next/image'

const TrustIndicators = () => {
  return (
    <section className="py-8 bg-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg text-slate-600 mb-4 font-semibold">Trusted by startups, SMEs & growing brands</h2>
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {["/logos/logo-1.png", "/logos/logo-2.png", "/logos/logo-3.png", "/logos/logo-4.png"].map((logo, i) => (
                <Image
                    key={i}
                    src={`${logo}`}
                    alt={`Client ${i + 1}`}
                    width={120}
                    height={40}
                    className="opacity-60 hover:opacity-100 transition w-20 h-10 object-cover rounded-3xl"
                />
            ))}
          </div>
        </div>
      </section>
  )
}

export default TrustIndicators