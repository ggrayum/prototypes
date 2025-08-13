"use client";

import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  Users, 
  BarChart3, 
  Settings,
  MapPin,
  FileText,
  Calculator
} from "lucide-react";

interface NavigationProps {
  onDashboardClick: () => void;
  currentScreen: string;
}

export default function Navigation({ onDashboardClick, currentScreen }: NavigationProps) {
  const navItems = [
    { 
      icon: LayoutDashboard, 
      label: "Dashboard", 
      id: "dashboard",
      onClick: onDashboardClick,
      isClickable: true
    },
    { 
      icon: Package, 
      label: "Shipments", 
      id: "shipments",
      isClickable: false
    },
    { 
      icon: Truck, 
      label: "Carriers", 
      id: "carriers",
      isClickable: false
    },
    { 
      icon: MapPin, 
      label: "Tracking", 
      id: "tracking",
      isClickable: false
    },
    { 
      icon: BarChart3, 
      label: "Analytics", 
      id: "analytics",
      isClickable: false
    },
    { 
      icon: FileText, 
      label: "Documents", 
      id: "documents",
      isClickable: false
    },
    { 
      icon: Calculator, 
      label: "Billing", 
      id: "billing",
      isClickable: false
    },
    { 
      icon: Users, 
      label: "Customers", 
      id: "customers",
      isClickable: false
    },
    { 
      icon: Settings, 
      label: "Settings", 
      id: "settings",
      isClickable: false
    }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-black flex flex-col items-center py-4 z-50">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id || 
            (item.id === 'dashboard' && currentScreen === 'dashboard');
          
          return (
            <div
              key={item.id}
              className={`
                flex items-center justify-center w-10 h-10 rounded-lg transition-colors group relative
                ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}
                ${item.isClickable ? 'cursor-pointer' : 'cursor-default'}
              `}
              onClick={item.onClick}
              title={item.label}
            >
              <Icon 
                className={`
                  w-5 h-5 text-white transition-colors
                  ${isActive ? 'text-white' : 'text-white/80'}
                  ${item.isClickable ? 'group-hover:text-white' : ''}
                `} 
              />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}