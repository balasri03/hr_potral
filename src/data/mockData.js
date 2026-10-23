export const initialEmployees = [
  { id:'EMP-1042', name:'Olivia Rhys', role:'Product Designer', department:'Design', email:'olivia.rhys@mhktech.com', status:'Active', location:'Hyderabad', joined:'2023-03-12', manager:'Maya Patel', salary:98000 },
  { id:'EMP-1041', name:'Noah Williams', role:'Senior Engineer', department:'Engineering', email:'noah.williams@mhktech.com', status:'Active', location:'Bengaluru', joined:'2022-08-21', manager:'Arjun Rao', salary:124000 },
  { id:'EMP-1040', name:'Ava Chen', role:'People Partner', department:'Human Resources', email:'ava.chen@mhktech.com', status:'On leave', location:'Hyderabad', joined:'2021-11-05', manager:'Maya Patel', salary:92000 },
  { id:'EMP-1039', name:'Liam Johnson', role:'Finance Analyst', department:'Finance', email:'liam.johnson@mhktech.com', status:'Active', location:'Pune', joined:'2024-01-15', manager:'Priya Shah', salary:76000 },
  { id:'EMP-1038', name:'Amara Okafor', role:'Talent Partner', department:'Human Resources', email:'amara.okafor@mhktech.com', status:'Active', location:'Hyderabad', joined:'2023-06-02', manager:'Ava Chen', salary:81000 },
  { id:'EMP-1037', name:'Ethan Miller', role:'Marketing Lead', department:'Marketing', email:'ethan.miller@mhktech.com', status:'Active', location:'Remote', joined:'2020-09-17', manager:'Maya Patel', salary:105000 },
  { id:'EMP-1036', name:'Sofia Martinez', role:'QA Engineer', department:'Engineering', email:'sofia.martinez@mhktech.com', status:'Active', location:'Bengaluru', joined:'2024-02-19', manager:'Arjun Rao', salary:72000 },
]
export const initialLeave = [
  { id:'LV-208', name:'Olivia Rhys', type:'Annual leave', dates:'Oct 28 – Oct 30', days:3, status:'Pending' },
  { id:'LV-207', name:'Noah Williams', type:'Personal leave', dates:'Nov 04', days:1, status:'Pending' },
  { id:'LV-206', name:'Liam Johnson', type:'Annual leave', dates:'Oct 21 – Oct 22', days:2, status:'Approved' },
  { id:'LV-205', name:'Sofia Martinez', type:'Sick leave', dates:'Oct 17', days:1, status:'Approved' },
]
export const initialCandidates = [
 {name:'Priya Nair', role:'Frontend Engineer', stage:'Interview', date:'Oct 24', source:'Referral'},
 {name:'Daniel Kim', role:'People Operations Associate', stage:'Screening', date:'Oct 25', source:'LinkedIn'},
 {name:'Zara Ali', role:'Product Designer', stage:'Offer', date:'Oct 28', source:'Careers page'},
]
export const navByRole = {
 Admin: [
  ['Overview','/admin','layout-dashboard'], ['People','/admin/people','users'], ['User access','/admin/users','shield-check'], ['Roles & permissions','/admin/roles','key-round'], ['Departments','/admin/departments','network'], ['Organization','/admin/organization','git-branch'], ['Payroll overview','/admin/payroll','wallet'], ['Reports & analytics','/admin/reports','chart-no-axes-combined'], ['Audit log','/admin/audit','scroll-text'], ['Approvals','/admin/approvals','clipboard-check'], ['Company settings','/admin/settings','settings']
 ],
 HR: [
  ['Overview','/hr','layout-dashboard'], ['People directory','/hr/people','users'], ['Recruitment','/hr/recruitment','user-round-search'], ['Onboarding','/hr/onboarding','clipboard-list'], ['Offboarding','/hr/offboarding','log-out'], ['Attendance','/hr/attendance','calendar-check'], ['Leave & approvals','/hr/leave','calendar-days'], ['Payroll','/hr/payroll','wallet'], ['Benefits','/hr/benefits','heart-pulse'], ['Performance','/hr/performance','trending-up'], ['Learning','/hr/learning','graduation-cap'], ['Documents','/hr/documents','files'], ['Helpdesk','/hr/helpdesk','messages-square'], ['HR reports','/hr/reports','chart-no-axes-combined']
 ],
 Employee: [
  ['My home','/employee','layout-dashboard'], ['My profile','/employee/profile','contact-round'], ['Attendance','/employee/attendance','calendar-check'], ['Leave','/employee/leave','calendar-days'], ['Payslips','/employee/payslips','wallet'], ['Benefits','/employee/benefits','heart-pulse'], ['Expenses','/employee/expenses','receipt'], ['Performance','/employee/performance','trending-up'], ['Learning','/employee/learning','graduation-cap'], ['Company assets','/employee/assets','laptop'], ['Travel','/employee/travel','plane'], ['Documents','/employee/documents','files'], ['Announcements','/employee/announcements','megaphone'], ['Support','/employee/support','messages-square']
 ]
}
