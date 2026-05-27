import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "作品集项目",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "项目名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL 路径",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "封面图",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      title: "项目截图",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "description",
      title: "简介",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "techStack",
      title: "技术栈",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "liveUrl",
      title: "在线链接",
      type: "url",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub 链接",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
