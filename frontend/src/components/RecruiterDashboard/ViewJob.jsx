// import React, { useState } from "react";
// import { Pencil, Users } from "lucide-react";
// import Select from "react-select";
// import axios from "axios";
// import toast from "react-hot-toast";
// import AppliedStudents from "./appliedstudent";
// import ShortlistStudents from "../ProfessorDashboard/shortliststudent";
// import ViewShortlistStudents from "../ProfessorDashboard/viewshortlistedstudent";
// import InterviewLinkManager from "../ProfessorDashboard/interviewlink";
// import GDLinkManager from "../ProfessorDashboard/gdlink";
// import OaLinkManager from "../ProfessorDashboard/oalink";
// import OthersLinkManager from "../ProfessorDashboard/otherslink";
// // import AuditLogs from "../AuditLogs";
// import { FaArrowLeft } from "react-icons/fa";

// const formatDateTime = (dateString) => {
//   if (!dateString) return "N/A";
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });
// };

// const formatDate = (dateString) => {
//   if (!dateString) return "N/A";
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// };

// const ViewJobDetails = ({ job, onClose, oneditingAllowedUpdate }) => {
//   const [viewingAppliedStudents, setViewingAppliedStudents] = useState(false);
//   const [editingSection, setEditingSection] = useState(null);
//   const [editingStepIndex, setEditingStepIndex] = useState(null);
//   const [editedJob, setEditedJob] = useState(job);
//   const [editedWorkflow, setEditedWorkflow] = useState(
//     job.Hiring_Workflow || []
//   );
//   const [viewingShortlist, setViewingShortlist] = useState(null);
//   const [addingShortlist, setAddingShortlist] = useState(null);
//   const [addingInterviewLink, setAddingInterviewLink] = useState(null);
//   const [addingGDLink, setAddingGDLink] = useState(null);
//   const [addingOALink, setAddingOALink] = useState(null);
//   const [addingOthersLink, setAddingOthersLink] = useState(null);
//   const [editingAllowed, setEditingAllowed] = useState(
//     editedJob.recruiter_editing_allowed || false
//   );

//   const btechdepartmentOptions = [
//     {
//       label: "BIO TECHNOLOGY",
//       options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }],
//     },
//     {
//       label: "CHEMICAL ENGINEERING",
//       options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }],
//     },
//     {
//       label: "CIVIL ENGINEERING",
//       options: [{ value: "CIVIL ENGINEERING", label: "CIVIL ENGINEERING" }],
//     },
//     {
//       label: "COMPUTER SCIENCE AND ENGINEERING",
//       options: [
//         {
//           value: "COMPUTER SCIENCE AND ENGINEERING",
//           label: "COMPUTER SCIENCE AND ENGINEERING",
//         },
//         {
//           value: "DATA SCIENCE AND ENGINEERING",
//           label: "DATA SCIENCE AND ENGINEERING",
//         },
//       ],
//     },
//     {
//       label: "ELECTRICAL ENGINEERING",
//       options: [
//         { value: "ELECTRICAL ENGINEERING", label: "ELECTRICAL ENGINEERING" },
//       ],
//     },
//     {
//       label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//       options: [
//         {
//           value: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//           label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//         },
//         {
//           value: "ELECTRONICS AND VLSI ENGINEERING",
//           label: "ELECTRONICS AND VLSI ENGINEERING",
//         },
//       ],
//     },
//     {
//       label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//       options: [
//         {
//           value: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//           label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//         },
//       ],
//     },
//     {
//       label: "INFORMATION TECHNOLOGY",
//       options: [
//         { value: "INFORMATION TECHNOLOGY", label: "INFORMATION TECHNOLOGY" },
//       ],
//     },
//     {
//       label: "INSTRUMENTATION AND CONTROL ENGINEERING",
//       options: [
//         {
//           value: "INSTRUMENTATION AND CONTROL ENGINEERING",
//           label: "INSTRUMENTATION AND CONTROL ENGINEERING",
//         },
//       ],
//     },
//     {
//       label: "MATHEMATICS AND COMPUTING",
//       options: [
//         {
//           value: "MATHEMATICS AND COMPUTING",
//           label: "MATHEMATICS AND COMPUTING",
//         },
//       ],
//     },
//     {
//       label: "MECHANICAL ENGINEERING",
//       options: [
//         { value: "MECHANICAL ENGINEERING", label: "MECHANICAL ENGINEERING" },
//       ],
//     },
//     {
//       label: "TEXTILE TECHNOLOGY",
//       options: [{ value: "TEXTILE TECHNOLOGY", label: "TEXTILE TECHNOLOGY" }],
//     },
//   ];

//   const mtechdepartmentOptions = [
//     {
//       label: "BIO TECHNOLOGY",
//       options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }],
//     },
//     {
//       label: "CHEMICAL ENGINEERING",
//       options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }],
//     },
//     {
//       label: "CIVIL ENGINEERING",
//       options: [
//         {
//           value: "STRUCTURAL AND CONSTRUCTION ENGINEERING",
//           label: "STRUCTURAL AND CONSTRUCTION ENGINEERING",
//         },
//         {
//           value: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING",
//           label: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING",
//         },
//       ],
//     },
//     {
//       label: "COMPUTER SCIENCE AND ENGINEERING",
//       options: [
//         {
//           value: "COMPUTER SCIENCE AND ENGINEERING",
//           label: "COMPUTER SCIENCE AND ENGINEERING",
//         },
//         { value: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)", label: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)" },
//         {
//           value: "DATA SCIENCE AND ENGINEERING",
//           label: "DATA SCIENCE AND ENGINEERING",
//         },
//       ],
//     },
//     {
//       label: "ELECTRICAL ENGINEERING",
//       options: [
//         { value: "ELECTRIC VEHICLE DESIGN", label: "ELECTRIC VEHICLE DESIGN" },
//       ],
//     },
//     {
//       label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
//       options: [
//         {
//           value: "SIGNAL PROCESSING AND MACHINE LEARNING",
//           label: "SIGNAL PROCESSING AND MACHINE LEARNING",
//         },
//         { value: "VLSI DESIGN", label: "VLSI DESIGN" },
//       ],
//     },
//     {
//       label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
//       options: [
//         {
//           value: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS",
//           label: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS",
//         }
//       ],
//     },
//     {
//       label: "INFORMATION TECHNOLOGY",
//       options: [{ value: "DATA ANALYTICS", label: "DATA ANALYTICS" }],
//     },
//     {
//       label: "CONTROL AND INSTRUMENTATION ENGINEERING",
//       options: [
//         {
//           value: "CONTROL AND INSTRUMENTATION ENGINEERING",
//           label: "CONTROL AND INSTRUMENTATION ENGINEERING",
//         },
//         {
//           value: "MACHINE INTELLIGENCE AND AUTOMATION",
//           label: "MACHINE INTELLIGENCE AND AUTOMATION",
//         },
//       ],
//     },
//     {
//       label: "MATHEMATICS AND COMPUTING",
//       options: [
//         {
//           value: "MATHEMATICS AND COMPUTING",
//           label: "MATHEMATICS AND COMPUTING",
//         },
//       ],
//     },
//     {
//       label: "MECHANICAL ENGINEERING",
//       options: [
//         { value: "DESIGN ENGINEERING", label: "DESIGN ENGINEERING" },
//         {
//           value: "THERMAL AND ENERGY ENGINEERING",
//           label: "THERMAL AND ENERGY ENGINEERING",
//         },
//       ],
//     },
//     {
//       label: "TEXTILE TECHNOLOGY",
//       options: [
//         {
//           value: "TEXTILE TECHNOLOGY",
//           label: "TEXTILE TECHNOLOGY",
//         },
//         {
//           value: "TEXTILE ENGINEERING AND MANAGEMENT",
//           label: "TEXTILE ENGINEERING AND MANAGEMENT",
//         },
//       ],
//     },
//     {
//       label: "RENEWABLE ENERGY",
//       options: [{ value: "RENEWABLE ENERGY", label: "RENEWABLE ENERGY" }],
//     },
//     {
//       label: "ARTIFICIAL INTELLIGENCE",
//       options: [
//         { value: "ARTIFICIAL INTELLIGENCE", label: "ARTIFICIAL INTELLIGENCE" },
//       ],
//     },
//     {
//       label: "POWER SYSTEMS AND RELIABILITY",
//       options: [
//         {
//           value: "POWER SYSTEMS AND RELIABILITY",
//           label: "POWER SYSTEMS AND RELIABILITY",
//         },
//       ],
//     },
//   ];

//   const mbadepartmentOptions = [
//     {value:"HUMANITIES AND MANAGEMENT", label:"HUMANITIES AND MANAGEMENT"},
//     // { value: "Finance", label: "Finance" },
//     // { value: "Human Resource", label: "Human Resource" },
//     // { value: "Marketing", label: "Marketing" },
//   ];

//   const mscdepartmentOptions = [
//     { value: "CHEMISTRY", label: "CHEMISTRY" },
//     { value: "MATHEMATICS", label: "MATHEMATICS" },
//     { value: "PHYSICS", label: "PHYSICS" },
//   ];

//   const phddepartmentOptions = [
//   ];

//   const getDepartmentOptions = (course) => {
//     switch (course) {
//       case "B.Tech":
//         return btechdepartmentOptions;
//       case "M.Tech":
//         return mtechdepartmentOptions;
//       case "MBA":
//         return mbadepartmentOptions;
//       case "M.Sc.":
//         return mscdepartmentOptions;
//       case "PHD":
//         return phddepartmentOptions;
//       default:
//         return [];
//     }
//   };

//   const jobTypeOptions = [
//     { value: "", label: "Select Job Type" },
//     { value: "2m Intern", label: "2-Month Internship" },
//     { value: "6m Intern", label: "6-Month Internship" },
//     { value: "Intern+PPO", label: "Intern + Pre Placement Offer(PPO)" },
//     { value: "Intern+FTE", label: "Intern + Full-Time Employment(FTE)" },
//     { value: "FTE", label: "Full-Time Employment(FTE)" },
//   ];

//   const jobCategoryOptions = [
//     { value: "", label: "Select Job Category" },
//     { value: "Tech", label: "Tech" },
//     { value: "Non-Tech", label: "Non-Tech" },
//     { value: "Tech+Non-Tech", label: "Tech + Non-Tech" },
//   ];

//   const handleEdit = (section, index = null) => {
//     setEditingSection(section);
//     setEditingStepIndex(index);
//   };

//   const handleCancel = () => {
//     setEditedJob(job);
//     setEditedWorkflow(job.Hiring_Workflow || []);
//     setEditingSection(null);
//     setEditingStepIndex(null);
//   };

//   const handleSave = async (section) => {
//     try {
//       let updateData = {};
//       if (section === "hiring_workflow") {
//         updateData = { Hiring_Workflow: editedWorkflow };
//       } else if (section === "eligibility") {
//         updateData = { eligibility_criteria: editedJob.eligibility_criteria };
//       } else if (section === "salary") {
//         updateData = { job_salary: editedJob.job_salary };
//       } else if (section === "basic") {
//         updateData = {
//           company_name: editedJob.company_name,
//           job_id: editedJob.job_id,
//           job_role: editedJob.job_role,
//           job_type: editedJob.job_type,
//           jobdescription: editedJob.jobdescription,
//           joblocation: editedJob.joblocation,
//           job_category: editedJob.job_category,
//           job_class: editedJob.job_class,
//           deadline: editedJob.deadline,
//         };
//       }

//       const response = await axios.put(
//         `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/updatejob/${job._id}`,
//         updateData,
//         { withCredentials: true }
//       );

//       if (response.data.success) {
//         toast.success("Job updated successfully!");
//         Object.assign(job, editedJob);
//         setEditingSection(null);
//         setEditingStepIndex(null);
//       }
//     } catch (error) {
//       console.error("Error saving:", error);
//       toast.error("Failed to update job");
//     }
//   };

//   const handleInputChange = (section, field, value) => {
//     if (section === "hiring_workflow") {
//       const updatedWorkflow = [...editedWorkflow];
//       const [fieldPath, ...subFields] = field.split(".");

//       if (subFields.length > 0) {
//         updatedWorkflow[editingStepIndex].details[subFields.join(".")] = value;
//       } else {
//         updatedWorkflow[editingStepIndex][fieldPath] = value;
//       }

//       setEditedWorkflow(updatedWorkflow);
//     } else {
//       const updatedJob = { ...editedJob };
//       const fieldPath = field.split(".");
//       let current = updatedJob;

//       for (let i = 0; i < fieldPath.length - 1; i++) {
//         if (!current[fieldPath[i]]) {
//           current[fieldPath[i]] = {};
//         }
//         current = current[fieldPath[i]];
//       }
//       current[fieldPath[fieldPath.length - 1]] = value;

//       setEditedJob(updatedJob);
//     }
//   };

//   const renderBasicDetails = () => {
//     return (
//       <div className="space-y-4 text-gray-700">
//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Company Name:</strong>
//           {editingSection === "basic" ? (
//             <input
//               type="text"
//               value={editedJob.company_name || ""}
//               onChange={(e) =>
//                 handleInputChange("basic", "company_name", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           ) : (
//             <span className="flex-1">{editedJob.company_name}</span>
//           )}
//         </div>
//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Job Id:</strong>
//           {editingSection === "basic" ? (
//             <input
//               type="text"
//               value={editedJob.job_id || ""}
//               onChange={(e) =>
//                 handleInputChange("basic", "job_id", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           ) : (
//             <span className="flex-1">{editedJob.job_id}</span>
//           )}
//         </div>
//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Job Role:</strong>
//           {editingSection === "basic" ? (
//             <input
//               type="text"
//               value={editedJob.job_role || ""}
//               onChange={(e) =>
//                 handleInputChange("basic", "job_role", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           ) : (
//             <span className="flex-1">{editedJob.job_role}</span>
//           )}
//         </div>

//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Job Type:</strong>
//           {editingSection === "basic" ? (
//             <select
//               value={editedJob.job_type || ""}
//               onChange={(e) =>
//                 handleInputChange("basic", "job_type", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               {jobTypeOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           ) : (
//             <span className="flex-1">{editedJob.job_type}</span>
//           )}
//         </div>

//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Job Category:</strong>
//           {editingSection === "basic" ? (
//             <select
//               value={editedJob.job_category || ""}
//               onChange={(e) =>
//                 handleInputChange("basic", "job_category", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               {jobCategoryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           ) : (
//             <span className="flex-1">{editedJob.job_category}</span>
//           )}
//         </div>

//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Location:</strong>
//           {editingSection === "basic" ? (
//             <input
//               type="text"
//               value={editedJob.joblocation || ""}
//               onChange={(e) =>
//                 handleInputChange("basic", "joblocation", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           ) : (
//             <span className="flex-1">{editedJob.joblocation}</span>
//           )}
//         </div>

//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Description:</strong>
//           {editingSection === "basic" ? (
//             <textarea
//               value={editedJob.jobdescription || ""}
//               onChange={(e) =>
//                 handleInputChange("basic", "jobdescription", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               rows={4}
//             />
//           ) : (
//             <span className="flex-1">{editedJob.jobdescription}</span>
//           )}
//         </div>

//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Deadline:</strong>
//           {editingSection === "basic" ? (
//             <input
//               type="datetime-local"
//               value={
//                 editedJob.deadline
//                   ? new Date(editedJob.deadline).toISOString().slice(0, 16)
//                   : ""
//               }
//               onChange={(e) =>
//                 handleInputChange("basic", "deadline", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           ) : (
//             <span className="flex-1">{formatDateTime(editedJob.deadline)}</span>
//           )}
//         </div>
//       </div>
//     );
//   };
//   const renderSalaryDetails = () => {
//     return (
//       <div className="space-y-4 text-gray-700">
//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">CTC:</strong>
//           {editingSection === "salary" ? (
//             <input
//               type="text"
//               value={editedJob.job_salary?.ctc || ""}
//               onChange={(e) =>
//                 handleInputChange("salary", "job_salary.ctc", e.target.value)
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           ) : (
//             <span className="flex-1">{editedJob.job_salary?.ctc || "N/A"}</span>
//           )}
//         </div>

//         <div className="flex items-center">
//           <strong className="w-1/3 text-gray-800">Base Salary:</strong>
//           {editingSection === "salary" ? (
//             <input
//               type="text"
//               value={editedJob.job_salary?.base_salary || ""}
//               onChange={(e) =>
//                 handleInputChange(
//                   "salary",
//                   "job_salary.base_salary",
//                   e.target.value
//                 )
//               }
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           ) : (
//             <span className="flex-1">
//               {editedJob.job_salary?.base_salary || "N/A"}
//             </span>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderEditableCard = (title, content, section) => (
//     <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative mt-8">
//       {editingAllowed && (
//         <button
//           className="absolute top-4 right-4 p-2 text-gray-600 hover:text-custom-blue transition-colors"
//           onClick={() => handleEdit(section)}
//         >
//           <Pencil size={20} />
//         </button>
//       )}

//       <h3 className="text-2xl font-semibold text-custom-blue mb-6">{title}</h3>
//       {content}

//       {editingSection === section && editingAllowed && (
//         <div className="mt-8 flex space-x-4">
//           <button
//             className="bg-custom-blue  text-white px-8 py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
//             onClick={() => handleSave(section)}
//           >
//             Save
//           </button>
//           <button
//             className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300"
//             onClick={handleCancel}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );

//   if (addingOthersLink) {
//     return (
//       <OthersLinkManager
//         jobId={job._id}
//         stepIndex={addingOthersLink.stepIndex}
//         onClose={() => setAddingOthersLink(null)}
//         othersLinks={
//           job.Hiring_Workflow[addingOthersLink.stepIndex]?.details
//             .others_link || []
//         }
//         onUpdateLinks={(updatedLinks) => {
//           const updatedWorkflow = [...job.Hiring_Workflow];
//           updatedWorkflow[addingOthersLink.stepIndex].details.others_link =
//             updatedLinks;
//           setEditedWorkflow(updatedWorkflow);
//         }}
//       />
//     );
//   }

//   if (addingOALink) {
//     return (
//       <OaLinkManager
//         jobId={job._id}
//         stepIndex={addingOALink.stepIndex}
//         onClose={() => setAddingOALink(null)}
//         oaLinks={
//           job.Hiring_Workflow[addingOALink.stepIndex]?.details.oa_link || []
//         }
//         onUpdateLinks={(updatedLinks) => {
//           const updatedWorkflow = [...job.Hiring_Workflow];
//           updatedWorkflow[addingOALink.stepIndex].details.oa_link =
//             updatedLinks;
//           setEditedWorkflow(updatedWorkflow);
//         }}
//       />
//     );
//   }
//   if (addingInterviewLink) {
//     return (
//       <InterviewLinkManager
//         jobId={job._id}
//         stepIndex={addingInterviewLink.stepIndex}
//         onClose={() => setAddingInterviewLink(null)}
//         interviewLinks={
//           job.Hiring_Workflow[addingInterviewLink.stepIndex]?.details
//             .interview_link || []
//         }
//         onUpdateLinks={(updatedLinks) => {
//           const updatedWorkflow = [...job.Hiring_Workflow];
//           updatedWorkflow[
//             addingInterviewLink.stepIndex
//           ].details.interview_link = updatedLinks;
//           setEditedWorkflow(updatedWorkflow);
//         }}
//       />
//     );
//   }

//   if (addingGDLink) {
//     return (
//       <GDLinkManager
//         jobId={job._id}
//         stepIndex={addingGDLink.stepIndex}
//         onClose={() => setAddingGDLink(null)}
//         gdLinks={
//           job.Hiring_Workflow[addingGDLink.stepIndex]?.details.gd_link || []
//         }
//       />
//     );
//   }

//   const renderHiringWorkflow = () => {
//     if (!job.Hiring_Workflow || job.Hiring_Workflow.length === 0) {
//       return <p className="mt-4 text-gray-500">No hiring workflow defined.</p>;
//     }

//     return (
//       <div className="mt-8 space-y-8">
//         {job.Hiring_Workflow.map((step, index) => (
//           <div
//             key={index}
//             className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
//           >
//             {editingAllowed && (
//               <button
//                 className="absolute top-4 right-4 p-2 text-gray-600 hover:text-blue-600 transition-colors"
//                 onClick={() => handleEdit("hiring_workflow", index)}
//               >
//                 <Pencil size={20} />
//               </button>
//             )}

//             <h3 className="text-2xl font-semibold text-custom-blue mb-6">
//               {step.step_type} Step
//             </h3>

//             <ul className="space-y-4 text-gray-700">
//               {Object.entries(step.details || {}).map(([key, value]) => {
//                 if (
//                   (step.step_type === "Interview" &&
//                     key.toLowerCase().includes("interview_link")) ||
//                   (step.step_type === "GD" &&
//                     key.toLowerCase().includes("gd_link")) ||
//                   (step.step_type === "OA" &&
//                     key.toLowerCase().includes("oa_link")) ||
//                   (step.step_type === "Others" &&
//                     key.toLowerCase().includes("others_link"))
//                 ) {
//                   return null;
//                 }

//                 return (
//                   <li key={key} className="flex items-center">
//                     <strong className="w-1/3 text-gray-800 capitalize">
//                       {key.replace(/_/g, " ")}:
//                     </strong>
//                     {editingStepIndex === index &&
//                     editingSection === "hiring_workflow" ? (
//                       key.toLowerCase().includes("date") ? (
//                         <input
//                           type="date"
//                           value={
//                             editedWorkflow[index].details[key]
//                               ? new Date(editedWorkflow[index].details[key])
//                                   .toISOString()
//                                   .slice(0, 10)
//                               : ""
//                           }
//                           onChange={(e) =>
//                             handleInputChange(
//                               "hiring_workflow",
//                               `details.${key}`,
//                               e.target.value
//                             )
//                           }
//                           className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       ) : (
//                         <input
//                           type="text"
//                           value={editedWorkflow[index].details[key] || ""}
//                           onChange={(e) =>
//                             handleInputChange(
//                               "hiring_workflow",
//                               `details.${key}`,
//                               e.target.value
//                             )
//                           }
//                           className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       )
//                     ) : (
//                       <span className="flex-1">
//                         {key.toLowerCase().includes("date")
//                           ? formatDate(value)
//                           : value || "N/A"}
//                       </span>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>

//             <div className="mt-8 flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
//               {step.step_type === "Others" && (
//                 <button
//                   className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//                   onClick={() =>
//                     setAddingOthersLink({ stepIndex: index, type: "Others" })
//                   }
//                 >
//                   Manage Other Assessment Links
//                 </button>
//               )}
//               {step.step_type === "OA" && (
//                 <button
//                   className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//                   onClick={() =>
//                     setAddingOALink({ stepIndex: index, type: "OA" })
//                   }
//                 >
//                   Manage OA Links
//                 </button>
//               )}
//               {step.step_type === "GD" && (
//                 <button
//                   className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//                   onClick={() =>
//                     setAddingGDLink({ stepIndex: index, type: "GD" })
//                   }
//                 >
//                   Manage GD Links
//                 </button>
//               )}
//               {step.step_type === "Interview" && (
//                 <button
//                   className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//                   onClick={() =>
//                     setAddingInterviewLink({
//                       stepIndex: index,
//                       type: "Interview",
//                     })
//                   }
//                 >
//                   Manage Interview Links
//                 </button>
//               )}
//               {editingAllowed && (
//                 <button
//                   className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-2xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//                   onClick={() => setAddingShortlist({ stepIndex: index })}
//                 >
//                   Add Shortlisted Students
//                 </button>
//               )}
//               <button
//                 className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-2xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//                 onClick={() => setViewingShortlist({ stepIndex: index })}
//               >
//                 View Shortlisted Students
//               </button>
//               {editingStepIndex === index &&
//                 editingSection === "hiring_workflow" && (
//                   <>
//                     <button
//                       className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
//                       onClick={() => handleSave("hiring_workflow")}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300"
//                       onClick={handleCancel}
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 )}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderEligibilityCriteria = () => (
//     <div className="space-y-4 text-gray-700">
//       <div className="flex items-center">
//         <strong className="w-1/3 text-gray-800">Departments Allowed:</strong>
//         {editingSection === "eligibility" ? (
//           <div className="flex-1">
//             <Select
//               isMulti
//               options={getDepartmentOptions(
//                 editedJob.eligibility_criteria?.course_allowed
//               )}
//               value={
//                 editedJob.eligibility_criteria?.course_allowed === "B.Tech" ||
//                 editedJob.eligibility_criteria?.course_allowed === "M.Tech"
//                   ? getDepartmentOptions(
//                       editedJob.eligibility_criteria?.course_allowed
//                     )
//                       .flatMap((group) => group.options)
//                       .filter((option) =>
//                         editedJob.eligibility_criteria?.department_allowed?.includes(
//                           option.value
//                         )
//                       )
//                   : getDepartmentOptions(
//                       editedJob.eligibility_criteria?.course_allowed
//                     ).filter((option) =>
//                       editedJob.eligibility_criteria?.department_allowed?.includes(
//                         option.value
//                       )
//                     )
//               }
//               onChange={(selectedOptions) => {
//                 const selectedValues = selectedOptions
//                   ? selectedOptions.map((option) => option.value)
//                   : [];
//                 handleInputChange(
//                   "eligibility",
//                   "eligibility_criteria.department_allowed",
//                   selectedValues
//                 );
//               }}
//               isDisabled={!editedJob.eligibility_criteria?.course_allowed}
//               className="w-full border-2 p-1.5 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
//             />
//           </div>
//         ) : (
//           <span className="flex-1">
//             {editedJob.eligibility_criteria?.department_allowed?.join(", ") ||
//               "N/A"}
//           </span>
//         )}
//       </div>

//       <div className="flex items-center">
//         <strong className="w-1/3 text-gray-800">Gender Allowed:</strong>
//         {editingSection === "eligibility" ? (
//           <select
//             value={editedJob.eligibility_criteria?.gender_allowed || ""}
//             onChange={(e) =>
//               handleInputChange(
//                 "eligibility",
//                 "eligibility_criteria.gender_allowed",
//                 e.target.value
//               )
//             }
//             className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//             <option value="Any">All</option>
//           </select>
//         ) : (
//           <span className="flex-1">
//             {editedJob.eligibility_criteria?.gender_allowed || "N/A"}
//           </span>
//         )}
//       </div>

//       <div className="flex items-center">
//         <strong className="w-1/3 text-gray-800">Course Allowed:</strong>
//         {editingSection === "eligibility" ? (
//           <select
//             value={editedJob.eligibility_criteria?.course_allowed || ""}
//             onChange={(e) =>
//               handleInputChange(
//                 "eligibility",
//                 "eligibility_criteria.course_allowed",
//                 e.target.value
//               )
//             }
//             className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="">Select Course</option>
//             <option value="B.Tech">B.Tech</option>
//             <option value="M.Tech">M.Tech</option>
//             <option value="MBA">MBA</option>
//             <option value="M.Sc.">M.Sc.</option>
//             <option value="PHD">PHD</option>
//           </select>
//         ) : (
//           <span className="flex-1">
//             {editedJob.eligibility_criteria?.course_allowed || "N/A"}
//           </span>
//         )}
//       </div>

//       <div className="flex items-center">
//         <strong className="w-1/3 text-gray-800">Eligible Batch:</strong>
//         {editingSection === "eligibility" ? (
//           <select
//             value={editedJob.eligibility_criteria?.eligible_batch || ""}
//             onChange={(e) =>
//               handleInputChange(
//                 "eligibility",
//                 "eligibility_criteria.eligible_batch",
//                 e.target.value
//               )
//             }
//             className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="">Select Batch</option>
//             <option value="2025">2025</option>
//             <option value="2026">2026</option>
//             <option value="2027">2027</option>
//             <option value="2028">2028</option>
//             <option value="2029">2029</option>
//             <option value="2030">2030</option>
//           </select>
//         ) : (
//           <span className="flex-1">
//             {editedJob.eligibility_criteria?.eligible_batch || "N/A"}
//           </span>
//         )}
//       </div>

//       <div className="flex items-center">
//         <strong className="w-1/3 text-gray-800">
//           Active Backlogs Allowed:
//         </strong>
//         {editingSection === "eligibility" ? (
//           <input
//             type="checkbox"
//             checked={editedJob.eligibility_criteria?.active_backlogs || false}
//             onChange={(e) =>
//               handleInputChange(
//                 "eligibility",
//                 "eligibility_criteria.active_backlogs",
//                 e.target.checked
//               )
//             }
//             className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//           />
//         ) : (
//           <span className="flex-1">
//             {editedJob.eligibility_criteria?.active_backlogs ? "Yes" : "No"}
//           </span>
//         )}
//       </div>
//       <div className="flex items-center">
//         <strong className="w-1/3 text-gray-800">
//           Backlogs History Allowed:
//         </strong>
//         {editingSection === "eligibility" ? (
//           <input
//             type="checkbox"
//             checked={editedJob.eligibility_criteria?.history_backlogs || false}
//             onChange={(e) =>
//               handleInputChange(
//                 "eligibility",
//                 "eligibility_criteria.history_backlogs",
//                 e.target.checked
//               )
//             }
//             className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//           />
//         ) : (
//           <span className="flex-1">
//             {editedJob.eligibility_criteria?.history_backlogs ? "Yes" : "No"}
//           </span>
//         )}
//       </div>

//       <div className="flex items-center">
//         <strong className="w-1/3 text-gray-800">Minimum CGPA:</strong>
//         {editingSection === "eligibility" ? (
//           <input
//             type="number"
//             min="0"
//             max="10"
//             value={editedJob.eligibility_criteria?.minimum_cgpa || ""}
//             onChange={(e) =>
//               handleInputChange(
//                 "eligibility",
//                 "eligibility_criteria.minimum_cgpa",
//                 e.target.value
//               )
//             }
//             className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         ) : (
//           <span className="flex-1">
//             {editedJob.eligibility_criteria?.minimum_cgpa || "N/A"}
//           </span>
//         )}
//       </div>
//     </div>
//   );

//   if (addingShortlist) {
//     return (
//       <ShortlistStudents
//         jobId={job._id}
//         stepIndex={addingShortlist.stepIndex}
//         onClose={() => setAddingShortlist(null)}
//       />
//     );
//   }
//   if (viewingShortlist) {
//     return (
//       <ViewShortlistStudents
//         jobId={job._id}
//         stepIndex={viewingShortlist.stepIndex}
//         onClose={() => setViewingShortlist(null)}
//       />
//     );
//   }

//   if (viewingAppliedStudents) {
//     return (
//       <AppliedStudents
//         jobId={job._id}
//         company_name={editedJob.company_name}
//         onClose={() => setViewingAppliedStudents(false)}
//       />
//     );
//   }

//   return (
//     <>
//       <div className="mt-2 ml-4">
//         <button
//           className="flex items-center text-blue-600 hover:text-blue-800"
//           onClick={onClose}
//         >
//           <FaArrowLeft className="mr-2" />
//         </button>
//       </div>
//       <div className="bg-white sm:p-10 p-4 rounded-3xl shadow-2xl max-w-6xl mx-auto">
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mb-8">
//           <h2 className="text-4xl font-bold text-custom-blue">Job Details</h2>
//           <div className="flex items-center space-x-4">
//             <button
//               className="bg-gradient-to-r from-[#0369A0] to-[#024873] text-white p-3 sm:px-8 sm:py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//               onClick={() => setViewingAppliedStudents(true)}
//             >
//               <Users className="mr-2 h-4 w-4 inline" />
//               View Applied Students
//             </button>
//             {/* <button
//             className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//             onClick={onClose}
//           >
//             Close
//           </button> */}
//           </div>
//         </div>

//         {renderEditableCard("Basic Details", renderBasicDetails(), "basic")}
//         {renderEditableCard("Salary Details", renderSalaryDetails(), "salary")}
//         {renderEditableCard(
//           "Eligibility Criteria",
//           renderEligibilityCriteria(),
//           "eligibility"
//         )}

//         <h3 className="text-3xl font-bold text-custom-blue mt-10 mb-8">
//           Hiring Workflow
//         </h3>
//         {renderHiringWorkflow()}
//         {/* <AuditLogs logs={job.auditLogs || []} /> */}
//       </div>
//     </>
//   );
// };

// export default ViewJobDetails;



import React, { useState, useEffect } from "react";
import { Pencil, Users, FileText, Edit, Trash2, Plus } from "lucide-react";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import AppliedStudents from "./appliedstudent";
import CreateApplicationform from "../ProfessorDashboard/createapplicationform";
import ViewApplicationForm from "../ProfessorDashboard/viewapplicationform";
import EditApplicationForm from "../ProfessorDashboard/editapplicationform";
import ShortlistStudents from "../ProfessorDashboard/shortliststudent";
import ViewShortlistStudents from "../ProfessorDashboard/viewshortlistedstudent";
import InterviewLinkManager from "../ProfessorDashboard/interviewlink";
import GDLinkManager from "../ProfessorDashboard/gdlink";
import OaLinkManager from "../ProfessorDashboard/oalink";
import OthersLinkManager from "../ProfessorDashboard/otherslink";
import { FaArrowLeft } from "react-icons/fa";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formatDateTime = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const ViewJobDetails = ({ job, onClose, oneditingAllowedUpdate }) => {
  const [viewingAppliedStudents, setViewingAppliedStudents] = useState(false);
  const [selectedJobForForm, setSelectedJobForForm] = useState(null);
  const [viewingApplicationForm, setViewingApplicationForm] = useState(false);
  const [editingApplicationForm, setEditingApplicationForm] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [editingStepIndex, setEditingStepIndex] = useState(null);
  const [editedJob, setEditedJob] = useState({
    ...job,
    eligibility_criteria: job.eligibility_criteria || [],
    job_salary: { ...job.job_salary, stipend: job.job_salary?.stipend || "0" },
    job_sector: job.job_sector || "Private"
  });
  const [editedWorkflow, setEditedWorkflow] = useState(job.Hiring_Workflow || []);
  const [viewingShortlist, setViewingShortlist] = useState(null);
  const [addingShortlist, setAddingShortlist] = useState(null);
  const [addingInterviewLink, setAddingInterviewLink] = useState(null);
  const [addingGDLink, setAddingGDLink] = useState(null);
  const [addingOALink, setAddingOALink] = useState(null);
  const [addingOthersLink, setAddingOthersLink] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editingAllowed, setEditingAllowed] = useState(editedJob.recruiter_editing_allowed || false);
  const [currentCriteriaIndex, setCurrentCriteriaIndex] = useState(0);
  const [editingCriteriaIndex, setEditingCriteriaIndex] = useState(null);

  const btechdepartmentOptions = [
    { label: "BIO TECHNOLOGY", options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }] },
    { label: "CHEMICAL ENGINEERING", options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }] },
    { label: "CIVIL ENGINEERING", options: [{ value: "CIVIL ENGINEERING", label: "CIVIL ENGINEERING" }] },
    {
      label: "COMPUTER SCIENCE AND ENGINEERING",
      options: [
        { value: "COMPUTER SCIENCE AND ENGINEERING", label: "COMPUTER SCIENCE AND ENGINEERING" },
        { value: "DATA SCIENCE AND ENGINEERING", label: "DATA SCIENCE AND ENGINEERING" },
      ],
    },
    { label: "ELECTRICAL ENGINEERING", options: [{ value: "ELECTRICAL ENGINEERING", label: "ELECTRICAL ENGINEERING" }] },
    {
      label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
      options: [
        { value: "ELECTRONICS AND COMMUNICATION ENGINEERING", label: "ELECTRONICS AND COMMUNICATION ENGINEERING" },
        { value: "ELECTRONICS AND VLSI ENGINEERING", label: "ELECTRONICS AND VLSI ENGINEERING" },
      ],
    },
    {
      label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
      options: [{ value: "INDUSTRIAL AND PRODUCTION ENGINEERING", label: "INDUSTRIAL AND PRODUCTION ENGINEERING" }],
    },
    { label: "INFORMATION TECHNOLOGY", options: [{ value: "INFORMATION TECHNOLOGY", label: "INFORMATION TECHNOLOGY" }] },
    {
      label: "INSTRUMENTATION AND CONTROL ENGINEERING",
      options: [{ value: "INSTRUMENTATION AND CONTROL ENGINEERING", label: "INSTRUMENTATION AND CONTROL ENGINEERING" }],
    },
    { label: "MATHEMATICS AND COMPUTING", options: [{ value: "MATHEMATICS AND COMPUTING", label: "MATHEMATICS AND COMPUTING" }] },
    { label: "MECHANICAL ENGINEERING", options: [{ value: "MECHANICAL ENGINEERING", label: "MECHANICAL ENGINEERING" }] },
    { label: "TEXTILE TECHNOLOGY", options: [{ value: "TEXTILE TECHNOLOGY", label: "TEXTILE TECHNOLOGY" }] },
  ];

  const mtechdepartmentOptions = [
    { label: "BIO TECHNOLOGY", options: [{ value: "BIO TECHNOLOGY", label: "BIO TECHNOLOGY" }] },
    { label: "CHEMICAL ENGINEERING", options: [{ value: "CHEMICAL ENGINEERING", label: "CHEMICAL ENGINEERING" }] },
    {
      label: "CIVIL ENGINEERING",
      options: [
        { value: "STRUCTURAL AND CONSTRUCTION ENGINEERING", label: "STRUCTURAL AND CONSTRUCTION ENGINEERING" },
        { value: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING", label: "GEOTECHNICAL AND GEO-ENVIRONMENTAL ENGINEERING" },
      ],
    },
    {
      label: "COMPUTER SCIENCE AND ENGINEERING",
      options: [
        { value: "COMPUTER SCIENCE AND ENGINEERING", label: "COMPUTER SCIENCE AND ENGINEERING" },
        { value: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)", label: "COMPUTER SCIENCE AND ENGINEERING (INFORMATION SECURITY)" },
        { value: "DATA SCIENCE AND ENGINEERING", label: "DATA SCIENCE AND ENGINEERING" },
      ],
    },
    { label: "ELECTRICAL ENGINEERING", options: [{ value: "ELECTRIC VEHICLE DESIGN", label: "ELECTRIC VEHICLE DESIGN" }] },
    {
      label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
      options: [
        { value: "SIGNAL PROCESSING AND MACHINE LEARNING", label: "SIGNAL PROCESSING AND MACHINE LEARNING" },
        { value: "VLSI DESIGN", label: "VLSI DESIGN" },
      ],
    },
    {
      label: "INDUSTRIAL AND PRODUCTION ENGINEERING",
      options: [{ value: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS", label: "INDUSTRIAL ENGINEERING AND DATA ANALYTICS" }],
    },
    { label: "INFORMATION TECHNOLOGY", options: [{ value: "DATA ANALYTICS", label: "DATA ANALYTICS" }] },
    {
      label: "CONTROL AND INSTRUMENTATION ENGINEERING",
      options: [
        { value: "CONTROL AND INSTRUMENTATION ENGINEERING", label: "CONTROL AND INSTRUMENTATION ENGINEERING" },
        { value: "MACHINE INTELLIGENCE AND AUTOMATION", label: "MACHINE INTELLIGENCE AND AUTOMATION" },
      ],
    },
    { label: "MATHEMATICS AND COMPUTING", options: [{ value: "MATHEMATICS AND COMPUTING", label: "MATHEMATICS AND COMPUTING" }] },
    {
      label: "MECHANICAL ENGINEERING",
      options: [
        { value: "DESIGN ENGINEERING", label: "DESIGN ENGINEERING" },
        { value: "THERMAL AND ENERGY ENGINEERING", label: "THERMAL AND ENERGY ENGINEERING" },
      ],
    },
    {
      label: "TEXTILE TECHNOLOGY",
      options: [
        { value: "TEXTILE TECHNOLOGY", label: "TEXTILE TECHNOLOGY" },
        { value: "TEXTILE ENGINEERING AND MANAGEMENT", label: "TEXTILE ENGINEERING AND MANAGEMENT" },
      ],
    },
    { label: "RENEWABLE ENERGY", options: [{ value: "RENEWABLE ENERGY", label: "RENEWABLE ENERGY" }] },
    { label: "ARTIFICIAL INTELLIGENCE", options: [{ value: "ARTIFICIAL INTELLIGENCE", label: "ARTIFICIAL INTELLIGENCE" }] },
    { label: "POWER SYSTEMS AND RELIABILITY", options: [{ value: "POWER SYSTEMS AND RELIABILITY", label: "POWER SYSTEMS AND RELIABILITY" }] },
  ];

  const mbadepartmentOptions = [
    { value: "HUMANITIES AND MANAGEMENT", label: "HUMANITIES AND MANAGEMENT" },
  ];

  const mscdepartmentOptions = [
    { value: "CHEMISTRY", label: "CHEMISTRY" },
    { value: "MATHEMATICS", label: "MATHEMATICS" },
    { value: "PHYSICS", label: "PHYSICS" },
  ];

  const phddepartmentOptions = [];

  const getDepartmentOptions = (course) => {
    switch (course) {
      case "B.Tech": return btechdepartmentOptions;
      case "M.Tech": return mtechdepartmentOptions;
      case "MBA": return mbadepartmentOptions;
      case "M.Sc.": return mscdepartmentOptions;
      case "PHD": return phddepartmentOptions;
      default: return [];
    }
  };

  const jobTypeOptions = [
    { value: "Intern", label: "Internship" },
    { value: "Intern+PPO", label: "Intern + Pre Placement Offer(PPO)" },
    { value: "Intern+FTE", label: "Intern + Full-Time Employment(FTE)" },
    { value: "FTE", label: "Full-Time Employment(FTE)" },
  ];

  const internshipDurationOptions = [
    { value: "2m Intern", label: "2-Month Internship" },
    { value: "6m Intern", label: "6-Month Internship" },
    { value: "11m Intern", label: "11-Month Internship" },
    { value: "N/A", label: "Not Applicable" },
  ];

  const jobCategoryOptions = [
    { value: "Tech", label: "Tech" },
    { value: "Non-Tech", label: "Non-Tech" },
    { value: "Tech+Non-Tech", label: "Tech + Non-Tech" },
  ];

  const jobSectorOptions = [
    { value: "PSU", label: "PSU" },
    { value: "Private", label: "Private" },
  ];



  const handleEdit = (section, index = null) => {
    setEditingSection(section);
    setEditingStepIndex(index);
    if (section === "eligibility") {
      setEditingCriteriaIndex(index !== null ? index : currentCriteriaIndex);
    }
  };

  const handleCancel = () => {
    setEditedJob({
      ...job,
      eligibility_criteria: job.eligibility_criteria || [],
      job_salary: { ...job.job_salary, stipend: job.job_salary?.stipend || "0" },
      job_sector: job.job_sector || "Private"
    });
    setEditedWorkflow(job.Hiring_Workflow || []);
    setEditingSection(null);
    setEditingStepIndex(null);
    setEditingCriteriaIndex(null);
  };

  const handleAddCriteria = () => {
    setEditedJob({
      ...editedJob,
      eligibility_criteria: [
        ...editedJob.eligibility_criteria,
        {
          department_allowed: [],
          gender_allowed: "Any",
          course_allowed: "",
          eligible_batch: "",
          minimum_cgpa: 0,
          active_backlogs: false,
          history_backlogs: false
        }
      ]
    });
    setCurrentCriteriaIndex(editedJob.eligibility_criteria.length);
    handleEdit("eligibility", editedJob.eligibility_criteria.length);
  };

  const handleDeleteCriteria = async (index) => {
    Swal.fire({
      title: "Delete Eligibility Criteria",
      text: "This action cannot be undone. Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const newCriteria = [...editedJob.eligibility_criteria];
          newCriteria.splice(index, 1);
          
          const response = await axios.put(
            `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/updatejob/${job._id}`,
            { eligibility_criteria: newCriteria },
            { withCredentials: true }
          );

          if (response.data.success) {
            setEditedJob({
              ...editedJob,
              eligibility_criteria: newCriteria
            });
            setCurrentCriteriaIndex(Math.max(0, currentCriteriaIndex - 1));
            toast.success("Criteria deleted successfully");
          } else {
            throw new Error("Failed to update database");
          }
        } catch (error) {
          console.error("Error deleting criteria:", error);
          toast.error("Failed to delete criteria");
        }
      }
    });
  };

  const handleSave = async (section) => {
    try {
      let updateData = {};
      if (section === "hiring_workflow") {
        updateData = { Hiring_Workflow: editedWorkflow };
      } else if (section === "eligibility") {
        updateData = { eligibility_criteria: editedJob.eligibility_criteria };
      } else if (section === "salary") {
        updateData = {
          job_salary: {
            ctc: editedJob.job_salary.ctc,
            base_salary: editedJob.job_salary.base_salary,
            stipend: editedJob.job_salary.stipend
          }
        };
      } else if (section === "basic") {
        updateData = {
          company_name: editedJob.company_name,
          job_id: editedJob.job_id,
          job_role: editedJob.job_role,
          job_type: editedJob.job_type,
          internship_duration: editedJob.internship_duration,
          jobdescription: editedJob.jobdescription,
          joblocation: editedJob.joblocation,
          job_category: editedJob.job_category,
          job_class: editedJob.job_class,
          job_sector: editedJob.job_sector,
          deadline: editedJob.deadline,
        };
      }
      const response = await axios.put(
        `${import.meta.env.REACT_APP_BASE_URL}/jobprofile/updatejob/${job._id}`,
        updateData,
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success("Job updated successfully!");
        Object.assign(job, editedJob);
        setEditingSection(null);
        setEditingStepIndex(null);
        setEditingCriteriaIndex(null);
      }
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Failed to update job");
    }
  };

  const handleInputChange = (section, field, value, criteriaIndex = null) => {
    if (section === "hiring_workflow") {
      const updatedWorkflow = [...editedWorkflow];
      const [fieldPath, ...subFields] = field.split(".");

      if (subFields.length > 0) {
        updatedWorkflow[editingStepIndex].details[subFields.join(".")] = value;
      } else {
        updatedWorkflow[editingStepIndex][fieldPath] = value;
      }
      setEditedWorkflow(updatedWorkflow);
    } else if (section === "eligibility" && criteriaIndex !== null) {
      const updatedCriteria = [...editedJob.eligibility_criteria];
      updatedCriteria[criteriaIndex][field] = value;
      setEditedJob({ ...editedJob, eligibility_criteria: updatedCriteria });
    } else {
      const updatedJob = { ...editedJob };
      const fieldPath = field.split(".");
      let current = updatedJob;

      for (let i = 0; i < fieldPath.length - 1; i++) {
        if (!current[fieldPath[i]]) {
          current[fieldPath[i]] = {};
        }
        current = current[fieldPath[i]];
      }
      current[fieldPath[fieldPath.length - 1]] = value;
      setEditedJob(updatedJob);
    }
  };

  const renderBasicDetails = () => {
    return (
      <div className="space-y-4 text-gray-700">
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Company Name:</strong>
          {editingSection === "basic" ? (
            <input
              type="text"
              value={editedJob.company_name || ""}
              onChange={(e) => handleInputChange("basic", "company_name", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <span className="flex-1">{editedJob.company_name}</span>
          )}
        </div>
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Job Id:</strong>
          {editingSection === "basic" ? (
            <input
              type="text"
              value={editedJob.job_id || ""}
              onChange={(e) => handleInputChange("basic", "job_id", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <span className="flex-1">{editedJob.job_id}</span>
          )}
        </div>
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Job Role:</strong>
          {editingSection === "basic" ? (
            <input
              type="text"
              value={editedJob.job_role || ""}
              onChange={(e) => handleInputChange("basic", "job_role", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <span className="flex-1">{editedJob.job_role}</span>
          )}
        </div>
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Job Type:</strong>
          {editingSection === "basic" ? (
            <select
              value={editedJob.job_type || ""}
              onChange={(e) => {
                handleInputChange("basic", "job_type", e.target.value);
                if (e.target.value === "FTE") {
                  handleInputChange("basic", "internship_duration", "N/A");
                  handleInputChange("salary", "job_salary.stipend", "0");
                }
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {jobTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <span className="flex-1">{editedJob.job_type}</span>
          )}
        </div>
        {["Intern", "Intern+PPO", "Intern+FTE"].includes(editedJob.job_type) && (
          <div className="flex items-center">
            <strong className="w-1/3 text-gray-800">Internship Duration:</strong>
            {editingSection === "basic" ? (
              <select
                value={editedJob.internship_duration || ""}
                onChange={(e) => handleInputChange("basic", "internship_duration", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Duration</option>
                {internshipDurationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <span className="flex-1">{editedJob.internship_duration || "N/A"}</span>
            )}
          </div>
        )}
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Job Category:</strong>
          {editingSection === "basic" ? (
            <select
              value={editedJob.job_category || ""}
              onChange={(e) => handleInputChange("basic", "job_category", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {jobCategoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <span className="flex-1">{editedJob.job_category}</span>
          )}
        </div>
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Job Sector:</strong>
          {editingSection === "basic" ? (
            <select
              value={editedJob.job_sector || "Private"}
              onChange={(e) => handleInputChange("basic", "job_sector", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {jobSectorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <span className="flex-1">{editedJob.job_sector || "Private"}</span>
          )}
        </div>
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Location:</strong>
          {editingSection === "basic" ? (
            <input
              type="text"
              value={editedJob.joblocation || ""}
              onChange={(e) => handleInputChange("basic", "joblocation", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <span className="flex-1">{editedJob.joblocation}</span>
          )}
        </div>
        <div className="flex items-start">
          <strong className="w-1/3 text-gray-800">Description:</strong>
          {editingSection === "basic" ? (
            <div className="flex-1">
              <ReactQuill
                value={editedJob.jobdescription || ""}
                onChange={(value) => handleInputChange("basic", "jobdescription", value)}
                className="border border-gray-300 rounded-lg"
                theme="snow"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link"],
                    ["clean"],
                  ],
                }}
              />
            </div>
          ) : (
            <div className="flex-1" dangerouslySetInnerHTML={{ __html: editedJob.jobdescription || "" }} />
          )}
        </div>
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Deadline:</strong>
          {editingSection === "basic" ? (
            <input
              type="datetime-local"
              value={editedJob.deadline ? new Date(editedJob.deadline).toISOString().slice(0, 16) : ""}
              onChange={(e) => handleInputChange("basic", "deadline", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <span className="flex-1">{formatDateTime(editedJob.deadline)}</span>
          )}
        </div>
      </div>
    );
  };

  const renderSalaryDetails = () => {
    return (
      <div className="space-y-4 text-gray-700">
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">CTC:</strong>
          {editingSection === "salary" ? (
            <input
              type="text"
              value={editedJob.job_salary?.ctc || ""}
              onChange={(e) => handleInputChange("salary", "job_salary.ctc", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <span className="flex-1">{editedJob.job_salary?.ctc || "N/A"}</span>
          )}
        </div>
        <div className="flex items-center">
          <strong className="w-1/3 text-gray-800">Base Salary:</strong>
          {editingSection === "salary" ? (
            <input
              type="text"
              value={editedJob.job_salary?.base_salary || ""}
              onChange={(e) => handleInputChange("salary", "job_salary.base_salary", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ) : (
            <span className="flex-1">{editedJob.job_salary?.base_salary || "N/A"}</span>
          )}
        </div>
        {["Intern", "Intern+PPO", "Intern+FTE"].includes(editedJob.job_type) && (
          <div className="flex items-center">
            <strong className="w-1/3 text-gray-800">Stipend (in Thousands per month):</strong>
            {editingSection === "salary" ? (
              <input
                type="text"
                value={editedJob.job_salary?.stipend || ""}
                onChange={(e) => handleInputChange("salary", "job_salary.stipend", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <span className="flex-1">{editedJob.job_salary?.stipend || "N/A"}</span>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderEligibilityCriteria = () => {
    const criteria = editedJob.eligibility_criteria[currentCriteriaIndex] || {};
    return (
      <div className="space-y-4 text-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {editedJob.eligibility_criteria.length > 0 && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentCriteriaIndex(Math.max(0, currentCriteriaIndex - 1))}
                  disabled={currentCriteriaIndex === 0}
                  className="p-2 bg-gray-200 rounded-full disabled:opacity-50 hover:bg-gray-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm font-medium">
                  {currentCriteriaIndex + 1} of {editedJob.eligibility_criteria.length}
                </span>
                <button
                  onClick={() => setCurrentCriteriaIndex(Math.min(editedJob.eligibility_criteria.length - 1, currentCriteriaIndex + 1))}
                  disabled={currentCriteriaIndex === editedJob.eligibility_criteria.length - 1}
                  className="p-2 bg-gray-200 rounded-full disabled:opacity-50 hover:bg-gray-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
            {editingAllowed && (
              <>
                <button
                  onClick={handleAddCriteria}
                  className="border border-green-600 text-green-600 hover:text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center"
                >
                  <Plus className="h-5 w-5" />
                </button>
                {editedJob.eligibility_criteria.length > 0 && (
                  <button
                    onClick={() => handleDeleteCriteria(currentCriteriaIndex)}
                    className="text-red-600 hover:text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        {editedJob.eligibility_criteria.length === 0 ? (
          <p className="text-gray-500">No eligibility criteria defined. Click 'Add' to create one.</p>
        ) : (
          <>
            <div className="flex items-center">
              <strong className="w-1/3 text-gray-800">Eligible Batch:</strong>
              {editingSection === "eligibility" && editingCriteriaIndex === currentCriteriaIndex && editingAllowed ? (
                <select
                  value={criteria.eligible_batch || ""}
                  onChange={(e) => handleInputChange("eligibility", "eligible_batch", e.target.value, currentCriteriaIndex)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Batch</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              ) : (
                <span className="flex-1">{criteria.eligible_batch || "N/A"}</span>
              )}
            </div>
            <div className="flex items-center">
              <strong className="w-1/3 text-gray-800">Course Allowed:</strong>
              {editingSection === "eligibility" && editingCriteriaIndex === currentCriteriaIndex && editingAllowed ? (
                <select
                  value={criteria.course_allowed || ""}
                  onChange={(e) => handleInputChange("eligibility", "course_allowed", e.target.value, currentCriteriaIndex)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="M.Sc.">M.Sc.</option>
                  <option value="PHD">PHD</option>
                </select>
              ) : (
                <span className="flex-1">{criteria.course_allowed || "N/A"}</span>
              )}
            </div>
            <div className="flex items-center">
              <strong className="w-1/3 text-gray-800">Departments Allowed:</strong>
              {editingSection === "eligibility" && editingCriteriaIndex === currentCriteriaIndex && editingAllowed ? (
                <div className="flex-1">
                  <Select
                    isMulti
                    options={getDepartmentOptions(criteria.course_allowed)}
                    value={
                      criteria.course_allowed === "B.Tech" || criteria.course_allowed === "M.Tech"
                        ? getDepartmentOptions(criteria.course_allowed)
                            .flatMap((group) => group.options)
                            .filter((option) => criteria.department_allowed?.includes(option.value))
                        : getDepartmentOptions(criteria.course_allowed).filter((option) =>
                            criteria.department_allowed?.includes(option.value)
                          )
                    }
                    onChange={(selectedOptions) => {
                      const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
                      handleInputChange("eligibility", "department_allowed", selectedValues, currentCriteriaIndex);
                    }}
                    isDisabled={!criteria.course_allowed}
                    className="w-full border-2 p-1.5 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>
              ) : (
                <span className="flex-1">{criteria.department_allowed?.join(", ") || "N/A"}</span>
              )}
            </div>
            <div className="flex items-center">
              <strong className="w-1/3 text-gray-800">Gender Allowed:</strong>
              {editingSection === "eligibility" && editingCriteriaIndex === currentCriteriaIndex && editingAllowed ? (
                <select
                  value={criteria.gender_allowed || ""}
                  onChange={(e) => handleInputChange("eligibility", "gender_allowed", e.target.value, currentCriteriaIndex)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Any">All</option>
                </select>
              ) : (
                <span className="flex-1">{criteria.gender_allowed || "N/A"}</span>
              )}
            </div>
            <div className="flex items-center">
              <strong className="w-1/3 text-gray-800">Active Backlogs Allowed:</strong>
              {editingSection === "eligibility" && editingCriteriaIndex === currentCriteriaIndex && editingAllowed ? (
                <input
                  type="checkbox"
                  checked={criteria.active_backlogs || false}
                  onChange={(e) => handleInputChange("eligibility", "active_backlogs", e.target.checked, currentCriteriaIndex)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              ) : (
                <span className="flex-1">{criteria.active_backlogs ? "Yes" : "No"}</span>
              )}
            </div>
            <div className="flex items-center">
              <strong className="w-1/3 text-gray-800">Backlogs History Allowed:</strong>
              {editingSection === "eligibility" && editingCriteriaIndex === currentCriteriaIndex && editingAllowed ? (
                <input
                  type="checkbox"
                  checked={criteria.history_backlogs || false}
                  onChange={(e) => handleInputChange("eligibility", "history_backlogs", e.target.checked, currentCriteriaIndex)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              ) : (
                <span className="flex-1">{criteria.history_backlogs ? "Yes" : "No"}</span>
              )}
            </div>
            <div className="flex items-center">
              <strong className="w-1/3 text-gray-800">Minimum CGPA:</strong>
              {editingSection === "eligibility" && editingCriteriaIndex === currentCriteriaIndex && editingAllowed ? (
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={criteria.minimum_cgpa || ""}
                  onChange={(e) => handleInputChange("eligibility", "minimum_cgpa", e.target.value, currentCriteriaIndex)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <span className="flex-1">{criteria.minimum_cgpa || "N/A"}</span>
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  const renderEditableCard = (title, content, section) => (
    <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative mt-8">
      {editingAllowed && (
        <button
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-blue-600 transition-colors"
          onClick={() => handleEdit(section)}
        >
          <Pencil size={20} />
        </button>
      )}
      <h3 className="text-2xl font-semibold text-custom-blue mb-6">{title}</h3>
      {content}
      {editingSection === section && editingAllowed && (
        <div className="mt-8 flex space-x-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
            onClick={() => handleSave(section)}
          >
            Save
          </button>
          <button
            className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );

  const renderHiringWorkflow = () => {
    if (!job.Hiring_Workflow || job.Hiring_Workflow.length === 0) {
      return <p className="mt-4 text-gray-500">No hiring workflow defined.</p>;
    }
    return (
      <div className="mt-8 space-y-8">
        {job.Hiring_Workflow.map((step, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            {editingAllowed && (
              <button
                className="absolute top-4 right-4 p-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => handleEdit("hiring_workflow", index)}
              >
                <Pencil size={20} />
              </button>
            )}
            <h3 className="text-2xl font-semibold text-custom-blue mb-6">{step.step_type} Step</h3>
            <ul className="space-y-4 text-gray-700">
              {Object.entries(step.details || {}).map(([key, value]) => {
                if (
                  (step.step_type === "Interview" && key.toLowerCase().includes("interview_link")) ||
                  (step.step_type === "GD" && key.toLowerCase().includes("gd_link")) ||
                  (step.step_type === "OA" && key.toLowerCase().includes("oa_link")) ||
                  (step.step_type === "Others" && key.toLowerCase().includes("others_link"))
                ) {
                  return null;
                }
                return (
                  <li key={key} className="flex items-center">
                    <strong className="w-1/3 text-gray-800 capitalize">{key.replace(/_/g, " ")}:</strong>
                    {editingStepIndex === index && editingSection === "hiring_workflow" && editingAllowed ? (
                      key.toLowerCase().includes("date") ? (
                        <input
                          type="date"
                          value={
                            editedWorkflow[index].details[key]
                              ? new Date(editedWorkflow[index].details[key]).toISOString().slice(0, 10)
                              : ""
                          }
                          onChange={(e) => handleInputChange("hiring_workflow", `details.${key}`, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      ) : (
                        <input
                          type="text"
                          value={editedWorkflow[index].details[key] || ""}
                          onChange={(e) => handleInputChange("hiring_workflow", `details.${key}`, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      )
                    ) : (
                      <span className="flex-1">
                        {key.toLowerCase().includes("date") ? formatDate(value) : value || "N/A"}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
              {step.step_type === "Others" && (
                <button
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={() => setAddingOthersLink({ stepIndex: index, type: "Others" })}
                >
                  Manage Other Assessment Links
                </button>
              )}
              {step.step_type === "OA" && (
                <button
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={() => setAddingOALink({ stepIndex: index, type: "OA" })}
                >
                  Manage OA Links
                </button>
              )}
              {step.step_type === "GD" && (
                <button
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={() => setAddingGDLink({ stepIndex: index, type: "GD" })}
                >
                  Manage GD Links
                </button>
              )}
              {step.step_type === "Interview" && (
                <button
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={() => setAddingInterviewLink({ stepIndex: index, type: "Interview" })}
                >
                  Manage Interview Links
                </button>
              )}
              {editingAllowed && (
                <button
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-2xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={() => setAddingShortlist({ stepIndex: index })}
                >
                  Add Shortlisted Students
                </button>
              )}
              <button
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-2xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                onClick={() => setViewingShortlist({ stepIndex: index })}
              >
                View Shortlisted Students
              </button>
              {editingStepIndex === index && editingSection === "hiring_workflow" && editingAllowed && (
                <>
                  <button
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                    onClick={() => handleSave("hiring_workflow")}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-2xl hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (selectedJobForForm) {
    return (
      <div className="container mx-auto px-4 py-6">
        <CreateApplicationform
          jobId={selectedJobForForm}
          onClose={() => setSelectedJobForForm(null)}
          onSubmit={() => setApplicationFormexist(true)}
        />
      </div>
    );
  }

  if (viewingApplicationForm) {
    return (
      <div className="container mx-auto px-4 py-6">
        <ViewApplicationForm
          jobId={job._id}
          onHide={() => setViewingApplicationForm(false)}
        />
      </div>
    );
  }

  if (editingApplicationForm) {
    return (
      <div className="container mx-auto px-4 py-6">
        <EditApplicationForm
          jobId={job._id}
          onClose={() => setEditingApplicationForm(false)}
        />
      </div>
    );
  }

  if (addingOthersLink) {
    return (
      <OthersLinkManager
        jobId={job._id}
        stepIndex={addingOthersLink.stepIndex}
        onClose={() => setAddingOthersLink(null)}
        othersLinks={job.Hiring_Workflow[addingOthersLink.stepIndex]?.details.others_link || []}
        onUpdateLinks={(updatedLinks) => {
          const updatedWorkflow = [...job.Hiring_Workflow];
          updatedWorkflow[addingOthersLink.stepIndex].details.others_link = updatedLinks;
          setEditedWorkflow(updatedWorkflow);
        }}
      />
    );
  }

  if (addingOALink) {
    return (
      <OaLinkManager
        jobId={job._id}
        stepIndex={addingOALink.stepIndex}
        onClose={() => setAddingOALink(null)}
        oaLinks={job.Hiring_Workflow[addingOALink.stepIndex]?.details.oa_link || []}
        onUpdateLinks={(updatedLinks) => {
          const updatedWorkflow = [...job.Hiring_Workflow];
          updatedWorkflow[addingOALink.stepIndex].details.oa_link = updatedLinks;
          setEditedWorkflow(updatedWorkflow);
        }}
      />
    );
  }

  if (addingInterviewLink) {
    return (
      <InterviewLinkManager
        jobId={job._id}
        stepIndex={addingInterviewLink.stepIndex}
        onClose={() => setAddingInterviewLink(null)}
        interviewLinks={job.Hiring_Workflow[addingInterviewLink.stepIndex]?.details.interview_link || []}
        onUpdateLinks={(updatedLinks) => {
          const updatedWorkflow = [...job.Hiring_Workflow];
          updatedWorkflow[addingInterviewLink.stepIndex].details.interview_link = updatedLinks;
          setEditedWorkflow(updatedWorkflow);
        }}
      />
    );
  }

  if (addingGDLink) {
    return (
      <GDLinkManager
        jobId={job._id}
        stepIndex={addingGDLink.stepIndex}
        onClose={() => setAddingGDLink(null)}
        gdLinks={job.Hiring_Workflow[addingGDLink.stepIndex]?.details.gd_link || []}
        onUpdateLinks={(updatedLinks) => {
          const updatedWorkflow = [...job.Hiring_Workflow];
          updatedWorkflow[addingGDLink.stepIndex].details.gd_link = updatedLinks;
          setEditedWorkflow(updatedWorkflow);
        }}
      />
    );
  }

  if (addingShortlist) {
    return (
      <ShortlistStudents
        jobId={job._id}
        stepIndex={addingShortlist.stepIndex}
        onClose={() => setAddingShortlist(null)}
      />
    );
  }

  if (viewingShortlist) {
    return (
      <ViewShortlistStudents
        jobId={job._id}
        stepIndex={viewingShortlist.stepIndex}
        onClose={() => setViewingShortlist(null)}
      />
    );
  }

  if (viewingAppliedStudents) {
    return (
      <AppliedStudents
        jobId={job._id}
        company_name={editedJob.company_name}
        onClose={() => setViewingAppliedStudents(false)}
      />
    );
  }

  return (
    <>
      <div className="mt-2 ml-4">
        <button className="flex items-center text-blue-600 hover:text-blue-800" onClick={onClose}>
          <FaArrowLeft className="mr-2" />
        </button>
      </div>
      <div className="bg-white sm:p-10 p-4 rounded-3xl shadow-2xl max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-custom-blue">Job Details</h2>
          <div className="flex items-center space-x-4">
            <button
              className="bg-gradient-to-r from-[#0369A0] to-[#024873] text-white p-3 sm:px-8 sm:py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              onClick={() => setViewingAppliedStudents(true)}
            >
              <Users className="mr-2 h-4 w-4 inline" />
              View Applied Students
            </button>
          </div>
        </div>
        {renderEditableCard("Basic Details", renderBasicDetails(), "basic")}
        {renderEditableCard("Salary Details", renderSalaryDetails(), "salary")}
        {renderEditableCard("Eligibility Criteria", renderEligibilityCriteria(), "eligibility")}
        <h3 className="text-3xl font-bold text-custom-blue mt-10 mb-8">Hiring Workflow</h3>
        {renderHiringWorkflow()}
        {/* <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative mt-8">
          <h3 className="text-2xl font-semibold text-custom-blue mb-6">Application Form</h3>
          {applicationFormexist ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl"
                onClick={() => setViewingApplicationForm(true)}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Form
              </button>
              <button
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-2xl"
                onClick={() => setEditingApplicationForm(true)}
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit Form
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-2xl"
                onClick={handleDeleteForm}
                disabled={isDeleting}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {isDeleting ? "Deleting..." : "Delete Form"}
              </button>
            </div>
          ) : (
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl"
              onClick={() => setSelectedJobForForm(job._id)}
            >
              <Plus className="mr-2 h-4 w-4 text-white" />
              Create Application Form
            </button>
          )}
        </div> */}
      </div>
    </>
  );
};

export default ViewJobDetails;