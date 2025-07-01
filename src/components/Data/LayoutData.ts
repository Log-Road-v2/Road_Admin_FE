import { NavigationListDataType, SiteInfoType } from "./interface"

const NavigationListData: NavigationListDataType[] = [
  {
    id: 1,
    name: "대회관리",
    href: "/",
    login: true
  },
  {
    id: 2,
    name: "인원관리",
    href: "/",
    login: true
  },
  {
    id: 3,
    name: "동아리관리",
    href: "/",
    login: true
  },
  {
    id: 4,
    name: "프로젝트관리",
    href: "/write",
    login: true
  },
]

const SiteInfo: SiteInfoType[] = [
  {
    id: 1,
    content: "DSM 프로젝트 통합 플랫폼",
  },
  {
    id: 2,
    content: "대전광역시 유성구 가정북로 76 (장동) 대덕소프트웨어마이스터고등학교",
  },
  {
    id: 3,
    content: "dsm.log@dsm.hs.kr ",
  },
]

export { NavigationListData, SiteInfo }