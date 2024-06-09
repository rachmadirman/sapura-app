import FooterSmall from "./FooterSmall";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import React, { useState, useEffect, useRef, useMemo } from 'react';

const BatchData = () => {
    const testdata = [{
        "batch_id": "20240607-001",
        "file_link": "INV-iZeno-001",
        "start_date time": "2024-06-07 13:00:00",
        "end_date time": "2024-06-07 14:00:00",
        "status": "Completed",
        "csv_filename": "INV-iZeno-001.csv",
        "submission_uuid": "LHDN-010102-aeftg45",
        "submittedby": "Kennard",
        "tenantid": "iZenoPartner-01"
    },
    {
        "batch_id": "20240607-002",
        "file_link": "INV-iZeno-002",
        "start_date time": "2024-06-08 13:00:00",
        "end_date time": "2024-06-08 14:00:00",
        "status": "Completed",
        "csv_filename": "INV-iZeno-002.csv",
        "submission_uuid": "LHDN-010102-aef23g45",
        "submittedby": "Kennard",
        "tenantid": "iZenoPartner-01"
    },
    {
        "batch_id": "20240607-003",
        "file_link": "INV-iZeno-003",
        "start_date time": "2024-06-09 16:00:00",
        "end_date time": "2024-06-00 17:00:00",
        "status": "Completed",
        "csv_filename": "INV-iZeno-003.csv",
        "submission_uuid": "LHDN-010102-ae1213g45",
        "submittedby": "Kennard",
        "tenantid": "iZenoPartner-01"
    }]


    const [data, setData] = useState(null);
    const [columns, setColumn] = useState([]);
    const tableRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchCategory, setSearchCategory] = useState('Category 1');

    const [productList] = useState(testdata);
    const [rowsLimit] = useState(5);
    const [rowsToShow, setRowsToShow] = useState(testdata.slice(0, rowsLimit));
    const [customPagination, setCustomPagination] = useState([]);
    const [totalPage] = useState(Math.ceil(testdata?.length / rowsLimit));
    const [currentPage, setCurrentPage] = useState(0);



    const nextPage = () => {
        const startIndex = rowsLimit * (currentPage + 1);
        const endIndex = startIndex + rowsLimit;
        const newArray = testdata.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        setCurrentPage(currentPage + 1);
    };

    const changePage = (value) => {
        const startIndex = value * rowsLimit;
        const endIndex = startIndex + rowsLimit;
        const newArray = testdata.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        setCurrentPage(value);
    };
    const previousPage = () => {
        const startIndex = (currentPage - 1) * rowsLimit;
        const endIndex = startIndex + rowsLimit;
        const newArray = testdata.slice(startIndex, endIndex);
        setRowsToShow(newArray);
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(0);
        }
    };
    useMemo(() => {
        setCustomPagination(
            Array(Math.ceil(testdata?.length / rowsLimit)).fill(null)
        );
    }, []);

    const handleSearch = () => {
        console.log(`Searching for: ${searchValue} in ${searchCategory}`);
        // Perform search logic here
    };



    //Get Batch Data
    const getData = async () => {
        try {
            // Uppercase the keys
            const uppercaseData = testdata.map(obj =>
                Object.fromEntries(
                    Object.entries(obj).map(([key, value]) => [key.replace("_", " ").toUpperCase(), value])
                )
            );
            setData(uppercaseData);
            console.log("uppercasedata: ", JSON.stringify(uppercaseData));

            // Find the object with the maximum number of properties
            let maxObject = uppercaseData[0];
            uppercaseData.forEach(obj => {
                if (Object.keys(obj).length > Object.keys(maxObject).length) {
                    maxObject = obj;
                }
            });

            const key = Object.keys(maxObject);
            console.log("key: ", JSON.stringify(key));
            setColumn(key);

        } catch (error) {

        }
    };

    useEffect(() => {
        console.log('first useEffect start')
        const initialData = async () => {
            console.log('calling initial data')
            await getData();
        };
        initialData();
    }, []);

    return (
        <div className="bg-izeno-gradien-1 w-screen h-screen">
            <div className='ml-64'>
                <Navbar />
            </div>
            {/* table start here */}
            <div className=" mt-10 flex items-center justify-center">
                <div className="w-full max-w-7xl px-2">
                    <div>
                        <h1 className="text-2xl font-bold text-izeno-main">
                            Batch Data e-Invoice
                        </h1>
                    </div>
                    {/* search bar */}
                    <div className="flex pt-2 pb-1 overflow-hidden">
                        <select
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                            className="px-2 py-2 bg-izeno-white  focus:outline-none text-izeno-main mr-1 rounded-md"
                        >
                            <option value="Category 1">BATCH ID</option>
                            <option value="Category 2">STATUS</option>
                            <option value="Category 3">SUBMISSION UUID</option>
                        </select>

                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="px-2 py-2 outline-none mr-1 rounded-md"
                            placeholder="Search..."
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-izeno-red text-white px-2 py-2 hover:bg-red-900 focus:outline-none rounded-md"
                        >
                            Search
                        </button>
                    </div>
                    <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2">
                        <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border ">
                            <thead className="rounded-lg text-base text-white font-semibold w-full">
                                <tr className="bg-izeno-main">
                                    {columns.map((column, index) => (
                                        <th key={index} className="py-2 px-2 text-izeno-white text-sm font-semibold whitespace-nowrap">{column}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((val, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? "bg-izeno-white" : "bg-[#222E3A]/[6%]"}`}>
                                        {columns.map((column, index) => (
                                            <td key={index} className="py-2 px-2">{val[column]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* pagination */}
                    <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
                        <div className="text-md">
                            Showing {currentPage === 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
                            {currentPage === totalPage - 1
                                ? testdata?.length
                                : (currentPage + 1) * rowsLimit}{" "}
                            of {testdata?.length} entries
                        </div>
                        <div className="flex">
                            <ul
                                class="flex justify-center items-center gap-x-[10px] z-30"
                                role="navigation"
                                aria-label="Pagination"
                            >
                                <li
                                    class={` prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled] ${currentPage === 0
                                        ? "bg-izeno-white pointer-events-none"
                                        : " cursor-pointer"
                                        }
  `}
                                    onClick={previousPage}
                                >
                                    <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" alt="provious" />
                                </li>
                                {customPagination?.map((data, index) => (
                                    <li
                                        className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${currentPage === index
                                            ? "text-izeno-main  border-izeno-main"
                                            : "border-[#E4E4EB] "
                                            }`}
                                        onClick={() => changePage(index)}
                                        key={index}
                                    >
                                        {index + 1}
                                    </li>
                                ))}
                                <li
                                    class={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${currentPage == totalPage - 1
                                        ? "bg-izeno-white pointer-events-none"
                                        : " cursor-pointer"
                                        }`}
                                    onClick={nextPage}
                                >
                                    <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" alt="next" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar />
            <footer>
                <FooterSmall absolute />
            </footer>
        </div>
    )
}

export default BatchData