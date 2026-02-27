import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Eye, Edit } from "lucide-react";
import { toast } from "sonner";

export function StaffAppointments() {
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updateStatus, setUpdateStatus] = useState("");
  const [serviceNotes, setServiceNotes] = useState("");

  const appointments = [
    {
      id: "APT-001",
      customer: "John Doe",
      contact: "(555) 123-4567",
      service: "Oil Change",
      date: "2026-03-05",
      time: "10:00 AM",
      status: "In Progress",
      vehicle: "ABC-1234 - Sedan",
    },
    {
      id: "APT-002",
      customer: "Jane Smith",
      contact: "(555) 234-5678",
      service: "Brake Service",
      date: "2026-03-05",
      time: "2:00 PM",
      status: "Scheduled",
      vehicle: "XYZ-5678 - SUV",
    },
    {
      id: "APT-003",
      customer: "Mike Johnson",
      contact: "(555) 345-6789",
      service: "Tire Rotation",
      date: "2026-03-06",
      time: "9:00 AM",
      status: "Scheduled",
      vehicle: "DEF-9012 - Truck",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-accent/10 text-accent";
      case "Scheduled":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleUpdateService = () => {
    if (!updateStatus) {
      toast.error("Please select a status");
      return;
    }
    toast.success("Service status updated successfully");
    setShowUpdateDialog(false);
    setUpdateStatus("");
    setServiceNotes("");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
        <p className="text-gray-600 mt-2">Manage customer appointments and services</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Appointments</CardTitle>
          <CardDescription>View and update appointment details</CardDescription>
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
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.id}</TableCell>
                    <TableCell>{appointment.customer}</TableCell>
                    <TableCell>{appointment.contact}</TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell>
                      {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                    </TableCell>
                    <TableCell>{appointment.vehicle}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
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
                          variant="outline"
                          onClick={() => {
                            setSelectedAppointment(appointment);
                            setShowUpdateDialog(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
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
      <Dialog
        open={!!selectedAppointment && !showUpdateDialog}
        onOpenChange={() => setSelectedAppointment(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
            <DialogDescription>View customer appointment information</DialogDescription>
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
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge className={getStatusColor(selectedAppointment.status)}>
                    {selectedAppointment.status}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <Button onClick={() => setSelectedAppointment(null)} className="w-full">
            Close
          </Button>
        </DialogContent>
      </Dialog>

      {/* Update Service Dialog */}
      <Dialog open={showUpdateDialog} onOpenChange={setShowUpdateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Service Status</DialogTitle>
            <DialogDescription>Update the appointment status and add notes</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={updateStatus} onValueChange={setUpdateStatus}>
                <SelectTrigger className="bg-input-background">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Service Notes</Label>
              <Textarea
                placeholder="Add any notes about the service..."
                value={serviceNotes}
                onChange={(e) => setServiceNotes(e.target.value)}
                className="bg-input-background min-h-[100px]"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleUpdateService} className="flex-1">
              Update
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowUpdateDialog(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
