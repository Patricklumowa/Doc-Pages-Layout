"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

// Create compatible exports with HeroUI naming
const CardContent = CardBody;
const CardTitle = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <h3 className="text-lg font-semibold" {...props}>{children}</h3>
);
const CardDescription = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <p className="text-sm text-gray-600" {...props}>{children}</p>
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
