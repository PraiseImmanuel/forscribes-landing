import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import {
  TranscriptionVisual,
  GroupingVisual,
  RatingVisual,
  ExportVisual,
} from "@/components/FeatureVisuals";
import { PrivacySection } from "@/components/PrivacySection";
import { HowItWorks } from "@/components/HowItWorks";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <section id="features" className="mx-auto max-w-5xl px-6">
          <FeatureSection
            eyebrow="Transcription"
            title="Hours of audio, turned into clean text."
            copy="Batch-import your recordings and let ForScribe transcribe them locally, with a model sized to match your hardware — from an old laptop to a workstation."
            visual={<TranscriptionVisual />}
          />
          <FeatureSection
            eyebrow="Auto-grouping"
            title="See what you've actually been talking about."
            copy="ForScribe clusters your transcripts by content, not by date — surfacing the recurring threads across years of recordings automatically."
            visual={<GroupingVisual />}
            reverse
          />
          <FeatureSection
            eyebrow="Topic rating"
            title="Find the moments that matter, ranked."
            copy="Describe the topic you're writing about and every transcript gets scored against it, using a transparent rubric you can see and adjust."
            visual={<RatingVisual />}
          />
          <FeatureSection
            eyebrow="Export"
            title="Straight into your manuscript."
            copy="Turn a selection, a group, or a topic result into a Markdown or Word file, ready to paste into your draft."
            visual={<ExportVisual />}
            reverse
          />
        </section>

        <PrivacySection />
        <HowItWorks />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
