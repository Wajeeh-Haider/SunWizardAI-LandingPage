'use client';

import {
  FiShield,
  FiDatabase,
  FiEye,
  FiLock,
  FiGlobe,
  FiUserCheck,
  FiMail,
  FiAlertTriangle,
  FiSettings,
  FiRefreshCw,
  FiUsers,
} from 'react-icons/fi';

export default function PrivacyPolicy() {
  const sections = [
    {
      number: 1,
      title: 'Introduction',
      icon: FiShield,
      content:
        "BTM Cloud Consulting LLC ('we,' 'us,' or 'our') respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, store, and protect information when you use our mobile application, SunWizardAI ('App'), and related services (collectively, the 'Services').",
      additionalContent:
        'SunWizardAI provides personalized sunscreen recommendations using data such as skin tone analysis, outdoor activities, time in the sun, environmental conditions, and UV index levels.',
      compliance: [
        'The General Data Protection Regulation (GDPR) (European Union)',
        'The California Consumer Privacy Act (CCPA) and CPRA (United States)',
        'The Personal Information Protection and Electronic Documents Act (PIPEDA) (Canada)',
        'The UK Data Protection Act 2018',
        'The Australian Privacy Act 1988',
        'And other applicable international privacy frameworks',
      ],
    },
    {
      number: 2,
      title: 'Information We Collect',
      icon: FiDatabase,
      content:
        'We collect only the information necessary to provide and improve our Services. Depending on your usage, this may include:',
      subsections: [
        {
          title: '2.1. Information You Provide',
          items: [
            'Photos or Images: When you upload or take a photo for skin tone analysis',
            'Profile Data: Optional details such as name, age range, or skin type preferences',
            'Contact Information: If you subscribe to our app or contact us for support, we may collect your email address or other information you voluntarily provide',
          ],
        },
        {
          title: '2.2. Automatically Collected Information',
          items: [
            'Device Information: Device type, operating system, app version, and general performance metrics',
            'Location Data: With your consent, we access approximate or precise location data to determine UV index and provide localized recommendations',
            'Usage Data: Interactions within the app (e.g., features accessed, time spent, preferences). This information is collected for performance purposes',
          ],
        },
      ],
    },
    {
      number: 3,
      title: 'How We Use Information',
      icon: FiEye,
      content: 'We use your information strictly to:',
      items: [
        'Provide accurate sunscreen and sun safety recommendations',
        'Improve app accuracy and performance',
        'Respond to support inquiries and feedback',
        'Ensure the security and integrity of the App and its services',
      ],
      emphasis:
        'We do not use your information for advertising, profiling, or data monetization. WE WILL NEVER SELL YOUR DATA!',
    },
    {
      number: 4,
      title: 'No Sale or Sharing of Personal Information',
      icon: FiLock,
      content:
        'We never sell, rent, trade, or share your personal information, photos, or data with third parties for marketing or commercial purposes.',
      additionalContent:
        'Your information is used solely to deliver and improve the SunWizardAI mobile app experience.',
    },
    {
      number: 5,
      title: 'Data Retention and Storage',
      icon: FiDatabase,
      items: [
        "Photos and related analysis data are processed securely and may be stored temporarily or longer until the user deletes their account. That data is stored and further utilized for additional recommendations when the UV index changes over time. However, if the user makes an update to their data, we'll instantly delete the previous loaded data (e.g., they upload a new photo)",
        'Data is either anonymized or deleted once, or if, the user deletes their account',
        'All data is stored using industry-standard encryption and access control measures',
        'You may request deletion of your data at any time (see Section 9). Upon receiving such a request, we will comply and delete all your user data and revert with a confirmation email',
      ],
    },
    {
      number: 6,
      title: 'Legal Basis for Processing (for EU/UK Users)',
      icon: FiUserCheck,
      content: 'We process personal data under the following lawful bases:',
      items: [
        'Consent: When you grant permission to use your camera, location, or photo',
        "Legitimate Interests: To maintain and improve the App's functionality and data security",
        'Legal Obligations: To comply with applicable data protection laws and regulatory requirements',
      ],
    },
    {
      number: 7,
      title: 'International Data Transfers',
      icon: FiGlobe,
      content:
        'Because SunWizardAI operates globally, your data may be transferred to and processed in different countries.',
      additionalContent:
        'We ensure all transfers comply with international privacy standards by:',
      items: [
        'Using Standard Contractual Clauses (SCCs) approved by the European Commission, and',
        'Requiring all partners and processors to maintain equivalent privacy protections',
      ],
    },
    {
      number: 8,
      title: 'Security Measures',
      icon: FiLock,
      content:
        'We implement strong technical and organizational safeguards, including:',
      items: [
        'End-to-end standard TLS encryption during data transmission',
        'Secure cloud storage with industry standard limited access controls',
        'Routine security audits and vulnerability testing',
      ],
      additionalContent:
        'Despite these measures, no digital system is entirely risk-free. You acknowledge use of the App at your own discretion.',
    },
    {
      number: 9,
      title: 'Your Privacy Rights',
      icon: FiUserCheck,
      content: 'Depending on your jurisdiction, you may have the right to:',
      items: [
        'Request correction of inaccurate data',
        "Request deletion ('right to be forgotten'). Upon receiving a request for data deletion, we will follow with a confirmation email stating that the request has been completed",
        'Withdraw your consent at any time. We will delete your data once receiving such a request',
      ],
      contact: {
        instruction: 'To exercise your rights, contact us at:',
        email: '📧 info@sunwizard.ai',
        note: 'We will respond within legally required timeframes (typically 30 days).',
      },
    },
    {
      number: 10,
      title: "Children's Privacy",
      icon: FiUsers,
      emphasis:
        'SunWizardAI is not intended for use by children on their own under the age of 16 years old.',
      items: [
        "For sunscreen analysis of children, the data entered must be in the adult's name. At no time should the adult take a photo of a child's face and submit to our system. A photo is required for skin tone and type analysis, so for children under 16, we recommend a photo of the inside of their arm. That skin tone and type is similar to the face",
        "We do not, and will not, knowingly solicit or collect personal data from children. If we discover such data has been collected -- eg a child's photo, we will promptly delete it",
      ],
    },
    {
      number: 11,
      title: 'Third-Party Services',
      icon: FiSettings,
      content:
        'If we integrate third-party services (e.g., weather or UV index data providers), these services may collect limited, non-identifiable data necessary to perform their functions. All partners are vetted to ensure compliance with global privacy standards.',
    },
    {
      number: 12,
      title: 'Changes to This Privacy Policy',
      icon: FiRefreshCw,
      content:
        "We may update this Privacy Policy from time to time. The 'Last Updated' date at the top indicates when it was most recently revised. Continued use of the App after any update signifies your acceptance of the new terms.",
    },
    {
      number: 13,
      title: 'Contact Us',
      icon: FiMail,
      content:
        'For privacy inquiries or to exercise your rights, please contact:',
      contactInfo: {
        attn: 'Attn: Privacy Officer',
        email: '📧 info@Sunwizard.ai',
      },
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Privacy Policy
          </h1>
          <p
            className="text-muted-foreground animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            Effective Date: November 15, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="border-l-4 border-primary pl-6 py-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    {Icon && (
                      <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="text-white" size={20} />
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.number}. {section.title}
                      </h2>
                    </div>
                  </div>

                  {section.content && (
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.additionalContent && (
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {section.additionalContent}
                    </p>
                  )}

                  {section.emphasis && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                      <p className="text-yellow-700 font-semibold">
                        {section.emphasis}
                      </p>
                    </div>
                  )}

                  {section.compliance && (
                    <div className="mb-4">
                      <p className="text-muted-foreground font-semibold mb-2">
                        We are committed to maintaining your privacy in
                        compliance with global data protection and privacy laws,
                        including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        {section.compliance.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.subsections &&
                    section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="mb-4 ml-4">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {subsection.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {section.items && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.contact && (
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="text-muted-foreground mb-2">
                        {section.contact.instruction}
                      </p>
                      <p className="font-semibold text-foreground">
                        {section.contact.email}
                      </p>
                      <p className="text-muted-foreground mt-2">
                        {section.contact.note}
                      </p>
                    </div>
                  )}

                  {section.contactInfo && (
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="font-semibold text-foreground">
                        {section.contactInfo.attn}
                      </p>
                      <p className="text-muted-foreground">
                        {section.contactInfo.email}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
