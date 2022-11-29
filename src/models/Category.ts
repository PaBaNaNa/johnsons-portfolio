import {
  DevelopmentIcon,
  PersonalDevelopmentIcon,
} from "../components/icons/index.astro";

export interface Category {
  title: string;
  icon: Function;
  desc: string;
  slug: string;
  style?: {
    title?: string;
    desc?: string;
    container?: string;
    themeColor?: string;
  };
}

export const categories: Category[] = [
  {
    icon: DevelopmentIcon,
    title: "Development",
    desc: "How I build websites and apps",
    slug: "development",
    style: {
      container: "bg-indigo-50 shadow-indigo-100",
      title: "text-indigo-600",
      desc: "text-indigo-900",
      themeColor: "#eff2fe",
    },
  },
  {
    icon: PersonalDevelopmentIcon,
    title: "Personal Development",
    desc: "Creating a meaningful life",
    slug: "personal-development",
    style: {
      container: "bg-sky-50 shadow-sky-100",
      title: "text-sky-600",
      desc: "text-sky-900",
      themeColor: "#f2f9fe",
    },
  },
];
