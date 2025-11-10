import Link from 'next/link';
import Image from 'next/image';

export default function DownloadCTA() {
  const iosUrl = process.env.NEXT_PUBLIC_IOS_URL || '/request-access';
  const playUrl = process.env.NEXT_PUBLIC_PLAY_URL || '/request-access';

  return (
    <section
      id="download"
      className="py-16 px-4 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden"
    >
      <div className="absolute top-[-40px] right-[-40px] w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get SunWizard AI
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Download the app to get personalized sun protection recommendations.
            Available on Google Play.
          </p>
        </div>
        <div
          className="flex justify-center gap-6 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <Link
            href={playUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on Google Play"
          >
            <span className="relative w-64 h-20 inline-block">
              <Image
                src="/images/play.png"
                alt="Download on Google Play"
                fill
                className="object-contain"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
