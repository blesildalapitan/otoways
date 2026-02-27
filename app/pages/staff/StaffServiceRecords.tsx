import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Eye, Search } from "lucide-react";
import { useState } from "react";

export function StaffServiceRecords() {
  const [searchQuery, setSearchQuery] = useState("");

  const serviceRecords = [
    {
      id: "SRV-015",
      customer: "John Doe",
      service: "Oil Change",
      technician: "Mike Johnson",
      date: "2026-02-15",
      cost: "$45.00",
      notes: "Oil and filter changed successfully",
    },
    {
      id: "SRV-014",
      customer: "Jane Smith",
      service: "Brake Service",
      technician: "Sarah Smith",
      date: "2026-02-20",
      cost: "$150.00",
      notes: "Brake pads replaced on all wheels",
    },
    {
      id: "SRV-013",
      customer: "Mike Johnson",
      service: "Tire Rotation",
      technician: "Mike Johnson",
      date: "2026-02-18",
      cost: "$35.00",
      notes: "Tires rotated and balanced",
    },
    {
      id: "SRV-012",
      customer: "Sarah Williams",
      service: "Engine Diagnostic",
      technician: "David Lee",
      date: "2026-02-22",
      cost: "$85.00",
      notes: "Full diagnostic completed - no issues found",
    },
    {
      id: "SRV-011",
      customer: "Robert Brown",
      service: "Transmission Service",
      technician: "Sarah Smith",
      date: "2026-02-10",
      cost: "$250.00",
      notes: "Transmission fluid changed, functioning normally",
    },
  ];

  const filteredRecords = serviceRecords.filter((record) =>
    record.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Service Records</h1>
        <p className="text-gray-600 mt-2">View completed service history</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Services</p>
              <p className="text-2xl font-bold">1,248</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">This Month</p>
              <p className="text-2xl font-bold">87</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="text-2xl font-bold">23</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Revenue (Month)</p>
              <p className="text-2xl font-bold">$8,450</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service History</CardTitle>
          <CardDescription>All completed services</CardDescription>
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by customer, service, or record ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input-background"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Record ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Technician</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.id}</TableCell>
                    <TableCell>{record.customer}</TableCell>
                    <TableCell>{record.service}</TableCell>
                    <TableCell>{record.technician}</TableCell>
                    <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                    <TableCell className="font-medium">{record.cost}</TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm text-muted-foreground truncate">{record.notes}</p>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
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
