export type Issue = {
  id: string;
  title: string;
  assignee: {
    name: string;
    avatar: string;
  };
  status: "Backlog" | "In Progress" | "In Review";
  priority: "Low" | "Medium" | "High";
  due: string;
  description: string;
};

export const issues: Issue[] = [
  {
    id: "ISS-1042",
    title: "Checkout validation and error messages",
    assignee: {
      name: "Alex Kim",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    status: "In Progress",
    priority: "High",
    due: "Oct 28, 2025",
    description:
      "Implement inline field validation, accessible error summaries, and consistent error states across checkout. Include ARIA attributes and keyboard navigation.",
  },
  {
    id: "ISS-1038",
    title: "Hero section polish",
    assignee: {
      name: "Maya R.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    status: "Backlog",
    priority: "Medium",
    due: "Nov 5, 2025",
    description: "Polish hero section UI with better spacing and visuals.",
  },
  {
    id: "ISS-1032",
    title: "Payment gateway refactor",
    assignee: {
      name: "Diego R.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    status: "In Review",
    priority: "Low",
    due: "Nov 20, 2025",
    description: "Refactor gateway for scalability and maintainability.",
  },
  {
    id: "ISS-1050",
    title: "Analytics setup",
    assignee: {
      name: "Sarah P.",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    status: "Backlog",
    priority: "High",
    due: "Dec 1, 2025",
    description: "Integrate Google Analytics and custom event tracking.",
  },
];
