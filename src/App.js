import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Swdetails from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Swdetails';
import Signupfifthstep from './Components/usermanagement/staffsupportworker/supportworker/Swsaccount/Signupfifthsetup';
import Signupfirststep from './Components/usermanagement/staffsupportworker/supportworker/Swsaccount/Signupfirststep';
import Signupfurthsetup from './Components/usermanagement/staffsupportworker/supportworker/Swsaccount/Signupfurthsetup';
import Signupsecoundstep from './Components/usermanagement/staffsupportworker/supportworker/Swsaccount/Signupsecoundstep';
import Signupthirdsetup from './Components/usermanagement/staffsupportworker/supportworker/Swsaccount/Signupthirdsetup';
import Editbankdetails from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Payroll/editbankdetails'
import Viewall from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Availability/Viewall';
import AddTask from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Appointment/Table/AddTask';
import Addhourly from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Appointment/Table/Addhourly';
import AddhourlyTask from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Appointment/Table/AddhourlyTask';
import AddAppointment from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Appointment/Addappointment';
import Editappointment from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Appointment/Editappointment';
import ScselfSignupstep1 from './Components/usermanagement/supportcoordinator/Scsaccount/ScselfSignupstep1';
import ScselfSignupstep2 from './Components/usermanagement/supportcoordinator/Scsaccount/ScselfSignupstep2';
import SCDetails from './Components/usermanagement/supportcoordinator/ScDetails/SCdetails'
import Addscnotes from './Components/usermanagement/supportcoordinator/ScDetails/Notes/addnote'
import Editscnotes from './Components/usermanagement/supportcoordinator/ScDetails/Notes/editnote'
import Addsctask from './Components/usermanagement/supportcoordinator/ScDetails/Task/Addtask'
import Editsctask from './Components/usermanagement/supportcoordinator/ScDetails/Task/Edittask'
import Viewsctask from './Components/usermanagement/supportcoordinator/ScDetails/Task/viewtask'
import AddNotes from "./Components/usermanagement/staffsupportworker/supportworker/SWDetails/Notes/addnote"
import EditNotes from "./Components/usermanagement/staffsupportworker/supportworker/SWDetails/Notes/editnote"
import ViewNotes from "./Components/usermanagement/staffsupportworker/supportworker/SWDetails/Notes/Viewnote"
import Addtask2 from "./Components/usermanagement/staffsupportworker/supportworker/SWDetails/Task/Addtask"
import Edittask2 from "./Components/usermanagement/staffsupportworker/supportworker/SWDetails/Task/Edittask"
import Viewtask2 from "./Components/usermanagement/staffsupportworker/supportworker/SWDetails/Task/viewtask"

import SignIn from './Components/Registration/SignIn';
import Dashboard from './Components/Dashboard/Dashboard'
import Forgotpassword from './Components/Registration/forgotpassword'
import Resetpassword from './Components/Registration/resetpassword'
import Viewtask from './Components/Dashboard/Task/viewtask'
import Taskcard from './Components/Dashboard/taskcard'
import Quicktask from './Components/Dashboard/quicktask'
import SearchClient from './Components/Search/tab'
import StaffWorker from './Components/usermanagement/staffsupportworker/tab'
import Oncall from './Components/usermanagement/staffsupportworker/oncall/oncall'
import Addnew from './Components/usermanagement/staffsupportworker/oncall/addnew'
import Details from './Components/usermanagement/staffsupportworker/newrequest/viewdetails'
import ScheduleInterview from './Components/usermanagement/staffsupportworker/newrequest/scheduleinterview'
import Email from './Components/usermanagement/staffsupportworker/supportworker/email'
import AddSW from './Components/usermanagement/staffsupportworker/supportworker/addsw'
import TimesheetTable from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/Timesheet/TimesheetTable'
import ClientDetails from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/client/clientdetails'
import AddIncident from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/incidents/addincident';
import EditIncident from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/incidents/edit';
import ViewIncident from './Components/usermanagement/staffsupportworker/supportworker/SWDetails/incidents/view';
import AddSWemergencycontact from "./Components/usermanagement/staffsupportworker/supportworker/SWDetails/Emergencycontacts/addcontact"
import EditSWemergencycontact from "./Components/usermanagement/staffsupportworker/supportworker/SWDetails/Emergencycontacts/editcontact"


// support Coordinator
import SupportCoordinator from './Components/usermanagement/supportcoordinator/tab'
import ViewDetails from './Components/usermanagement/supportcoordinator/newrequest/viewdetails'
import SCScheduleInterview from './Components/usermanagement/supportcoordinator/newrequest/scheduleinterview'
import AddSC from './Components/usermanagement/supportcoordinator/supportcoordinator/addsc'
import SCEmail from './Components/usermanagement/supportcoordinator/supportcoordinator/email'
import Addhourly1 from "./Components/usermanagement/supportcoordinator/ScDetails/Task/Addhourly"
import Addhourly2 from './Components/usermanagement/supportcoordinator/ScDetails/Task/Addhourly1'
import AddhourlyTask3 from './Components/usermanagement/supportcoordinator/ScDetails/Task/AddhourlyTask'
import ScaddIncident from './Components/usermanagement/supportcoordinator/ScDetails/incidents/addincident';
import SceditIncident from './Components/usermanagement/supportcoordinator/ScDetails/incidents/edit';
import ScviewIncident from './Components/usermanagement/supportcoordinator/ScDetails/incidents/view';
import ScclientDetails from './Components/usermanagement/supportcoordinator/ScDetails/client/clientdetails'
import Addplanmanager from "./Components/usermanagement/supportcoordinator/ScDetails/Planmanager/AddPlanManager"
import Editplanmanager from "./Components/usermanagement/supportcoordinator/ScDetails/Planmanager/Edit"
import Addemergencycontact from "./Components/usermanagement/supportcoordinator/ScDetails/Emergencycontacts/Addcontact"
import Editemergencycontact from "./Components/usermanagement/supportcoordinator/ScDetails/Emergencycontacts/Editcontact"

// clientManagement
import Client from './Components/usermanagement/Clientmanagement/tab'
import ViewEvalutionDetails from './Components/usermanagement/Clientmanagement/Evalution/viewevalutiondetails'
import ScheduleMeeting from './Components/usermanagement/Clientmanagement/Evalution/schedulemeeting'
import Addclient from './Components/usermanagement/Clientmanagement/Clientaccount/Addclient'
import Accountsetup1 from './Components/usermanagement/Clientmanagement/Clientaccount/Accountsetup1'
import Accountsetup2 from './Components/usermanagement/Clientmanagement/Clientaccount/Accountsetup2'
import Accountsetup3 from './Components/usermanagement/Clientmanagement/Clientaccount/Accountsetup3'
import Accountsetup4 from './Components/usermanagement/Clientmanagement/Clientaccount/Accountsetup4'
import Accountsetup5 from './Components/usermanagement/Clientmanagement/Clientaccount/Accountsetup5'
import Clientdetails from "./Components/usermanagement/Clientmanagement/ClientDetails/Clientdetails"
import Invoicedetails from "./Components/usermanagement/Clientmanagement/ClientDetails/Invoices/Invoicedetails"
import Invoicesviewall from "./Components/usermanagement/Clientmanagement/ClientDetails/Invoices/Viewall"
import Clienteditbankdetails from "./Components/usermanagement/Clientmanagement/ClientDetails/Invoices/Editbankdetails"
import Appointmentdetails from "./Components/usermanagement/Clientmanagement/ClientDetails/Appointment/Appointmentdetails"
import Addfunding from "./Components/usermanagement/Clientmanagement/ClientDetails/Funding/addfunding"
import Addmedicalhistory from "./Components/usermanagement/Clientmanagement/ClientDetails/Mediacalhistory/add"
import Editmedicalhistory from "./Components/usermanagement/Clientmanagement/ClientDetails/Mediacalhistory/edit"
import Viewmedicalhistory from "./Components/usermanagement/Clientmanagement/ClientDetails/Mediacalhistory/view"

import Addgoal from "./Components/usermanagement/Clientmanagement/ClientDetails/Goal/addgoal"
import Goaladdtask from "./Components/usermanagement/Clientmanagement/ClientDetails/Goal/addtask"
import Goaladdhourlytask from "./Components/usermanagement/Clientmanagement/ClientDetails/Goal/addhourlytask"
import Goaladdhourly from "./Components/usermanagement/Clientmanagement/ClientDetails/Goal/Addhourly"
import Addclientnotes from "./Components/usermanagement/Clientmanagement/ClientDetails/Notes/addnote"
import Editclientnotes from "./Components/usermanagement/Clientmanagement/ClientDetails/Notes/Editnote"
import Viewclientnotes from "./Components/usermanagement/Clientmanagement/ClientDetails/Notes/Viewnote"

import ClientaddTask from "./Components/usermanagement/Clientmanagement/ClientDetails/Task/Addtask"
import ClienteditTask from "./Components/usermanagement/Clientmanagement/ClientDetails/Task/Edittask"
import ClientviewTask from "./Components/usermanagement/Clientmanagement/ClientDetails/Task/Viewtask"

import Addprogressnote from "./Components/usermanagement/Clientmanagement/ClientDetails/Progressnotes/addprogressnote"
import Editprogressnote from "./Components/usermanagement/Clientmanagement/ClientDetails/Progressnotes/editprogressnote"
import Viewprogressnote from "./Components/usermanagement/Clientmanagement/ClientDetails/Progressnotes/Viewprogressnote"

import Addcommunityaccess from "./Components/usermanagement/Clientmanagement/ClientDetails/Communityaccess/Addcommunityaccess"
import Editcommunityaccess from "./Components/usermanagement/Clientmanagement/ClientDetails/Communityaccess/Editcommunityaccess"
import Viewcommunityaccess from "./Components/usermanagement/Clientmanagement/ClientDetails/Communityaccess/Viewcommunityaccess"

import Addcomplaint from "./Components/usermanagement/Clientmanagement/ClientDetails/Complaint/addcomplaint"
import Editcomplaint from "./Components/usermanagement/Clientmanagement/ClientDetails/Complaint/editcomplaint"
import Viewcomplaint from "./Components/usermanagement/Clientmanagement/ClientDetails/Complaint/Viewcomplaint"

import Addconflict from "./Components/usermanagement/Clientmanagement/ClientDetails/ConflictofIneterests/Addconflict"
import Editconflict from "./Components/usermanagement/Clientmanagement/ClientDetails/ConflictofIneterests/Editconflict"
import Viewconflict from "./Components/usermanagement/Clientmanagement/ClientDetails/ConflictofIneterests/Viewconflict"

import Addclientplanmanager from "./Components/usermanagement/Clientmanagement/ClientDetails/Planmanager/AddPlanManager"
import Editclientplanmanager from "./Components/usermanagement/Clientmanagement/ClientDetails/Planmanager/Edit"

import Addemergency from "./Components/usermanagement/Clientmanagement/ClientDetails/Emergencycontacts/Addcontact"
import Editemergency from "./Components/usermanagement/Clientmanagement/ClientDetails/Emergencycontacts/Editcontact"

import Meeting from "./Components/Meeting/Meetingtab"
import Editmeeting from "./Components/Meeting/Editmeeting"
import Scheduledinterviews from "./Components/Interviews/Scheduledinterview"
import Editinterview from "./Components/Interviews/Editinterview"

import ProgressNotes from "./Components/Progressnotes/progressNotesTabel"
import Addprogressnote1 from "./Components/Progressnotes/addprogressnote"
import Editprogressnote1 from "./Components/Progressnotes/editprogressnote"
import Viewprogressnote1 from "./Components/Progressnotes/Viewprogressnote"

import Incident from "./Components/incidents/incident"
import AddIncident1 from "./Components/incidents/addincident"
import EditIncident1 from "./Components/incidents/edit"
import ViewIncident1 from "./Components/incidents/view"

import Complaint from "./Components/Complaint/Complainttabel"
import Addcomplaint1 from "./Components/Complaint/addcomplaint"
import Editcomplaint1 from "./Components/Complaint/editcomplaint"
import Viewcomplaint1 from "./Components/Complaint/Viewcomplaint"

import Conflict from "./Components/ConflictofIneterests/Conflicttabel"
import Addconflict1 from "./Components/ConflictofIneterests/Addconflict"
import Editconflict1 from "./Components/ConflictofIneterests/Editconflict"
import Viewconflict1 from "./Components/ConflictofIneterests/Viewconflict"

import Transportclaims from "./Components/TransportClaims/List"
import Fundsmanagement from "./Components/Fundsmanagement/Fundsmanagement"
import Payroll from "./Components/Payroll/Payroll"

import Invoices from "./Components/Invoices/Invoices"
import Invoiceviewall1 from "./Components/Invoices/Viewall"
import Invoicedetails1 from "./Components/Invoices/Invoicedetails"
import Invoicestab from './Components/Invoices/Invoicestab'
import Invoiceprofile from './Components/Invoices/GeneratedinvoiceProfile'
import Editinvoice from './Components/Invoices/Editinvoice'
import Invoices1 from './Components/Invoices/Invoices1'

import Xerotable from './Components/Xero/Xerotable'
import Compliancemgmt from './Components/ComplianceMgmt/Compliancemgmt'
import Task from './Components/Task/task'
import Addtask1 from './Components/Task/Addtask'
import Edittask1 from './Components/Task/Edittask'
import Viewtask1 from './Components/Task/viewtask'

import NdiaRates from './Components/Ndiarates/NdiaRates'

import Chathistory from './Components/Chathistory/Chathistory'
import Documents from './Components/Documents/Documents'
import Adddocuments from './Components/Documents/Adddocument'
import Editdocument from './Components/Documents/Editdocument'

import Contentmanagement from './Components/Contentmanagement/Contentmanagement'

import Supportcategory from './Components/Supportcategory/Supportcategory'
import Addsupportcategory from './Components/Supportcategory/AddSupportcategory'

import Services from './Components/Services/Services'
import Addservices from './Components/Services/Addservices'
import Editservices from './Components/Services/Editservices'

import Shifts from './Components/Shifts/Shift'
import Addshifts from './Components/Shifts/Addnew'
import Editshifts from './Components/Shifts/Editshift'

import Shiftrate from './Components/Shiftrate/List'
import Addshiftrate from './Components/Shiftrate/Addnew'
import Editshiftrate from './Components/Shiftrate/Editshiftrate'


import Qualification from './Components/Qualifications/Qualifications'
import Addqualification from './Components/Qualifications/Addqualification'

import Level from './Components/Levels/Level'
import Addlevel from './Components/Levels/AddLevels'
import Editlevel from './Components/Levels/Editlevel'

import Jobtitle from './Components/Jobtitle/Jobtitle'
import Addjobtitle from'./Components/Jobtitle/Addjobtitle'
import Editjobtitle from './Components/Jobtitle/Editljobtitle'

import Jobtype from './Components/Jobtype/Jobtype'
import Addjobtype from'./Components/Jobtype/Addjobtype'
import Editjobtype from './Components/Jobtype/Editljobtype'

import Agency from './Components/Agency/Agency'
import Addagency from'./Components/Agency/Addagency'
import Editagency from './Components/Agency/Editagency'

import Profit from './Components/Profit/Profit'

import Createshift from './Components/Createshift/Createshift'

import Reference from './Components/Reference/Reference'
import Addreference from './Components/Reference/Addreference'

import Emails from './Components/Email/Emailtabs'

import Quarter from './Components/Quarter/Quarter'
import Addquarter from './Components/Quarter/Addquarter'
import Editquarter from './Components/Quarter/Editquarter'

import Emergency from './Components/Emergencycontacts/emergency'

import Leavecategory from './Components/Leavecategory/Leavecategory'
import Addleavecategory from './Components/Leavecategory/Addleavecategory'

import Newrequests from './Components/Newrequests/Newrequests'

import Leaves from './Components/Leaves/Leavestab'

import Viewleaves from './Components/Viewleaves/Viewleaves'

import Offboardingstep1 from './Components/Offboarding/firststep'
import Offboardingstep2 from './Components/Offboarding/Secondstep'
import Offboardingstep3 from './Components/Offboarding/Thirdstep'
import Offboardingstep4 from './Components/Offboarding/Fourthstep'
import Offboardingstep5 from './Components/Offboarding/Fifthstep'
import Offboardingstep6 from './Components/Offboarding/Sixthsteps'
import Offboardingstep7 from './Components/Offboarding/Seventhstep'
import Offboardingstep8 from './Components/Offboarding/Eightstep'
import Offboardingstep9 from './Components/Offboarding/Ninthstep'



// service Provider
import ServiceProvider from './Components/usermanagement/Serviceprovider/tab'
import SPDetails from './Components/usermanagement/Serviceprovider/newrequest/viewdetails'
import AddSP from './Components/usermanagement/Serviceprovider/serviceprovider/addsp'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

     <Route path="/firststep" element={<Signupfirststep/>}></Route>
     <Route path="/secondstep" element={<Signupsecoundstep/>}></Route>
     <Route path="/thirdsetup" element={<Signupthirdsetup/>}></Route>
     <Route path="/furthsetup" element={<Signupfurthsetup/>}></Route>
     <Route path="/fifthsetup" element={<Signupfifthstep/>}></Route>
     <Route path="/swdetails" element={<Swdetails/>}></Route>
     <Route path="/editbankdetails" element={<Editbankdetails/>}></Route>
     <Route path="/viewall" element={<Viewall/>}></Route>
     <Route path="/addtask" element={<AddTask/>}></Route>
     <Route path="/Addhourly" element={<Addhourly/>}></Route>
     <Route path="/addhourlytask" element={<AddhourlyTask/>}></Route>
      <Route path="/scselfSignupstep1" element={<ScselfSignupstep1/>}></Route>
      <Route path="/scselfSignupstep2" element={<ScselfSignupstep2/>}></Route>
      <Route path="/scdetails" element={<SCDetails/>}></Route>
      <Route path="/addscnotes" element={<Addscnotes/>}></Route>
      <Route path="/editscnotes" element={<Editscnotes/>}></Route>
      <Route path="/addsctask" element={<Addsctask/>}></Route>
      <Route path="/editsctask" element={<Editsctask/>}></Route>
      <Route path="/viewsctask" element={<Viewsctask/>}></Route>
      <Route path="/addappointment" element={<AddAppointment/>}></Route>
      <Route path="/editappointment" element={<Editappointment/>}></Route>
      <Route path="/addnotes" element={<AddNotes/>}></Route>
      <Route path="/editnotes" element={<EditNotes/>}></Route>
      <Route path="/viewnotes" element={<ViewNotes/>}></Route>
      <Route path="/addtask2" element={<Addtask2/>}></Route>
      <Route path="/edittask2" element={<Edittask2/>}></Route>
      <Route path="/viewtask2" element={<Viewtask2/>}></Route>
      <Route path="/addswcontact" element={<AddSWemergencycontact/>}></Route>
      <Route path="/editswcontact" element={<EditSWemergencycontact/>}></Route>

       {/* thursday routing */}
       <Route path="/addhourly1" element={<Addhourly1/>}></Route>
       <Route path="/addhourly2" element={<Addhourly2/>}></Route>
       <Route path="/addhourlyTask3" element={<AddhourlyTask3/>}></Route>

       <Route path="/scaddincident" element={<ScaddIncident/>}></Route>
       <Route path="/sceditincident" element={<SceditIncident/>}></Route>
       <Route path="/scviewincident" element={<ScviewIncident/>}></Route>
       <Route path="/scclientDetails" element={<ScclientDetails/>}></Route>
       <Route path="/addplanmanager" element={<Addplanmanager/>}></Route>
       <Route path="/editplanmanager" element={<Editplanmanager/>}></Route>
       <Route path="/Addsccontact" element={<Addemergencycontact/>}></Route>
       <Route path="/editsccontact" element={<Editemergencycontact/>}></Route>

       {/* Client details  */}
       <Route path="/client" element={<Client/>}></Route>
       <Route path="/viewevaluationdetails" element={<ViewEvalutionDetails/>}></Route>
       <Route path="/schedulemeeting" element={<ScheduleMeeting/>}></Route>
       <Route path="/addclient" element={<Addclient/>}></Route>
       <Route path="/clientaccount1" element={<Accountsetup1/>}></Route>
       <Route path="/clientaccount2" element={<Accountsetup2/>}></Route>
       <Route path="/clientaccount3" element={<Accountsetup3/>}></Route>
       <Route path="/clientaccount4" element={<Accountsetup4/>}></Route>
       <Route path="/clientaccount5" element={<Accountsetup5/>}></Route>
      <Route path="/clientdetails" element={<Clientdetails/>}></Route>
       <Route path="/invoicedetails" element={<Invoicedetails/>}></Route>
       <Route path="/invoicesviewall" element={<Invoicesviewall/>}></Route>
       <Route path="/clienteditbankdetails" element={<Clienteditbankdetails/>}></Route>
       <Route path="/appointmentdetails" element={<Appointmentdetails/>}></Route>
       <Route path="/addfunding" element={<Addfunding/>}></Route>
      <Route path="/addmedicalhistory" element={<Addmedicalhistory/>}></Route>
      <Route path="/editmedicalhistory" element={<Editmedicalhistory/>}></Route>
      <Route path="/viewmedicalhistory" element={<Viewmedicalhistory/>}></Route>

      <Route path="/addgoal" element={<Addgoal/>}></Route>
       <Route path="/goaladdtask" element={<Goaladdtask/>}></Route>
       <Route path="/goaladdhourly" element={<Goaladdhourly/>}></Route>
       <Route path="/goaladdhourlytask" element={<Goaladdhourlytask/>}></Route>

       <Route path="/clientaddtask" element={<ClientaddTask/>}></Route>
       <Route path="/clientedittask" element={<ClienteditTask/>}></Route>
       <Route path="/clientviewtask" element={<ClientviewTask/>}></Route>
       
       <Route path="/addclientnotes" element={<Addclientnotes/>}></Route>
       <Route path="/editclientnotes" element={<Editclientnotes/>}></Route>
       <Route path="/viewclientnotes" element={<Viewclientnotes/>}></Route>

       <Route path="/addprogressnote" element={<Addprogressnote/>}></Route>
       <Route path="/editprogressnote" element={<Editprogressnote/>}></Route>
       <Route path="/viewprogressnote" element={<Viewprogressnote/>}></Route>

       <Route path="/addcommunityaccess" element={<Addcommunityaccess/>}></Route>
       <Route path="/viewcommunityaccess" element={<Viewcommunityaccess/>}></Route>
       <Route path="/editcommunityaccess" element={<Editcommunityaccess/>}></Route>

       <Route path="/addcomplaint" element={<Addcomplaint/>}></Route>
       <Route path="/editcomplaint" element={<Editcomplaint/>}></Route>
       <Route path="/viewcomplaint" element={<Viewcomplaint/>}></Route>

       <Route path="/addconflict" element={<Addconflict/>}></Route>
       <Route path="/editconflict" element={<Editconflict/>}></Route>
       <Route path="/viewconflict" element={<Viewconflict/>}></Route>

       <Route path="/addclientplanmanager" element={<Addclientplanmanager/>}></Route>
       <Route path="/editclientplanmanager" element={<Editclientplanmanager/>}></Route>

       <Route path="/addemergency" element={<Addemergency/>}></Route>
       <Route path="/editemergency" element={<Editemergency/>}></Route>

        {/* 12 dec */}
        <Route path="/meeting" element={<Meeting/>}></Route>
       <Route path="/editmeeting" element={<Editmeeting/>}></Route>
       <Route path="/scheduledinterviews" element={<Scheduledinterviews/>}></Route>
       <Route path="/editinterview" element={<Editinterview/>}></Route>
       <Route path="/progressnotes" element={<ProgressNotes/>}></Route>

       <Route path="/addprogressnote1" element={<Addprogressnote1/>}></Route>
       <Route path="/editprogressnote1" element={<Editprogressnote1/>}></Route>
       <Route path="/viewprogressnote1" element={<Viewprogressnote1/>}></Route>

         <Route path="/incident" element={<Incident/>}></Route>
       <Route path="/addincident1" element={<AddIncident1/>}></Route>
       <Route path="/editincident1" element={<EditIncident1/>}></Route>
       <Route path="/viewincident1" element={<ViewIncident1/>}></Route>

       <Route path="complaint" element={<Complaint/>}></Route>
       <Route path="/addcomplaint1" element={<Addcomplaint1/>}></Route>
       <Route path="/editcomplaint1" element={<Editcomplaint1/>}></Route>
       <Route path="/viewcomplaint1" element={<Viewcomplaint1/>}></Route>

        <Route path="/conflict" element={<Conflict/>}></Route>
       <Route path="/addconflict1" element={<Addconflict1/>}></Route>
       <Route path="/editconflict1" element={<Editconflict1/>}></Route>
       <Route path="/viewconflict1" element={<Viewconflict1/>}></Route>

       <Route path="/transportclaims" element={<Transportclaims/>}></Route>
       <Route path="/fundsmanagement" element={<Fundsmanagement/>}></Route>
       
       <Route path="/payroll" element={<Payroll/>}></Route>

       <Route path="/invoices" element={<Invoices/>}></Route>
       <Route path="/invoicedetails1" element={<Invoicedetails1/>}></Route>
       <Route path="/invoiceviewall1" element={<Invoiceviewall1/>}></Route>
       <Route path="/invoicestab" element={<Invoicestab/>}></Route>
       <Route path="/invoiceprofile" element={<Invoiceprofile/>}></Route>
       <Route path="/editinvoice" element={<Editinvoice/>}></Route>
       <Route path="/invoices1" element={<Invoices1/>}></Route>

       <Route path="/xero" element={<Xerotable/>}></Route>

       <Route path="/compliancemgmt" element={<Compliancemgmt/>}></Route>

       <Route path="/task" element={<Task/>}></Route>
       <Route path="/addtask1" element={<Addtask1/>}></Route>
       <Route path="/edittask1" element={<Edittask1/>}></Route>
       <Route path="/viewtask1" element={<Viewtask1/>}></Route>

       <Route path="/ndiarates" element={<NdiaRates/>}></Route>

       <Route path="/chathistory" element={<Chathistory/>}></Route>

       <Route path="/documents" element={<Documents/>}></Route>
       <Route path="/Adddocuments" element={<Adddocuments/>}></Route>
       <Route path="/editdocument" element={<Editdocument/>}></Route>

       <Route path="/contentmanagement" element={<Contentmanagement/>}></Route>

       <Route path="/supportcategory" element={<Supportcategory/>}></Route>
       <Route path="/addsupportcategory" element={<Addsupportcategory/>}></Route>

       <Route path="/services" element={<Services/>}></Route>
       <Route path="/addservices" element={<Addservices/>}></Route>
       <Route path="/editservices" element={<Editservices/>}></Route>

       <Route path="/shifts" element={<Shifts/>}></Route>
       <Route path="/addshifts" element={<Addshifts/>}></Route>
       <Route path="/editshifts" element={<Editshifts/>}></Route>

       <Route path="/shiftrate" element={<Shiftrate/>}></Route>
       <Route path="/addshiftrate" element={<Addshiftrate/>}></Route>
       <Route path="/editshiftrate" element={<Editshiftrate/>}></Route>

       <Route path="/qualification" element={<Qualification/>}></Route>
       <Route path="/addqualification" element={<Addqualification/>}></Route>

       <Route path="/level" element={<Level/>}></Route>
       <Route path="/addlevel" element={<Addlevel/>}></Route>
       <Route path="/editlevel" element={<Editlevel/>}></Route>

       <Route path="/jobtitle" element={<Jobtitle/>}></Route>
       <Route path="/addjobtitle" element={<Addjobtitle/>}></Route>
       <Route path="/editljobtitle" element={<Editjobtitle/>}></Route>

       <Route path="/jobtype" element={<Jobtype/>}></Route>
       <Route path="/addjobtype" element={<Addjobtype/>}></Route>
       <Route path="/editjobtype" element={<Editjobtype/>}></Route>

       <Route path="/agency" element={<Agency/>}></Route>
       <Route path="/addagency" element={<Addagency/>}></Route>
       <Route path="/editagency" element={<Editagency/>}></Route>

       <Route path="/profit" element={<Profit/>}></Route>

       <Route path="/createshift" element={<Createshift/>}></Route>

       <Route path="/reference" element={<Reference/>}></Route>
       <Route path="/addreference" element={<Addreference/>}></Route>

       <Route path="/emails" element={<Emails/>}></Route>

       <Route path="/quarter" element={<Quarter/>}></Route>
       <Route path="/addquarter" element={<Addquarter/>}></Route>
       <Route path="/editquarter" element={<Editquarter/>}></Route>

       <Route path="/emergency" element={<Emergency/>}></Route>

       <Route path="/leavecategory" element={<Leavecategory/>}></Route>
       <Route path="/addleavecategory" element={<Addleavecategory/>}></Route>

       <Route path="/newrequests" element={<Newrequests/>}></Route>

       <Route path="/leaverequest" element={<Leaves/>}></Route>

       <Route path="/viewleaves" element={<Viewleaves/>}></Route>

       <Route path="/offboardingstep1" element={<Offboardingstep1/>}></Route> 
       <Route path="/offboardingstep2" element={<Offboardingstep2/>}></Route> 
       <Route path="/offboardingstep3" element={<Offboardingstep3/>}></Route> 
       <Route path="/offboardingstep4" element={<Offboardingstep4/>}></Route> 
       <Route path="/offboardingstep5" element={<Offboardingstep5/>}></Route>
       <Route path="/offboardingstep6" element={<Offboardingstep6/>}></Route> 
       <Route path="/offboardingstep7" element={<Offboardingstep7/>}></Route>  
       <Route path="/offboardingstep8" element={<Offboardingstep8/>}></Route> 
       <Route path="/offboardingstep9" element={<Offboardingstep9/>}></Route> 


       <Route path="/" element={<SignIn/>}></Route>
       <Route path="/dashboard" element={<Dashboard/>}></Route>
       <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
       <Route path="/resetpassword" element={<Resetpassword/>}></Route>
       <Route path="/viewtask" element={<Viewtask/>}></Route>
       <Route path="/taskcard" element={<Taskcard/>}></Route>
       <Route path="/quicktask" element={<Quicktask/>}></Route>
       <Route path="/searchclient" element={<SearchClient/>}></Route>
       <Route path="/staffsupportworker" element={<StaffWorker/>}></Route>
       <Route path="/oncall" element={<Oncall/>}></Route>
       <Route path="/addnew" element={<Addnew/>}></Route>
       <Route path="/details" element={<Details/>}></Route>
       <Route path="/scheduleinterview" element={<ScheduleInterview/>}></Route>
       <Route path="/email" element={<Email/>}></Route>
       <Route path="/addsw" element={<AddSW/>}></Route>
       <Route path="/timesheettable" element={<TimesheetTable/>}></Route>
       <Route path="/clientdetails" element={<ClientDetails/>}></Route>
       <Route path="/addincident" element={<AddIncident/>}></Route>
       <Route path="/editincident" element={<EditIncident/>}></Route>
       <Route path="/viewincident" element={<ViewIncident/>}></Route>

       {/* support Coordinator */}
       <Route path="/supportcoordinator" element={<SupportCoordinator/>}></Route>
       <Route path="/viewdetails" element={<ViewDetails/>}></Route>
       <Route path="/SCscheduleinterview" element={<SCScheduleInterview/>}></Route>
       <Route path="/SCemail" element={<SCEmail/>}></Route>
       <Route path="/addsc" element={<AddSC/>}></Route>

       {/* service Provider */}
       <Route path="/serviceprovider" element={<ServiceProvider/>}></Route>
       <Route path="/spdetails" element={<SPDetails/>}></Route>
       <Route path="/addsp" element={<AddSP/>}></Route>
 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
