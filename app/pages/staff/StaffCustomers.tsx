import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Eye, Search } from "lucide-react";
import { useState } from "react";

export function StaffCustomers() {
  const [searchQuery, setSearchQuery] = useState("");

  const customers = [
    {
      id: "CUST-001",
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "(555) 123-4567",
      vehicle: "ABC-1234 - Sedan",
      totalServices: 8,
      lastVisit: "2026-02-15",
    },
    {
      id: "CUST-002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "(555) 234-5678",
      vehicle: "XYZ-5678 - SUV",
      totalServices: 5,
      lastVisit: "2026-02-20",
    },
    {
      id: "CUST-003",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      contact: "(555) 345-6789",
      vehicle: "DEF-9012 - Truck",
      totalServices: 12,
      lastVisit: "2026-02-18",
    },
    {
      id: "CUST-004",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      contact: "(555) 456-7890",
      vehicle: "GHI-3456 - Van",
      totalServices: 3,
      lastVisit: "2026-02-22",
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
        <p className="text-gray-600 mt-2">View and manage customer information</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Customers</p>
              <p className="text-2xl font-bold">142</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Active This Month</p>
              <p className="text-2xl font-bold">56</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">New This Month</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Returning Rate</p>
              <p className="text-2xl font-bold">78%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Database</CardTitle>
          <CardDescription>All registered customers</CardDescription>
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers by name, email, or vehicle..."
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
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Total Services</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.contact}</TableCell>
                    <TableCell>{customer.vehicle}</TableCell>
                    <TableCell>{customer.totalServices}</TableCell>
                    <TableCell>{new Date(customer.lastVisit).toLocaleDateString()}</TableCell>
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
