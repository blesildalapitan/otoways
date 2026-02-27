import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";

export function CustomerDashboard() {
  const upcomingAppointments = [
    {
      id: "APT-001",
      service: "Oil Change",
      date: "March 5, 2026",
      time: "10:00 AM",
      status: "Approved",
    },
    {
      id: "APT-002",
      service: "Tire Rotation",
      date: "March 12, 2026",
      time: "2:00 PM",
      status: "Pending",
    },
  ];

  const recentServices = [
    {
      service: "Brake Inspection",
      date: "February 15, 2026",
      technician: "Mike Johnson",
    },
    {
      service: "Engine Diagnostic",
      date: "January 22, 2026",
      technician: "Sarah Smith",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back, John!</h1>
        <p className="text-gray-600 mt-2">Manage your vehicle service appointments</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Upcoming</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <Clock className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Link to="/customer/book-appointment">
              <Button className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>Your scheduled service appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{appointment.service}</h4>
                    <p className="text-sm text-muted-foreground">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      appointment.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {appointment.status}
                  </span>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/customer/appointments">
              <Button variant="link" className="text-primary">
                View all appointments →
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Service History Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Service History</CardTitle>
          <CardDescription>Your completed services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-medium">{service.service}</h4>
                    <p className="text-sm text-muted-foreground">
                      {service.date} • Technician: {service.technician}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Receipt
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/customer/service-history">
              <Button variant="link" className="text-primary">
                View full history →
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Info */}
      <Card>
        <CardHeader>
          <CardTitle>Your Vehicle</CardTitle>
          <CardDescription>Registered vehicle information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Vehicle Type</p>
              <p className="font-medium">Sedan</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Plate Number</p>
              <p className="font-medium">ABC-1234</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
