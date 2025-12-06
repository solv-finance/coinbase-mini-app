function withValidProperties(
  properties: Record<string, undefined | string | string[]>
) {
  return Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return !!value;
    })
  );
}

export async function GET() {
  return Response.json({
    accountAssociation: {
      header: process.env.FARCASTER_HEADER,
      payload: process.env.FARCASTER_PAYLOAD,
      signature: process.env.FARCASTER_SIGNATURE
    },
    frame: withValidProperties({
      version: "1",
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      iconUrl: process.env.NEXT_PUBLIC_APP_ICON,
      homeUrl: process.env.NEXT_PUBLIC_URL,
      imageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
      heroImageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
      ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE,
      ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION,
      ogImageUrl: process.env.NEXT_PUBLIC_APP_OG_IMAGE,
      primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY,
      splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE,
      splashImageBackgroundColor: "#fff",
      subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE,
      tags: ["solv", "defi", "dex", "bitcoin"],
      tagline: process.env.NEXT_PUBLIC_APP_TAGLINE
    })
  });
}
