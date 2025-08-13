"use client";

import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterEquipment: string;
  onEquipmentChange: (value: string) => void;
  filterCapacity: string;
  onCapacityChange: (value: string) => void;
}

export default function FilterBar({
  searchTerm,
  onSearchChange,
  filterEquipment,
  onEquipmentChange,
  filterCapacity,
  onCapacityChange
}: FilterBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Empty space to match the shipments column */}
          <div></div>
          
          {/* Filter controls aligned with carrier columns */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Input 
                placeholder="Search carriers..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="flex-1"
              />
              <Select value={filterEquipment} onValueChange={onEquipmentChange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Equipment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Equipment</SelectItem>
                  <SelectItem value="Dry Van">Dry Van</SelectItem>
                  <SelectItem value="Reefer">Reefer</SelectItem>
                  <SelectItem value="Flatbed">Flatbed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterCapacity} onValueChange={onCapacityChange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Capacity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Capacity</SelectItem>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Limited">Limited</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}