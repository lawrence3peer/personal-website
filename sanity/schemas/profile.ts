import { defineField, defineType } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "个人信息",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "姓名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "头像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "个人简介",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "email",
      title: "邮箱",
      type: "string",
    }),
    defineField({
      name: "social",
      title: "社交媒体",
      type: "object",
      fields: [
        defineField({ name: "github", title: "GitHub", type: "url" }),
        defineField({ name: "wechat", title: "微信", type: "string" }),
        defineField({ name: "twitter", title: "Twitter", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
      ],
    }),
    defineField({
      name: "resume",
      title: "简历 PDF",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "education",
      title: "教育经历",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "school", title: "学校", type: "string" }),
            defineField({ name: "major", title: "专业", type: "string" }),
            defineField({ name: "degree", title: "学位", type: "string" }),
            defineField({
              name: "startDate",
              title: "开始时间",
              type: "string",
            }),
            defineField({ name: "endDate", title: "结束时间", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "experience",
      title: "工作经历",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "company", title: "公司", type: "string" }),
            defineField({ name: "position", title: "职位", type: "string" }),
            defineField({
              name: "startDate",
              title: "开始时间",
              type: "string",
            }),
            defineField({ name: "endDate", title: "结束时间", type: "string" }),
            defineField({
              name: "description",
              title: "工作描述",
              type: "text",
              rows: 3,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "skills",
      title: "技能",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "技能名称", type: "string" }),
            defineField({
              name: "level",
              title: "熟练度",
              type: "number",
              validation: (Rule) => Rule.min(0).max(100),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar",
    },
  },
});
