import ResumePreview from "../components/resume-ui/ResumePreview";
import TemplateFour from "../components/resume-ui/templetes/templeteFour";
import TemplateThree from "../components/resume-ui/templetes/templeteThree";
import TempleteTwo from "../components/resume-ui/templetes/templeteTwo";
import resume1Image from "@/assets/resumepreview/resumetemplate1.png"
import resume2Image from "@/assets/resumepreview/resumetemplate2.png"
export const resumeTempletes = [
  {
    id: 1,
    title: "templete 1",
    element: (data) => <ResumePreview d={data} />,
    previewImage: resume1Image,
    tags: ["simple", "clean", "mono color", "simple", "clean", "mono color"],
  },
  {
    id:2,
    title: "templete 2",
    element: (data) => <TempleteTwo d={data} />,
    previewImage: resume2Image,
    tags: ["simple", "clean", "mono color", "simple", "clean", "mono color"],
  },
  {
    id:3,
    title: "templete 3",
    element: (data) => <TemplateThree d={data} />,
    previewImage: resume2Image,
    tags: ["simple", "clean", "mono color", "simple", "clean", "mono color"],
  },
  {
    id:4,
    title: "templete 4",
    element: (data) => <TemplateFour d={data} />,
    previewImage: resume2Image,
    tags: ["simple", "clean", "mono color", "simple", "clean", "mono color"],
  }
];
