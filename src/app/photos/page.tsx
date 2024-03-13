import type { Metadata } from "next";

import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TooltipProvider } from "~/components/ui/tooltip";
import { tools } from "~/components/photos/data";
import { cn } from "~/lib/utils";
import { SwitchTool } from "~/components/photos/switch-tool";
import { PhotoPreview } from "~/components/photos/photo-preview";

export const metadata: Metadata = {
  title: "Photo Editor | Develop Bharat",
  description: "Edit your photos in a secure environment.",
};

export default function Home() {
  return (
    <div className="p-6">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full max-h-[800px] items-stretch"
        >
          {/* Options Panel */}
          <ResizablePanel defaultSize={15} minSize={15} maxSize={15}>
            <div
              className={cn("flex h-[52px] items-center justify-center px-2")}
            >
              <SwitchTool tools={tools} />
            </div>
            <Separator />
            <h1>Current Selected Tool Controls</h1>
          </ResizablePanel>
          <ResizableHandle />

          {/* Upload Picture */}
          <ResizablePanel defaultSize={30} minSize={30} maxSize={50}>
            <Tabs defaultValue="all">
              <div className="flex items-center px-4 py-2">
                <h1 className="text-xl font-bold">Edit Photos</h1>
                <TabsList className="ml-auto">
                  <TabsTrigger
                    value="all"
                    className="text-zinc-600 dark:text-zinc-200"
                  >
                    Source Files
                  </TabsTrigger>
                  <TabsTrigger
                    value="unread"
                    className="text-zinc-600 dark:text-zinc-200"
                  >
                    Processed Files
                  </TabsTrigger>
                </TabsList>
              </div>
              <Separator />
              <TabsContent value="all" className="m-0">
                {/* Source files section */}
                {/* <MailList items={mails} /> */}
                <h1>User Selected files</h1>
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                {/* Processed files section */}
                {/* <MailList items={mails.filter((item) => !item.read)} /> */}
                <h1>Processed files</h1>
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30} minSize={30}>
            <PhotoPreview mail={undefined} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
}
