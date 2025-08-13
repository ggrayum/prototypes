"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Header from "./Header";
import { 
  Package, 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Truck, 
  Clock, 
  Users, 
  Calendar,
  BarChart3,
  Activity,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Shield,
  AlertCircle,
  CheckCircle
} from "lucide-react";

interface DashboardProps {
  onStartShipment: () => void;
}

export default function Dashboard({ onStartShipment }: DashboardProps) {
  const [timeRange, setTimeRange] = useState("This Week");

  // Mock dashboard data
  const summaryData = {
    plan: {
      total: 5751,
      items: [
        { label: "Routes planned", value: 3556, icon: MapPin, color: "text-purple-600" },
        { label: "Routes saved", value: 5835, icon: Shield, color: "text-blue-600" },
        { label: "Routes shipped", value: 2195, icon: Truck, color: "text-green-600" }
      ]
    },
    ship: {
      total: 398,
      items: [
        { label: "Routes pickup", value: 191, icon: Package, color: "text-orange-600" },
        { label: "Pending late", value: 769, icon: Clock, color: "text-red-600" },
        { label: "Routes online", value: 309, icon: Activity, color: "text-green-600" }
      ]
    },
    bill: {
      total: 123,
      items: [
        { label: "Needs billing", value: 173, icon: DollarSign, color: "text-green-600" },
        { label: "A/R", value: 463, icon: TrendingUp, color: "text-blue-600" },
        { label: "A/P", value: 47, icon: TrendingDown, color: "text-red-600" }
      ]
    }
  };

  const weeklyData = {
    sales: {
      current: 0,
      trend: "down",
      revenue: 0,
      shipments: 0
    },
    margin: {
      percentage: 76,
      average: "$26",
      trend: "up"
    },
    billing: {
      apr: "$1,152,789",
      may: "$221,975",
      pastDue: "$221,975"
    }
  };

  const topCustomers = [
    { name: "WalCorp Industries", loads: 45, revenue: "$125,000", trend: "up" },
    { name: "Fresh Foods LLC", loads: 32, revenue: "$98,500", trend: "up" },
    { name: "Steel Dynamics Inc", loads: 28, revenue: "$87,200", trend: "down" },
    { name: "Pacific Trading Co", loads: 22, revenue: "$64,800", trend: "up" },
    { name: "MedSupply Corp", loads: 18, revenue: "$52,300", trend: "up" }
  ];

  const recentActivity = [
    { type: "shipment", message: "Load #74629183 picked up from Chicago", time: "2 hours ago", status: "success" },
    { type: "carrier", message: "New carrier Reliable Transport added to network", time: "4 hours ago", status: "info" },
    { type: "alert", message: "Load #58139724 delayed - ETA updated", time: "6 hours ago", status: "warning" },
    { type: "shipment", message: "Load #92847651 delivered to Denver", time: "1 day ago", status: "success" },
    { type: "billing", message: "Invoice #INV-2024-0891 sent to WalCorp", time: "1 day ago", status: "info" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        title="Dashboard"
        rightActions={
          <>
            <Badge variant="outline" className="text-xs">
              Auto refresh • Updated 6 mins ago
            </Badge>
            <Button
              onClick={onStartShipment}
              className="bg-[#0E71C8] hover:bg-[#0b599d] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Shipment
            </Button>
          </>
        }
      />

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Start Shipment Card + Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Start a Shipment Card */}
          <Card 
            className="border-2 border-dashed border-blue-200 hover:border-blue-300 cursor-pointer transition-colors bg-blue-50/50"
            onClick={onStartShipment}
          >
            <CardContent className="flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Plus className="w-8 h-8 text-[#0E71C8]" />
              </div>
              <h3 className="font-semibold text-[#0E71C8] mb-2">Start a shipment</h3>
              <p className="text-sm text-gray-600">
                Create a new shipment and find the best carriers
              </p>
            </CardContent>
          </Card>

          {/* Plan Summary */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Plan Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-semibold text-purple-600">{summaryData.plan.total}</div>
              </div>
              <div className="space-y-3">
                {summaryData.plan.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-gray-600">{item.label}</span>
                    </div>
                    <span className="font-medium">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Ship Summary */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Ship Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-semibold text-blue-600">{summaryData.ship.total}</div>
              </div>
              <div className="space-y-3">
                {summaryData.ship.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-gray-600">{item.label}</span>
                    </div>
                    <span className="font-medium">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bill Summary */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Bill Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-semibold text-green-600">{summaryData.bill.total}</div>
              </div>
              <div className="space-y-3">
                {summaryData.bill.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-gray-600">{item.label}</span>
                    </div>
                    <span className="font-medium">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Performance Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Sales */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Weekly Sales</CardTitle>
              <span className="text-xs text-gray-500">Aug 11 - 17</span>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-400">—</div>
                  <div className="text-sm text-gray-500">No revenue</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipments</span>
                    <span className="font-medium">—</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg margin</span>
                    <span className="font-medium">—</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Margin */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Weekly Margin</CardTitle>
              <span className="text-xs text-gray-500">Aug 11 - 17</span>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-green-600">{weeklyData.margin.percentage}%</div>
                  <div className="text-sm text-gray-500">Avg margin</div>
                </div>
                <div className="flex justify-center">
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {weeklyData.margin.average}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Billing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">A/P</span>
                    <span className="font-medium">{weeklyData.billing.apr}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">A/R</span>
                    <span className="font-medium">{weeklyData.billing.may}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-red-600">Past due</span>
                    <span className="font-medium text-red-600">{weeklyData.billing.pastDue}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Customers */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">Top Customers</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                August
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCustomers.map((customer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {customer.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">{customer.name}</div>
                        <div className="text-xs text-gray-500">{customer.loads} loads</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{customer.revenue}</div>
                      <div className="flex items-center gap-1">
                        {customer.trend === 'up' ? (
                          <ArrowUpRight className="w-3 h-3 text-green-600" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3 text-red-600" />
                        )}
                        <span className={`text-xs ${customer.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {customer.trend === 'up' ? '+' : '-'}12%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">Recent Activity</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Package className="w-5 h-5" />
                <span className="text-sm">Track Shipment</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">Manage Carriers</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                <span className="text-sm">View Reports</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm">Billing</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}