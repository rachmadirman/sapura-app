import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import FooterSmall from "./FooterSmall";

function AddData() {
  const [additionalFields, setAdditionalFields] = useState([]);
  const [originalFields, setOriginalFields] = useState([]);
  const [column, setColumn] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const sendColumnNamesToBackend = async (updateConfig) => {
    try {

      // Call update configuration API
      const response = await axios.post("http://localhost:8081/demo/v1/sapura/config/details", updateConfig, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setLoading(false);
      console.log("Data saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving data:", error);

    }
  };

  const handleEdit = (index) => {
    const updatedFields = [...additionalFields];
    updatedFields[index].editable = true; // Set the field to editable
    setAdditionalFields(updatedFields);
    console.log("(EDIT) additionalFields: ", additionalFields)

    // Save a copy of the original field value
    const updatedOriginalFields = [...originalFields];
    updatedOriginalFields[index] = additionalFields[index].value;
    setOriginalFields(updatedOriginalFields);
    console.log("originalFields: ", originalFields)
  };

  const handleFieldChange = (index, value) => {
    const updatedFields = [...additionalFields];
    updatedFields[index].value = value;
    setAdditionalFields(updatedFields);
    console.log("(CHANGE) additionalFields: ", additionalFields)
  };

  const handleCancel = (index) => {
    const updatedFields = [...additionalFields];
    updatedFields[index].value = originalFields[index]; // Revert to original value
    updatedFields[index].editable = false; // Set back to non-editable
    setAdditionalFields(updatedFields);
    console.log("(CANCEL) additionalFields: ", additionalFields)
  };

  const submitForm = async () => {
    const updatedColumnNames = additionalFields.map((field) => field.value);
    console.log("New column names:", updatedColumnNames);
    const requestData = {
      api_url: updatedColumnNames[0],
      client_id: updatedColumnNames[1],
      token: updatedColumnNames[2],
      environment: updatedColumnNames[3]
    };
    console.log("reqDataLHDNChangeConfiguration", JSON.stringify(requestData));

    try {
      await sendColumnNamesToBackend(requestData);
      // If the sendColumnNamesToBackend function succeeds, refresh the page
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error scenarios if needed
    }
  };

  const getLHDNConfig = async () => {
    try {
      const res = await axios.get("http://localhost:8081/demo/v1/sapura/config/details", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = res.data;
      const keys = Object.keys(response.at(0));
      const values = Object.values(response.at(0));
      const parameters = ["Api Url", "Client Id", "Token", "Environment"]

      // Initialize additionalFields state with default values and make them non-editable initially
      const defaultFields = keys.map((key, index) => ({ value: values[index], editable: false }));
      setAdditionalFields(defaultFields);
      setOriginalFields([...values]); // Save original values
      //setColumn(keys.map(key => key.replace("_", " ")));
      setColumn(parameters);
      setData(values);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getDefaultColumn = async () => {
      await getLHDNConfig();
    };
    getDefaultColumn();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      </div>
    );
  }

  return (
    <>
    <section className="absolute w-full h-full bg-izeno-gradien-1">
      <Sidebar />
      <div className="mt-20 justify-center ml-56">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center mb-3">
            <h1 className="text-izeno-black text-sm font-bold text-xl">
              LHDN Configuration
            </h1>
          </div>
        </div>
        <form class="max-w-sm mx-auto">
          <div class="mb-3">
            {column.map((item, index) => (
              <div key={index}>
                {additionalFields[index].editable ? (

                  <>
                    <label class="block mb-2 text-sm text-izeno-black dark:text-white">{item}</label>
                    <div class="justify-center mt-2 mb-2 flex">
                      <input
                        type="text"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        value={additionalFields[index].value}
                        onChange={(e) => handleFieldChange(index, e.target.value)}
                      />
                      <button class="text-white bg-izeno-red hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mx-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => handleCancel(index)}>Cancel</button>
                    </div>
                  </>

                ) : (
                  <>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{item}</label>
                    <div class="justify-center mt-2 mb-2 flex">
                      <span class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">{additionalFields[index].value}</span>
                      <button class="text-white bg-izeno-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mx-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => handleEdit(index)}>Edit</button>
                    </div>
                  </>

                )}
              </div>
            ))}

          </div>
          <div class="justify-center mt-10 flex ml-0">
            <button type="button" className="text-white bg-izeno-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-36 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={submitForm}>Update</button>
          </div>
        </form>
      </div>

      <FooterSmall absolute />
      </section>
    </>

  );
}

export default AddData;
