import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import { PERSONAL_INFO } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shailendra-patidar.vercel.app";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shailendra Patidar | Python Developer & AI/ML Enthusiast",
    template: "%s | Shailendra Patidar",
  },
  description:
    "Production-grade portfolio of Shailendra Patidar — an aspiring AI/ML and Python Developer specializing in Retrieval-Augmented Generation (RAG), machine learning classifiers, and robust FastAPI backends.",
  keywords: [
    "Shailendra Patidar",
    "Shailendra Patidar Developer",
    "Python Developer Portfolio",
    "AI/ML Developer Portfolio",
    "Python and Generative AI Developer",
    "Machine Learning Engineer Indore",
    "FastAPI Python Developer",
    "RAG Architecture Specialist",
  ],
  authors: [{ name: "Shailendra Patidar", url: siteUrl }],
  creator: "Shailendra Patidar",
  publisher: "Shailendra Patidar",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Shailendra Patidar | Python Developer & AI/ML Specialist",
    description:
      "Explore the software architecture, machine learning models, and RAG pipelines engineered by Shailendra Patidar.",
    siteName: "Shailendra Patidar Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Shailendra Patidar Portfolio Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailendra Patidar | Python Developer & AI/ML Specialist",
    description:
      "Explore the software architecture, machine learning models, and RAG pipelines engineered by Shailendra Patidar.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: "Python Developer & AI/ML Specialist",
    url: siteUrl,
    image: `${siteUrl}/images/profile.jpg`,
    sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "Encoresky Technologies",
      location: {
        "@type": "Place",
        name: "Indore, India",
      },
    },
    knowsAbout: [
      "Python",
      "C",
      "C++",
      "FastAPI",
      "REST APIs",
      "Machine Learning",
      "RAG (Retrieval-Augmented Generation)",
      "Generative AI",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "MySQL",
      "PaddleOCR",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shailendra Patidar Portfolio",
    url: siteUrl,
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.name,
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-screen bg-background text-ivory font-sans selection:bg-champagne-400/30 selection:text-white antialiased">
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
