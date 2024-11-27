import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
<<<<<<< HEAD
=======
  profile: string;
>>>>>>> upstream/main
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
<<<<<<< HEAD
  postPerPage: number;
  scheduledPostMargin: number;
=======
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives?: boolean;
  editPost?: {
    url?: URL["href"];
    text?: string;
    appendFilePath?: boolean;
  };
>>>>>>> upstream/main
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
