import React from 'react';
import { useInputValidation } from '../../hooks';

const FormField = ({ 
  type = 'text',
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  options = [],
  rows = 4,
  className = '',
  validationType = 'none' // 'letters', 'lettersAndNumbers', 'lettersAndSpaces', 'phone'
}) => {
  const { sanitizeLettersOnly, sanitizeLettersAndNumbers, sanitizeLettersAndSpaces, sanitizePhone } = useInputValidation();

  const handleInputChange = (e) => {
    const { value: inputValue } = e.target;
    let sanitizedValue = inputValue;

    // Aplicar validação baseada no tipo
    switch (validationType) {
      case 'letters':
        sanitizedValue = sanitizeLettersOnly(inputValue);
        break;
      case 'lettersAndNumbers':
        sanitizedValue = sanitizeLettersAndNumbers(inputValue);
        break;
      case 'lettersAndSpaces':
        sanitizedValue = sanitizeLettersAndSpaces(inputValue);
        break;
      case 'phone':
        sanitizedValue = sanitizePhone(inputValue);
        break;
      default:
        sanitizedValue = inputValue;
    }

    // Se o valor foi alterado pela sanitização, criar um novo evento
    if (sanitizedValue !== inputValue) {
      const sanitizedEvent = {
        ...e,
        target: {
          ...e.target,
          value: sanitizedValue
        }
      };
      onChange(sanitizedEvent);
    } else {
      onChange(e);
    }
  };

  const renderField = () => {
    switch (type) {
      case 'select':
        return (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`form-select ${className}`}
            required={required}
          >
            <option value="">Selecione</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'textarea':
        return (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={handleInputChange}
            className={`form-textarea ${className}`}
            placeholder={placeholder}
            rows={rows}
            required={required}
          />
        );
      
      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={handleInputChange}
            className={`form-input ${className}`}
            placeholder={placeholder}
            required={required}
          />
        );
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      {renderField()}
    </div>
  );
};

export default FormField;
