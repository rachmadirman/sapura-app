import React, { useState } from 'react';
import FooterSmall from "./FooterSmall";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { TbChevronCompactDown, TbChevronCompactUp } from "react-icons/tb";

const LHDNConfig = () => {

    // Expandable section
    const [expandedSection, setExpandedSection] = useState(null);
    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    //Edit, Save, and Cancel input section
    const [formData, setFormData] = useState({ clientid: 'test1234567', clientsecret: 'test12345678', tin: '97891102', companyname: 'iZeno Sdn. Bhd.', environment: 'Dev' });
    const [editMode, setEditMode] = useState(false);
    const [tempData, setTempData] = useState({ clientid: '', clientsecret: '', tin: '', companyname: '', environment: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempData({ ...tempData, [name]: value });
    };

    const handleEdit = () => {
        setTempData(formData);
        setEditMode(true);
    };

    const handleCancel = () => {
        setEditMode(false);
        setTempData(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(tempData);
        setEditMode(false);
    };


    return (
        <>
            <section className="absolute w-screen h-screen bg-izeno-gradien-1">
                <div className='ml-64'>
                    <Navbar />
                </div>
                <div className='flex-1 p-8 flex justify-center items-center ml-72'>
                    <div className="container w-full max-w-3xl mx-80 mt-10  bg-izeno-white p-8 rounded-lg shadow-lg space-y-4">
                        {/* First Section */}
                        <button
                            onClick={() => toggleSection(1)}
                            className="w-full flex justify-between items-center bg-izeno-main text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <span className='text-xl'>LHDN Configuration</span>
                            <i>{expandedSection === 1 ? <TbChevronCompactUp /> : <TbChevronCompactDown />}</i>
                        </button>
                        {expandedSection === 1 && (
                            <div className="mt-2">
                                <div>
                                    {editMode ? (
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-2">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientid">
                                                    Client ID
                                                </label>
                                                <input
                                                    type="password"
                                                    id="clientid"
                                                    name="clientid"
                                                    value={tempData.clientid ? tempData.clientid : formData.clientid}
                                                    onChange={handleInputChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-izeno-main leading-tight focus:ring-izeno-main focus:border-izeno-main focus:shadow-outline"
                                                />
                                            </div>

                                            <div className="mb-2">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientsecret">
                                                    Client Secret
                                                </label>
                                                <input
                                                    type="password"
                                                    id="clientsecret"
                                                    name="clientsecret"
                                                    value={tempData.clientsecret ? tempData.clientsecret : formData.clientsecret}
                                                    onChange={handleInputChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-izeno-main leading-tight focus:ring-izeno-main focus:border-izeno-main focus:shadow-outline"
                                                />
                                            </div>

                                            <div className="mb-2">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tin">
                                                    TIN
                                                </label>
                                                <input
                                                    type="text"
                                                    id="tin"
                                                    name="tin"
                                                    value={tempData.tin ? tempData.tin : formData.tin}
                                                    onChange={handleInputChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-izeno-main leading-tight focus:ring-izeno-main focus:border-izeno-main focus:shadow-outline"
                                                />
                                            </div>

                                            <div className="mb-2">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyname">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="companyname"
                                                    name="companyname"
                                                    value={tempData.companyname ? tempData.companyname : formData.companyname}
                                                    onChange={handleInputChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-izeno-main leading-tight focus:ring-izeno-main focus:border-izeno-main focus:shadow-outline"
                                                />
                                            </div>



                                            <div className="flex items-center">
                                                <button
                                                    type="submit"
                                                    className="bg-izeno-main hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                >
                                                    Save
                                                </button>
                                                <div className='ml-2'>
                                                    <button
                                                        type="button"
                                                        onClick={handleCancel}
                                                        className="bg-izeno-red hover:bg-pink-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>

                                            </div>
                                        </form>
                                    ) : (
                                        <div>
                                            <div className="mb-2">
                                                <label for="clientid" class="block mb-2 text-sm font-semibold text-izeno-main dark:text-white">Client ID</label>
                                                <input type="password" id="clientid" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                             focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light cursor-not-allowed"
                                                    disabled readonly value={formData.clientid} />
                                            </div>

                                            <div className="mb-2">
                                                <label for="clientsecret" class="block mb-2 text-sm font-semibold text-izeno-main dark:text-white">Client Secret</label>
                                                <input type="password" id="clientsecret" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                             focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light cursor-not-allowed"
                                                    disabled readonly value={formData.clientid} />
                                            </div>

                                            <div className="mb-2">
                                                <label for="tin" class="block mb-2 text-sm font-semibold text-izeno-main dark:text-white">TIN</label>
                                                <input type="text" id="tin" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                             focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light cursor-not-allowed"
                                                    disabled readonly value={formData.clientid} />
                                            </div>

                                            <div className="mb-2">
                                                <label for="companyname" class="block mb-2 text-sm font-semibold text-izeno-main dark:text-white">Company Name</label>
                                                <input type="text" id="companyname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                             focus:ring-izeno-main focus:border-izeno-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-izeno-main dark:focus:border-izeno-main dark:shadow-sm-light cursor-not-allowed"
                                                    disabled readonly value={formData.clientid} />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <button
                                                    type="button"
                                                    onClick={handleEdit}
                                                    className="bg-izeno-red hover:bg-pink-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Second Section */}

                        <button
                            onClick={() => toggleSection(2)}
                            className="w-full flex justify-between items-center bg-izeno-main text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <span className='text-xl'>Archieve Period</span>
                            <i>{expandedSection === 2 ? <TbChevronCompactUp /> : <TbChevronCompactDown />}</i>
                        </button>

                        {expandedSection === 2 && (
                            <div className="mt-1">
                                <div>
                                    <table class="min-w-full">
                                        <tbody class="divide-y divide-gray-200">
                                            <tr class="">
                                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Retention Period</td>
                                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: 30 days</td>
                                            </tr>
                                            <tr class="">
                                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Storage Name</td>
                                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: TestCompany_InternalStage</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        )}

                        {/* Third Section */}
                        <button
                            onClick={() => toggleSection(3)}
                            className="w-full flex justify-between items-center bg-izeno-main text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <span className='text-xl'>JDBC URL Settings</span>
                            <i>{expandedSection === 3 ? <TbChevronCompactUp /> : <TbChevronCompactDown />}</i>
                        </button>
                        {expandedSection === 3 && (
                            <div className="mt-1">
                                <div>
                                    <table class="min-w-full">
                                        <tbody class="divide-y divide-gray-200">
                                            <tr class="">
                                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Account</td>
                                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: br00321.ap-southeast-1</td>
                                            </tr>
                                            <tr class="">
                                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">User</td>
                                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: Kennard</td>
                                            </tr>
                                            <tr class="">
                                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Role</td>
                                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: Sysadmin</td>
                                            </tr>
                                            <tr class="">
                                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Warehouse</td>
                                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: COMPUTE_WH</td>
                                            </tr>
                                            <tr class="">
                                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Database</td>
                                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: yourcompany_db</td>
                                            </tr>
                                            <tr class="">
                                                <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">schema</td>
                                                <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: yourcompany_schema</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Sidebar />
                <footer>
                    <FooterSmall absolute />
                </footer>

            </section>
        </>
    );
}

export default LHDNConfig;
