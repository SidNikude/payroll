import React from "react";
import { useForm } from "react-hook-form";

const EmpInfoEditPage1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="card shadow p-4 rounded-4">
        <h3 className="text-center mb-4 fw-bold text-primary">
          Employee Information Edit
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3">
            
            {/* EMPLOYEE NO */}
            <div className="col-md-4">
              <label className="form-label">Employee No</label>
              <input
                type="number"
                className={`form-control ${
                  errors.employeeNo ? "is-invalid" : ""
                }`}
                {...register("employeeNo", {
                  required: "Employee number required",
                  maxLength: { value: 20, message: "Too long number" },
                })}
              />
              {errors.employeeNo && (
                <div className="invalid-feedback">
                  {errors.employeeNo.message}
                </div>
              )}
            </div>

            {/* EMPLOYMENT NO */}
            <div className="col-md-4">
              <label className="form-label">Employment No</label>
              <input
                type="number"
                className={`form-control ${
                  errors.employmentNo ? "is-invalid" : ""
                }`}
                {...register("employmentNo", {
                  required: "Employment number required",
                  maxLength: { value: 20, message: "Too long number" },
                })}
              />
              {errors.employmentNo && (
                <div className="invalid-feedback">
                  {errors.employmentNo.message}
                </div>
              )}
            </div>

            {/* EMPLOYMENT OFFICE */}
            <div className="col-md-4">
              <label className="form-label">Employment Office</label>
              <input
                type="text"
                className={`form-control ${
                  errors.employementOffice ? "is-invalid" : ""
                }`}
                {...register("employementOffice", {
                  required: "Employment office required",
                })}
              />
              {errors.employementOffice && (
                <div className="invalid-feedback">
                  {errors.employementOffice.message}
                </div>
              )}
            </div>

            {/* LAST NAME */}
            <div className="col-md-4">
              <label className="form-label">Employee Last Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.empLastName ? "is-invalid" : ""
                }`}
                {...register("empLastName", {
                  required: "Last name required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                })}
              />
              {errors.empLastName && (
                <div className="invalid-feedback">
                  {errors.empLastName.message}
                </div>
              )}
            </div>

            {/* FIRST NAME */}
            <div className="col-md-4">
              <label className="form-label">Employee First Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.empFirstName ? "is-invalid" : ""
                }`}
                {...register("empFirstName", {
                  required: "First name required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                })}
              />
              {errors.empFirstName && (
                <div className="invalid-feedback">
                  {errors.empFirstName.message}
                </div>
              )}
            </div>

            {/* MIDDLE NAME */}
            <div className="col-md-4">
              <label className="form-label">Employee Middle Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.empMiddleName ? "is-invalid" : ""
                }`}
                {...register("empMiddleName", {
                  required: "Middle name required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                })}
              />
              {errors.empMiddleName && (
                <div className="invalid-feedback">
                  {errors.empMiddleName.message}
                </div>
              )}
            </div>

            {/* MOTHER’S NAME */}
            <div className="col-md-6">
              <label className="form-label">Mother's Full Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.mothersFullName ? "is-invalid" : ""
                }`}
                {...register("mothersFullName", {
                  required: "Mother's name required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                })}
              />
              {errors.mothersFullName && (
                <div className="invalid-feedback">
                  {errors.mothersFullName.message}
                </div>
              )}
            </div>

            {/* CURRENT ADDRESS */}
            <div className="col-md-6">
              <label className="form-label">Current Address</label>
              <input
                type="text"
                className={`form-control ${
                  errors.currentAddress ? "is-invalid" : ""
                }`}
                {...register("currentAddress", {
                  required: "Current address required",
                })}
              />
              {errors.currentAddress && (
                <div className="invalid-feedback">
                  {errors.currentAddress.message}
                </div>
              )}
            </div>

            {/* CURRENT CITY */}
            <div className="col-md-4">
              <label className="form-label">Current City</label>
              <input
                type="text"
                className={`form-control ${
                  errors.currentCity ? "is-invalid" : ""
                }`}
                {...register("currentCity", {
                  required: "Current city required",
                })}
              />
              {errors.currentCity && (
                <div className="invalid-feedback">
                  {errors.currentCity.message}
                </div>
              )}
            </div>

            {/* CURRENT PIN */}
            <div className="col-md-4">
              <label className="form-label">Current Pincode</label>
              <input
                type="number"
                className={`form-control ${
                  errors.currentPinCode ? "is-invalid" : ""
                }`}
                {...register("currentPinCode", {
                  required: "Pincode required",
                  minLength: { value: 6, message: "Pincode must be 6 digits" },
                  maxLength: { value: 6, message: "Pincode must be 6 digits" },
                })}
              />
              {errors.currentPinCode && (
                <div className="invalid-feedback">
                  {errors.currentPinCode.message}
                </div>
              )}
            </div>

            {/* PERMANENT ADDRESS */}
            <div className="col-md-4">
              <label className="form-label">Permanent Address</label>
              <input
                type="text"
                className={`form-control ${
                  errors.permanentAddress ? "is-invalid" : ""
                }`}
                {...register("permanentAddress", {
                  required: "Permanent address required",
                })}
              />
              {errors.permanentAddress && (
                <div className="invalid-feedback">
                  {errors.permanentAddress.message}
                </div>
              )}
            </div>

            {/* PERMANENT CITY */}
            <div className="col-md-4">
              <label className="form-label">Permanent City</label>
              <input
                type="text"
                className={`form-control ${
                  errors.permanentCity ? "is-invalid" : ""
                }`}
                {...register("permanentCity", {
                  required: "Permanent city required",
                })}
              />
              {errors.permanentCity && (
                <div className="invalid-feedback">
                  {errors.permanentCity.message}
                </div>
              )}
            </div>

            {/* PERMANENT PINCODE */}
            <div className="col-md-4">
              <label className="form-label">Permanent Pincode</label>
              <input
                type="number"
                className={`form-control ${
                  errors.permanentPinCode ? "is-invalid" : ""
                }`}
                {...register("permanentPinCode", {
                  required: "Pincode required",
                  minLength: { value: 6, message: "Must be 6 digits" },
                  maxLength: { value: 6, message: "Must be 6 digits" },
                })}
              />
              {errors.permanentPinCode && (
                <div className="invalid-feedback">
                  {errors.permanentPinCode.message}
                </div>
              )}
            </div>

            {/* GENDER */}
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className={`form-select ${errors.gender ? "is-invalid" : ""}`}
                {...register("gender", {
                  required: "Gender required",
                })}
              >
                <option value="">Choose One</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <div className="invalid-feedback">
                  {errors.gender.message}
                </div>
              )}
            </div>

            {/* DOB */}
            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                {...register("dob", {
                  required: "DOB required",
                })}
              />
              {errors.dob && (
                <div className="invalid-feedback">{errors.dob.message}</div>
              )}
            </div>

            {/* MOBILE NO */}
            <div className="col-md-6">
              <label className="form-label">Mobile Number</label>
              <input
                type="number"
                className={`form-control ${errors.mobileNo ? "is-invalid" : ""}`}
                {...register("mobileNo", {
                  required: "Mobile number required",
                  minLength: { value: 10, message: "Must be 10 digits" },
                  maxLength: { value: 10, message: "Must be 10 digits" },
                })}
              />
              {errors.mobileNo && (
                <div className="invalid-feedback">
                  {errors.mobileNo.message}
                </div>
              )}
            </div>

            {/* EMAIL */}
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: "Email required",
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            {/* AADHAR */}
            <div className="col-md-6">
              <label className="form-label">Aadhar Number</label>
              <input
                type="number"
                className={`form-control ${
                  errors.aadharCardNo ? "is-invalid" : ""
                }`}
                {...register("aadharCardNo", {
                  required: "Aadhar number required",
                  minLength: { value: 12, message: "Must be 12 digits" },
                  maxLength: { value: 12, message: "Must be 12 digits" },
                })}
              />
              {errors.aadharCardNo && (
                <div className="invalid-feedback">
                  {errors.aadharCardNo.message}
                </div>
              )}
            </div>

            {/* ELECTION CARD */}
            <div className="col-md-6">
              <label className="form-label">Election Card No</label>
              <input
                type="number"
                className={`form-control ${
                  errors.electionCardNo ? "is-invalid" : ""
                }`}
                {...register("electionCardNo", {
                  required: "Election card number required",
                })}
              />
              {errors.electionCardNo && (
                <div className="invalid-feedback">
                  {errors.electionCardNo.message}
                </div>
              )}
            </div>

            {/* BIRTHPLACE */}
            <div className="col-md-6">
              <label className="form-label">Birthplace</label>
              <input
                type="text"
                className={`form-control ${
                  errors.birthPlace ? "is-invalid" : ""
                }`}
                {...register("birthPlace", {
                  required: "Birthplace required",
                })}
              />
              {errors.birthPlace && (
                <div className="invalid-feedback">
                  {errors.birthPlace.message}
                </div>
              )}
            </div>

            {/* BIRTHMARK */}
            <div className="col-md-6">
              <label className="form-label">Birthmark</label>
              <input
                type="text"
                className={`form-control ${
                  errors.birthMark ? "is-invalid" : ""
                }`}
                {...register("birthMark", {
                  required: "Birthmark required",
                })}
              />
              {errors.birthMark && (
                <div className="invalid-feedback">
                  {errors.birthMark.message}
                </div>
              )}
            </div>

            {/* BLOOD GROUP */}
            <div className="col-md-6">
              <label className="form-label">Blood Group</label>
              <select
                className={`form-select ${
                  errors.bloodGroup ? "is-invalid" : ""
                }`}
                {...register("bloodGroup", {
                  required: "Blood group required",
                })}
              >
                <option value="">Choose One</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              {errors.bloodGroup && (
                <div className="invalid-feedback">
                  {errors.bloodGroup.message}
                </div>
              )}
            </div>

            {/* HEIGHT */}
            <div className="col-md-6">
              <label className="form-label">Height (in cm)</label>
              <input
                type="number"
                className={`form-control ${errors.height ? "is-invalid" : ""}`}
                {...register("height", {
                  required: "Height required",
                  min: { value: 50, message: "Min height 50 cm" },
                  max: { value: 250, message: "Max height 250 cm" },
                })}
              />
              {errors.height && (
                <div className="invalid-feedback">{errors.height.message}</div>
              )}
            </div>

            {/* MOTHER TONGUE */}
            <div className="col-md-6">
              <label className="form-label">Mother Tongue</label>
              <select
                className={`form-select ${
                  errors.motherTongue ? "is-invalid" : ""
                }`}
                {...register("motherTongue", {
                  required: "Mother tongue required",
                })}
              >
                <option value="">Choose One</option>
                <option value="Marathi">Marathi</option>
                <option value="Hindi">Hindi</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Kannada">Kannada</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Bengali">Bengali</option>
                <option value="Urdu">Urdu</option>
              </select>
              {errors.motherTongue && (
                <div className="invalid-feedback">
                  {errors.motherTongue.message}
                </div>
              )}
            </div>

            {/* RELIGION */}
            <div className="col-md-6">
              <label className="form-label">Religion</label>
              <select
                className={`form-select ${errors.religion ? "is-invalid" : ""}`}
                {...register("religion", {
                  required: "Religion required",
                })}
              >
                <option value="">Choose One</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
                <option value="Sikh">Sikh</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Jain">Jain</option>
              </select>
              {errors.religion && (
                <div className="invalid-feedback">
                  {errors.religion.message}
                </div>
              )}
            </div>

            {/* CASTE CATEGORY */}
            <div className="col-md-6">
              <label className="form-label">Caste Category</label>
              <select
                className={`form-select ${
                  errors.casteCategory ? "is-invalid" : ""
                }`}
                {...register("casteCategory", {
                  required: "Caste category required",
                })}
              >
                <option value="">Choose One</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="VJNT">VJNT</option>
                <option value="SBC">SBC</option>
              </select>
              {errors.casteCategory && (
                <div className="invalid-feedback">
                  {errors.casteCategory.message}
                </div>
              )}
            </div>

            {/* CASTE */}
            <div className="col-md-6">
              <label className="form-label">Caste</label>
              <input
                type="text"
                className={`form-control ${errors.caste ? "is-invalid" : ""}`}
                {...register("caste", {
                  required: "Caste required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                })}
              />
              {errors.caste && (
                <div className="invalid-feedback">{errors.caste.message}</div>
              )}
            </div>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-primary px-4 py-2 fw-semibold">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpInfoEditPage1;
