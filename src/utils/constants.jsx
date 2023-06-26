export const calendarIcon = "/calendar-icon.svg";
export const messageQuestion = "/message-question-icon.svg";
export const messagesIcon = "/messages-icon.svg";
export const notificationIcon = "/notification-icon.svg";
export const arrowDown = "/arrow-down-icon.svg";
export const addIcon = "/add-icon.svg";
export const addTask = "/add-tasks-icon.svg";
export const home = "/home-sidebar-icon.svg";
export const moreItems = "/more-items-icon.svg";
export const logo = "/kanban-icon.svg";
export const menuIcon = "/sidebar-icon.svg";
export const searchIcon = "/search-icon.svg";
export const userIcon = "/user-icon.svg";
export const editTitle = "/edit-title-icon.svg";
export const copyLink = "/copy-link-icon.svg";
export const filterIcon = "/filter-icon.svg";
export const peopleIcon = "/people-icon.svg";
export const tabsIcon = "/tabs-icon.svg";
export const folderIcon = "/folder-icon.svg";
export const taskIcon = "/task-icon.svg";
export const settingsIcon = "/setting-icon.svg";
export const sidebarMessageIcon = "/message-sidebar-icon.svg";
export const addProjectIcon = "/add-project-sidebar-icon.svg";
export const lampIcon = "/lamp-icon.svg";

export const projectsConfig = [
  {
    id: "project-1",
    title: "Mobile App",
    color: "#7AC555",
    collaborators: ["adrian", "julie", "robert", "Marc", "jason", "kabir"],
    tasks: {
      todo: [
        {
          id: "task-1",
          taskTitle: "Brainstroming",
          description: `Brainstorming brings team members' diverse experience into play.`,
          taskMembers: ["adrian", "julie", "robert"],
          commentsCount: 12,
          filesCount: 0,
          priority: "Low",
        },
        {
          id: "task-2",
          taskTitle: "Research",
          description: `User research helps you to create an optimal product for users.`,
          taskMembers: ["julie", "robert"],
          commentsCount: 10,
          filesCount: 3,
          priority: "High",
        },
        {
          id: "task-3",
          taskTitle: "Wireframes",
          description: `Low fidelity wireframes include the most basic content and visuals.`,
          taskMembers: ["Marc", "jason", "kabir"],
          commentsCount: 7,
          filesCount: 3,
          priority: "High",
        },
      ],
      onProgress: [
        {
          id: "task-4",
          taskTitle: "Onboarding Illustrations",
          description: ``,
          taskMembers: ["robert", "Marc", "jason"],
          commentsCount: 14,
          filesCount: 15,
          priority: "Low",
          assets: ["/onboarding-illustrations-asset-1.png"],
        },
        {
          id: "task-5",
          taskTitle: "Moodboard",
          description: ``,
          taskMembers: ["robert"],
          commentsCount: 9,
          filesCount: 10,
          priority: "Low",
          assets: ["/moodboard-asset-1.png", "/moodboard-asset-2.png"],
        },
      ],
      done: [
        {
          id: "task-6",
          taskTitle: "Mobile App Design",
          description: ``,
          taskMembers: ["robert", "Marc"],
          commentsCount: 12,
          filesCount: 15,
          priority: "Completed",
          assets: ["/mobile-app-design-asset-1.png"],
        },
        {
          id: "task-7",
          taskTitle: "Design System",
          description: `It just needs to adapt the UI from what you did before `,
          taskMembers: ["julie", "robert", "Marc"],
          commentsCount: 12,
          filesCount: 15,
          priority: "Completed",
        },
      ],
    },
  },
  {
    id: "project-2",
    color: "#FFA500",
    title: "Website Redesign",
    collaborators: ["adrian", "julie", "robert"],
    tasks: {
      todo: [
        {
          id: "task-2-1",
          taskTitle: "Brainstroming",
          description: `Brainstorming brings team members' diverse experience into play.`,
          taskMembers: ["adrian", "julie", "robert"],
          commentsCount: 12,
          filesCount: 0,
          priority: "Low",
        },
        {
          id: "task-2-2",
          taskTitle: "Research",
          description: `User research helps you to create an optimal product for users.`,
          taskMembers: ["julie", "robert"],
          commentsCount: 10,
          filesCount: 3,
          priority: "High",
        },
        {
          id: "task-2-3",
          taskTitle: "Wireframes",
          description: `Low fidelity wireframes include the most basic content and visuals.`,
          taskMembers: ["Marc", "jason", "kabir"],
          commentsCount: 7,
          filesCount: 3,
          priority: "High",
        },
      ],
      onProgress: [
        {
          id: "task-2-4",
          taskTitle: "Onboarding Illustrations",
          description: ``,
          taskMembers: ["robert", "Marc", "jason"],
          commentsCount: 14,
          filesCount: 15,
          priority: "Low",
          assets: ["/onboarding-illustrations-asset-1.png"],
        },
        {
          id: "task-2-5",
          taskTitle: "Moodboard",
          description: ``,
          taskMembers: ["robert"],
          commentsCount: 9,
          filesCount: 10,
          priority: "Low",
          assets: ["/moodboard-asset-1.png", "/moodboard-asset-2.png"],
        },
      ],
      done: [
        {
          id: "task-2-6",
          taskTitle: "Mobile App Design",
          description: ``,
          taskMembers: ["robert", "Marc"],
          commentsCount: 12,
          filesCount: 15,
          priority: "Completed",
          assets: ["/mobile-app-design-asset-1.png"],
        },
        {
          id: "task-2-7",
          taskTitle: "Design System",
          description: ``,
          taskMembers: ["julie", "robert", "Marc"],
          commentsCount: 12,
          filesCount: 15,
          priority: "Completed",
        },
      ],
    },
  },
  {
    id: "project-3",
    color: "#E4CCFD",
    title: "Design System",
    collaborators: ["adrian", "julie", "robert", "Marc"],
    tasks: {
      todo: [
        {
          id: "task-3-1",
          taskTitle: "Brainstroming",
          description: `Brainstorming brings team members' diverse experience into play.`,
          taskMembers: ["adrian", "julie", "robert"],
          commentsCount: 12,
          filesCount: 0,
          priority: "Low",
        },
        {
          id: "task-3-2",
          taskTitle: "Research",
          description: `User research helps you to create an optimal product for users.`,
          taskMembers: ["julie", "robert"],
          commentsCount: 10,
          filesCount: 3,
          priority: "High",
        },
        {
          id: "task-3-3",
          taskTitle: "Wireframes",
          description: `Low fidelity wireframes include the most basic content and visuals.`,
          taskMembers: ["Marc", "jason", "kabir"],
          commentsCount: 7,
          filesCount: 3,
          priority: "High",
        },
      ],
      onProgress: [
        {
          id: "task-3-4",
          taskTitle: "Onboarding Illustrations",
          description: ``,
          taskMembers: ["robert", "Marc", "jason"],
          commentsCount: 14,
          filesCount: 15,
          priority: "Low",
          assets: ["/onboarding-illustrations-asset-1.png"],
        },
        {
          id: "task-3-5",
          taskTitle: "Moodboard",
          description: ``,
          taskMembers: ["robert"],
          commentsCount: 9,
          filesCount: 10,
          priority: "Low",
          assets: ["/moodboard-asset-1.png", "/moodboard-asset-2.png"],
        },
      ],
      done: [
        {
          id: "task-3-6",
          taskTitle: "Mobile App Design",
          description: ``,
          taskMembers: ["robert", "Marc"],
          commentsCount: 12,
          filesCount: 15,
          priority: "Completed",
          assets: ["/mobile-app-design-asset-1.png"],
        },
        {
          id: "task-3-7",
          taskTitle: "Design System",
          description: ``,
          taskMembers: ["julie", "robert", "Marc"],
          commentsCount: 12,
          filesCount: 15,
          priority: "Completed",
        },
      ],
    },
  },
  {
    id: "project-4",
    color: "#76A5EA",
    title: "Wireframes",
    collaborators: ["adrian", "julie", "robert", "Marc", "jason"],
    tasks: {
      todo: [
        {
          id: "task-4-1",
          taskTitle: "Brainstroming",
          description: `Brainstorming brings team members' diverse experience into play.`,
          taskMembers: ["adrian", "julie", "robert"],
          commentsCount: 12,
          filesCount: 0,
          priority: "Low",
        },
        {
          id: "task-4-2",
          taskTitle: "Research",
          description: `User research helps you to create an optimal product for users.`,
          taskMembers: ["julie", "robert"],
          commentsCount: 10,
          filesCount: 3,
          priority: "High",
        },
        {
          id: "task-4-3",
          taskTitle: "Wireframes",
          description: `Low fidelity wireframes include the most basic content and visuals.`,
          taskMembers: ["Marc", "jason", "kabir"],
          commentsCount: 7,
          filesCount: 3,
          priority: "High",
        },
      ],
      onProgress: [
        {
          id: "task-4-4",
          taskTitle: "Onboarding Illustrations",
          description: ``,
          taskMembers: ["robert", "Marc", "jason"],
          commentsCount: 14,
          filesCount: 15,
          priority: "Low",
          assets: ["/onboarding-illustrations-asset-1.png"],
        },
        {
          id: "task-4-5",
          taskTitle: "Moodboard",
          description: ``,
          taskMembers: ["robert"],
          commentsCount: 9,
          filesCount: 10,
          priority: "Low",
          assets: ["/moodboard-asset-1.png", "/moodboard-asset-2.png"],
        },
      ],
      done: [
        {
          id: "task-4-6",
          taskTitle: "Mobile App Design",
          description: ``,
          taskMembers: ["robert", "Marc"],
          commentsCount: 12,
          filesCount: 15,
          priority: "Completed",
          assets: ["/mobile-app-design-asset-1.png"],
        },
        {
          id: "task-4-7",
          taskTitle: "Design System",
          description: ``,
          taskMembers: ["julie", "robert", "Marc"],
          commentsCount: 12,
          filesCount: 15,
          priority: "Completed",
        },
      ],
    },
  },
];
export const sidebarConfig = [
  {
    icon: home,
    text: "Home",
  },
  {
    icon: "/message-sidebar-icon.svg",
    text: "Messages",
  },
  {
    icon: taskIcon,
    text: "Tasks",
  },
  {
    icon: peopleIcon,
    text: "Members",
  },
  {
    icon: settingsIcon,
    text: "Settings",
  },
];
