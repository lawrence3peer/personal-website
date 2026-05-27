import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { client } from "@/lib/sanity.client";
import { siteSettingsQuery, profileQuery } from "@/lib/queries";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siteSettings, profile] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(profileQuery),
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer footer={siteSettings?.footer} social={profile?.social} />
    </div>
  );
}
