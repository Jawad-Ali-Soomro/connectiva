import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WhatWeDo() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h1>
            <p className="text-lg md:text-xl text-gray-700">
              We transform complex scientific concepts into clear, accessible content that resonates with your target
              audience while maintaining scientific integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scientific Concept Clarification</h2>
                <p className="text-gray-700 mb-6">
                  We translate technical jargon and complex scientific concepts into clear, accessible language that
                  resonates with your target audience.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Simplify complex mechanisms of action</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Explain clinical trial results for non-scientists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Create analogies and visual explanations</span>
                  </li>
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Learn More</Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="5.jpg"
                  alt="Scientific Concept Clarification"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="4.jpg"
                  alt="Content Simplification"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Scientific Content Simplification</h2>
                <p className="text-gray-700 mb-6">
                  We transform dense scientific content into clear, engaging materials that maintain accuracy while
                  improving comprehension and engagement.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Research summaries for stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Patient-friendly educational materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Simplified scientific presentations</span>
                  </li>
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Learn More</Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Custom Educational Materials</h2>
                <p className="text-gray-700 mb-6">
                  We develop tailored educational resources that make complex scientific concepts accessible to your
                  specific audience.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Training materials for healthcare professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Patient education resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Stakeholder communication tools</span>
                  </li>
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Learn More</Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="3.jpg"
                  alt="Custom Educational Materials"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="1.jpg"
                  alt="Science Communication Strategy"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Science Communication Strategy</h2>
                <p className="text-gray-700 mb-6">
                  We help you develop comprehensive strategies to communicate complex scientific information effectively
                  to your target audiences.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Audience analysis and messaging frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Content planning for scientific topics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-teal-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Channel optimization for scientific messaging</span>
                  </li>
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-teal-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to make your science more accessible?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help you communicate complex scientific concepts more effectively.
          </p>
          <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">Contact Us</Button>
        </div>
      </section>
    </div>
  )
}
