import { galleryItems } from "@/lib/data";
import { img } from "@/lib/images";
import { Container, Section } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Campus Gallery",
  "Photos from life at Meridian Academy — classrooms, laboratories, the library, sports and student life across our campuses."
);

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Life on campus, in pictures"
        description="A glimpse of classrooms, labs, the library, sports days and everything in between."
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <Section className="bg-white">
        <Container>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {galleryItems.map((g, i) => (
              <figure
                key={g.key}
                className="group relative overflow-hidden rounded-2xl break-inside-avoid"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <img
                  src={img(g.key, 800, i % 3 === 0 ? 1000 : 620)}
                  alt={g.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent p-4 pt-10 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {g.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
