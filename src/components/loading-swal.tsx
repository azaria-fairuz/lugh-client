import { 
  AlertDialog, 
  AlertDialogTitle, 
  AlertDialogHeader, 
  AlertDialogContent, 
  AlertDialogDescription
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";

export function LoadingSwal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="sm:max-w-[400px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Processing Request</AlertDialogTitle>
          <AlertDialogDescription>
            Please wait while your request is being processed...
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center py-4">
          <Loader2 className="animate-spin w-6 h-6 text-blue-500" />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
