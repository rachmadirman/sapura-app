import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import FooterSmall from "./FooterSmall";
import Navbar from "./Navbar";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFilename(file ? file.name : "");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:8065/services/sapura/api/v1/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
      console.log(response.data);
      const respCode = response.data["Status"];
      const fileName = filename ? filename : "";
      const successUploadMsg = `File ${fileName} uploaded successfully!`;
      if (respCode === "Success") {
        setUploadStatus(successUploadMsg);
      } else {
        setUploadStatus("Failed to upload file. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
      setUploadStatus("Failed to upload file. Please try again.");
    }

  };
  return (
    // <section className="absolute w-full h-full bg-izeno-gradien-1">
    //   <Sidebar />
    //   <div class="flex items-center justify-center ml-60 mt-40">
    //     <div class="mx-auto w-full max-w-[500px] bg-izeno-white  rounded shadow-lg">
    //       <form class="px-9 py-2" onSubmit={handleSubmit}>
    //         <div class="mb-6 pt-1">
    //           <label class="mb-3 block text-xl font-semibold text-izeno-black"> Upload e-Invoice </label>
    //           <div class="mb-8">
    //             <label for="file" class="relative flex min-h-[80px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
    //               <label htmlFor="file-upload" className="file-upload-label">
    //                 {filename ? filename : "Choose a file or drop your files"}
    //               </label>
    //               <input type="file" id="file-upload" onChange={handleFileChange} className="file-upload-input" />

    //             </label>
    //           </div>
    //         </div>
    //         <button type="submit" class="hover:shadow-form w-full rounded-md bg-izeno-main px-8 py-3 text-center text-base font-semibold text-white outline-none">Upload File</button>
    //       </form>
    //       <div className="mb-5">
    //         {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    //       </div>
    //     </div>
    //   </div>
    //   <FooterSmall absolute />
    // </section>
    <div className='w-screen h-screen bg-izeno-gradien-1'>
      <div className='ml-64'>
        <Navbar />
      </div>

      <div class="container flex-1 p-8 flex justify-center items-center ml-80 h-1/2">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-1/2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-izeno-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-28 h-28 mb-4 text-izeno-main dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p class="mb-2 text-sm text-izeno-main dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-izeno-main dark:text-gray-400">JSON, XML, CSV (MAX. 5 MB)</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>

      <div>
        <Sidebar />
      </div>
      <footer>
        <FooterSmall absolute />
      </footer>
    </div>
  );
};

export default FileUpload;
