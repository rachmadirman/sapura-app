import React, { useState } from 'react';
import FooterSmall from "./FooterSmall";
import Navbar from "./Navbar";

const HomePage = () => {

  const [isHovered, setIsHovered] = useState(false);



  return (
    <>
      <section className="absolute w-full h-full bg-izeno-gradien-1">

        <Navbar />
        <div className='flex-1 p-8 flex justify-center items-center mx-auto'>
          <div class="p-0">
            <div class="text-izeno-black p-4">
              <div class="container mx-44">
                <h1 class="text-5xl font-bold">Welcome to e-Invoice</h1>
                <p class="mt-2">This portal will help you to automatically submit your invoice to LHDN.</p>
              </div>
            </div>
            <div class="container mx-52 max-w-2xl bg-izeno-white relative shadow-lg rounded-lg border-0">
              <h2 class="text-2xl font-bold mb-2 pt-2 text-izeno-black">Hi, User</h2>
              <p class="text-gray-700 mb-2">Before you can use this portal you need to fill this form first to configure your personal settings.</p>

              <div>
                <form class="mx-auto">
                  <div class="mb-2">
                    <label for="Table" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account</label>
                    <input type="text" id="Table" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light" placeholder="Accountname" required />
                  </div>

                  <div class="mb-2">
                    <label for="Database" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Database</label>
                    <input type="text" id="Database" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light" placeholder="Databasename" required />
                  </div>

                  <div class="mb-2">
                    <label for="Schema" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Schema</label>
                    <input type="text" id="Schema" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light" placeholder="Schemaname" required />
                  </div>
                  <button type="submit" class="mb-4 mt-2 text-white bg-izeno-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </form>
              </div>
            </div>
          </div>

        </div>

        <FooterSmall absolute />
      </section>
    </>
  );
}

export default HomePage;
