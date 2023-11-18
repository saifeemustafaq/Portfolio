import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Community from "./pages/Community.vue";
import Projects from "./pages/Projects.vue";
import Experience from "./pages/Experience.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home, // Home component to be displayed at the root path
		},
		{
			path: "/community",
			name: "Community",
			component: Community,
		},
		{
			path: "/projects",
			name: "Projects",
			component: Projects,
		},
		{
			path: "/experience",
			name: "Experience",
			component: Experience,
		},
		// Add more routes as needed
	],
});

export default router;
