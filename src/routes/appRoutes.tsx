import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import Courses from "../pages/dashboard/Courses";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import FairBilling from "../pages/dashboard/FairBilling";
import Certifications from "../pages/dashboard/Certifications";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/Contact";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import Contact from "../pages/component/Contact";
import Login from "../pages/component/Login";


const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
     
      {
        path: "/dashboard/FairBilling",
        element: <FairBilling />,
        state: "dashboard.FairBilling",
        sidebarProps: {
          displayText: "Fair Billing"
        }
      },
      {
        path: "/dashboard/Courses",
        element: <Courses />,
        state: "dashboard.Courses",
        sidebarProps: {
          displayText: "Courses"
        }
      },
      {
        path: "/dashboard/Certifications",
        element: <Certifications />,
        state: "dashboard.Certifications",
        sidebarProps: {
          displayText: "Certification"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/Login",
        element: <Login />,
        state: "component.Login",
        sidebarProps: {
          displayText: "Login"
        },
      },
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Notification"
        },
      },
      {
        path: "/component/Contact",
        element: <Contact />,
        state: "component.Contact",
        sidebarProps: {
          displayText: "Contact"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Course Docs",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Log Details",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;