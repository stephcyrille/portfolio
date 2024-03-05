import React from 'react'
// import styles from './predictor.module.css';
import logoF1 from '../../assets/images/predictor/F1_logo.png'

export const PredictorPage = (props) => {

  return (
    <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-teal-300 h-screen dark:from-lime-200 dark:via-gray-600 dark:to-gray-600 pt-48'>
        <div className="p-8 flex flex-col items-center w-3/4 bg-white rounded-lg shadow-lg dark:bg-gray-700 lg:max-h-full" style={{ margin: '0 auto' }}>
          <img src={logoF1} alt="Your " className="w-32 h-32 rounded-full mb-8" />

          <div className='md:p-16 sm:p-8 lg:grid lg:grid-cols-2 lg:static lg:overflow-visible '>
            <div className='px-8'>
              <img src={logoF1} alt="Your " className="w-64 h-64 rounded-full mb-8" />
            </div>
            <form className="flex flex-col justify-center">
              <div className="flex flex-wrap mb-4">
                <div className="w-full sm:w-1/2 sm:pr-4">
                    <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Driver name</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-4">
                  <select id="team" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Team</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-full sm:w-1/2 sm:pr-2">
                  <select id="season" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Season</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-2">
                  <select id="circuit" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Circuit name</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
              </div>
              <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-10 py-6 text-center me-2 m-6 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Make a prediction</button>
            </form>
          </div>

        </div>
    </div>
  )
}