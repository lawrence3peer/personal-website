import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "博客文章",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "标题",
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
      name: "publishedAt",
      title: "发布时间",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "mainImage",
      title: "封面图",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "excerpt",
      title: "摘要",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "正文",
      type: "blockContent",
    }),
  ],
  orderings: [
    {
      title: "发布时间（新到旧）",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, publishedAt, media } = selection;
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString("zh-CN")
          : "未发布",
        media,
      };
    },
  },
});
