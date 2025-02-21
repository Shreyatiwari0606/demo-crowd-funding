import React from 'react';
import { Users, Heart, Globe } from 'lucide-react';

function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              About CrowdFund
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Empowering change through collective action
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in the power of community to create meaningful change. Our platform connects passionate individuals with impactful projects, making it easy to contribute to causes that matter.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Community First</h3>
                <p className="mt-2 text-gray-600">
                  Building strong connections between donors and projects to create lasting impact.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <Heart className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Transparent Impact</h3>
                <p className="mt-2 text-gray-600">
                  Every donation is tracked and its impact clearly reported to ensure accountability.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <Globe className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Global Reach</h3>
                <p className="mt-2 text-gray-600">
                  Supporting projects worldwide to create positive change on a global scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">$10M+</div>
              <div className="mt-2 text-blue-100">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">1000+</div>
              <div className="mt-2 text-blue-100">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50K+</div>
              <div className="mt-2 text-blue-100">Active Donors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;