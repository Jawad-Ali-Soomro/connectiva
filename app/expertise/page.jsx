import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Expertise() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Expertise</h1>
            <p className="text-lg md:text-xl text-gray-700">
              With deep scientific knowledge and communication skills, we bridge the gap between complex research and
              clear understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="5.jpg" alt="Our Approach" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-gray-700 mb-6">
                We believe that scientific communication should be both accessible and accurate. Our approach combines
                deep scientific expertise with clear communication principles to ensure that complex concepts are
                understood without sacrificing scientific integrity.
              </p>
              <p className="text-gray-700 mb-6">
                We work closely with our clients to understand their specific needs and audiences, tailoring our
                approach to achieve the best possible outcomes. Whether you're communicating with patients, healthcare
                professionals, regulators, or the general public, we ensure your message is clear, accurate, and
                impactful.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-teal-50 px-4 py-2 rounded-full text-teal-700 font-medium">Evidence-based</div>
                <div className="bg-teal-50 px-4 py-2 rounded-full text-teal-700 font-medium">Audience-focused</div>
                <div className="bg-teal-50 px-4 py-2 rounded-full text-teal-700 font-medium">
                  Scientifically accurate
                </div>
                <div className="bg-teal-50 px-4 py-2 rounded-full text-teal-700 font-medium">Clear communication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Rare Diseases</h3>
              <p className="text-gray-700">
                Specialized knowledge in rare disease mechanisms, treatments, and the unique challenges of communicating
                about conditions with limited public awareness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Cardiovascular Research</h3>
              <p className="text-gray-700">
                Deep understanding of cardiovascular disease pathways, treatments, and clinical trial design, with
                expertise in translating complex cardiac concepts for various audiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Oncology</h3>
              <p className="text-gray-700">
                Expertise in cancer biology, treatment modalities, and clinical research, with a focus on making complex
                oncology concepts accessible to patients and stakeholders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Clinical Trials</h3>
              <p className="text-gray-700">
                Comprehensive knowledge of clinical trial design, execution, and reporting, with skills in translating
                complex trial data into clear insights for various stakeholders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Genomics & Precision Medicine</h3>
              <p className="text-gray-700">
                Specialized knowledge in genomic technologies, personalized medicine approaches, and the communication
                challenges associated with genetic information.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Public Health Communication</h3>
              <p className="text-gray-700">
                Experience in translating scientific research into effective public health messaging, with a focus on
                behavior change and health literacy principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-[300px]">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7UXQPsmEcEWZ59pRTP6kvTmuIJpRxzWYnyJxmQfgnM3owhqXYkwiBpQ&s" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Dr. Sarah Johnson</h3>
                <p className="text-teal-600 font-medium mb-4">Founder & Scientific Director</p>
                <p className="text-gray-700">
                  PhD in Molecular Biology with 15+ years of experience in rare disease research and scientific
                  communication.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-[300px]">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntaOBOIeHB_cxyuLQXQHS7YMLJUKn6cozHLBBBmnMkH-7Gx9c_d7IfE1OsJfpZZOgIEfm&s" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Dr. Michael Chen</h3>
                <p className="text-teal-600 font-medium mb-4">Medical Communication Specialist</p>
                <p className="text-gray-700">
                  MD with expertise in translating clinical research for healthcare professionals and patients.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-[300px]">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6bjkSjDA4g5xvpAs1i0i3p118i1Rs3D5jXXGkaMGYob2w6bDLEk_VXa80r7fHHsMNbgL&s" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Emma Rodriguez</h3>
                <p className="text-teal-600 font-medium mb-4">Science Communication Strategist</p>
                <p className="text-gray-700">
                  MSc in Science Communication with background in developing educational materials for healthcare
                  organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-teal-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Work with our expert team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our scientific expertise can help you communicate more effectively with your audience.
          </p>
          <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">Contact Us</Button>
        </div>
      </section>
    </div>
  )
}
