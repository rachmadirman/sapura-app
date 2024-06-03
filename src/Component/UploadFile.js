import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import FooterSmall from "./FooterSmall";

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
    <section className="absolute w-full h-full bg-izeno-gradien-1">
      <Sidebar />
      <div class="flex items-center justify-center ml-60 mt-40">
        <div class="mx-auto w-full max-w-[500px] bg-white">
          <form class="px-9 py-2" onSubmit={handleSubmit}>
            <div class="mb-6 pt-1">
              <label class="mb-3 block text-xl font-semibold text-izeno-black"> Upload e-Invoice </label>
              <div class="mb-8">
                <label for="file" class="relative flex min-h-[80px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                  <label htmlFor="file-upload" className="file-upload-label">
                    {filename ? filename : "Choose a file"}
                  </label>
                  <input type="file" id="file-upload" onChange={handleFileChange} className="file-upload-input" />

                </label>
              </div>
            </div>
            <button type="submit" class="hover:shadow-form w-full rounded-md bg-izeno-main px-8 py-3 text-center text-base font-semibold text-white outline-none">Upload File</button>
          </form>
          <div className="mb-5">
            {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
          </div>
        </div>
      </div>
      <FooterSmall absolute />
    </section>
  );
};

export default FileUpload;
