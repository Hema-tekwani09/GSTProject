import React, { useState, useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { forms } from "../../../forms/formConfig";
import { buttons } from "../../../forms/buttonConfig";
import "../../../assets/css/formcss.css";

import {
  generateInitialValues,
  validateFields,
  handleSubmit,
  handleEdit,
  handleDelete,
  handleSave,
} from "../../../utils/formUtils";

const B2CS = () => {
  const [selectedForm] = useState("b2cs");
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const initial = generateInitialValues(forms[selectedForm]);
    setFormData(initial);
    setFormErrors({});
  }, [selectedForm]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

//   const handleTableChange = (tableName, rowIndex, colName, value) => {
//     setFormData((prev) => {
//       const updatedTable = [...prev[tableName]];
//       updatedTable[rowIndex] = { ...updatedTable[rowIndex], [colName]: value };
//       return { ...prev, [tableName]: updatedTable };
//     });
//   };
 

  const onAction = (type) => {
    const errors = validateFields(forms[selectedForm], formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    switch (type) {
      case "submit":
        handleSubmit(formData, {
          setSubmitting: () => {},
          resetForm: () =>
            setFormData(generateInitialValues(forms[selectedForm])),
        });
        break;
      case "edit":
        handleEdit(formData);
        break;
      case "delete":
        handleDelete(formData);
        break;
      case "save":
        console.log("Form Data on Save:", formData);
        handleSave(formData);
        break;
      default:
        break;
    }
  };

  return (
    <div className="form-container">
      <form>
        <div className="row">
          {forms[selectedForm].map((field, index) => (
            <div
              key={index}
              className={`${
                field.type === "table" ? "col-12" : "col-md-6 col-lg-4"
              } mb-3`}
            >
              {field.type === "checkbox" ? (
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={field.name}
                    name={field.name}
                    checked={formData[field.name]}
                    onChange={onChange}
                  />
                  <label className="form-check-label" htmlFor={field.name}>
                    {field.label}
                  </label>
                  {formErrors[field.name] && (
                    <div className="error-text">{formErrors[field.name]}</div>
                  )}
                </div>
              ) : field.type === "text" || field.type === "date" ? (
                <div>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    type={field.type}
                    
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={onChange}
                  />
                  {formErrors[field.name] && (
                    <div className="error-text">{formErrors[field.name]}</div>
                  )}
                </div>
              ) : field.type === "select" ? (
                <div>
                  <label htmlFor={field.name}>{field.label}</label>
                  <select
                    
                    name={field.name}
                    value={formData[field.name]}
                    onChange={onChange}
                    required={field.required}
                  >
                    <option value="">Select</option>
                    {field.options?.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {formErrors[field.name] && (
                    <div className="error-text">{formErrors[field.name]}</div>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="form-buttons mt-4">
          {buttons
            .filter((btn) => btn.label === "Save" || btn.label === "Back")
            .map((btn, index) => (
              <Button
                key={index}
                label={btn.label}
                type={btn.type}
                variant={btn.variant}
                icon={btn.icon}
                onClick={(e) => {
                  e.preventDefault();
                  onAction(btn.name);
                }}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default B2CS;
