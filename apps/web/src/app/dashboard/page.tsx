import { DashboardSummary } from "@/features/dashboard/components/dashboard-summary";
import { QuickActions } from "@/features/dashboard/components/quick-actions";
import {
  DashboardLayout,
} from "@/shared/components/dashboard-layout";

export default function DashboardPage() {

  return (
    <DashboardLayout>

         <div
        className="
        space-y-6
        "
      >

        <DashboardSummary />

        <QuickActions />

      </div>

    </DashboardLayout>
  );

}