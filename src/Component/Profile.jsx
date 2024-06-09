import React, { useState } from 'react';
import FooterSmall from "./FooterSmall";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const Profile = () => {

    return (
        <div className='w-screen h-screen bg-izeno-gradien-1'>
            <div className='ml-64'>
                <Navbar />
            </div>

            <div className='flex-1 p-8 flex justify-center items-center ml-72'>
                <div className='container bg-izeno-white rounded-lg shadow-lg p-4 w-full max-w-3xl'>
                    <h1 className='bg-izeno-main p-2 rounded text-izeno-white text-3xl font-bold text-center mb-2'>User Profile</h1>

                    <table class="min-w-full">
                        <tbody class="divide-y divide-gray-200">
                            <tr class="">
                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Tenant ID</td>
                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: iZeno partner 1</td>
                            </tr>
                            <tr class="">
                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Current User</td>
                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: Kennard</td>
                            </tr>
                            <tr class="">
                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Role Based</td>
                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: Account Admin</td>
                            </tr>
                            <tr class="">
                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Total User</td>
                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: 10</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div>
                <Sidebar />
            </div>
            <footer>
                <FooterSmall absolute />
            </footer>
        </div>
    );
}

export default Profile;
