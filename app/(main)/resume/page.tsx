import { client } from "@/lib/sanity.client";
import { profileQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";
import { ResumeSection } from "@/components/ResumeSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "简历",
  description: "我的个人简历",
};

export default async function ResumePage() {
  const profile = await client.fetch(profileQuery);

  if (!profile) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-charcoal/60">
          请先在 Sanity Studio 中添加个人信息
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 头部信息 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {profile.avatar && (
            <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-card">
              <Image
                src={urlFor(profile.avatar).width(150).height(150).url()}
                alt={profile.name}
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          )}

          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl font-bold mb-2">{profile.name}</h1>
            <p className="text-charcoal/70">
              {profile.email}
              {profile.social?.github && (
                <>
                  {" | "}
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage hover:text-brown transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </>
              )}
            </p>
          </div>
        </div>

        {/* 下载简历按钮 */}
        {profile.resume && (
          <div className="text-center mb-12">
            <a
              href={profile.resume.asset.url}
              download
              className="btn-primary"
            >
              下载简历 PDF
            </a>
          </div>
        )}

        {/* 教育经历 */}
        {profile.education && profile.education.length > 0 && (
          <ResumeSection title="教育经历">
            <div className="space-y-6">
              {profile.education.map((edu: any, index: number) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{edu.school}</h3>
                    <p className="text-charcoal/70">
                      {edu.major} · {edu.degree}
                    </p>
                  </div>
                  <p className="text-charcoal/60">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* 工作经历 */}
        {profile.experience && profile.experience.length > 0 && (
          <ResumeSection title="工作经历">
            <div className="space-y-8">
              {profile.experience.map((exp: any, index: number) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{exp.company}</h3>
                      <p className="text-sage">{exp.position}</p>
                    </div>
                    <p className="text-charcoal/60">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  {exp.description && (
                    <p className="text-charcoal/80 mt-2">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* 技能 */}
        {profile.skills && profile.skills.length > 0 && (
          <ResumeSection title="技能">
            <div className="space-y-4">
              {profile.skills.map((skill: any, index: number) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-charcoal/60">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-charcoal/10 rounded-full h-2.5">
                    <div
                      className="bg-sage h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>
        )}
      </div>
    </section>
  );
}
