export interface Resume {
  _id: string;
  fileName: string;
  fileUrl: string;

  experienceYears: number;

  skills: string[];

  projects: string[];

  createdAt: string;
  updatedAt: string;
}
