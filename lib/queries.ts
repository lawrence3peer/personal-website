import { groq } from "next-sanity";

// 博客文章查询
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body
}`;

// 作品集查询
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  mainImage,
  techStack,
  liveUrl,
  githubUrl
}`;

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  images,
  description,
  techStack,
  liveUrl,
  githubUrl
}`;

// 个人信息查询
export const profileQuery = groq`*[_type == "profile"][0] {
  _id,
  name,
  avatar,
  bio,
  email,
  social,
  resume,
  education,
  experience,
  skills
}`;

// 站点设置查询
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  title,
  description,
  logo,
  footer
}`;

// 首页精选作品
export const featuredProjectsQuery = groq`*[_type == "project"][0...3] {
  _id,
  title,
  slug,
  mainImage,
  techStack
}`;

// 首页最新文章
export const latestPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt
}`;
