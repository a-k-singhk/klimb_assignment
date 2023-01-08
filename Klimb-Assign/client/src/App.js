import React, { useState } from "react";
import axios from 'axios';
import * as XLSX from "xlsx";

function App() {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
        console.log(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log("dd");
      setItems(d);
      setShow(true);
      axios.post('http://localhost:5000/posts', d);

    });
  };

  return (
    <div>
      <div>Add the Candidate data to Database
      </div>
      {show ? <h1>Uploaded Successfully</h1> : <h6>Upload .xlsx or .xls file here</h6>}
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

    </div>
  );
}

export default App;
