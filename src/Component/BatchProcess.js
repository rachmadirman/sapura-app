import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-dt";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import FooterSmall from "./FooterSmall";

const Datatable = () => {
  const tableRef = useRef();
  const [data, setData] = useState(null);
  const [columns, setColumn] = useState([]);
  const tableDetailRef = useRef();
  const [detailData, setDetailData] = useState(null);
  const [detailColumns, setDetailColumn] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [storedBatchId, setStoredBatchId] = useState(
    localStorage.getItem('storedBatchId') || ''
  );

  const role = localStorage.getItem("storedValue")
  console.log("current role : " + role)


  const getData = async () => {
    try {
      // Call fetch all batch API
      const res = await axios.get("http://localhost:8081/demo/v1/sapura/fetch/batch/"+role, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("response batch: ", JSON.stringify(res.data));
  
      // Uppercase the keys
      const uppercaseData = res.data.map(obj =>
        Object.fromEntries(
          Object.entries(obj).map(([key, value]) => [key.replace("_", " ").toUpperCase(), value])
        )
      );
  
      setData(uppercaseData);
  
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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialData = async () => {
      await getData();
    };
    initialData();
  }, []);

  useEffect(() => {
    if (data) {
      $(tableRef.current).DataTable();
    }
  }, [data]);

  const getDetailData = async (batch_id) => {
    try {
      // Call fetch batch detail API
      const uri = 'http://localhost:8081/demo/v1/sapura/fetch/detailsbyid/' + batch_id + '/' + role;
      const res = await axios.get(uri, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("response: ", JSON.stringify(res.data));
  
      // Uppercase the keys
      const uppercaseData = res.data.map(obj =>
        Object.fromEntries(
          Object.entries(obj).map(([key, value]) => [key.replace("_", " ").toUpperCase(), value])
        )
      );

      setDetailData(uppercaseData);
  
      // Find the object with the maximum number of properties
      let maxObject = uppercaseData[0];
      uppercaseData.forEach(obj => {
        if (Object.keys(obj).length > Object.keys(maxObject).length) {
          maxObject = obj;
        }
      });
  
      const key = Object.keys(maxObject);
      console.log("key: ", JSON.stringify(key));
      setDetailColumn(key);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleRecordClick = async (record, index) => {

    const csvf = record["CSV FILENAME"];
    const batchid = record["BATCH ID"];

    setStoredBatchId(batchid)

    if(batchid ){
      console.log("BATCH_ID", record["BATCH ID"])
      await getDetailData(record["BATCH ID"])
      setSelectedRecord(record);
      if(index === 1) {
        setShowModal(false);
      } else {
        setShowModal(true);
      }
    console.log("click record of: ", record);
    }

    if(csvf && index === 1){
      console.log("FILE_LINK", record["FILE LINK"])
      await getDetailData(record["FILE LINK"])
      setSelectedRecord(record);
      handleDownloadSnowflake(record);
    }
  };

  useEffect(() => {
    if (detailData && showModal && selectedRecord) {
      $(tableDetailRef.current).DataTable();
    }
  }, [detailData, showModal, selectedRecord]);

  const handleCloseModal = () => {
    setSelectedRecord(null);
    setShowModal(false);
  };

  const handleDownload = (record) => {
    // Implement your download logic here based on the selectedRecord
    if (record) {
      // Assuming 'BATCH ID' is used to construct the download URL
      const batchId = record["BATCH ID"];
      if (batchId) {
        const downloadUrl = `http://localhost:8081/demo/v1/sapura/download/${batchId}`;
        window.open(downloadUrl);
      } else {
        console.error("Batch ID not found in selected record.");
      }
    } else {
      console.error("No record selected for download.");
    }
  };

  const handleDownloadSnowflake = (record) => {
    // Implement your download logic here based on the selectedRecord
    if (record) {
      // Assuming 'BATCH ID' is used to construct the download URL
      const filename = record["CSV FILENAME"];
      if (filename) {
        const downloadUrl = `http://localhost:8081/demo/v1/sapura/csv/download/${filename}`;
        window.open(downloadUrl);
      } else {
        console.error("Filename not found in selected record.");
      }
    } else {
      console.error("No record selected for download.");
    }
  };

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

  const success = (text) => {
    return <span className="highlight" style={{color: "green"}}>{text}</span>;
  };

  const failed = (text) => {
    return <span className="highlight" style={{color: "red"}}>{text}</span>;
  };

  const in_progress = (text) => {
    return <span className="highlight" style={{color: "blue"}}>{text}</span>;
  };

  const renderCellContent = (content) => {
    if (content === null) {
      return "N/A";
    }
    if (typeof content === 'string' && (content.startsWith('http') || content.startsWith('www'))) {
      if (content.startsWith('www')) {
          const tempUrl = content.replace("www.", "https://");
          return <a href={tempUrl} target="_blank" rel="noopener noreferrer">{content}</a>;
      }
      return <a href={content} target="_blank" rel="noopener noreferrer">{content}</a>;
    }
    if (typeof content === 'string' && (content.endsWith('.csv'))) {
      return <a href="javascript:void(0)" className="text-blue-900 underline">{content}</a>;
    }
    if (typeof content === 'string' && content.length === 36) {
      return <a href="javascript:void(0)" className="text-blue-900 underline">{content}</a>;
    }
    if (content.includes('FAILED')) {
      return failed(content);
    }
    if (content.includes('COMPLETED')) {
      return success(content);
    }
    if (content.includes('INPROGRESS')) {
      return in_progress(content);
    }
    if (content.includes('ACCEPTED')) {
      return success(content);
    }
    if (content.includes('REJECTED')) {
      return failed(content);
    }
  
    return content;
  };

  const renderCellDetailContent = (content) => {
    if (content === null) {
      return "N/A";
    }
    if (content.includes('ACCEPTED')) {
      return success(content);
    }
    if (content.includes('REJECTED')) {
      return failed(content);
    }
  
    return content;
  };

  const getRowColor = (index) => {
    const colors = ['#f5f5f5', '#E3E3E3'];
    return colors[index % colors.length];
  };
  
  return (
    <>
    <section className="absolute w-full h-full bg-izeno-gradien-1">
    <Sidebar/>
    <div style={{ marginLeft: "300px", marginTop: "60px", width: "1500px", overflow: "auto", fontSize: "14px" }}>
      <div>
        <h1 style={{ color: "#333333", fontSize: "20px" }}>Batch Invoice</h1>
      </div>
      <table ref={tableRef} style={{ tableLayout: "auto", width: "100%", border: "1px solid #ddd" }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} style={{ whiteSpace: "nowrap", color: "#ffffff", backgroundColor: "#10133E" }}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd", backgroundColor: getRowColor(index) }}>
              {columns.map((column, index) => (
                <td key={index} onClick={() => handleRecordClick(row, index)} style={{ whiteSpace: "nowrap", border: "1px solid #ddd", padding: "8px" }}>{renderCellContent(row[column])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#333333", fontSize: "24px" }}>BATCH ID : {storedBatchId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRecord && (
            <div style={{ overflow: "auto", fontSize: "14px" }}>
            <table ref={tableDetailRef} style={{ tableLayout: "auto", width: "100%", border: "1px solid #ddd" }}>
              <thead>
                <tr> {detailColumns.map((column, index) => ( 
                  <th key={index} style={{ whiteSpace: "nowrap", color: "#ffffff", backgroundColor: "#10133E" }}>{column}</th> 
                  ))} 
                </tr>
              </thead>
              <tbody> 
                {detailData.map((row, index) => ( 
                <tr key={index} style={{ borderBottom: "1px solid #ddd", backgroundColor: getRowColor(index) }}> 
                  {detailColumns.map((column, index) => ( 
                    <td key={index} style={{ whiteSpace: "nowrap", border: "1px solid #ddd" }}>{renderCellDetailContent(row[column])}</td> 
                    ))} 
                </tr> 
              ))} 
              </tbody>
            </table>
          </div>
          )}
        </Modal.Body>
        <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => handleDownload(selectedRecord)}
          style={{ backgroundColor: "#FF1628", marginRight: "10px", borderRadius: "5px" }}
        >
          Download
        </Button>
          <Button variant="secondary" onClick={handleCloseModal} style={{ backgroundColor: "#10133E", borderRadius: "5px" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <FooterSmall absolute />
    </section>
    </>
  );
};

export default Datatable;
