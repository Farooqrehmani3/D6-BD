
import { defineConfig } from "sanity";
// import { deskTool } from "sanity/desk";
import { schema } from "./schemaTypes";
import { visionTool } from "@sanity/vision";


export default defineConfig({
  name: "default",
  title: "sanity",
  projectId: "wh7e3y5s",
  dataset: "production",
  plugins: [visionTool()],
  schema: {
    types: schema,
  },
});


