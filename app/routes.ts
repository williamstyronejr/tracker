import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/LandingLayout.tsx", [index("pages/homepage.tsx")]),

  route("signin", "pages/auth/signin.tsx"),
  route("signup", "pages/auth/signup.tsx"),

  layout("./layouts/AppLayout.tsx", [
    route("dashboard", "pages/dashboard/dashboard.tsx"),
    route("settings/:panel?", "pages/settings/settings.tsx"),
  ]),
] satisfies RouteConfig;
