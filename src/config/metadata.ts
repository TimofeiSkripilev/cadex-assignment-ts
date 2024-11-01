import { Metadata, Viewport } from "next";

export const baseConfig = {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://some-company.com",
    companyName: "Some Company",
    twitterHandle: "@somecompany",
    defaultDescription: "Your trusted partner in technology solutions",
    defaultImages: {
      og: "/images/default-og.png",
      twitter: "/images/default-twitter.png",
    },
  } as const;

// Helper function to construct metadata
export function createMetadata({
  title,
  description,
  path = "",
  images = {},
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  images?: {
    og?: string;
    twitter?: string;
  };
  noIndex?: boolean;
} = {}): Metadata {
  const fullUrl = `${baseConfig.baseUrl}${path}`;
  const fullTitle = title 
    ? `${title} | ${baseConfig.companyName}` 
    : baseConfig.companyName;
  const fullDescription = description || baseConfig.defaultDescription;

  return {
    // Basic metadata
    title: {
      default: baseConfig.companyName,
      template: `%s | ${baseConfig.companyName}`,
      absolute: fullTitle,
    },
    description: fullDescription,
    metadataBase: new URL(baseConfig.baseUrl),

    // Robots and indexing
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Open Graph
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      siteName: baseConfig.companyName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: images.og || baseConfig.defaultImages.og,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      site: baseConfig.twitterHandle,
      creator: baseConfig.twitterHandle,
      images: [images.twitter || baseConfig.defaultImages.twitter],
    },

    // Alternate pages
    alternates: {
      canonical: fullUrl,
    },

    // Additional metadata
    applicationName: baseConfig.companyName,
    referrer: "origin-when-cross-origin",
    keywords: ["your", "keywords", "here"],
    authors: [{ name: baseConfig.companyName }],
    creator: baseConfig.companyName,
    publisher: baseConfig.companyName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
  colorScheme: "light dark",
};
