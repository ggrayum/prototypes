"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isCurrentPage?: boolean;
}

interface HeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  rightActions?: React.ReactNode;
  centerContent?: React.ReactNode;
}

export default function Header({ 
  title, 
  description, 
  subtitle, 
  breadcrumbs,
  rightActions,
  centerContent 
}: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <div>
              {/* Breadcrumb Navigation */}
              {breadcrumbs && breadcrumbs.length > 0 && (
                <Breadcrumb className="mb-2">
                  <BreadcrumbList>
                    {breadcrumbs.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <BreadcrumbItem>
                          {item.isCurrentPage ? (
                            <BreadcrumbPage className="text-gray-900 font-medium">
                              {item.label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink 
                              onClick={item.onClick}
                              className="text-gray-600 hover:text-gray-900 cursor-pointer"
                            >
                              {item.label}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                      </div>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              )}
              
              <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
              {description && (
                <p className="text-sm text-gray-500 mt-1">{description}</p>
              )}
              {subtitle && (
                <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Right Section */}
          {rightActions && (
            <div className="flex items-center gap-4">
              {rightActions}
            </div>
          )}
        </div>

        {/* Center Content (for search/filters) */}
        {centerContent && (
          <div className="mt-4">
            {centerContent}
          </div>
        )}
      </div>
    </div>
  );
}