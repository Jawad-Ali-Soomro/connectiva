import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Hospital, Microscope, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Where Science Meets Clarity
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                We help healthcare and life science organizations simplify complex scientific concepts for strategic
                communication, education, and impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-6">
                  <Link  href={'/contact'}>
                  Book a Free Consultation</Link>
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-6">
                 <Link href={'/portfolio'}>
                  See Our Work
                 </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="1.jpg"
                alt="Scientific communication"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Who We Help</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Microscope className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pharmaceutical & Biotech Teams</h3>
              <p className="text-gray-600">Simplifying complex research for stakeholders and decision-makers.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Hospital className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hospitals & Healthcare Providers</h3>
              <p className="text-gray-600">Translating medical information for patients and staff.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Communication Agencies</h3>
              <p className="text-gray-600">Enhancing scientific accuracy in health campaigns.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">NGOs & Public Health Organizations</h3>
              <p className="text-gray-600">Making research accessible for global health initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Scientific Content Simplification</h3>
              <p className="text-gray-700 mb-4">
                Turn complex research into accessible summaries that maintain scientific integrity while improving
                comprehension.
              </p>
              <Link href="/services" className="text-teal-600 font-medium inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Scientific Concept Clarification</h3>
              <p className="text-gray-700 mb-4">
                Translate technical jargon into actionable insights that resonate with your target audience.
              </p>
              <Link href="/services" className="text-teal-600 font-medium inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Custom Educational Materials</h3>
              <p className="text-gray-700 mb-4">
                Develop tailored resources for internal training, patient engagement, or stakeholder education.
              </p>
              <Link href="/services" className="text-teal-600 font-medium inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Science Communication Strategy</h3>
              <p className="text-gray-700 mb-4">
                Align your scientific messaging with your organizational mission and audience needs.
              </p>
              <Link href="/services" className="text-teal-600 font-medium inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-6">Explore Our Services</Button>
          </div>
        </div>
      </section>

      {/* Why Connectiva Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/3.jpg"
                alt="Why choose Connectiva"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Connectiva?</h2>
              <p className="text-lg text-gray-700">We bridge the gap between science and understanding.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-teal-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Deep scientific expertise</h3>
                    <p className="text-gray-600">Specialized knowledge in rare diseases and cardiovascular research.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-teal-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Trusted by professionals</h3>
                    <p className="text-gray-600">Working with leading organizations in pharma and healthcare.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-teal-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ethically driven</h3>
                    <p className="text-gray-600">Human-led, results-focused approach to scientific communication.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-teal-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Not just AI-generated content</h3>
                    <p className="text-gray-600">Real understanding of complex scientific concepts.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Work</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <Image src="4.jpg" alt="Case study" fill className="object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Simplifying Rare Disease Research</h3>
                <p className="text-gray-700 mb-6">
                  See how we helped a biotech team simplify their rare disease pitch for global regulators, resulting in
                  faster approval and clearer stakeholder communication.
                </p>
                <Link href="/portfolio">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">View Our Work</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-teal-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to simplify your science and amplify your impact?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help translate your complex scientific concepts into clear, impactful
            communication.
          </p>
          <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">Book a Call</Button>
        </div>
      </section>
    </div>
  )
}
