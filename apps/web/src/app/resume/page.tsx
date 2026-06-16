import {
  DashboardLayout,
} from "@/shared/components/dashboard-layout";

import {
  ResumeCard,
} from "@/features/resume/components/resume-card";
import { ResumeOverview } from "@/features/resume/components/resuume-overview";

export default function ResumePage() {

  return (
    <DashboardLayout>
      

      <ResumeOverview/>

    </DashboardLayout>
  );

}