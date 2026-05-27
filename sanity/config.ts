import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";

export const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "个人网站管理",
  apiVersion: "2026-05-27",
  basePath: "/studio",
  plugins: [deskTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});