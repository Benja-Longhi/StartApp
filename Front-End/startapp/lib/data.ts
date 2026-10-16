// Datos de prueba hasta que exista un backend

export type ProjectStatus = "Recruiting" | "In progress" | "Launched";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: ProjectStatus;
  members: number;
  openRoles: string[];
  likes: number;
  owner: string;
};

export const categories = ["All", "Fintech", "Education", "Health", "Climate", "Social", "AI"];

export const projects: Project[] = [
  {
    id: "budgetbuddy",
    title: "BudgetBuddy",
    description: "A shared budgeting app for students who live together and split every bill.",
    category: "Fintech",
    status: "Recruiting",
    members: 3,
    openRoles: ["Back-end", "UI designer"],
    likes: 128,
    owner: "Martina Ruiz",
  },
  {
    id: "studysync",
    title: "StudySync",
    description: "Match with classmates by subject and schedule, then study together in focused sessions.",
    category: "Education",
    status: "In progress",
    members: 5,
    openRoles: ["Mobile dev"],
    likes: 94,
    owner: "Tomás Pereyra",
  },
  {
    id: "greenroute",
    title: "GreenRoute",
    description: "Plan the lowest-emission route across the city by combining bike, bus and train.",
    category: "Climate",
    status: "Recruiting",
    members: 2,
    openRoles: ["Data scientist", "Front-end"],
    likes: 211,
    owner: "Lucía Fernández",
  },
  {
    id: "mindful",
    title: "Mindful",
    description: "Short daily check-ins that help teenagers track their mood and talk about it.",
    category: "Health",
    status: "Launched",
    members: 6,
    openRoles: [],
    likes: 342,
    owner: "Joaquín Silva",
  },
  {
    id: "localhands",
    title: "LocalHands",
    description: "Connect neighbors who need small jobs done with people nearby who can help.",
    category: "Social",
    status: "In progress",
    members: 4,
    openRoles: ["Marketing"],
    likes: 76,
    owner: "Sofía Gómez",
  },
  {
    id: "pitchperfect",
    title: "PitchPerfect",
    description: "An AI coach that listens to your startup pitch and gives instant feedback.",
    category: "AI",
    status: "Recruiting",
    members: 2,
    openRoles: ["ML engineer", "Back-end"],
    likes: 187,
    owner: "Benjamín Longhi",
  },
  {
    id: "recipeswap",
    title: "RecipeSwap",
    description: "Trade home-cooked meals with people in your building and cut food waste.",
    category: "Social",
    status: "Recruiting",
    members: 3,
    openRoles: ["Front-end"],
    likes: 63,
    owner: "Valentina Díaz",
  },
  {
    id: "tutorly",
    title: "Tutorly",
    description: "Older students tutor younger ones and earn volunteer hours for it.",
    category: "Education",
    status: "Launched",
    members: 7,
    openRoles: [],
    likes: 265,
    owner: "Mateo López",
  },
];

export type Person = {
  name: string;
  role: string;
  skills: string[];
};

export const suggestedPeople: Person[] = [
  { name: "Camila Torres", role: "Product designer", skills: ["Figma", "UX"] },
  { name: "Nicolás Herrera", role: "Back-end developer", skills: ["Node", "SQL"] },
  { name: "Julieta Castro", role: "Growth & marketing", skills: ["Ads", "Content"] },
  { name: "Franco Medina", role: "Mobile developer", skills: ["React Native"] },
];

export type NotificationKind = "join_request" | "accepted" | "declined" | "like" | "message";

export type Notification = {
  id: string;
  kind: NotificationKind;
  from: string;
  project: string;
  time: string;
  read: boolean;
};

export const notifications: Notification[] = [
  { id: "n1", kind: "join_request", from: "Camila Torres", project: "PitchPerfect", time: "5 min ago", read: false },
  { id: "n2", kind: "like", from: "Nicolás Herrera", project: "PitchPerfect", time: "32 min ago", read: false },
  { id: "n3", kind: "accepted", from: "Lucía Fernández", project: "GreenRoute", time: "2 h ago", read: false },
  { id: "n4", kind: "message", from: "Tomás Pereyra", project: "StudySync", time: "Yesterday", read: true },
  { id: "n5", kind: "join_request", from: "Franco Medina", project: "PitchPerfect", time: "Yesterday", read: true },
  { id: "n6", kind: "declined", from: "Joaquín Silva", project: "Mindful", time: "3 days ago", read: true },
];

export const skillOptions = [
  "Front-end",
  "Back-end",
  "Mobile",
  "UI / UX design",
  "Data & AI",
  "Marketing",
  "Business",
  "Product",
];
