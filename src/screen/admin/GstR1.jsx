import React, { useState } from "react";
// import { FaPencilAlt, FaTrash } from "react-icons/fa";
// import { TfiImport } from "react-icons/tfi";
// import { MdAddBox } from "react-icons/md";
import "../../assets/css/GstR1.css";
import B2B from './forms/B2B';
import B2CL from './forms/B2CL'
import B2CS from './forms/B2CS'
import SIXA from './forms/SIXA'
import HNS from './forms/HNS'
import ToggleSelect from "../../components/DropdownToggle";
import TableActionButton from "../../components/TableActionButton"; 
// const frequencyTabOptions = ["SUMMARY", "REGULAR", "AMENDMENT"];
const regularOptions = [
  { code: "Regular", label: "" }, 
  { code: "B2B", label: "Business to Business" },
  { code: "B2CL", label: "Business to Business [large]" },
  { code: "B2CS", label: "Business to Customer [small]" },
  { code: "6A", label: "Business to Customer [small]" }, 
  { code: "HNS", label: "Business to Customer [small]" }, 
  { code: "CNDR", label: "Credit/ Debit Note [Register]" },
  { code: "CNDUR", label: "Credit/ Debit Note [Unregister]" },
  { code: "EXP", label: "Exports" },
  { code: "AT", label: "Tax Liability (Advances Received)" },
  { code: "TXPD", label: "Adjustment of Advances" },
  { code: "HSN", label: "Harmonized System of Nomenclature" },
  { code: "DOCS", label: "Documents Issued" },
  { code: "EXEMPT", label: "Nil Rated, Exempted and Non-GST Supplies" }
];

// const tableData = [
//   {
//     invoiceNo: "RRCS/23-24/0011",
//     invoiceDate: "02/02/2024",
//     gstPayment: "Without Payment of Tax",
//     totalInvoiceValue: "3,08,833.81",
//     totalTaxableValue: "3,08,833.81",
//     integratedTax: "0.00",
//     cess: "0.00"
//   },
//   {
//     invoiceNo: "RRCS/23-24/0012",
//     invoiceDate: "29/02/2024",
//     gstPayment: "Without Payment of Tax",
//     totalInvoiceValue: "3,06,670.36",
//     totalTaxableValue: "3,06,670.36",
//     integratedTax: "0.00",
//     cess: "0.00"
//   }
// ];

const returnData = [
  {
    returnType: "REGULAR",
    year: "2022-2023",
    frequency: "MONTHLY",
    month: "NOVEMBER",
    company: "GODAWARI INVENTIVE",
    gstrType: "GSTR 1",
    arn: "ARN12345678",
    date: "2022-11-25",
    status: "Filed"
  },
  {
    returnType: "REGULAR",
    year: "2023-2024",
    frequency: "MONTHLY",
    month: "DECEMBER",
    company: "ACME CORP",
    gstrType: "GSTR 3B",
    arn: "ARN23456789",
    date: "2023-12-15",
    status: "Pending"
  }
];

const GstR1 = ({ activeTab = "GSTR 1" }) => {
  const [selectedTab , selectTab] = useState("Regular");

  const [selectedRegular, setSelectedRegular] = useState("Regular");

  const [filters, setFilters] = useState({
    returnType: "REGULAR",
    year: "2022-2023",
    frequency: "MONTHLY",
    month: "NOVEMBER",
    company: "GODAWARI INVENTIVE",
    frequencys: "SUMMARY"
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredData = returnData.find(
    (item) =>
      item.returnType === filters.returnType &&
      item.year === filters.year &&
      item.frequency === filters.frequency &&
      item.month === filters.month &&
      item.company === filters.company &&
      item.gstrType === activeTab
  );

  return (
    <div className="processed-container">
      {/* Frequency Filter Section */}
      <div className="sub-actions border-bottom p-2">
        <div className="left-actions">
          {/* <ToggleSelect
            label="Select Frequency"
            options={frequencyTabOptions}
            value={filters.frequencys}
            onChange={(val) => handleFilterChange("frequencys", val)}
          /> */}
          <ToggleSelect
            label="Regular Type"
            options={regularOptions.map((opt) => opt.code)}
            value={selectedRegular}
            onChange={(val) => {
              setSelectedRegular(val);
              const selected = regularOptions.find((opt) => opt.code === val);
              selectTab(selected.code);
              console.log(`${selected.code} selected`);
            }}
 
          /> 
         {/* <ToggleSelect
            label="Regular Type"
            options={["Amendment"]}
            value="Amendment"
            onChange={(val) => {
              console.log(`${val} selected`);
            }} 
          />  */}
        </div>

        <div className="right-actions">
          {/* <span className={`status ${filteredData ? "green" : "red"}`}>
            STATUS: {filteredData ? filteredData.status : "Not Available"}
          </span>
          <span className="status">
            DATE: {filteredData ? filteredData.date : "--"}
          </span>
          <span className="status">
            ARN: {filteredData ? filteredData.arn : "--"}
          </span>

          <label className="nil-return">
            <input type="checkbox" className="custom-checkbox" />
            <span className="checkbox-label">Mark as Nil Return</span>
          </label> */}
        </div>
      </div>
      {["", "Regular"].includes(selectedTab) && (
        <div className="mt-4">
          Not found
        </div>
      )}

      {selectedTab === "B2B" && (
        <div className="mt-4">
          <B2B />
          {/* You selected <strong>B2B</strong> - Business to Business. */}
        </div>
      )}
      {selectedTab === "B2CS" && (
        <div className="mt-4">
          <B2CS />
          You selected <strong>B2CS </strong> - Business to Business.
        </div>
      )}
      {selectedTab === "B2CL" && (
        <div className="mt-4">
          <B2CL />
          {/* You selected <strong>B2CL  </strong> - Business to Business. */}
        </div>
      )}
      {selectedTab === "6A" && (
        <div className="mt-4">
          <SIXA />
          {/* You selected <strong>6A  </strong> - Business to Business. */}
        </div>
      )}
      {selectedTab === "HNS" && (
        <div className="mt-4">
          <HNS />
          {/* You selected <strong>6A  </strong> - Business to Business. */}
        </div>
      )}
      {selectedTab === "CNDR" && (
        <div className="mt-4">
          You selected <strong>CNDR   </strong> - Business to Business.
        </div>
      )}
      {selectedTab === "CNDUR" && (
        <div className="mt-4">
          You selected <strong>CNDUR</strong> - Business to Business.
        </div>
      )}
      {selectedTab === "EXP" && (
        <div className="mt-4">
          You selected <strong>EXP </strong> - Business to Business.
        </div>
      )}
      {selectedTab === "AT" && (
        <div className="mt-4">
          You selected <strong>AT </strong> - Business to Business.
        </div>
      )}
      {selectedTab === "TXPD" && (
        <div className="mt-4">
          You selected <strong>TXPD </strong> - Business to Business.
        </div>
      )} 
      {selectedTab === "DOCS" && (
        <div className="mt-4">
          You selected <strong>DOCS </strong> - Business to Business.
        </div>
      )}
      {selectedTab === "EXEMPT" && (
        <div className="mt-4">
          You selected <strong>EXEMPT </strong> - Business to Business.
        </div>
      )}
      {selectedTab === "DOCS" && (
        <div className="mt-4">
          You selected <strong>DOCS </strong> - Business to Business.
        </div>
      )}
 

      {/* Header Buttons */}
      {/* <div className="headers">
        <button className="add-btn" disabled>
          <MdAddBox /> ADD RECORD
        </button>
        <button className="import-btn">
          IMPORT EWB DATA <TfiImport />
        </button>
      </div>

      <h3>Processed Records</h3> 
      <div className="controls">
        <label>
          Display/Hide Columns:
          <select>
            <option>All</option>
          </select>
        </label>
        <label>
          Records Per Page:
          <select>
            <option>10</option>
            <option>25</option>
          </select>
        </label>
      </div>

       
      <table className="record-table">
        <thead>
          <tr>
            <th>Invoice no.</th>
            <th>Invoice date</th>
            <th>GST Payment</th>
            <th>Total invoice value (₹)</th>
            <th>Total taxable value (₹)</th>
            <th>Integrated tax (₹)</th>
            <th>Cess (₹)</th>
            <th>Source</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr key={i}>
              <td>{row.invoiceNo}</td>
              <td>{row.invoiceDate}</td>
              <td>{row.gstPayment}</td>
              <td>{row.totalInvoiceValue}</td>
              <td>{row.totalTaxableValue}</td>
              <td>{row.integratedTax}</td>
              <td>{row.cess}</td>
              <td>0.00</td>
              <td className="action-btns">
                <div className="d-flex">
                  <TableActionButton
                    icon={FaPencilAlt}
                    type="edit"
                    title="Edit"
                    onClick={() => console.log("Edit", row)}
                  />
                  &nbsp;
                  <TableActionButton
                    icon={FaTrash}
                    type="delete"
                    title="Delete"
                    onClick={() => console.log("Delete", row)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default GstR1;
