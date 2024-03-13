"use client";

import * as React from "react";

import { cn } from "~/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface SwitchToolProps {
  tools: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

export function SwitchTool({ tools }: SwitchToolProps) {
  const [selectedTool, setSelectedTool] = React.useState<string>(
    tools[0].value
  );

  return (
    <Select defaultValue={selectedTool} onValueChange={setSelectedTool}>
      <SelectTrigger
        className={cn(
          "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
        )}
        aria-label="Select account"
      >
        <SelectValue placeholder="Select an account">
          {tools.find((account) => account.value === selectedTool)?.icon}
          <span className={cn("ml-2")}>
            {tools.find((account) => account.value === selectedTool)?.label}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {tools.map((account) => (
          <SelectItem key={account.value} value={account.value}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
              {account.icon}
              {account.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
