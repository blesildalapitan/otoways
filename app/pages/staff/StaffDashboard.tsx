import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export function StaffDashboard() {
  const todayAppointments = [
    {
      id: "APT-001",
      customer: "John Doe",
      service: "Oil Change",
      time: "10:00 AM",
      status: "In Progress",
      vehicle: "ABC-1234",
    },
    {
      id: "APT-005",
      customer: "Jane Smith",
      service: "Brake Service",
      time: "2:00 PM",
      status: "Scheduled",
      vehicle: "XYZ-5678",
    },
    {
      id: "APT-008",
      customer: "Mike Johnson",
      service: "Tire Rotation",
      time: "4:00 PM",
      status: "Scheduled",
      vehicle: "DEF-9012",
    },
  ];

  const assignedServices = [
    {
      id: "SRV-010",
      customer: "Sarah Williams",
      service: "Engine Diagnostic",
      progress: 75,
    },
    {
      id: "SRV-011",
      customer: "Robert Brown",
      service: "Transmission Service",
      progress: 40,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your daily schedule</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Appointments</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <Clock className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed Today</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Customers</p>
                <p className="text-2xl font-bold">142</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Appointments</CardTitle>
          <CardDescription>Your scheduled services for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{appointment.customer}</h4>
                    <p className="text-sm text-muted-foreground">
                      {appointment.service} • {appointment.vehicle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{appointment.time}</span>
                  <Badge
                    className={
                      appointment.status === "In Progress"
                        ? "bg-accent/10 text-accent"
                        : "bg-blue-100 text-blue-700"
                    }
                  >
                    {appointment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assigned Services */}
      <Card>
        <CardHeader>
          <CardTitle>Assigned Services</CardTitle>
          <CardDescription>Services currently in progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assignedServices.map((service) => (
              <div key={service.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{service.customer}</h4>
                    <p className="text-sm text-muted-foreground">{service.service}</p>
                  </div>
                  <span className="text-sm font-medium">{service.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${service.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
