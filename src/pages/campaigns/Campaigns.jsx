import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';

function Campaigns() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
              Active Campaigns
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link
              to="/campaigns/new"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Start a Campaign
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search campaigns..."
              />
            </div>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              >
                <option>All Categories</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Environment</option>
                <option>Technology</option>
                <option>Community</option>
              </select>
            </div>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((campaign) => (
            <div key={campaign} className="bg-white overflow-hidden shadow rounded-lg">
              <img
                className="h-48 w-full object-cover"
                src={`https://images.unsplash.com/photo-${campaign % 2 === 0 ? '1488521787991-ed7bbaae773c' : '1532629345422-7515f3d16bb6'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt={`Campaign ${campaign}`}
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Campaign Title {campaign}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  A brief description of the campaign and its goals. This campaign aims to make a difference in...
                </p>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${30 * campaign}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${(5000 * campaign).toLocaleString()} raised</span>
                      <span>${(10000 * campaign).toLocaleString()} goal</span>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/campaigns/${campaign}`}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Campaigns;