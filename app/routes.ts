import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

// Customer pages
import { CustomerLayout } from "./layouts/CustomerLayout";
import { CustomerDashboard } from "./pages/customer/CustomerDashboard";
import { BookAppointment } from "./pages/customer/BookAppointment";
import { MyAppointments } from "./pages/customer/MyAppointments";
import { ServiceHistory } from "./pages/customer/ServiceHistory";
import { CustomerProfile } from "./pages/customer/CustomerProfile";

// Staff pages
import { StaffLayout } from "./layouts/StaffLayout";
import { StaffDashboard } from "./pages/staff/StaffDashboard";
import { StaffAppointments } from "./pages/staff/StaffAppointments";
import { StaffCustomers } from "./pages/staff/StaffCustomers";
import { StaffServiceRecords } from "./pages/staff/StaffServiceRecords";

// Admin pages
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ManageUsers } from "./pages/admin/ManageUsers";
import { ManageServices } from "./pages/admin/ManageServices";
import { AppointmentApproval } from "./pages/admin/AppointmentApproval";
import { AdminReports } from "./pages/admin/AdminReports";
import { SystemSettings } from "./pages/admin/SystemSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  // Customer routes
  {
    path: "/customer",
    Component: CustomerLayout,
    children: [
      { index: true, Component: CustomerDashboard },
      { path: "book-appointment", Component: BookAppointment },
      { path: "appointments", Component: MyAppointments },
      { path: "service-history", Component: ServiceHistory },
      { path: "profile", Component: CustomerProfile },
    ],
  },
  // Staff routes
  {
    path: "/staff",
    Component: StaffLayout,
    children: [
      { index: true, Component: StaffDashboard },
      { path: "appointments", Component: StaffAppointments },
      { path: "customers", Component: StaffCustomers },
      { path: "service-records", Component: StaffServiceRecords },
    ],
  },
  // Admin routes
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "users", Component: ManageUsers },
      { path: "services", Component: ManageServices },
      { path: "approval", Component: AppointmentApproval },
      { path: "reports", Component: AdminReports },
      { path: "settings", Component: SystemSettings },
    ],
  },
]);
