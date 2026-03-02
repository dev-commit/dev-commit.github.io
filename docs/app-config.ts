interface IProject extends ICommon {
  Name: "DevCommit" | "LetsCode";
  WikiDir: "dev-commit" | "lets-code";
  CustomLayout: boolean;
  BasePath: string;
  Title: string;
  Description: string;
  ThemeColor: string;
}

interface ICommon {
  RootDir: string;
}

interface IProjects {
  DevCommit: IProject;
  LetsCode: IProject;
}

const CommonConfig: ICommon = {
  RootDir: "wiki",
};

export const Projects: IProjects = {
  DevCommit: {
    Name: "DevCommit",
    WikiDir: "dev-commit",
    CustomLayout: true,
    BasePath: "/",
    Title: "DevCommit",
    Description: "Справочник",
    ThemeColor: "#ff0055",
    ...CommonConfig,
  },
  LetsCode: {
    Name: "LetsCode",
    WikiDir: "lets-code",
    CustomLayout: false,
    BasePath: "/workbook/",
    Title: "Let's Code Workbook",
    Description: "Методичка и справочные материалы",
    ThemeColor: "#3eaf7c",
    ...CommonConfig,
  },
};

export default Projects.DevCommit;
