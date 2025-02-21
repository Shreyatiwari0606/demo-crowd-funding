import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Make a Difference Today
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Join our community of changemakers and help fund projects that matter. Every contribution counts towards creating positive impact in the world.
          </p>
          <div className="mt-10">
            <Link
              to="/campaigns"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Campaigns
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Campaigns */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Featured Campaigns
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white overflow-hidden shadow rounded-lg">
                <img
                  className="h-48 w-full object-cover"
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1488521787991-ed7bbaae773c' : item === 2 ? '1532629345422-7515f3d16bb6' : '1519834785553-9c0e284be58f'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt="Campaign"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Campaign Title {item}</h3>
                  <p className="mt-2 text-gray-600">
                    A brief description of the campaign and its goals. This campaign aims to make a difference in...
                  </p>
                  <div className="mt-4">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                        <div
                          style={{ width: `${30 * item}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>${(5000 * item).toLocaleString()} raised</span>
                        <span>${(10000 * item).toLocaleString()} goal</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/campaigns/${item}`}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;