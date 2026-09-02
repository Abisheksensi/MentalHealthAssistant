import React, { useState } from 'react';

const DoctorSignupWizard = ({ onSubmit, isSubmitting, error, success }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    nameWithInitials: '',
    dateOfBirth: '',
    gender: '',
    nicPassport: '',
    profilePhoto: null,
    email: '',
    mobileNumber: '',
    residentialAddress: '',
    
    // Step 2
    slmcNumber: '',
    doctorType: '',
    specialization: '',
    yearsOfExperience: '',
    medicalDegree: '',
    university: '',
    yearGraduated: '',
    currentHospital: '',
    designation: '',

    // Step 3
    primarySpecialization: '',
    areasOfExpertise: [],

    // Step 4
    registrationType: '',
    docRegistrationCert: null,
    docSlmcId: null,
    docMedicalDegree: null,
    docPostgrad: null,
    docSpecialist: null,
    docOther: null
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newAreas = checked 
        ? [...prev.areasOfExpertise, value]
        : prev.areasOfExpertise.filter(area => area !== value);
      return { ...prev, areasOfExpertise: newAreas };
    });
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-slate-800 border-b pb-2 mb-4">Basic Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Name with Initials</label>
          <input type="text" name="nameWithInitials" value={formData.nameWithInitials} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">NIC / Passport Number</label>
          <input type="text" name="nicPassport" value={formData.nicPassport} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Profile Photograph</label>
          <input type="file" name="profilePhoto" onChange={handleChange} className="w-full p-2 text-base border border-slate-300 rounded-xl bg-white" accept="image/*" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">Residential Address</label>
          <textarea name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" rows="2"></textarea>
        </div>
      </div>

      {error && <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm mt-4">{error}</div>}
      
      <button type="button" onClick={nextStep} className="w-full py-3 rounded-xl text-white bg-sky-700 hover:bg-sky-800 font-semibold mt-6 transition">
        Next: Professional Information
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-slate-800 border-b pb-2 mb-4">Professional Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">SLMC Registration Number</label>
          <input type="text" name="slmcNumber" value={formData.slmcNumber} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Doctor Type</label>
          <select name="doctorType" value={formData.doctorType} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white">
            <option value="">Select Doctor Type</option>
            <option value="General Practitioner">General Practitioner</option>
            <option value="Consultant">Consultant</option>
            <option value="Specialist">Specialist</option>
            <option value="Therapist">Therapist</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Specialization</label>
          <select name="specialization" value={formData.specialization} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white">
            <option value="">Select Specialization</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Psychology">Psychology</option>
            <option value="Counseling">Counseling</option>
            <option value="Neurology">Neurology</option>
            <option value="General Medicine">General Medicine</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Years of Experience</label>
          <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Medical Degree</label>
          <input type="text" name="medicalDegree" value={formData.medicalDegree} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" placeholder="MBBS" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">University</label>
          <input type="text" name="university" value={formData.university} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Year Graduated</label>
          <input type="number" name="yearGraduated" value={formData.yearGraduated} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">Current Hospital / Institution</label>
          <input type="text" name="currentHospital" value={formData.currentHospital} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">Designation</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400" placeholder="Consultant / Medical Officer / etc." />
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button type="button" onClick={prevStep} className="w-1/3 py-3 rounded-xl text-slate-700 bg-slate-200 hover:bg-slate-300 font-semibold transition">
          Back
        </button>
        <button type="button" onClick={nextStep} className="w-2/3 py-3 rounded-xl text-white bg-sky-700 hover:bg-sky-800 font-semibold transition">
          Next: Mental-Health Specialization
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const primaryOptions = [
      "Psychiatry", "Clinical Psychology", "Counseling Psychology", 
      "Child & Adolescent Psychiatry", "Addiction Psychiatry", "Other"
    ];
    
    const expertiseOptions = [
      "Anxiety", "Depression", "Stress Management", "Relationship Issues",
      "Trauma", "Addiction", "Child & Adolescent Mental Health",
      "Sleep Problems", "Eating Disorders", "OCD", "PTSD", "Other"
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-slate-800 border-b pb-2 mb-4">Mental-Health Specialization</h3>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Primary Specialization</label>
          <div className="space-y-2">
            {primaryOptions.map(opt => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="primarySpecialization" 
                  value={opt} 
                  checked={formData.primarySpecialization === opt}
                  onChange={handleChange}
                  className="w-4 h-4 text-sky-600 border-slate-300 focus:ring-sky-500"
                />
                <span className="text-slate-700 text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Areas of Expertise (Select all that apply)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertiseOptions.map(opt => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  value={opt}
                  checked={formData.areasOfExpertise.includes(opt)}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500"
                />
                <span className="text-slate-700 text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button type="button" onClick={prevStep} className="w-1/3 py-3 rounded-xl text-slate-700 bg-slate-200 hover:bg-slate-300 font-semibold transition">
            Back
          </button>
          <button type="button" onClick={nextStep} className="w-2/3 py-3 rounded-xl text-white bg-sky-700 hover:bg-sky-800 font-semibold transition">
            Next: Qualification Verification
          </button>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-xl font-medium text-slate-800 border-b pb-2 mb-4">Qualification Verification</h3>
        <p className="text-sm text-slate-600 mb-4">Please upload relevant documents in PDF format to verify your qualifications.</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Registration Type</label>
            <select name="registrationType" value={formData.registrationType} onChange={handleChange} className="w-full p-3 text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white">
              <option value="">Select Registration Type</option>
              <option value="Medical Practitioner">Medical Practitioner</option>
              <option value="Specialist">Specialist</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Registration Certificate</label>
            <input type="file" name="docRegistrationCert" onChange={handleChange} className="w-full p-2 text-base border border-slate-300 rounded-xl bg-white" accept=".pdf" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">SLMC ID / Supporting Document</label>
            <input type="file" name="docSlmcId" onChange={handleChange} className="w-full p-2 text-base border border-slate-300 rounded-xl bg-white" accept=".pdf" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Medical Degree</label>
            <input type="file" name="docMedicalDegree" onChange={handleChange} className="w-full p-2 text-base border border-slate-300 rounded-xl bg-white" accept=".pdf" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Postgraduate Qualification</label>
            <input type="file" name="docPostgrad" onChange={handleChange} className="w-full p-2 text-base border border-slate-300 rounded-xl bg-white" accept=".pdf" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Specialist Certificate</label>
            <input type="file" name="docSpecialist" onChange={handleChange} className="w-full p-2 text-base border border-slate-300 rounded-xl bg-white" accept=".pdf" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Other Qualification</label>
            <input type="file" name="docOther" onChange={handleChange} className="w-full p-2 text-base border border-slate-300 rounded-xl bg-white" accept=".pdf" />
          </div>
        </div>

        {error && <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm mt-4">{error}</div>}
        {success && <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-sm mt-4">{success}</div>}
        
        <div className="flex gap-4 mt-8">
          <button type="button" onClick={prevStep} className="w-1/3 py-3 rounded-xl text-slate-700 bg-slate-200 hover:bg-slate-300 font-semibold transition">
            Back
          </button>
          <button type="submit" disabled={isSubmitting} className="w-2/3 py-3 rounded-xl text-white bg-sky-700 hover:bg-sky-800 font-semibold disabled:bg-slate-400 transition">
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    );
  };

  return (
    <div>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
    </div>
  );
};

export default DoctorSignupWizard;
