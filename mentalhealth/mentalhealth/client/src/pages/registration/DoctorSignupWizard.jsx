import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorSignupWizard = ({ onSubmit, isSubmitting, error, success }) => {
  const navigate = useNavigate();
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
    <div className="space-y-5">
      <div>
        <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Full Name *</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" placeholder="e.g. Dr. Jane Doe" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Name with Initials *</label>
          <input type="text" name="nameWithInitials" value={formData.nameWithInitials} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Date of Birth *</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors text-[#475569]" />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Gender *</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors text-[#475569] appearance-none cursor-pointer">
            <option value="" disabled>Select ▼</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">NIC / Passport Number *</label>
          <input type="text" name="nicPassport" value={formData.nicPassport} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Mobile Number *</label>
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Residential Address *</label>
          <textarea name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" rows="2"></textarea>
        </div>
      </div>
      <div className="pt-6">
        <button type="button" onClick={nextStep} className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium py-3.5 rounded-xl transition-colors text-[15px]">
          Next
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Doctor Type *</label>
          <select name="doctorType" value={formData.doctorType} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors text-[#475569] appearance-none cursor-pointer">
            <option value="" disabled>Select ▼</option>
            <option value="General Practitioner">General Practitioner</option>
            <option value="Consultant">Consultant</option>
            <option value="Specialist">Specialist</option>
            <option value="Therapist">Therapist</option>
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Years of Experience *</label>
          <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Medical Degree *</label>
          <input type="text" name="medicalDegree" value={formData.medicalDegree} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" placeholder="MBBS" />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">University *</label>
          <input type="text" name="university" value={formData.university} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Current Hospital / Institution</label>
          <input type="text" name="currentHospital" value={formData.currentHospital} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" />
        </div>
      </div>
      <div className="flex gap-4 pt-6">
        <button type="button" onClick={prevStep} className="w-1/3 py-3.5 rounded-xl text-[#334155] bg-[#f1f5f9] hover:bg-[#e2e8f0] font-medium transition-colors text-[15px]">
          Back
        </button>
        <button type="button" onClick={nextStep} className="w-2/3 py-3.5 rounded-xl text-white bg-[#0f172a] hover:bg-[#1e293b] font-medium transition-colors text-[15px]">
          Next
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
        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-3">Primary Specialization *</label>
          <div className="space-y-2">
            {primaryOptions.map(opt => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="primarySpecialization" 
                  value={opt} 
                  checked={formData.primarySpecialization === opt}
                  onChange={handleChange}
                  className="w-4 h-4 text-sky-500 border-[#cbd5e1] focus:ring-sky-500"
                />
                <span className="text-[#475569] text-[14px]">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-[#334155] mb-3">Areas of Expertise (Select all that apply) *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertiseOptions.map(opt => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  value={opt}
                  checked={formData.areasOfExpertise.includes(opt)}
                  onChange={handleCheckboxChange}
                  className="w-[18px] h-[18px] border-2 border-[#cbd5e1] rounded-[4px] text-sky-500 focus:ring-sky-500 cursor-pointer"
                />
                <span className="text-[#475569] text-[14px]">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button type="button" onClick={prevStep} className="w-1/3 py-3.5 rounded-xl text-[#334155] bg-[#f1f5f9] hover:bg-[#e2e8f0] font-medium transition-colors text-[15px]">
            Back
          </button>
          <button type="button" onClick={nextStep} className="w-2/3 py-3.5 rounded-xl text-white bg-[#0f172a] hover:bg-[#1e293b] font-medium transition-colors text-[15px]">
            Next
          </button>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-5">
        <p className="text-[14px] text-[#64748b] mb-4">Please complete your registration details and upload relevant documents.</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-bold text-[#334155] mb-1.5">SLMC Registration Number *</label>
            <input type="text" name="slmcNumber" value={formData.slmcNumber} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" required />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Registration Type *</label>
            <select name="registrationType" value={formData.registrationType} onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors text-[#475569] appearance-none cursor-pointer" required>
              <option value="" disabled>Select ▼</option>
              <option value="Medical Doctor">Medical Doctor</option>
              <option value="Counselor">Counselor</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Registration Certificate</label>
            <input type="file" name="docRegistrationCert" onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 text-[14px] text-[#475569] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100" accept=".pdf" />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-[#334155] mb-1.5">SLMC ID / Supporting Document</label>
            <input type="file" name="docSlmcId" onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 text-[14px] text-[#475569] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100" accept=".pdf" />
          </div>
          
          <div className="pt-2">
            <h3 className="text-[14px] font-bold text-[#334155] mb-3">Qualification Documents</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Medical Degree</label>
                <input type="file" name="docMedicalDegree" onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 text-[14px] text-[#475569] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100" accept=".pdf" />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Postgraduate Qualification</label>
                <input type="file" name="docPostgrad" onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 text-[14px] text-[#475569] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100" accept=".pdf" />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Specialist Certificate</label>
                <input type="file" name="docSpecialist" onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 text-[14px] text-[#475569] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100" accept=".pdf" />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#334155] mb-1.5">Other Qualification</label>
                <input type="file" name="docOther" onChange={handleChange} className="w-full bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 text-[14px] text-[#475569] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100" accept=".pdf" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button type="button" onClick={prevStep} className="w-1/3 py-3.5 rounded-xl text-[#334155] bg-[#f1f5f9] hover:bg-[#e2e8f0] font-medium transition-colors text-[15px]">
            Back
          </button>
          <button type="submit" disabled={isSubmitting} className="w-2/3 py-3.5 rounded-xl text-white bg-[#0f172a] hover:bg-[#1e293b] font-medium transition-colors text-[15px] disabled:opacity-50">
            {isSubmitting ? 'Submitting...' : 'Create Account'}
          </button>
        </div>
      </form>
    );
  };

  const progressPercentage = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden p-8 md:p-12">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
          <div className="h-full bg-[#0ea5e9] transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        {/* Close Button */}
        <button 
          type="button"
          onClick={() => navigate('/signup/patient')}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          title="Return to Patient Signup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="text-center mb-8 mt-2">
          <h2 className="text-[28px] font-bold text-[#0f172a]">Create Your Account</h2>
          <p className="text-[#64748b] mt-1 text-[15px]">Join MindBridge to start your mental health journey</p>
        </div>

        {error && <div className="mb-6 p-4 bg-rose-50 text-rose-600 text-sm rounded-lg border border-rose-100">{error}</div>}
        {success && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-lg border border-emerald-100">{success}</div>}

        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}

        <p className="text-center text-[14px] text-[#64748b] mt-8">
          Already have an account? <a href="/login" className="text-[#334155] font-bold hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default DoctorSignupWizard;

