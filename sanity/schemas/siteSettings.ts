import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "站点设置",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "网站标题",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "网站描述",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "footer",
      title: "页脚信息",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
