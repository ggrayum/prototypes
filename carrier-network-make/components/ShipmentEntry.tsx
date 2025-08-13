"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Package, Plus, Trash2, X } from "lucide-react";

interface ShipmentItem {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  length: string;
  width: string;
  height: string;
  dimensionUnit: string;
  weight: string;
  weightUnit: string;
  freightClass: string;
  hazmat: boolean;
  stackable: boolean;
}

interface Shipment {
  id: string;
  origin: string;
  destination: string;
  pickupDate: string;
  deliveryDate: string;
  shipmentServices: string[];
  pickupServices: string[];
  deliveryServices: string[];
  paymentTerms: string;
  customer: string;
  items: ShipmentItem[];
}

interface ShipmentEntryProps {
  onProceedToCarriers: (shipments: Shipment[]) => void;
}

export default function ShipmentEntry({ onProceedToCarriers }: ShipmentEntryProps) {
  const [shipments, setShipments] = useState<Shipment[]>([{
    id: "1",
    origin: "Chicago Test Aug",
    destination: "Atlanta, GA, USA",
    pickupDate: "2025-08-13",
    deliveryDate: "10",
    shipmentServices: ["Expedited"],
    pickupServices: [],
    deliveryServices: [],
    paymentTerms: "Prepaid",
    customer: "Customer",
    items: [{
      id: "item-1",
      name: "Stuff",
      quantity: "1",
      unit: "Units",
      length: "10",
      width: "10",
      height: "5",
      dimensionUnit: "Inch",
      weight: "1,000",
      weightUnit: "Pound",
      freightClass: "50",
      hazmat: false,
      stackable: false
    }]
  }]);

  const [activeShipment, setActiveShipment] = useState(0);

  const updateShipment = (index: number, field: string, value: any) => {
    setShipments(prev => prev.map((shipment, i) => 
      i === index ? { ...shipment, [field]: value } : shipment
    ));
  };

  const updateShipmentItem = (shipmentIndex: number, itemIndex: number, field: string, value: any) => {
    setShipments(prev => prev.map((shipment, i) => 
      i === shipmentIndex ? {
        ...shipment,
        items: shipment.items.map((item, j) => 
          j === itemIndex ? { ...item, [field]: value } : item
        )
      } : shipment
    ));
  };

  const addItem = (shipmentIndex: number) => {
    const newItem: ShipmentItem = {
      id: `item-${Date.now()}`,
      name: "",
      quantity: "1",
      unit: "Units",
      length: "",
      width: "",
      height: "",
      dimensionUnit: "Inch",
      weight: "",
      weightUnit: "Pound",
      freightClass: "",
      hazmat: false,
      stackable: false
    };

    setShipments(prev => prev.map((shipment, i) => 
      i === shipmentIndex ? {
        ...shipment,
        items: [...shipment.items, newItem]
      } : shipment
    ));
  };

  const removeItem = (shipmentIndex: number, itemIndex: number) => {
    setShipments(prev => prev.map((shipment, i) => 
      i === shipmentIndex ? {
        ...shipment,
        items: shipment.items.filter((_, j) => j !== itemIndex)
      } : shipment
    ));
  };

  const addShipment = () => {
    const newShipment: Shipment = {
      id: `shipment-${Date.now()}`,
      origin: "",
      destination: "",
      pickupDate: "",
      deliveryDate: "",
      shipmentServices: [],
      pickupServices: [],
      deliveryServices: [],
      paymentTerms: "Prepaid",
      customer: "",
      items: [{
        id: `item-${Date.now()}`,
        name: "",
        quantity: "1",
        unit: "Units",
        length: "",
        width: "",
        height: "",
        dimensionUnit: "Inch",
        weight: "",
        weightUnit: "Pound",
        freightClass: "",
        hazmat: false,
        stackable: false
      }]
    };

    setShipments(prev => [...prev, newShipment]);
    setActiveShipment(shipments.length);
  };

  const removeShipment = (index: number) => {
    if (shipments.length > 1) {
      setShipments(prev => prev.filter((_, i) => i !== index));
      setActiveShipment(Math.max(0, activeShipment - 1));
    }
  };

  const toggleShipmentService = (shipmentIndex: number, service: string) => {
    setShipments(prev => prev.map((shipment, i) => 
      i === shipmentIndex ? {
        ...shipment,
        shipmentServices: shipment.shipmentServices.includes(service)
          ? shipment.shipmentServices.filter(s => s !== service)
          : [...shipment.shipmentServices, service]
      } : shipment
    ));
  };

  const currentShipment = shipments[activeShipment];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          
          
          {/* Shipment Tabs */}
          {shipments.length > 1 && (
            <div className="flex items-center gap-2 mb-4">
              {shipments.map((_, index) => (
                <div key={index} className="flex items-center">
                  <Button
                    variant={activeShipment === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveShipment(index)}
                    className="flex items-center gap-2"
                  >
                    Shipment {index + 1}
                    {shipments.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeShipment(index);
                        }}
                        className="ml-1 hover:text-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <Card>
          <CardContent className="p-6">
            {/* Basic Shipment Information */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
              {/* Origin */}
              <div className="space-y-2">
                <Label htmlFor="origin">Origin</Label>
                <Input
                  id="origin"
                  value={currentShipment.origin}
                  onChange={(e) => updateShipment(activeShipment, 'origin', e.target.value)}
                  placeholder="City, State"
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  value={currentShipment.destination}
                  onChange={(e) => updateShipment(activeShipment, 'destination', e.target.value)}
                  placeholder="City, State"
                />
              </div>

              {/* Pickup Date */}
              <div className="space-y-2">
                <Label htmlFor="pickup-date">Pickup date</Label>
                <Input
                  id="pickup-date"
                  type="date"
                  value={currentShipment.pickupDate}
                  onChange={(e) => updateShipment(activeShipment, 'pickupDate', e.target.value)}
                />
              </div>

              {/* Lead Time */}
              <div className="space-y-2">
                <Label htmlFor="lead-time">Lead Time</Label>
                <Input
                  id="lead-time"
                  value={currentShipment.deliveryDate}
                  onChange={(e) => updateShipment(activeShipment, 'deliveryDate', e.target.value)}
                  placeholder="Days"
                />
              </div>

              {/* Payment Terms */}
              <div className="space-y-2">
                <Label htmlFor="payment-terms">Payment terms</Label>
                <Select 
                  value={currentShipment.paymentTerms} 
                  onValueChange={(value) => updateShipment(activeShipment, 'paymentTerms', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Prepaid">Prepaid</SelectItem>
                    <SelectItem value="Collect">Collect</SelectItem>
                    <SelectItem value="Third Party">Third Party</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Shipment Services */}
                <div className="space-y-3">
                  <Label>Shipment services</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Expedited", "White Glove", "Inside Delivery"].map((service) => (
                      <Badge
                        key={service}
                        variant={currentShipment.shipmentServices.includes(service) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleShipmentService(activeShipment, service)}
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pickup Services */}
                <div className="space-y-3">
                  <Label>Pickup services</Label>
                  <div className="text-sm text-gray-500">Additional pickup options</div>
                </div>

                {/* Delivery Services */}
                <div className="space-y-3">
                  <Label>Delivery services</Label>
                  <div className="text-sm text-gray-500">Additional delivery options</div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Items */}
            <div className="space-y-4">
              {currentShipment.items.map((item, itemIndex) => (
                <div key={item.id} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Item {itemIndex + 1}</h3>
                    {currentShipment.items.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(activeShipment, itemIndex)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-10 gap-4">
                    {/* Item Name */}
                    <div className="lg:col-span-2 space-y-2">
                      <Label htmlFor={`item-name-${item.id}`}>Item name / ID</Label>
                      <Input
                        id={`item-name-${item.id}`}
                        value={item.name}
                        onChange={(e) => updateShipmentItem(activeShipment, itemIndex, 'name', e.target.value)}
                        placeholder="Description"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="space-y-2">
                      <Label htmlFor={`qty-${item.id}`}>Qty</Label>
                      <Input
                        id={`qty-${item.id}`}
                        value={item.quantity}
                        onChange={(e) => updateShipmentItem(activeShipment, itemIndex, 'quantity', e.target.value)}
                        placeholder="1"
                      />
                    </div>

                    {/* Unit */}
                    <div className="space-y-2">
                      <Label htmlFor={`unit-${item.id}`}>Unit</Label>
                      <Select 
                        value={item.unit} 
                        onValueChange={(value) => updateShipmentItem(activeShipment, itemIndex, 'unit', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Units">Units</SelectItem>
                          <SelectItem value="Boxes">Boxes</SelectItem>
                          <SelectItem value="Pallets">Pallets</SelectItem>
                          <SelectItem value="Cases">Cases</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Length */}
                    <div className="space-y-2">
                      <Label htmlFor={`length-${item.id}`}>Length</Label>
                      <Input
                        id={`length-${item.id}`}
                        value={item.length}
                        onChange={(e) => updateShipmentItem(activeShipment, itemIndex, 'length', e.target.value)}
                        placeholder="0"
                      />
                    </div>

                    {/* Width */}
                    <div className="space-y-2">
                      <Label htmlFor={`width-${item.id}`}>Width</Label>
                      <Input
                        id={`width-${item.id}`}
                        value={item.width}
                        onChange={(e) => updateShipmentItem(activeShipment, itemIndex, 'width', e.target.value)}
                        placeholder="0"
                      />
                    </div>

                    {/* Height */}
                    <div className="space-y-2">
                      <Label htmlFor={`height-${item.id}`}>Height</Label>
                      <Input
                        id={`height-${item.id}`}
                        value={item.height}
                        onChange={(e) => updateShipmentItem(activeShipment, itemIndex, 'height', e.target.value)}
                        placeholder="0"
                      />
                    </div>

                    {/* Dimension Unit */}
                    <div className="space-y-2">
                      <Label htmlFor={`dim-unit-${item.id}`}>Unit</Label>
                      <Select 
                        value={item.dimensionUnit} 
                        onValueChange={(value) => updateShipmentItem(activeShipment, itemIndex, 'dimensionUnit', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Inch">Inch</SelectItem>
                          <SelectItem value="Feet">Feet</SelectItem>
                          <SelectItem value="CM">CM</SelectItem>
                          <SelectItem value="M">M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Total Weight */}
                    <div className="space-y-2">
                      <Label htmlFor={`weight-${item.id}`}>Total weight</Label>
                      <Input
                        id={`weight-${item.id}`}
                        value={item.weight}
                        onChange={(e) => updateShipmentItem(activeShipment, itemIndex, 'weight', e.target.value)}
                        placeholder="0"
                      />
                    </div>

                    {/* Weight Unit */}
                    <div className="space-y-2">
                      <Label htmlFor={`weight-unit-${item.id}`}>Unit</Label>
                      <Select 
                        value={item.weightUnit} 
                        onValueChange={(value) => updateShipmentItem(activeShipment, itemIndex, 'weightUnit', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pound">Pound</SelectItem>
                          <SelectItem value="Kilogram">Kilogram</SelectItem>
                          <SelectItem value="Ton">Ton</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Freight Class */}
                    <div className="space-y-2">
                      <Label htmlFor={`freight-class-${item.id}`}>Freight class</Label>
                      <Input
                        id={`freight-class-${item.id}`}
                        value={item.freightClass}
                        onChange={(e) => updateShipmentItem(activeShipment, itemIndex, 'freightClass', e.target.value)}
                        placeholder="50"
                      />
                    </div>
                  </div>

                  {/* Hazmat and Stackable */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`hazmat-${item.id}`}
                        checked={item.hazmat}
                        onCheckedChange={(checked) => 
                          updateShipmentItem(activeShipment, itemIndex, 'hazmat', !!checked)
                        }
                      />
                      <Label htmlFor={`hazmat-${item.id}`}>Hazmat</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`stackable-${item.id}`}
                        checked={item.stackable}
                        onCheckedChange={(checked) => 
                          updateShipmentItem(activeShipment, itemIndex, 'stackable', !!checked)
                        }
                      />
                      <Label htmlFor={`stackable-${item.id}`}>Stackable</Label>
                    </div>
                  </div>

                  {itemIndex < currentShipment.items.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}

              {/* Add Item Button */}
              <Button
                variant="outline"
                onClick={() => addItem(activeShipment)}
                className="w-full mt-4 border-dashed text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={addShipment}
            className="text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add another shipment
          </Button>

          <Button
            onClick={() => onProceedToCarriers(shipments)}
            className="bg-[#0E71C8] hover:bg-[#0b599d] text-white px-8"
          >
            Shop rates/carriers
          </Button>
        </div>
      </div>
    </div>
  );
}