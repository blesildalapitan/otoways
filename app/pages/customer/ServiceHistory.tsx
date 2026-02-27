import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Download } from "lucide-react";
import { toast } from "sonner";

export function ServiceHistory() {
  const serviceHistory = [
    {
      id: "SRV-001",
      service: "Brake Inspection",
      technician: "Mike Johnson",
      date: "2026-02-15",
      notes: "Brake pads replaced. All systems functioning normally.",
      cost: "$150.00",
    },
    {
      id: "SRV-002",
      service: "Engine Diagnostic",
      technician: "Sarah Smith",
      date: "2026-01-22",
      notes: "Full diagnostic completed. Engine running optimally.",
      cost: "$85.00",
    },
    {
      id: "SRV-003",
      service: "Oil Change",
      technician: "David Lee",
      date: "2025-12-10",
      notes: "Oil and filter changed. Next service due in 3 months.",
      cost: "$45.00",
    },
    {
      id: "SRV-004",
      service: "Tire Rotation",
      technician: "Mike Johnson",
      date: "2025-11-05",
      notes: "Tires rotated and balanced. Tire pressure checked.",
      cost: "$35.00",
    },
    {
      id: "SRV-005",
      service: "Air Filter Replacement",
      technician: "Sarah Smith",
      date: "2025-10-18",
      notes: "Cabin and engine air filters replaced.",
      cost: "$55.00",
    },
  ];

  const handleDownloadReceipt = (id: string) => {
    toast.success("Receipt downloaded successfully");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Service History</h1>
        <p className="text-gray-600 mt-2">Your completed vehicle services</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Services</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">This Year</p>
              <p className="text-2xl font-bold">5</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <p className="text-2xl font-bold">$370</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service History Table */}
      <Card>
        <CardHeader>
          <CardTitle>Completed Services</CardTitle>
          <CardDescription>Detailed history of all your vehicle services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service ID</TableHead>
                  <TableHead>Service Performed</TableHead>
                  <TableHead>Technician</TableHead>
                  <TableHead>Date Completed</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceHistory.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">{service.id}</TableCell>
                    <TableCell>{service.service}</TableCell>
                    <TableCell>{service.technician}</TableCell>
                    <TableCell>{new Date(service.date).toLocaleDateString()}</TableCell>
                    <TableCell className="font-medium">{service.cost}</TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm text-muted-foreground truncate">{service.notes}</p>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownloadReceipt(service.id)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
