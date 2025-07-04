import {
  FolderIcon,
  TrophyIcon,
  LaptopIcon,
  Images
} from "../../../assets"
import { Club } from "../../../assets/Club";
import { Medal } from "../../../assets/Medal";
import { People } from "../../../assets/People";
import { ProjectManage } from "../../../assets/ProjectManage";
import { ShortcutDataType, NavigationListDataType, SlideImageDataType } from "./interface";

const ShortcutData: ShortcutDataType[] = [
  {
    id: 1,
    title: "DSM의 다양한 프로젝트 보러가기",
    description: "업로드 된 프로젝트를 승인 및 반려해주세요\n관리 페이지로 넘어가고 싶다면 더보기를 눌러주세요",
    href: "/archive",
    icon: <FolderIcon size={32} />,
    positionX: 8,
    positionY: 0
  },
  {
    id: 2,
    title: "대회 관리하기",
    description: "대회를 관리하세요\n대회 관리 페이지로 넘어가려면 더보기를 눌러주세요",
    href: "/ranking",
    icon: <TrophyIcon size={32} />,
    positionX: 32,
    positionY: 28
  },
  {
    id: 3,
    title: "인원 관리하기",
    description: "DSM 학생들을 관리하세요\n인원 관리 페이지로 넘어가려면 더보기를 눌러주세요",
    href: "/write",
    icon: <LaptopIcon size={32} />,
    positionX: 55,
    positionY: 6
  }
];

const NavigationListData: NavigationListDataType[] = [
  {
    id: "Contest",
    title: "대회관리",
    icon: <Medal />,
    href: "/contestlist"
  },
  {
    id: "Student",
    title: "인원관리",
    icon: <People />,
    href: "/student"
  },
  {
    id: "Club",
    title: "동아리관리",
    icon: <Club />,
    href: "/club"
  },
  {
    id: "ProjectManage",
    title: "프로젝트관리",
    icon: <ProjectManage />,
    href: "/projectmanage"
  },
]

const SlideImageData: SlideImageDataType[] = [
  {
    image: Images.MainImage1,
    title: "DSM 프로젝트 통합 플랫폼\n모든 프로젝트를 한 눈에 확인하자",
    subTitle: "다양한 프로젝트를 하나로 모으고 통합해보자"
  },
  {
    image: Images.MainImage2,
    title: "DSM 투표 플랫폼\n원하는 프로젝트에 지금 바로 투표하자",
    subTitle: "원하는 프로젝트에 쉽게 투표해보자"
  },
  {
    image: Images.MainImage3,
    title: "편리하게 저장할 수 있는 공간\nROAD에 프로젝트를 업로드하자",
    subTitle: "나의 프로젝트를 편리하게 저장해보자"
  },
]

export { ShortcutData, NavigationListData, SlideImageData };