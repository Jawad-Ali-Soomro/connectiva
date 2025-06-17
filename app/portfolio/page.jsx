import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Explore how we've helped organizations translate complex scientific concepts into clear, impactful
              communication.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16">
            {/* Case Study 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Case study" fill className="object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-teal-600 font-medium mb-2">Pharmaceutical Industry</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Simplifying Rare Disease Research</h2>
                  <p className="text-gray-700 mb-6">
                    We helped a biotech company simplify their complex rare disease research for regulatory submissions
                    and investor communications, resulting in faster approval processes and clearer stakeholder
                    understanding.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white self-start">Read Case Study</Button>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto order-1 md:order-2">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Case study" fill className="object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="text-teal-600 font-medium mb-2">Healthcare Provider</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Patient Education Materials for Cardiovascular Disease
                  </h2>
                  <p className="text-gray-700 mb-6">
                    We developed a series of patient education materials that simplified complex cardiovascular disease
                    concepts, improving patient understanding and treatment adherence by 35%.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white self-start">Read Case Study</Button>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Case study" fill className="object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-teal-600 font-medium mb-2">Public Health Organization</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Genomics Education Campaign</h2>
                  <p className="text-gray-700 mb-6">
                    We created a comprehensive public education campaign that translated complex genomics concepts into
                    accessible content, reaching over 2 million people and increasing understanding of precision
                    medicine.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white self-start">Read Case Study</Button>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto order-1 md:order-2">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Case study" fill className="object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="text-teal-600 font-medium mb-2">Research Institution</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Clinical Trial Results Communication</h2>
                  <p className="text-gray-700 mb-6">
                    We helped a research institution communicate complex clinical trial results to multiple audiences,
                    including patients, healthcare providers, and the media, increasing engagement and accurate
                    reporting.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white self-start">Read Case Study</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-4 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Connectiva transformed our complex research into clear, compelling content that resonated with both
                patients and healthcare providers. Their scientific expertise combined with communication skills made
                all the difference."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Dr. Jennifer Lee</p>
                <p className="text-gray-600">Research Director, BioTech Innovations</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-4 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The patient education materials Connectiva created for our cardiovascular program have dramatically
                improved patient understanding and engagement. Their ability to simplify without oversimplifying is
                remarkable."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                <p className="text-gray-600">Patient Education Director, Metro Health System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-teal-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your scientific communication?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you translate complex scientific concepts into clear, impactful communication.
          </p>
          <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">Contact Us</Button>
        </div>
      </section>
    </div>
  )
}
