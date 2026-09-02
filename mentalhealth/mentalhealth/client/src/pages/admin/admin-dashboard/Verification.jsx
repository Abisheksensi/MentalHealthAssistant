import React from "react";

const VerificationRow = ({ label, status }) => (
  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
    <span className="text-sm font-medium text-slate-700">{label}</span>
    {status === 'checked' ? (
      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )}
  </div>
);

const Verification = ({ pendingDoctors, loading, handleApprove, handleReject }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[600px] flex flex-col">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
            Doctor Verification
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
              {pendingDoctors.length} Pending
            </span>
          </h2>
          <p className="text-sm text-slate-500 mt-1">Review and approve doctor registrations</p>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* List */}
        <div className="w-full lg:w-1/3 border-r border-slate-200 overflow-y-auto">
          {loading ? (
            <div className="text-center py-8 text-slate-400">Loading...</div>
          ) : pendingDoctors.length === 0 ? (
            <div className="text-center py-12 text-slate-400 flex flex-col items-center">
               <svg className="w-12 h-12 text-slate-200 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
               No pending applications
            </div>
          ) : (
            pendingDoctors.map((doc, idx) => (
              <div key={doc._id} className={`p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 ${idx === 0 ? 'bg-sky-50/50 border-l-4 border-l-sky-500' : ''}`}>
                <p className="font-semibold text-slate-900">{doc.name || "Unnamed Doctor"}</p>
                <p className="text-xs text-slate-500">{doc.email}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded">
                    SLMC: {doc.licenseNumber || "NEW"}
                  </span>
                  <span className="text-xs text-amber-600 font-medium">Reviewing</span>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Detail View */}
        <div className="flex-1 bg-white p-8 overflow-y-auto hidden lg:block">
          {pendingDoctors.length > 0 ? (
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-2xl font-bold">
                  {pendingDoctors[0].name ? pendingDoctors[0].name.charAt(0) : "D"}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{pendingDoctors[0].name || "Unnamed Doctor"}</h3>
                  <p className="text-slate-500">{pendingDoctors[0].email}</p>
                  <p className="text-sm font-medium text-sky-600 mt-1">Application Submitted: Today</p>
                </div>
              </div>

              <div className="space-y-4">
                <VerificationRow label="Personal Information" status="checked" />
                <VerificationRow label="Professional Information" status="checked" />
                <VerificationRow label={`SLMC Registration: ${pendingDoctors[0].licenseNumber || "N/A"}`} status="checked" />
                <VerificationRow label="Medical Qualification Documents" status="pending" />
                <VerificationRow label="Specialist Certificate" status="pending" />
                <VerificationRow label="Identity Verification" status="pending" />
              </div>

              <div className="pt-6 border-t border-slate-200">
                <label className="block text-sm font-medium text-slate-700 mb-2">Admin Notes (Optional)</label>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-500/50" 
                  rows="3" 
                  placeholder="Add private notes regarding this verification..."
                ></textarea>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => handleReject(pendingDoctors[0]._id)}
                  className="flex-1 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 font-medium py-3 rounded-xl transition"
                >
                  Reject Application
                </button>
                <button className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 font-medium py-3 rounded-xl transition">
                  Request Info
                </button>
                <button 
                  onClick={() => handleApprove(pendingDoctors[0]._id)}
                  className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 rounded-xl transition shadow-sm"
                >
                  Approve Doctor
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400">
              Select an application to review
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verification;
