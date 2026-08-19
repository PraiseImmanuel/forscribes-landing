import { NextResponse } from "next/server";

const RELEASES_PAGE =
  "https://github.com/PraiseImmanuel/forscribes/releases/latest";

// The installer's filename embeds the version (ForScribe_0.1.0_x64-setup.exe),
// so a hardcoded download link breaks on every release. This route asks
// GitHub which asset is current and redirects straight to it, so the
// landing page's download button never needs to change.
export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/PraiseImmanuel/forscribes/releases/latest",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 300 },
      },
    );
    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);

    const release = await res.json();
    const asset = (release.assets ?? []).find((a: { name: string }) =>
      a.name.endsWith("-setup.exe"),
    );
    if (!asset) throw new Error("No installer asset found on latest release");

    return NextResponse.redirect(asset.browser_download_url);
  } catch {
    return NextResponse.redirect(RELEASES_PAGE);
  }
}
