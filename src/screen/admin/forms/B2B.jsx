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

const B2B = () => {
  const [selectedForm, setSelectedForm] = useState("b2b");
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
        <div className="form-grid" >
          {forms[selectedForm].map((field, index) => (
            <div key={index} >
              {field.type === "checkbox" ? (
                <>
                  <div className="d-flex " style={{'marginBottom': '0px !important'}}>
                    <Input
                      type="checkbox"
                      name={field.name}
                      placeholder={field.placeholder}
                      checked={formData[field.name]} // ✅ Use 'checked' for checkbox
                      onChange={onChange}
                      error={formErrors[field.name]}
                    />
                    &nbsp;
                    <label htmlFor={field.name}>{field.label}</label>
                  </div>
                  {formErrors[field.name] && (
                    <span className="error-text">{formErrors[field.name]}</span>
                  )}
                </>
              ) : field.type === "text" ? (
                <> 
                  <Input 
                    label={field.label}
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={onChange}
                    error={formErrors[field.name]}
                  /> 
                  {formErrors[field.name] && (
                    <span className="error-text">{formErrors[field.name]}</span>
                  )}
                </>
              ) :field.type === "date" ? (
                <> 
                  <Input 
                    label={field.label}
                    type="date"
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={onChange}
                    error={formErrors[field.name]}
                  /> 
                  {formErrors[field.name] && (
                    <span className="error-text">{formErrors[field.name]}</span>
                  )}
                </>
              ) : null}
            </div>
          ))}
        </div>

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
                  onAction(btn.name); // 'submit', 'save', 'edit', 'delete'
                }}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default B2B;
