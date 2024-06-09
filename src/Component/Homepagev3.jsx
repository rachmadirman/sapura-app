import React from 'react';
import FooterSmall from "./FooterSmall";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const HomePageExist = () => {
  return (
    <>
      <section className="absolute w-full h-full bg-izeno-gradien-1">

        <div className='ml-64'>
        <Navbar/>
        </div>
        
        <Sidebar/>
        <section class="text-izeno-black p-4 ml-64">
          <div class="container mx-auto">
            <h1 class="text-5xl font-bold">Welcome to e-Invoice</h1>
            <p class="mt-2">We will help you to upload your invoice. We accept json, csv, and xml format documents.</p>
          </div>
        </section>

        <section class="p-0 ml-32">
          <div class="container mx-52 max-w-2xl bg-izeno-white relative shadow-lg rounded-lg border-0">
            <h2 class="text-2xl font-bold mb-2 pt-2 text-izeno-black">Hi, Kennard</h2>
            <p class="text-gray-700 mb-2">Please find below the configuration for your user:</p>

            <div mb-2>
              <form class="mx-auto">

              <div class="mb-2">
                  <label for="Account" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account</label>
                  <input type="text" id="Account" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light cursor-not-allowed" disabled readonly value="TestAccount" />
                </div>

                <div class="mb-2">
                  <label for="Database" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Database</label>
                  <input type="text" id="Database" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light cursor-not-allowed"  disabled readonly value="TestDB"/>
                </div>

                <div class="mb-2 pb-4">
                  <label for="Schema" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Schema</label>
                  <input type="text" id="Schema" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light cursor-not-allowed" disabled readonly value="TestSchema" />
                </div>

                
              </form>
            </div>
          </div>
        </section>
        <FooterSmall absolute />
      </section>
    </>
  );
}

export default HomePageExist;
