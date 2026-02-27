import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function ManageServices() {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    duration: "",
    price: "",
  });

  const services = [
    {
      id: "SVC-001",
      name: "Oil Change",
      description: "Regular oil and filter change service",
      duration: "30 minutes",
      price: "$45.00",
      popular: true,
    },
    {
      id: "SVC-002",
      name: "Brake Service",
      description: "Complete brake inspection and repair",
      duration: "90 minutes",
      price: "$150.00",
      popular: true,
    },
    {
      id: "SVC-003",
      name: "Tire Rotation",
      description: "Tire rotation and balance service",
      duration: "45 minutes",
      price: "$35.00",
      popular: false,
    },
    {
      id: "SVC-004",
      name: "Engine Diagnostic",
      description: "Full engine system diagnostic check",
      duration: "60 minutes",
      price: "$85.00",
      popular: true,
    },
    {
      id: "SVC-005",
      name: "Transmission Service",
      description: "Transmission fluid change and inspection",
      duration: "120 minutes",
      price: "$250.00",
      popular: false,
    },
  ];

  const handleAddService = () => {
    if (!newService.name || !newService.price) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Service added successfully");
    setShowAddDialog(false);
    setNewService({ name: "", description: "", duration: "", price: "" });
  };

  const handleDeleteService = (id: string) => {
    toast.success("Service deleted successfully");
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Services</h1>
          <p className="text-gray-600 mt-2">Manage available vehicle services</p>
        </div>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Services</p>
              <p className="text-2xl font-bold">15</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Popular Services</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">Avg. Service Time</p>
              <p className="text-2xl font-bold">75 min</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service List</CardTitle>
          <CardDescription>All available services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service ID</TableHead>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Popular</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">{service.id}</TableCell>
                    <TableCell>{service.name}</TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm text-muted-foreground truncate">
                        {service.description}
                      </p>
                    </TableCell>
                    <TableCell>{service.duration}</TableCell>
                    <TableCell className="font-medium">{service.price}</TableCell>
                    <TableCell>
                      {service.popular ? (
                        <span className="text-accent">★ Popular</span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteService(service.id)}
                        >
                          <Trash2 className="h-4 w-4" />
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

      {/* Add Service Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Service</DialogTitle>
            <DialogDescription>Create a new service offering</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Service Name *</Label>
              <Input
                placeholder="Enter service name"
                value={newService.name}
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                className="bg-input-background"
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Enter service description"
                value={newService.description}
                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                className="bg-input-background"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Duration</Label>
                <Input
                  placeholder="e.g., 60 minutes"
                  value={newService.duration}
                  onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                  className="bg-input-background"
                />
              </div>

              <div className="space-y-2">
                <Label>Price *</Label>
                <Input
                  placeholder="e.g., $45.00"
                  value={newService.price}
                  onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                  className="bg-input-background"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleAddService} className="flex-1">
              Add Service
            </Button>
            <Button variant="outline" onClick={() => setShowAddDialog(false)} className="flex-1">
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
