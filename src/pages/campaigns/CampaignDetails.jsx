import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Target, Share2, Heart } from 'lucide-react';

function CampaignDetails() {
  const { id } = useParams();


  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Campaign Image */}
          <div className="relative h-96">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Campaign"
            />
          </div>

          {/* Campaign Info */}
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Campaign Title {id}</h1>
                <p className="mt-2 text-gray-600">by John Doe</p>
              </div>
              <div className="flex space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  <Heart className="h-5 w-5 mr-2" />
                  Support
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: '70%' }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$35,000</p>
                    <p className="text-sm text-gray-600">of $50,000 goal</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">524</p>
                    <p className="text-sm text-gray-600">supporters</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15</p>
                    <p className="text-sm text-gray-600">days left</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Stats */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-500" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Campaign End Date</p>
                  <p className="text-sm text-gray-500">March 31, 2024</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-500" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Total Supporters</p>
                  <p className="text-sm text-gray-500">524 people</p>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="h-6 w-6 text-blue-500" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Funding Goal</p>
                  <p className="text-sm text-gray-500">$50,000</p>
                </div>
              </div>
            </div>

            {/* Campaign Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">About this campaign</h2>
              <div className="mt-4 prose prose-blue">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mt-4 text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            {/* Support Form */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Support this campaign</h2>
              <form className="mt-4">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                      Donation Amount
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Support Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;