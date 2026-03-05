import { ApplicationStatus } from "./ApplicationStatus";
import { JobType } from "./JobType";
import { Note } from "./Note";
import { RemoteType } from "./RemoteType";

export interface Application {
  id: number;
  companyName: string;
  jobTitle: string;
  jobType?: JobType;
  location?: string;
  remoteType?: RemoteType;

  status: ApplicationStatus;
  jobUrl?: string;

  appliedAt?: Date;
  createdAt: Date;
  updatedAt: Date;

  contactName?: string;
  contactEmail?: string;
  contactLinkedin?: string;

  salaryRange?: string;
  source?: string;

  notes: Note[];
}
