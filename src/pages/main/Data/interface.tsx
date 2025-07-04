import { ReactNode } from "react";

export interface ShortcutDataType {
  id: number;
  title: string;
  description: string;
  href: string;
  icon : ReactNode;
  positionX: number;
  positionY: number
}

export interface NavigationListDataType {
  id: string;
  title: string;
  icon: ReactNode;
  href: string
}

export interface SlideImageDataType {
  image: string;
  title: string;
  subTitle: string
}

export interface AccessMessageItemProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  positionX: number;
  positionY: number;
}