"use client";

import { useState, useMemo } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
import { Progress } from "./components/ui/progress";
import { Separator } from "./components/ui/separator";
import { Switch } from "./components/ui/switch";
import { Label } from "./components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { Star, MapPin, Clock, DollarSign, Truck, Users, TrendingUp, AlertCircle, CheckCircle, Filter, Settings, Building, FileText, Calendar, X, Package, Sparkles, Phone, Mail, Shield, Award, TrendingDown, Clock3, Database, Eye, ChevronRight, BarChart3, Activity, Target, ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "./components/ui/checkbox";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./components/ui/dialog";
import ShipmentEntry from "./components/ShipmentEntry";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";

// Types for shipment data from entry screen
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

interface EnteredShipment {
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

// Mock data for carrier matching
const loads = [
  {
    id: "74629183",
    origin: "Chicago, IL",
    destination: "Atlanta, GA",
    pickupDate: "2025-08-15",
    deliveryDate: "2025-08-17",
    weight: "45,000 lbs",
    equipment: "Dry Van",
    distance: "715 miles",
    rate: "$2,150",
    status: "needs_carrier",
    priority: "high",
    customer: "WalCorp Industries",
    commodity: "Electronics",
    specialInstructions: "Temperature sensitive - no extreme heat",
    loadValue: "$125,000",
    postedTime: "2 hours ago",
    // Enhanced pricing intelligence
    pricingIntelligence: {
      marketRates: {
        average: "$2,225",
        low: "$1,950",
        high: "$2,450",
        confidence: 85
      },
      laneAnalysis: {
        volume: "High",
        demand: "Strong",
        capacity: "Tight",
        seasonalTrend: "Above average"
      },
      recommendations: {
        suggestedRate: "$2,175",
        competitive: "$2,050",
        premium: "$2,300"
      },
      historicalTrends: [
        { period: "Last 30 days", rate: "$2,180" },
        { period: "Last 60 days", rate: "$2,125" },
        { period: "Last 90 days", rate: "$2,080" },
        { period: "Same period last year", rate: "$1,950" }
      ],
      priceFactors: {
        fuelSurcharge: "$125",
        equipmentType: "Standard",
        loadCharacteristics: "Electronics - high value",
        marketDemand: "Above average"
      },
      competitorRates: [
        { source: "DAT", rate: "$2,200", updated: "2 hours ago" },
        { source: "Truckstop.com", rate: "$2,180", updated: "4 hours ago" },
        { source: "123Loadboard", rate: "$2,250", updated: "1 hour ago" }
      ]
    }
  },
  {
    id: "92847651", 
    origin: "Los Angeles, CA",
    destination: "Denver, CO",
    pickupDate: "2025-08-16",
    deliveryDate: "2025-08-18",
    weight: "38,500 lbs",
    equipment: "Reefer",
    distance: "1,025 miles",
    rate: "$3,200",
    status: "needs_carrier",
    priority: "medium",
    customer: "Fresh Foods LLC",
    commodity: "Frozen goods",
    specialInstructions: "Maintain -10°F throughout transit",
    loadValue: "$85,000",
    postedTime: "4 hours ago",
    pricingIntelligence: {
      marketRates: {
        average: "$3,175",
        low: "$2,950",
        high: "$3,400",
        confidence: 92
      },
      laneAnalysis: {
        volume: "Medium",
        demand: "Moderate",
        capacity: "Balanced",
        seasonalTrend: "Seasonal peak"
      },
      recommendations: {
        suggestedRate: "$3,150",
        competitive: "$3,100",
        premium: "$3,350"
      },
      historicalTrends: [
        { period: "Last 30 days", rate: "$3,225" },
        { period: "Last 60 days", rate: "$3,175" },
        { period: "Last 90 days", rate: "$3,125" },
        { period: "Same period last year", rate: "$2,875" }
      ],
      priceFactors: {
        fuelSurcharge: "$185",
        equipmentType: "Reefer premium",
        loadCharacteristics: "Temperature controlled",
        marketDemand: "Moderate"
      },
      competitorRates: [
        { source: "DAT", rate: "$3,150", updated: "1 hour ago" },
        { source: "Truckstop.com", rate: "$3,225", updated: "3 hours ago" },
        { source: "123Loadboard", rate: "$3,175", updated: "2 hours ago" }
      ]
    }
  },
  {
    id: "58139724",
    origin: "Houston, TX",
    destination: "Phoenix, AZ",
    pickupDate: "2025-08-17",
    deliveryDate: "2025-08-19",
    weight: "42,000 lbs",
    equipment: "Flatbed",
    distance: "1,180 miles",
    rate: "$2,850",
    status: "needs_carrier",
    priority: "high",
    customer: "Steel Dynamics Inc",
    commodity: "Steel beams",
    specialInstructions: "Tarps required - secure load properly",
    loadValue: "$95,000",
    postedTime: "1 hour ago",
    pricingIntelligence: {
      marketRates: {
        average: "$2,925",
        low: "$2,650",
        high: "$3,150",
        confidence: 78
      },
      laneAnalysis: {
        volume: "Low",
        demand: "High",
        capacity: "Very tight",
        seasonalTrend: "Above average"
      },
      recommendations: {
        suggestedRate: "$2,975",
        competitive: "$2,825",
        premium: "$3,125"
      },
      historicalTrends: [
        { period: "Last 30 days", rate: "$2,775" },
        { period: "Last 60 days", rate: "$2,650" },
        { period: "Last 90 days", rate: "$2,525" },
        { period: "Same period last year", rate: "$2,350" }
      ],
      priceFactors: {
        fuelSurcharge: "$165",
        equipmentType: "Flatbed specialty",
        loadCharacteristics: "Heavy steel - tarping required",
        marketDemand: "High"
      },
      competitorRates: [
        { source: "DAT", rate: "$2,950", updated: "30 min ago" },
        { source: "Truckstop.com", rate: "$2,875", updated: "1 hour ago" },
        { source: "123Loadboard", rate: "$2,995", updated: "45 min ago" }
      ]
    }
  },
  {
    id: "36475918",
    origin: "Seattle, WA",
    destination: "Miami, FL",
    pickupDate: "2025-08-18",
    deliveryDate: "2025-08-22",
    weight: "35,000 lbs",
    equipment: "Dry Van",
    distance: "3,285 miles",
    rate: "$4,500",
    status: "needs_carrier",
    priority: "low",
    customer: "Pacific Trading Co",
    commodity: "Consumer goods",
    specialInstructions: "Multiple stops allowed",
    loadValue: "$65,000",
    postedTime: "6 hours ago",
    pricingIntelligence: {
      marketRates: {
        average: "$4,650",
        low: "$4,200",
        high: "$5,100",
        confidence: 71
      },
      laneAnalysis: {
        volume: "Very low",
        demand: "Low",
        capacity: "Loose",
        seasonalTrend: "Below average"
      },
      recommendations: {
        suggestedRate: "$4,625",
        competitive: "$4,450",
        premium: "$4,850"
      },
      historicalTrends: [
        { period: "Last 30 days", rate: "$4,725" },
        { period: "Last 60 days", rate: "$4,625" },
        { period: "Last 90 days", rate: "$4,575" },
        { period: "Same period last year", rate: "$4,125" }
      ],
      priceFactors: {
        fuelSurcharge: "$425",
        equipmentType: "Standard",
        loadCharacteristics: "Long haul - consumer goods",
        marketDemand: "Low"
      },
      competitorRates: [
        { source: "DAT", rate: "$4,575", updated: "5 hours ago" },
        { source: "Truckstop.com", rate: "$4,650", updated: "4 hours ago" },
        { source: "123Loadboard", rate: "$4,525", updated: "6 hours ago" }
      ]
    }
  },
  {
    id: "83256417",
    origin: "Boston, MA",
    destination: "Charlotte, NC",
    pickupDate: "2025-08-16",
    deliveryDate: "2025-08-18",
    weight: "28,000 lbs",
    equipment: "Reefer",
    distance: "840 miles",
    rate: "$2,650",
    status: "needs_carrier",
    priority: "medium",
    customer: "MedSupply Corp",
    commodity: "Pharmaceuticals",
    specialInstructions: "FDA approved carrier required",
    loadValue: "$180,000",
    postedTime: "3 hours ago",
    pricingIntelligence: {
      marketRates: {
        average: "$2,725",
        low: "$2,450",
        high: "$3,000",
        confidence: 88
      },
      laneAnalysis: {
        volume: "Medium",
        demand: "Strong",
        capacity: "Tight",
        seasonalTrend: "Stable"
      },
      recommendations: {
        suggestedRate: "$2,775",
        competitive: "$2,650",
        premium: "$2,950"
      },
      historicalTrends: [
        { period: "Last 30 days", rate: "$2,675" },
        { period: "Last 60 days", rate: "$2,625" },
        { period: "Last 90 days", rate: "$2,575" },
        { period: "Same period last year", rate: "$2,425" }
      ],
      priceFactors: {
        fuelSurcharge: "$115",
        equipmentType: "Reefer + pharma certified",
        loadCharacteristics: "Pharmaceuticals - high value/compliance",
        marketDemand: "Strong"
      },
      competitorRates: [
        { source: "DAT", rate: "$2,750", updated: "2 hours ago" },
        { source: "Truckstop.com", rate: "$2,695", updated: "3 hours ago" },
        { source: "123Loadboard", rate: "$2,775", updated: "1 hour ago" }
      ]
    }
  }
];

const networkCarriers = [
  {
    id: "C001",
    name: "Reliable Transport Co",
    type: "network",
    rating: 4.8,
    onTimeDelivery: 96,
    capacity: "Available",
    equipment: ["Dry Van", "Reefer"],
    rate: "$2,100",
    marketPosition: "below",
    distance: "12 miles",
    lastUsed: "2 days ago",
    totalLoads: 847,
    claims: 0.2,
    insurance: "$1M",
    preferredStatus: true,
    // Additional detail view data
    assets: {
      trucks: 45,
      trailers: 52,
      drivers: 38
    },
    contact: {
      phone: "(555) 123-4567",
      email: "dispatch@reliabletransport.com",
      primaryContact: "Mike Johnson",
      address: "1234 Industrial Blvd, Chicago, IL 60618"
    },
    riskScore: 85,
    identityManaged: true,
    certifications: ["DOT Compliant", "FMCSA Registered", "HAZMAT Certified"],
    insuranceDetails: {
      liability: "$1,000,000",
      cargo: "$100,000",
      lastUpdated: "2025-06-15"
    },
    performanceMetrics: {
      avgDeliveryTime: "2.1 days",
      customerSatisfaction: 4.7,
      disputeRate: 0.8,
      cancellationRate: 1.2
    },
    priceHistory: [
      { month: "Jan", price: 2050 },
      { month: "Feb", price: 2075 },
      { month: "Mar", price: 2100 },
      { month: "Apr", price: 2125 },
      { month: "May", price: 2100 }
    ],
    networkAdoption: 78,
    dataSource: "Internal Network",
    lastUpdated: "2025-08-12 14:30"
  },
  {
    id: "C002",
    name: "Midwest Logistics",
    type: "network", 
    rating: 4.6,
    onTimeDelivery: 94,
    capacity: "Limited",
    equipment: ["Dry Van", "Flatbed"],
    rate: "$2,250",
    marketPosition: "market",
    distance: "8 miles",
    lastUsed: "1 week ago",
    totalLoads: 523,
    claims: 0.5,
    insurance: "$1M",
    preferredStatus: true,
    assets: {
      trucks: 28,
      trailers: 35,
      drivers: 24
    },
    contact: {
      phone: "(555) 987-6543",
      email: "ops@midwestlogistics.com",
      primaryContact: "Sarah Williams",
      address: "5678 Commerce Dr, Milwaukee, WI 53201"
    },
    riskScore: 72,
    identityManaged: true,
    certifications: ["DOT Compliant", "FMCSA Registered"],
    insuranceDetails: {
      liability: "$1,000,000",
      cargo: "$75,000",
      lastUpdated: "2025-07-20"
    },
    performanceMetrics: {
      avgDeliveryTime: "2.3 days",
      customerSatisfaction: 4.4,
      disputeRate: 1.5,
      cancellationRate: 2.1
    },
    priceHistory: [
      { month: "Jan", price: 2200 },
      { month: "Feb", price: 2225 },
      { month: "Mar", price: 2250 },
      { month: "Apr", price: 2275 },
      { month: "May", price: 2250 }
    ],
    networkAdoption: 65,
    dataSource: "Internal Network",
    lastUpdated: "2025-08-12 09:15"
  },
  {
    id: "C003",
    name: "Swift Delivery Express",
    type: "network",
    rating: 4.7,
    onTimeDelivery: 95,
    capacity: "Available",
    equipment: ["Dry Van", "Reefer"],
    rate: "$2,050",
    marketPosition: "below",
    distance: "15 miles",
    lastUsed: "4 days ago",
    totalLoads: 1250,
    claims: 0.3,
    insurance: "$2M",
    preferredStatus: false,
    assets: {
      trucks: 62,
      trailers: 78,
      drivers: 55
    },
    contact: {
      phone: "(555) 456-7890",
      email: "dispatch@swiftdelivery.com",
      primaryContact: "David Chen",
      address: "9101 Transport Way, Detroit, MI 48201"
    },
    riskScore: 88,
    identityManaged: false,
    certifications: ["DOT Compliant", "FMCSA Registered", "HAZMAT Certified", "Temperature Controlled"],
    insuranceDetails: {
      liability: "$2,000,000",
      cargo: "$150,000",
      lastUpdated: "2025-08-01"
    },
    performanceMetrics: {
      avgDeliveryTime: "1.9 days",
      customerSatisfaction: 4.6,
      disputeRate: 0.6,
      cancellationRate: 0.9
    },
    priceHistory: [
      { month: "Jan", price: 2000 },
      { month: "Feb", price: 2025 },
      { month: "Mar", price: 2050 },
      { month: "Apr", price: 2075 },
      { month: "May", price: 2050 }
    ],
    networkAdoption: 42,
    dataSource: "Internal Network",
    lastUpdated: "2025-08-12 16:45"
  },
  {
    id: "C004",
    name: "Premier Freight Solutions",
    type: "network",
    rating: 4.9,
    onTimeDelivery: 97,
    capacity: "Available",
    equipment: ["Dry Van", "Reefer", "Flatbed"],
    rate: "$2,175",
    marketPosition: "market",
    distance: "22 miles",
    lastUsed: "2 days ago",
    totalLoads: 892,
    claims: 0.1,
    insurance: "$2M",
    preferredStatus: false,
    assets: {
      trucks: 85,
      trailers: 105,
      drivers: 78
    },
    contact: {
      phone: "(555) 321-0987",
      email: "operations@premierfreight.com",
      primaryContact: "Lisa Rodriguez",
      address: "2468 Freight Ave, Indianapolis, IN 46201"
    },
    riskScore: 92,
    identityManaged: true,
    certifications: ["DOT Compliant", "FMCSA Registered", "HAZMAT Certified", "Temperature Controlled", "ISO 9001"],
    insuranceDetails: {
      liability: "$2,000,000",
      cargo: "$200,000",
      lastUpdated: "2025-08-05"
    },
    performanceMetrics: {
      avgDeliveryTime: "1.8 days",
      customerSatisfaction: 4.8,
      disputeRate: 0.3,
      cancellationRate: 0.5
    },
    priceHistory: [
      { month: "Jan", price: 2150 },
      { month: "Feb", price: 2160 },
      { month: "Mar", price: 2175 },
      { month: "Apr", price: 2185 },
      { month: "May", price: 2175 }
    ],
    networkAdoption: 89,
    dataSource: "Internal Network",
    lastUpdated: "2025-08-12 11:20"
  },
  {
    id: "C005",
    name: "Metro Transport Solutions",
    type: "network",
    rating: 4.9,
    onTimeDelivery: 98,
    capacity: "Limited",
    equipment: ["Dry Van", "Reefer", "Flatbed"],
    rate: "$2,175",
    marketPosition: "market",
    distance: "15 miles",
    lastUsed: "1 day ago",
    totalLoads: 1205,
    claims: 0.1,
    insurance: "$2M",
    preferredStatus: true,
    assets: {
      trucks: 95,
      trailers: 120,
      drivers: 88
    },
    contact: {
      phone: "(555) 654-3210",
      email: "dispatch@metrotransport.com",
      primaryContact: "Robert Kim",
      address: "1357 Metro Pkwy, Columbus, OH 43215"
    },
    riskScore: 94,
    identityManaged: true,
    certifications: ["DOT Compliant", "FMCSA Registered", "HAZMAT Certified", "Temperature Controlled", "ISO 9001", "SmartWay Certified"],
    insuranceDetails: {
      liability: "$2,000,000",
      cargo: "$250,000",
      lastUpdated: "2025-08-10"
    },
    performanceMetrics: {
      avgDeliveryTime: "1.7 days",
      customerSatisfaction: 4.9,
      disputeRate: 0.2,
      cancellationRate: 0.3
    },
    priceHistory: [
      { month: "Jan", price: 2150 },
      { month: "Feb", price: 2165 },
      { month: "Mar", price: 2175 },
      { month: "Apr", price: 2180 },
      { month: "May", price: 2175 }
    ],
    networkAdoption: 95,
    dataSource: "Internal Network",
    lastUpdated: "2025-08-12 13:55"
  }
];

const recommendedCarriers = [
  {
    id: "R001",
    name: "BlueLine Freight",
    type: "recommended",
    rating: 4.7,
    onTimeDelivery: 95,
    capacity: "Available",
    equipment: ["Reefer", "Dry Van"],
    rate: "$2,050",
    marketPosition: "below",
    distance: "18 miles",
    matchScore: 92,
    totalLoads: 672,
    claims: 0.3,
    insurance: "$1M",
    preferredStatus: false,
    assets: {
      trucks: 32,
      trailers: 40,
      drivers: 28
    },
    contact: {
      phone: "(555) 789-0123",
      email: "dispatch@bluelinefreight.com",
      primaryContact: "Jennifer Martinez",
      address: "7890 Blue Line Dr, Phoenix, AZ 85001"
    },
    riskScore: 79,
    identityManaged: true,
    certifications: ["DOT Compliant", "FMCSA Registered", "Temperature Controlled"],
    insuranceDetails: {
      liability: "$1,000,000",
      cargo: "$100,000",
      lastUpdated: "2025-07-15"
    },
    performanceMetrics: {
      avgDeliveryTime: "2.0 days",
      customerSatisfaction: 4.5,
      disputeRate: 1.1,
      cancellationRate: 1.8
    },
    priceHistory: [
      { month: "Jan", price: 2025 },
      { month: "Feb", price: 2040 },
      { month: "Mar", price: 2050 },
      { month: "Apr", price: 2060 },
      { month: "May", price: 2050 }
    ],
    networkAdoption: 67,
    dataSource: "External Network API",
    lastUpdated: "2025-08-12 15:20"
  },
  {
    id: "R002",
    name: "Express Haulers LLC",
    type: "recommended",
    rating: 4.4,
    onTimeDelivery: 92,
    capacity: "Available",
    equipment: ["Flatbed", "Dry Van"],
    rate: "$2,300",
    marketPosition: "market",
    distance: "25 miles",
    matchScore: 89,
    totalLoads: 391,
    claims: 0.4,
    insurance: "$1M",
    preferredStatus: false,
    assets: {
      trucks: 18,
      trailers: 22,
      drivers: 16
    },
    contact: {
      phone: "(555) 234-5678",
      email: "dispatch@expresshaulers.com",
      primaryContact: "Mark Thompson",
      address: "4567 Hauler St, Dallas, TX 75201"
    },
    riskScore: 68,
    identityManaged: false,
    certifications: ["DOT Compliant", "FMCSA Registered"],
    insuranceDetails: {
      liability: "$1,000,000",
      cargo: "$50,000",
      lastUpdated: "2025-05-30"
    },
    performanceMetrics: {
      avgDeliveryTime: "2.4 days",
      customerSatisfaction: 4.2,
      disputeRate: 2.1,
      cancellationRate: 2.8
    },
    priceHistory: [
      { month: "Jan", price: 2250 },
      { month: "Feb", price: 2275 },
      { month: "Mar", price: 2300 },
      { month: "Apr", price: 2325 },
      { month: "May", price: 2300 }
    ],
    networkAdoption: 45,
    dataSource: "External Network API",
    lastUpdated: "2025-08-12 10:45"
  },
  {
    id: "R003",
    name: "National Cargo Lines",
    type: "recommended",
    rating: 4.5,
    onTimeDelivery: 93,
    capacity: "Available",
    equipment: ["Dry Van"],
    rate: "$2,225",
    marketPosition: "market",
    distance: "31 miles",
    matchScore: 85,
    totalLoads: 1650,
    claims: 0.4,
    insurance: "$1M",
    preferredStatus: false,
    assets: {
      trucks: 125,
      trailers: 150,
      drivers: 110
    },
    contact: {
      phone: "(555) 345-6789",
      email: "ops@nationalcargo.com",
      primaryContact: "Amanda Davis",
      address: "8901 Cargo Way, Atlanta, GA 30301"
    },
    riskScore: 74,
    identityManaged: true,
    certifications: ["DOT Compliant", "FMCSA Registered", "ISO 9001"],
    insuranceDetails: {
      liability: "$1,000,000",
      cargo: "$125,000",
      lastUpdated: "2025-06-25"
    },
    performanceMetrics: {
      avgDeliveryTime: "2.2 days",
      customerSatisfaction: 4.3,
      disputeRate: 1.8,
      cancellationRate: 2.2
    },
    priceHistory: [
      { month: "Jan", price: 2200 },
      { month: "Feb", price: 2215 },
      { month: "Mar", price: 2225 },
      { month: "Apr", price: 2240 },
      { month: "May", price: 2225 }
    ],
    networkAdoption: 58,
    dataSource: "External Network API",
    lastUpdated: "2025-08-12 12:30"
  },
  {
    id: "R004",
    name: "Apex Transportation",
    type: "recommended",
    rating: 4.6,
    onTimeDelivery: 94,
    capacity: "Limited",
    equipment: ["Reefer", "Dry Van"],
    rate: "$2,100",
    marketPosition: "below",
    distance: "28 miles",
    matchScore: 88,
    totalLoads: 743,
    claims: 0.3,
    insurance: "$1M",
    preferredStatus: false
  },
  {
    id: "R005",
    name: "Lightning Logistics",
    type: "recommended",
    rating: 4.8,
    onTimeDelivery: 96,
    capacity: "Available",
    equipment: ["Flatbed", "Dry Van"],
    rate: "$2,075",
    marketPosition: "below",
    distance: "19 miles",
    matchScore: 91,
    totalLoads: 1089,
    claims: 0.2,
    insurance: "$2M",
    preferredStatus: false
  },
  {
    id: "R006",
    name: "CrossCountry Carriers",
    type: "recommended",
    rating: 4.3,
    onTimeDelivery: 91,
    capacity: "Available",
    equipment: ["Dry Van", "Reefer"],
    rate: "$2,250",
    marketPosition: "market",
    distance: "35 miles",
    matchScore: 82,
    totalLoads: 2100,
    claims: 0.5,
    insurance: "$1M",
    preferredStatus: false
  },
  {
    id: "R007",
    name: "Elite Freight Co",
    type: "recommended",
    rating: 4.9,
    onTimeDelivery: 98,
    capacity: "Limited",
    equipment: ["Reefer", "Dry Van", "Flatbed"],
    rate: "$2,300",
    marketPosition: "above",
    distance: "12 miles",
    matchScore: 94,
    totalLoads: 567,
    claims: 0.1,
    insurance: "$2M",
    preferredStatus: false
  },
  {
    id: "R008",
    name: "Highway Heroes",
    type: "recommended",
    rating: 4.4,
    onTimeDelivery: 92,
    capacity: "Available",
    equipment: ["Dry Van"],
    rate: "$2,125",
    marketPosition: "below",
    distance: "42 miles",
    matchScore: 86,
    totalLoads: 934,
    claims: 0.4,
    insurance: "$1M",
    preferredStatus: false
  },
  {
    id: "R009",
    name: "Velocity Transport",
    type: "recommended",
    rating: 4.7,
    onTimeDelivery: 95,
    capacity: "Available",
    equipment: ["Flatbed", "Dry Van"],
    rate: "$2,150",
    marketPosition: "market",
    distance: "26 miles",
    matchScore: 87,
    totalLoads: 1456,
    claims: 0.3,
    insurance: "$1M",
    preferredStatus: false
  },
  {
    id: "R010",
    name: "Titan Trucking",
    type: "recommended",
    rating: 4.5,
    onTimeDelivery: 93,
    capacity: "Limited",
    equipment: ["Reefer"],
    rate: "$2,275",
    marketPosition: "market",
    distance: "38 miles",
    matchScore: 84,
    totalLoads: 678,
    claims: 0.4,
    insurance: "$1M",
    preferredStatus: false
  },
  {
    id: "R011",
    name: "ProHaul Systems",
    type: "recommended",
    rating: 4.6,
    onTimeDelivery: 94,
    capacity: "Available",
    equipment: ["Dry Van", "Flatbed"],
    rate: "$2,200",
    marketPosition: "market",
    distance: "29 miles",
    matchScore: 85,
    totalLoads: 1123,
    claims: 0.3,
    insurance: "$1M",
    preferredStatus: false
  },
  {
    id: "R012",
    name: "Rapid Route Inc",
    type: "recommended",
    rating: 4.8,
    onTimeDelivery: 96,
    capacity: "Available",
    equipment: ["Reefer", "Dry Van"],
    rate: "$2,125",
    marketPosition: "below",
    distance: "17 miles",
    matchScore: 90,
    totalLoads: 845,
    claims: 0.2,
    insurance: "$2M",
    preferredStatus: false
  },
  {
    id: "R013",
    name: "Continental Express",
    type: "recommended",
    rating: 4.4,
    onTimeDelivery: 92,
    capacity: "Limited",
    equipment: ["Dry Van"],
    rate: "$2,325",
    marketPosition: "above",
    distance: "45 miles",
    matchScore: 81,
    totalLoads: 1789,
    claims: 0.5,
    insurance: "$1M",
    preferredStatus: false
  },
  {
    id: "R014",
    name: "Skyline Shipping",
    type: "recommended",
    rating: 4.7,
    onTimeDelivery: 95,
    capacity: "Available",
    equipment: ["Flatbed", "Reefer"],
    rate: "$2,175",
    marketPosition: "market",
    distance: "33 miles",
    matchScore: 88,
    totalLoads: 967,
    claims: 0.3,
    insurance: "$1M",
    preferredStatus: false
  },
  {
    id: "R015",
    name: "Pinnacle Logistics",
    type: "recommended",
    rating: 4.9,
    onTimeDelivery: 97,
    capacity: "Available",
    equipment: ["Dry Van", "Reefer", "Flatbed"],
    rate: "$2,250",
    marketPosition: "market",
    distance: "21 miles",
    matchScore: 93,
    totalLoads: 1534,
    claims: 0.1,
    insurance: "$2M",
    preferredStatus: false
  }
];

export default function App() {
  // Screen navigation state
  const [currentScreen, setCurrentScreen] = useState<'dashboard' | 'entry' | 'matching'>('dashboard');
  const [enteredShipments, setEnteredShipments] = useState<EnteredShipment[]>([]);

  // Existing state for carrier matching screen
  const [selectedLoad, setSelectedLoad] = useState(loads[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEquipment, setFilterEquipment] = useState("all");
  const [filterCapacity, setFilterCapacity] = useState("all");
  const [selectedCarriers, setSelectedCarriers] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("network");
  const [preferences, setPreferences] = useState({
    prioritizeCost: true,
    prioritizeService: false,
    prioritizeSpeed: false,
    onlyPreferred: false
  });
  const [selectedCarrierForDetail, setSelectedCarrierForDetail] = useState<any>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [postAmount, setPostAmount] = useState("");
  const [expandedMarketIntelligence, setExpandedMarketIntelligence] = useState(false);

  const allCarriers = [...networkCarriers, ...recommendedCarriers];

  const filteredCarriers = useMemo(() => {
    return allCarriers.filter(carrier => {
      const matchesSearch = carrier.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesEquipment = filterEquipment === "all" || carrier.equipment.includes(filterEquipment);
      const matchesCapacity = filterCapacity === "all" || carrier.capacity === filterCapacity;
      const matchesPreferred = !preferences.onlyPreferred || carrier.preferredStatus;
      
      return matchesSearch && matchesEquipment && matchesCapacity && matchesPreferred;
    });
  }, [searchTerm, filterEquipment, filterCapacity, preferences.onlyPreferred]);

  const getRecommendedCarriers = () => {
    let carriers = [...filteredCarriers];
    
    // Get user's best carriers for comparison
    const userCarriers = carriers.filter(c => c.type === 'network');
    const bestUserRating = Math.max(...userCarriers.map(c => c.rating));
    const bestUserOnTime = Math.max(...userCarriers.map(c => c.onTimeDelivery));
    const lowestUserRate = Math.min(...userCarriers.map(c => parseFloat(c.rate.replace(/[$,]/g, ''))));
    
    // Separate network carriers and user carriers
    const networkCarriers = carriers.filter(c => c.type === 'recommended');
    const yourCarriers = carriers.filter(c => c.type === 'network');
    
    // Find superior network carriers based on user preferences
    const superiorNetworkCarriers = networkCarriers.filter(carrier => {
      if (preferences.prioritizeCost) {
        return parseFloat(carrier.rate.replace(/[$,]/g, '')) < lowestUserRate;
      } else if (preferences.prioritizeService) {
        return carrier.rating > bestUserRating;
      } else if (preferences.prioritizeSpeed) {
        return carrier.onTimeDelivery > bestUserOnTime;
      } else {
        // Default: carrier is superior if it beats user's best in any key metric
        return carrier.rating > bestUserRating || 
               carrier.onTimeDelivery > bestUserOnTime || 
               parseFloat(carrier.rate.replace(/[$,]/g, '')) < lowestUserRate;
      }
    });
    
    // Sort superior network carriers
    if (preferences.prioritizeCost) {
      superiorNetworkCarriers.sort((a, b) => parseFloat(a.rate.replace(/[$,]/g, '')) - parseFloat(b.rate.replace(/[$,]/g, '')));
    } else if (preferences.prioritizeService) {
      superiorNetworkCarriers.sort((a, b) => b.rating - a.rating);
    } else if (preferences.prioritizeSpeed) {
      superiorNetworkCarriers.sort((a, b) => b.onTimeDelivery - a.onTimeDelivery);
    } else {
      // Default sort by overall value (rating + on-time - cost factor)
      superiorNetworkCarriers.sort((a, b) => {
        const scoreA = a.rating + (a.onTimeDelivery / 100) - (parseFloat(a.rate.replace(/[$,]/g, '')) / 10000);
        const scoreB = b.rating + (b.onTimeDelivery / 100) - (parseFloat(b.rate.replace(/[$,]/g, '')) / 10000);
        return scoreB - scoreA;
      });
    }
    
    // Sort remaining carriers (both network and user carriers)
    const remainingCarriers = [...networkCarriers.filter(c => !superiorNetworkCarriers.includes(c)), ...yourCarriers];
    if (preferences.prioritizeCost) {
      remainingCarriers.sort((a, b) => parseFloat(a.rate.replace(/[$,]/g, '')) - parseFloat(b.rate.replace(/[$,]/g, '')));
    } else if (preferences.prioritizeService) {
      remainingCarriers.sort((a, b) => b.rating - a.rating);
    } else if (preferences.prioritizeSpeed) {
      remainingCarriers.sort((a, b) => b.onTimeDelivery - a.onTimeDelivery);
    } else {
      remainingCarriers.sort((a, b) => {
        const scoreA = a.rating + (a.onTimeDelivery / 100) - (parseFloat(a.rate.replace(/[$,]/g, '')) / 10000);
        const scoreB = b.rating + (b.onTimeDelivery / 100) - (parseFloat(b.rate.replace(/[$,]/g, '')) / 10000);
        return scoreB - scoreA;
      });
    }
    
    // Combine: superior network carriers first, then remaining carriers
    const finalCarriers = [...superiorNetworkCarriers, ...remainingCarriers];
    
    return finalCarriers.slice(0, 3);
  };

  const toggleCarrierSelection = (carrierId: string) => {
    const carrier = allCarriers.find(c => c.id === carrierId);
    if (!carrier) return;

    setSelectedCarriers(prev => {
      // If removing the carrier
      if (prev.includes(carrierId)) {
        return prev.filter(id => id !== carrierId);
      }
      
      // If adding the carrier, check type compatibility
      if (prev.length > 0) {
        const firstSelectedCarrier = allCarriers.find(c => c.id === prev[0]);
        if (firstSelectedCarrier && firstSelectedCarrier.type !== carrier.type) {
          // Clear previous selections and start fresh with new type
          return [carrierId];
        }
      }
      
      return [...prev, carrierId];
    });
  };

  const getSelectedCarrierType = () => {
    if (selectedCarriers.length === 0) return null;
    const firstCarrier = allCarriers.find(c => c.id === selectedCarriers[0]);
    return firstCarrier?.type || null;
  };

  const clearAllSelections = () => {
    setSelectedCarriers([]);
  };

  const handleGlobalAction = () => {
    const carrierType = getSelectedCarrierType();
    if (carrierType === 'network') {
      // Handle Offer action for Your Carriers
      console.log('Offering to carriers:', selectedCarriers);
      // Add your offer logic here
    } else if (carrierType === 'recommended') {
      // Open post modal for Network Carriers
      const marketRate = selectedLoad.rate.replace(/[$,]/g, '');
      setPostAmount(marketRate);
      setShowPostModal(true);
    }
  };

  const handlePostLoad = () => {
    console.log('Posting load to carriers:', selectedCarriers, 'for amount:', postAmount);
    // Add your post logic here
    setShowPostModal(false);
    // Optionally clear selections after posting
    setSelectedCarriers([]);
  };

  const getMarketPositionColor = (position: string) => {
    switch (position) {
      case "below": return "text-[#1a7f5a]";
      case "above": return "text-[#da1f16]";
      default: return "text-[#dfaf01]";
    }
  };

  const getMarketPositionText = (position: string) => {
    switch (position) {
      case "below": return "Below Market";
      case "above": return "Above Market";
      default: return "Market Rate";
    }
  };

  const handleStartShipment = () => {
    setCurrentScreen('entry');
  };

  const handleProceedToCarriers = (shipments: EnteredShipment[]) => {
    setEnteredShipments(shipments);
    setCurrentScreen('matching');
  };

  const handleBackToEntry = () => {
    setCurrentScreen('entry');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  // Helper function to generate breadcrumbs based on current screen
  const getBreadcrumbs = () => {
    const breadcrumbs = [];
    
    if (currentScreen === 'entry') {
      breadcrumbs.push(
        { label: "New Shipment", isCurrentPage: true }
      );
    } else if (currentScreen === 'matching') {
      breadcrumbs.push(
        { label: "New Shipment", onClick: handleBackToEntry },
        { label: "Carrier Matching", isCurrentPage: true }
      );
    }
    
    return breadcrumbs;
  };

  // Show dashboard screen
  if (currentScreen === 'dashboard') {
    return (
      <div className="flex">
        <Navigation onDashboardClick={handleBackToDashboard} currentScreen={currentScreen} />
        <div className="flex-1 ml-16">
          <Dashboard onStartShipment={handleStartShipment} />
        </div>
      </div>
    );
  }

  // Show shipment entry screen
  if (currentScreen === 'entry') {
    return (
      <div className="flex">
        <Navigation onDashboardClick={handleBackToDashboard} currentScreen={currentScreen} />
        <div className="flex-1 ml-16">
          <div className="min-h-screen bg-white">
            <Header
              title="New Shipment"
              breadcrumbs={getBreadcrumbs()}
            />
            <ShipmentEntry onProceedToCarriers={handleProceedToCarriers} />
          </div>
        </div>
      </div>
    );
  }

  // Show carrier matching screen
  return (
    <div className="flex">
      <Navigation onDashboardClick={handleBackToDashboard} currentScreen={currentScreen} />
      <div className="flex-1 ml-16">
        <div className="min-h-screen bg-white">
          <Header
            title="Shipment / carrier matching"
            breadcrumbs={getBreadcrumbs()}
          />
          
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filterEquipment={filterEquipment}
            onEquipmentChange={setFilterEquipment}
            filterCapacity={filterCapacity}
            onCapacityChange={setFilterCapacity}
          />

          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Loads */}
                <div className="space-y-4 bg-[rgba(249,249,249,0)]">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Package className="w-5 h-5 text-gray-900" />
                      <h2 className="text-lg font-semibold">Shipments</h2>
                    </div>
                    <div className="space-y-0">
                      {loads.filter(load => load.status === 'needs_carrier').map((load, index, filteredLoads) => {
                        const isSelected = selectedLoad.id === load.id;
                        
                        if (isSelected) {
                          // Detailed view for selected load
                          return (
                            <div 
                              key={load.id}
                              className="p-4 border-l-[3px] border-l-[#6938ef] cursor-pointer"
                              onClick={() => setSelectedLoad(load)}
                            >
                              <div className="space-y-3">
                                <div>
                                  <span className="font-medium text-lg">{load.id}</span>
                                </div>
                                
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    <span className="font-medium">{load.origin}</span>
                                    <span className="text-gray-500">→</span>
                                    <span className="font-medium">{load.destination}</span>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-center gap-2">
                                      <Clock className="w-4 h-4 text-gray-500" />
                                      <span>Pick: {load.pickupDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Calendar className="w-4 h-4 text-gray-500" />
                                      <span>Del: {load.deliveryDate}</span>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center justify-between text-sm">
                                    <span>{load.equipment}</span>
                                    <span>{load.weight}</span>
                                    <span className="font-semibold text-[#1a7f5a] text-base">{load.rate}</span>
                                  </div>
                                  
                                  <Separator />
                                  
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                      <Building className="w-4 h-4 text-gray-500" />
                                      <span className="font-medium">{load.customer}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                      <FileText className="w-4 h-4 text-gray-500" />
                                      <span className="text-gray-600">{load.commodity}</span>
                                    </div>
                                    
                                    <div className="text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                                      <strong>Instructions:</strong> {load.specialInstructions}
                                    </div>
                                    
                                    <div className="flex justify-between text-xs text-gray-600">
                                      <span>Value: {load.loadValue}</span>
                                      <span>Posted: {load.postedTime}</span>
                                    </div>
                                  </div>

                                  {/* Pricing Intelligence Section */}
                                  {(load as any).pricingIntelligence && (
                                    <div className="space-y-3 mt-4 pt-4 border-t">
                                      <div 
                                        className="flex items-center gap-2 mb-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded"
                                        onClick={() => setExpandedMarketIntelligence(!expandedMarketIntelligence)}
                                      >
                                        <BarChart3 className="w-4 h-4 text-[#0E71C8]" />
                                        <span className="font-medium text-sm">Market Intelligence</span>
                                        <Badge variant="secondary" className="text-xs font-normal">
                                          {(load as any).pricingIntelligence.marketRates.confidence}% confidence
                                        </Badge>
                                        <div className="ml-auto">
                                          {expandedMarketIntelligence ? (
                                            <ChevronUp className="w-4 h-4 text-gray-500" />
                                          ) : (
                                            <ChevronDown className="w-4 h-4 text-gray-500" />
                                          )}
                                        </div>
                                      </div>

                                      {/* Market Rates - Always Visible */}
                                      <div className="grid grid-cols-3 gap-2 text-xs">
                                        <div className="bg-red-50 p-2 rounded text-center">
                                          <div className="font-medium text-red-700">{(load as any).pricingIntelligence.marketRates.low}</div>
                                          <div className="text-red-600">Market Low</div>
                                        </div>
                                        <div className="bg-gray-50 p-2 rounded text-center">
                                          <div className="font-medium text-gray-700">{(load as any).pricingIntelligence.marketRates.average}</div>
                                          <div className="text-gray-600">Market Avg</div>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded text-center">
                                          <div className="font-medium text-green-700">{(load as any).pricingIntelligence.marketRates.high}</div>
                                          <div className="text-green-600">Market High</div>
                                        </div>
                                      </div>

                                      {/* Expandable Content */}
                                      {expandedMarketIntelligence && (
                                        <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
                                          {/* Lane Analysis */}
                                          <div className="grid grid-cols-2 gap-3 text-xs">
                                            <div>
                                              <div className="flex items-center gap-1 mb-1">
                                                <Activity className="w-3 h-3 text-gray-500" />
                                                <span className="font-medium">Lane Health</span>
                                              </div>
                                              <div className="space-y-1">
                                                <div className="flex justify-between">
                                                  <span>Volume:</span>
                                                  <span className="font-medium">{(load as any).pricingIntelligence.laneAnalysis.volume}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                  <span>Demand:</span>
                                                  <span className="font-medium">{(load as any).pricingIntelligence.laneAnalysis.demand}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                  <span>Capacity:</span>
                                                  <span className="font-medium">{(load as any).pricingIntelligence.laneAnalysis.capacity}</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                              <div className="flex items-center gap-1 mb-1">
                                                <Target className="w-3 h-3 text-gray-500" />
                                                <span className="font-medium">Recommendations</span>
                                              </div>
                                              <div className="space-y-1">
                                                <div className="flex justify-between">
                                                  <span>Suggested:</span>
                                                  <span className="font-medium text-[#0E71C8]">{(load as any).pricingIntelligence.recommendations.suggestedRate}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                  <span>Competitive:</span>
                                                  <span className="font-medium">{(load as any).pricingIntelligence.recommendations.competitive}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                  <span>Premium:</span>
                                                  <span className="font-medium">{(load as any).pricingIntelligence.recommendations.premium}</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          {/* Historical Trends */}
                                          <div>
                                            <div className="font-medium text-xs mb-2">Historical Trends</div>
                                            <div className="grid grid-cols-2 gap-1 text-xs">
                                              {(load as any).pricingIntelligence.historicalTrends.map((trend: any, index: number) => (
                                                <div key={index} className="flex justify-between">
                                                  <span className="text-gray-600">{trend.period}:</span>
                                                  <span className="font-medium">{trend.rate}</span>
                                                </div>
                                              ))}
                                            </div>
                                          </div>

                                          {/* Competitor Rates */}
                                          <div>
                                            <div className="font-medium text-xs mb-2">Competitor Rates</div>
                                            <div className="space-y-1">
                                              {(load as any).pricingIntelligence.competitorRates.map((comp: any, index: number) => (
                                                <div key={index} className="flex justify-between text-xs">
                                                  <span className="text-gray-600">{comp.source}:</span>
                                                  <div className="flex items-center gap-2">
                                                    <span className="font-medium">{comp.rate}</span>
                                                    <span className="text-gray-500">({comp.updated})</span>
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          </div>

                                          {/* Price Factors */}
                                          <div>
                                            <div className="font-medium text-xs mb-2">Price Factors</div>
                                            <div className="grid grid-cols-2 gap-1 text-xs">
                                              <div className="flex justify-between">
                                                <span className="text-gray-600">Fuel surcharge:</span>
                                                <span className="font-medium">{(load as any).pricingIntelligence.priceFactors.fuelSurcharge}</span>
                                              </div>
                                              <div className="flex justify-between">
                                                <span className="text-gray-600">Equipment:</span>
                                                <span className="font-medium">{(load as any).pricingIntelligence.priceFactors.equipmentType}</span>
                                              </div>
                                            </div>
                                            <div className="text-xs text-gray-600 mt-1">
                                              <strong>Market:</strong> {(load as any).pricingIntelligence.priceFactors.marketDemand}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          // Compact view for unselected loads
                          const isLastUnselected = index === filteredLoads.length - 1;
                          return (
                            <div 
                              key={load.id}
                              className={`p-3 rounded-lg cursor-pointer transition-colors hover:border-gray-300 bg-white ${
                                !isLastUnselected ? 'border-b border-gray-100' : ''
                              }`}
                              onClick={() => setSelectedLoad(load)}
                            >
                              <div className="mb-1">
                                <span className="font-medium text-sm">{load.id}</span>
                              </div>
                              
                              <div className="text-xs text-gray-600 mb-1">
                                {load.origin} → {load.destination}
                              </div>
                              
                              <div className="flex items-center justify-between text-xs">
                                <span>{load.equipment}</span>
                                <span className="font-medium text-[rgba(106,112,129,1)]">{load.rate}</span>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>

                {/* Middle Column - Carrier Recommendations */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Smart Recommendations */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-[#3298f1]" />
                      <h2 className="text-lg font-semibold">Recommended carriers</h2>
                      
                      <Popover>
                          <PopoverTrigger className="ml-auto">
                              <Button variant="ghost" size="sm">
                                <Settings className="w-4 h-4" />
                              </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80" align="end">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-3">Recommendation Preferences</h4>
                              </div>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="cost">Prioritize Cost</Label>
                                  <Switch 
                                    id="cost"
                                    checked={preferences.prioritizeCost}
                                    onCheckedChange={(checked) => setPreferences(prev => ({
                                      ...prev,
                                      prioritizeCost: checked,
                                      prioritizeService: checked ? false : prev.prioritizeService,
                                      prioritizeSpeed: checked ? false : prev.prioritizeSpeed
                                    }))}
                                  />
                                </div>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="service">Prioritize Service</Label>
                                  <Switch 
                                    id="service"
                                    checked={preferences.prioritizeService}
                                    onCheckedChange={(checked) => setPreferences(prev => ({
                                      ...prev,
                                      prioritizeService: checked,
                                      prioritizeCost: checked ? false : prev.prioritizeCost,
                                      prioritizeSpeed: checked ? false : prev.prioritizeSpeed
                                    }))}
                                  />
                                </div>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="speed">Prioritize Speed</Label>
                                  <Switch 
                                    id="speed"
                                    checked={preferences.prioritizeSpeed}
                                    onCheckedChange={(checked) => setPreferences(prev => ({
                                      ...prev,
                                      prioritizeSpeed: checked,
                                      prioritizeCost: checked ? false : prev.prioritizeCost,
                                      prioritizeService: checked ? false : prev.prioritizeService
                                    }))}
                                  />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="preferred">Only Preferred Carriers</Label>
                                  <Switch 
                                    id="preferred"
                                    checked={preferences.onlyPreferred}
                                    onCheckedChange={(checked) => setPreferences(prev => ({
                                      ...prev,
                                      onlyPreferred: checked
                                    }))}
                                  />
                                </div>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                    </div>
                    <div className="space-y-3">
                      <div className="grid gap-3">
                        {getRecommendedCarriers().map((carrier, index) => (
                          <div key={carrier.id} className={`flex items-center justify-between p-3 border rounded-lg ${carrier.type === 'recommended' ? 'bg-blue-50' : 'bg-white'}`}>
                            <div className="flex items-center gap-4 flex-1">
                              <Checkbox
                                checked={selectedCarriers.includes(carrier.id)}
                                onCheckedChange={() => toggleCarrierSelection(carrier.id)}
                                onClick={(e) => e.stopPropagation()}
                              />
                              <div 
                                className="flex items-center gap-4 flex-1 cursor-pointer hover:bg-gray-50 -m-3 p-3 rounded"
                                onClick={() => setSelectedCarrierForDetail(carrier)}
                              >
                                <Avatar className="w-10 h-10">
                                  <AvatarFallback>{carrier.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{carrier.name}</span>
                                    {carrier.type === 'recommended' && (
                                      <Badge className="text-xs bg-blue-50 text-blue-800 font-normal">Network</Badge>
                                    )}
                                    {carrier.preferredStatus && (
                                      <Badge variant="secondary" className="text-xs font-normal">Preferred</Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-4 h-4 fill-[#fee071] text-[#fee071]" />
                                      {carrier.rating}
                                    </div>
                                    <span>{carrier.onTimeDelivery}% on-time</span>
                                    <span className="text-gray-600">{carrier.distance} away</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="text-right">
                                    <div className="font-medium text-lg">{carrier.rate}</div>
                                    <div className={`text-sm ${getMarketPositionColor(carrier.marketPosition)}`}>
                                      {getMarketPositionText(carrier.marketPosition)}
                                    </div>
                                  </div>
                                  <ChevronRight className="w-5 h-5 text-gray-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Carrier Lists */}
                  <div className="w-full">
                    <div className="flex items-center gap-8 mb-4">
                      <div 
                        className={`flex items-center gap-2 pb-3 border-b-3 transition-colors cursor-pointer ${
                          activeTab === "network" 
                            ? "border-[#6938ef]" 
                            : "border-transparent"
                        }`}
                        onClick={() => setActiveTab("network")}
                      >
                        <Truck className={`w-5 h-5 transition-colors ${
                          activeTab === "network" 
                            ? "text-gray-500" 
                            : "text-gray-500 group-hover:text-[#6938ef]"
                        }`} />
                        <h3 className="text-lg font-semibold text-gray-900">Your carriers</h3>
                        <Badge variant="secondary" className="text-xs font-normal">
                          {networkCarriers.length}
                        </Badge>
                      </div>
                      <div 
                        className={`flex items-center gap-2 pb-3 border-b-3 transition-colors cursor-pointer ${
                          activeTab === "recommended" 
                            ? "border-[#6938ef]" 
                            : "border-transparent"
                        }`}
                        onClick={() => setActiveTab("recommended")}
                      >
                        <Truck className={`w-5 h-5 transition-colors ${
                          activeTab === "recommended" 
                            ? "text-gray-500" 
                            : "text-gray-500 group-hover:text-[#6938ef]"
                        }`} />
                        <h3 className="text-lg font-semibold text-gray-900">Network carriers</h3>
                        <Badge variant="secondary" className="text-xs font-normal">
                          {recommendedCarriers.length}
                        </Badge>
                      </div>
                    </div>
                    
                    {activeTab === "network" && (
                      <div className="space-y-3">
                        <div>
                          <div className="space-y-3">
                            {filteredCarriers.filter(c => c.type === 'network').map(carrier => (
                            <div key={carrier.id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
                              <div className="flex items-center gap-3 flex-1">
                                <Checkbox
                                  checked={selectedCarriers.includes(carrier.id)}
                                  onCheckedChange={() => toggleCarrierSelection(carrier.id)}
                                  onClick={(e) => e.stopPropagation()}
                                />
                                <div 
                                  className="flex items-center gap-3 flex-1 cursor-pointer hover:bg-gray-50 -m-3 p-3 rounded"
                                  onClick={() => setSelectedCarrierForDetail(carrier)}
                                >
                                  <Avatar className="w-10 h-10">
                                    <AvatarFallback>{carrier.name.substring(0, 2)}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium">{carrier.name}</span>
                                      {carrier.preferredStatus && (
                                        <Badge variant="secondary" className="text-xs font-normal">Preferred</Badge>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                      <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-[#fee071] text-[#fee071]" />
                                        {carrier.rating}
                                      </div>
                                      <span>{carrier.onTimeDelivery}% on-time</span>
                                      <span className="text-gray-600">{carrier.distance} away</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="text-right">
                                      <div className="font-medium text-lg">{carrier.rate}</div>
                                      <div className={`text-sm ${getMarketPositionColor(carrier.marketPosition)}`}>
                                        {getMarketPositionText(carrier.marketPosition)}
                                      </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === "recommended" && (
                      <div className="space-y-3">
                        <div>
                          <div className="space-y-3">
                            {filteredCarriers.filter(c => c.type === 'recommended').map(carrier => (
                            <div key={carrier.id} className="flex items-center justify-between p-3 border rounded-lg bg-blue-50">
                              <div className="flex items-center gap-3 flex-1">
                                <Checkbox
                                  checked={selectedCarriers.includes(carrier.id)}
                                  onCheckedChange={() => toggleCarrierSelection(carrier.id)}
                                  onClick={(e) => e.stopPropagation()}
                                />
                                <div 
                                  className="flex items-center gap-3 flex-1 cursor-pointer hover:bg-gray-50 -m-3 p-3 rounded"
                                  onClick={() => setSelectedCarrierForDetail(carrier)}
                                >
                                  <Avatar className="w-10 h-10">
                                    <AvatarFallback>{carrier.name.substring(0, 2)}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium">{carrier.name}</span>
                                      <Badge variant="outline" className="text-xs font-normal">
                                        {(carrier as any).matchScore}% match
                                      </Badge>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                      <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-[#fee071] text-[#fee071]" />
                                        {carrier.rating}
                                      </div>
                                      <span>{carrier.onTimeDelivery}% on-time</span>
                                      <span className="text-gray-600">{carrier.distance} away</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="text-right">
                                      <div className="font-medium text-lg">{carrier.rate}</div>
                                      <div className={`text-sm ${getMarketPositionColor(carrier.marketPosition)}`}>
                                        {getMarketPositionText(carrier.marketPosition)}
                                      </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carrier Detail Sheet */}
          <Sheet open={selectedCarrierForDetail !== null} onOpenChange={() => setSelectedCarrierForDetail(null)}>
            <SheetContent className="w-[800px] sm:max-w-[800px]">
              {selectedCarrierForDetail && (
                <div className="px-6">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>{selectedCarrierForDetail.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span>{selectedCarrierForDetail.name}</span>
                          {selectedCarrierForDetail.type === 'recommended' && (
                            <Badge className="text-xs bg-blue-50 text-blue-800 font-normal">Network</Badge>
                          )}
                          {selectedCarrierForDetail.preferredStatus && (
                            <Badge variant="secondary" className="text-xs font-normal">Preferred</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-[#fee071] text-[#fee071]" />
                            {selectedCarrierForDetail.rating}
                          </div>
                          <span>{selectedCarrierForDetail.onTimeDelivery}% on-time</span>
                        </div>
                      </div>
                    </SheetTitle>
                    <SheetDescription>
                      Comprehensive carrier information and performance data
                    </SheetDescription>
                  </SheetHeader>

                  <div className="mt-6 space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-[#1a7f5a]" />
                          <span className="font-medium">Rate</span>
                        </div>
                        <div className="text-2xl font-semibold">{selectedCarrierForDetail.rate}</div>
                        <div className={`text-sm ${getMarketPositionColor(selectedCarrierForDetail.marketPosition)}`}>
                          {getMarketPositionText(selectedCarrierForDetail.marketPosition)}
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-5 h-5 text-[#0E71C8]" />
                          <span className="font-medium">Risk Score</span>
                        </div>
                        <div className="text-2xl font-semibold">{selectedCarrierForDetail.riskScore}/100</div>
                        <Progress value={selectedCarrierForDetail.riskScore} className="mt-2" />
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-orange-600" />
                          <span className="font-medium">Distance</span>
                        </div>
                        <div className="text-2xl font-semibold">{selectedCarrierForDetail.distance}</div>
                        <div className="text-sm text-gray-600">from pickup</div>
                      </div>
                    </div>

                    {/* Assets */}
                    <div>
                      <h3 className="flex items-center gap-2 mb-3">
                        <Truck className="w-5 h-5" />
                        Assets
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="text-lg font-semibold">{selectedCarrierForDetail.assets?.trucks || 'N/A'}</div>
                          <div className="text-sm text-gray-600">Trucks</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="text-lg font-semibold">{selectedCarrierForDetail.assets?.trailers || 'N/A'}</div>
                          <div className="text-sm text-gray-600">Trailers</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="text-lg font-semibold">{selectedCarrierForDetail.assets?.drivers || 'N/A'}</div>
                          <div className="text-sm text-gray-600">Drivers</div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="flex items-center gap-2 mb-3">
                        <Phone className="w-5 h-5" />
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{selectedCarrierForDetail.contact?.phone || 'N/A'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{selectedCarrierForDetail.contact?.email || 'N/A'}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{selectedCarrierForDetail.contact?.primaryContact || 'N/A'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{selectedCarrierForDetail.contact?.address || 'N/A'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Identity Management & Certifications */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="flex items-center gap-2 mb-3">
                          <Eye className="w-5 h-5" />
                          Identity Management
                        </h3>
                        <div className="flex items-center gap-2">
                          {selectedCarrierForDetail.identityManaged ? (
                            <CheckCircle className="w-5 h-5 text-[#22a575]" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-[#da1f16]" />
                          )}
                          <span className="text-sm">
                            {selectedCarrierForDetail.identityManaged ? 'Monitored by identity system' : 'Not monitored'}
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="flex items-center gap-2 mb-3">
                          <Award className="w-5 h-5" />
                          Certifications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedCarrierForDetail.certifications?.map((cert: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs font-normal">
                              {cert}
                            </Badge>
                          )) || <span className="text-sm text-gray-500">No certifications</span>}
                        </div>
                      </div>
                    </div>

                    {/* Insurance */}
                    <div>
                      <h3 className="flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5" />
                        Insurance Coverage
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="font-medium">{selectedCarrierForDetail.insuranceDetails?.liability || selectedCarrierForDetail.insurance}</div>
                          <div className="text-sm text-gray-600">Liability</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="font-medium">{selectedCarrierForDetail.insuranceDetails?.cargo || 'N/A'}</div>
                          <div className="text-sm text-gray-600">Cargo</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="font-medium text-sm">{selectedCarrierForDetail.insuranceDetails?.lastUpdated || 'N/A'}</div>
                          <div className="text-sm text-gray-600">Last Updated</div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div>
                      <h3 className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5" />
                        Performance Metrics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Average Delivery Time</span>
                            <span className="font-medium">{selectedCarrierForDetail.performanceMetrics?.avgDeliveryTime || 'N/A'}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Customer Satisfaction</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-[#fee071] text-[#fee071]" />
                              <span className="font-medium">{selectedCarrierForDetail.performanceMetrics?.customerSatisfaction || 'N/A'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Dispute Rate</span>
                            <span className="font-medium">{selectedCarrierForDetail.performanceMetrics?.disputeRate || 'N/A'}%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Cancellation Rate</span>
                            <span className="font-medium">{selectedCarrierForDetail.performanceMetrics?.cancellationRate || 'N/A'}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Network Adoption */}
                    <div>
                      <h3 className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5" />
                        Network Collaboration
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Adoption of network features</span>
                          <span className="font-medium">{selectedCarrierForDetail.networkAdoption || 'N/A'}%</span>
                        </div>
                        <Progress value={selectedCarrierForDetail.networkAdoption || 0} className="h-2" />
                      </div>
                    </div>

                    {/* Data Source */}
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4" />
                          <span>Source: {selectedCarrierForDetail.dataSource || 'Unknown'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock3 className="w-4 h-4" />
                          <span>Updated: {selectedCarrierForDetail.lastUpdated || 'Unknown'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>

          {/* Comparison Sheet */}
          <Sheet open={showComparison} onOpenChange={setShowComparison}>
            <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto">
              <div className="px-6 pb-16">
                <SheetHeader className="pb-4">
                  <SheetTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Compare Selected Carriers ({selectedCarriers.length})
                  </SheetTitle>
                  <SheetDescription>
                    Side-by-side comparison of your selected carriers
                  </SheetDescription>
                </SheetHeader>
                
                <div className="overflow-x-auto">
                  <Table className="w-full min-w-[1400px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Carrier</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>On-Time %</TableHead>
                        <TableHead>Claims %</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead>Equipment</TableHead>
                        <TableHead>Insurance</TableHead>
                        <TableHead>Risk Score</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedCarriers.map(carrierId => {
                        const carrier = allCarriers.find(c => c.id === carrierId);
                        if (!carrier) return null;
                        return (
                          <TableRow key={carrier.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="text-xs">
                                    {carrier.name.substring(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{carrier.name}</div>
                                  <div className="flex items-center gap-1">
                                    {carrier.type === 'recommended' && (
                                      <Badge className="text-xs bg-blue-50 text-blue-800 font-normal">Network</Badge>
                                    )}
                                    {carrier.preferredStatus && (
                                      <Badge variant="secondary" className="text-xs font-normal">Preferred</Badge>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="font-medium">{carrier.rate}</div>
                              <div className={`text-xs ${getMarketPositionColor(carrier.marketPosition)}`}>
                                {getMarketPositionText(carrier.marketPosition)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-[#fee071] text-[#fee071]" />
                                {carrier.rating}
                              </div>
                            </TableCell>
                            <TableCell>{carrier.onTimeDelivery}%</TableCell>
                            <TableCell>{carrier.claims}%</TableCell>
                            <TableCell>{carrier.distance}</TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                {carrier.equipment.map((eq, index) => (
                                  <Badge key={index} variant="outline" className="text-xs mr-1 font-normal">
                                    {eq}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>{carrier.insurance}</TableCell>
                            <TableCell>
                              {carrier.riskScore ? (
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{carrier.riskScore}/100</span>
                                  <div className="w-12">
                                    <Progress value={carrier.riskScore} className="h-2" />
                                  </div>
                                </div>
                              ) : (
                                <span className="text-gray-500">N/A</span>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button 
                                  size="sm" 
                                  onClick={() => setSelectedCarrierForDetail(carrier)}
                                  variant="outline"
                                >
                                  Details
                                </Button>
                                <Button size="sm">Book</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Global Action Bar */}
          {selectedCarriers.length > 0 && (
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#22a575]" />
                  <span className="font-medium">
                    {selectedCarriers.length} {getSelectedCarrierType() === 'network' ? 'Your Carrier' : 'Network Carrier'}{selectedCarriers.length > 1 ? 's' : ''} selected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearAllSelections}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                  {selectedCarriers.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowComparison(true)}
                    >
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Compare
                    </Button>
                  )}
                  <Button
                    size="sm"
                    onClick={handleGlobalAction}
                    className={getSelectedCarrierType() === 'network' ? 'bg-[#1a7f5a] hover:bg-[#146145]' : 'bg-[#0E71C8] hover:bg-[#0b599d]'}
                  >
                    {getSelectedCarrierType() === 'network' ? 'Offer Load' : 'Post to Network'}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Post Load Modal */}
          <Dialog open={showPostModal} onOpenChange={setShowPostModal}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Post load to {selectedCarriers.length} carrier{selectedCarriers.length > 1 ? 's' : ''}</DialogTitle>
                <DialogDescription>
                  Set your offer amount for load {selectedLoad.id}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="post-amount">Request Amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="post-amount"
                      type="number"
                      placeholder="2150"
                      value={postAmount}
                      onChange={(e) => setPostAmount(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    Market rate: {selectedLoad.rate}
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setShowPostModal(false)}>
                  Cancel
                </Button>
                <Button onClick={handlePostLoad} className="bg-[#0E71C8] hover:bg-[#0b599d]">
                  Post
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}