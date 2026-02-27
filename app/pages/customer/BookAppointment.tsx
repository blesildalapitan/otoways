import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { Calendar } from "../../components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function BookAppointment() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [serviceType, setServiceType] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [description, setDescription] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const serviceTypes = [
    "Oil Change",
    "Tire Rotation",
    "Brake Service",
    "Engine Diagnostic",
    "Transmission Service",
    "Battery Replacement",
    "Air Conditioning Service",
    "Wheel Alignment",
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!serviceType || !date || !timeSlot) {
      toast.error("Please fill in all required fields");
      return;
    }

    setShowConfirmation(true);
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Book Appointment</h1>
        <p className="text-gray-600 mt-2">Schedule your vehicle service</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appointment Details</CardTitle>
          <CardDescription>Fill in the information to book your service</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Type */}
            <div className="space-y-2">
              <Label htmlFor="service">Service Type *</Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="bg-input-background">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Vehicle Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Vehicle Type</Label>
                <p className="mt-1 text-sm bg-secondary p-3 rounded-lg">Sedan</p>
              </div>
              <div>
                <Label>Plate Number</Label>
                <p className="mt-1 text-sm bg-secondary p-3 rounded-lg">ABC-1234</p>
              </div>
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <Label>Select Date *</Label>
              <div className="border rounded-lg p-4 bg-white">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md"
                />
              </div>
            </div>

            {/* Time Slot */}
            <div className="space-y-2">
              <Label htmlFor="timeSlot">Available Time Slots *</Label>
              <Select value={timeSlot} onValueChange={setTimeSlot}>
                <SelectTrigger className="bg-input-background">
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Service Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="Describe any specific issues or requirements..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-input-background min-h-[100px]"
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Submit Appointment
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center">Appointment Booked!</DialogTitle>
            <DialogDescription className="text-center">
              Your appointment has been successfully submitted and is pending approval.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-secondary p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Service:</span>
                <span className="font-medium">{serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Date:</span>
                <span className="font-medium">{date?.toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Time:</span>
                <span className="font-medium">{timeSlot}</span>
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              You will receive a confirmation once the appointment is approved.
            </p>
          </div>
          <Button onClick={() => setShowConfirmation(false)} className="w-full">
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
