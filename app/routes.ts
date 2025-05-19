import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("api/auth/*", "routes/api/auth.ts"),

  layout("./layouts/LandingLayout.tsx", [
    index("pages/homepage.tsx"),
    route("signin", "pages/auth/signin.tsx"),
    route("signup", "pages/auth/signup.tsx"),
  ]),

  layout("./layouts/AppLayout.tsx", [
    route("habits/:mode?", "pages/habits/Habits.tsx"),
    route("settings/:panel?", "pages/settings/Settings.tsx"),
  ]),

  // Actions Routes
  route("api/habits/create", "routes/api/habits/create.ts"),
] satisfies RouteConfig;
