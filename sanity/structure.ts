import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("内容管理")
    .items([
      S.listItem()
        .title("站点设置")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("个人信息")
        .id("profile")
        .child(
          S.document().schemaType("profile").documentId("profile")
        ),
      S.divider(),
      S.listItem()
        .title("博客文章")
        .id("post")
        .child(S.documentTypeList("post").title("博客文章")),
      S.listItem()
        .title("作品集项目")
        .id("project")
        .child(S.documentTypeList("project").title("作品集项目")),
    ]);
