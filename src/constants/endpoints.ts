interface Endpoints {
  navbar: string;
  routes: string;
  home: string;
  social: string;
  about: string;
  skills: string;
  education: string;
  experiences: string;
  projects: string;
}

const endpoints: Endpoints = {
  navbar: "profile/navbar.json",
  routes: "profile/routes.json",
  home: "profile/home.json",
  social: "profile/social.json",
  about: "profile/about.json",
  skills: "profile/skills.json",
  education: "profile/education.json",
  experiences: "profile/experiences.json",
  projects: "profile/projects.json",
};

export default endpoints;
