import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Check, X, Eye } from "lucide-react";
import { toast } from "sonner";

export function AppointmentApproval() {
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const pendingAppointments = [
    {
      id: "APT-024",
      customer: "Emily Davis",
      contact: "(555) 567-8901",
      service: "Oil Change",
      date: "2026-03-08",
      time: "10:00 AM",
      vehicle: "GHI-3456 - Sedan",
      requestedDate: "2026-02-27",
    },
    {
      id: "APT-025",
      customer: "Robert Wilson",
      contact: "(555) 678-9012",
      service: "Brake Service",
      date: "2026-03-09",
      time: "2:00 PM",
      vehicle: "JKL-7890 - SUV",
      requestedDate: "2026-02-27",
    },
    {
      id: "APT-026",
      customer: "Lisa Anderson",
      contact: "(555) 789-0123",
      service: "Tire Rotation",
      date: "2026-03-10",
      time: "11:00 AM",
      vehicle: "MNO-1234 - Truck",
      requestedDate: "2026-02-26",
    },
    {
      id: "APT-027",
      customer: "James Martinez",
      contact: "(555) 890-1234",
      service: "Engine Diagnostic",
      date: "2026-03-11",
      time: "3:00 PM",
      vehicle: "PQR-5678 - Van",
      requestedDate: "2026-02-26",
    },
  ];

  const handleApprove = (id: string) => {
    toast.success("Appointment approved successfully");
  };

  const handleReject = (id: string) => {
    toast.error("Appointment rejected");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Appointment Approval</h1>
        <p className="text-gray-600 mt-2">Review and approve pending appointments</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Pending Approval</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Approved Today</p>
              <p className="text-2xl font-bold">18</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Rejected Today</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Appointments</CardTitle>
          <CardDescription>Appointments awaiting approval</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Requested Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.id}</TableCell>
                    <TableCell>{appointment.customer}</TableCell>
                    <TableCell>{appointment.contact}</TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell>{new Date(appointment.date).toLocaleDateString()}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.vehicle}</TableCell>
                    <TableCell>
                      {new Date(appointment.requestedDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedAppointment(appointment)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleApprove(appointment.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleReject(appointment.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* View Details Dialog */}
      <Dialog open={!!selectedAppointment} onOpenChange={() => setSelectedAppointment(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
            <DialogDescription>Review appointment information</DialogDescription>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Appointment ID:</span>
                  <span className="font-medium">{selectedAppointment.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Customer:</span>
                  <span className="font-medium">{selectedAppointment.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Contact:</span>
                  <span className="font-medium">{selectedAppointment.contact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Service:</span>
                  <span className="font-medium">{selectedAppointment.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date:</span>
                  <span className="font-medium">
                    {new Date(selectedAppointment.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Time:</span>
                  <span className="font-medium">{selectedAppointment.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Vehicle:</span>
                  <span className="font-medium">{selectedAppointment.vehicle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Submitted:</span>
                  <span className="font-medium">
                    {new Date(selectedAppointment.requestedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    handleApprove(selectedAppointment.id);
                    setSelectedAppointment(null);
                  }}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={() => {
                    handleReject(selectedAppointment.id);
                    setSelectedAppointment(null);
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Reject
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
