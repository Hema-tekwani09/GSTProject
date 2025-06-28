import React, { useState, useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { forms } from "../../../forms/formConfig";
import { buttons } from "../../../forms/buttonConfig";
import {
  generateInitialValues,
  validateFields,
  handleSubmit,
  handleEdit,
  handleDelete,
  handleSave,
} from "../../../utils/formUtils";
import "../../../assets/css/formcss.css";

const tabOptions = [
  { label: "B2B Supplies", key: "hns_b2b" },
  { label: "B2C Supplies", key: "hns_b2c" },
];

const HNS = () => {
  const [activeTab, setActiveTab] = useState("hns_b2b");
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const initial = generateInitialValues(forms.hns[activeTab] || []);
    setFormData(initial);
    setFormErrors({});
  }, [activeTab]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onAction = (type) => {
    const fields = forms.hns[activeTab];
    const errors = validateFields(fields, formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    switch (type) {
      case "submit":
        handleSubmit(formData, {
          setSubmitting: () => {},
          resetForm: () =>
            setFormData(generateInitialValues(forms.hns[activeTab])),
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
      {/* Tab Header */}
      <div className="tab-header">
        {tabOptions.map((tab) => (
          <button
            key={tab.key}
            className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Heading */}
      {/* <h2 style={{ marginTop: "20px" }}>
        {activeTab === "hns_b2b" ? "B2B Supplies Form" : "B2C Supplies Form"}
      </h2> */}

      {/* Form Body */}
      <form>
        <div className="form-grid">
  {forms.hns[activeTab].map((field, index) => (
    <div
      key={index}
      className={`form-field ${
        field.type === "note" ? "full-width" : ""
      }`}
    >
      {/* Render Note Section */}
      {field.type === "note" && Array.isArray(field.li) && (
        <div className="note-section">
            <label className="note-label">{field.label}</label>
            <ol>
            {field.li.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
            </ol>
        </div>
        )}


      {/* Render Inputs */}
      {field.tag === "input" && field.type !== "note" && (
        <>
          <Input
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={onChange}
            error={formErrors[field.name]}
          />
          {formErrors[field.name] && (
            <span className="error-text">
              {formErrors[field.name]}
            </span>
          )}
        </>
      )}
    </div>
  ))}
</div>


        {/* Action Buttons */}
        <div className="form-buttons">
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

export default HNS;
