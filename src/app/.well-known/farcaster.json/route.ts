export async function GET() {
  return Response.json({
    accountAssociation: {
      header: process.env.FARCASTER_HEADER,
      payload: process.env.FARCASTER_PAYLOAD,
      signature: process.env.FARCASTER_SIGNATURE
    },
    version: "1",
    name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
    homeUrl: process.env.NEXT_PUBLIC_URL,
    iconUrl: process.env.NEXT_PUBLIC_APP_ICON,
    splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE,
    splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,
    subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    screenshotUrls: [`${process.env.NEXT_PUBLIC_APP_ICON}`],
    primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY,
    tags: ["Solv", "finance", "Bitcoin"],
    heroImageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
    tagline: process.env.NEXT_PUBLIC_APP_TAGLINE,
    imageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
    requiredChains: ["eip155:8453"],
    castShareUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
    buttonTitle: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
    requiredCapabilities: ["wallet.getEthereumProvider"],
    noindex: false
  });
}
