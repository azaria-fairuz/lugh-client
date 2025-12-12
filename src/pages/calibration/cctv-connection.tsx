import { useState } from "react";
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { motion, AnimatePresence } from "framer-motion";
import { AddCctvConnection } from "@/components/add-cctv-connection"
import { LoadingSwal } from "@/components/loading-swal"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [connections, setConnections] = useState<string[]>([]); 
  const addConnection = () => {
    setConnections(prev => [...prev, crypto.randomUUID()]);
  };

  const deleteConnection = (id: string) => {
    setConnections(prev => prev.filter(conn => conn !== id));
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Calibration
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>CCTV Connection</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <LoadingSwal open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <AnimatePresence>
              {connections.map((id, idx) => (
                <motion.div
                  key={id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-muted/25 rounded-xl min-h-[350px] md:min-h-[380px] xl:min-h-[420px]"
                >
                  <AddCctvConnection
                    id={id}
                    index={idx + 1}
                    onDelete={deleteConnection}
                    onConnection={setModalOpen}
                  />
                </motion.div>
              ))}

              <motion.div
                key="add-button"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-muted/25 rounded-xl min-h-[350px] md:min-h-[380px] xl:min-h-[420px]"
              >
                <div className="flex flex-wrap items-center justify-center align-middle h-full">
                  <Button variant="outline" onClick={addConnection}>
                    add connection
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
