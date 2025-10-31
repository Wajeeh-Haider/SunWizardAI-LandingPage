'use client';

import {
  FiAlertCircle,
  FiShield,
  FiLock,
  FiInfo,
  FiGlobe,
  FiFileText,
  FiMail,
} from 'react-icons/fi';

export default function Terms() {
  const sections = [
    {
      number: 1,
      title: 'Introduction',
      icon: FiShield,
      content:
        "Welcome to SunWizardAI, a mobile application owned and operated by BTM Cloud Consulting LLC ('BTM Cloud Consulting,' 'we,' 'us,' or 'our'). These Terms of Use ('Terms') govern your access to and use of the SunWizardAI mobile application, its content, features, and related services (collectively, the 'App' or 'Services'). By downloading, accessing, or using SunWizardAI mobile app, you agree to be bound by these Terms. If you do not agree, please do not use the App.",
    },
    {
      number: 2,
      title: 'Purpose of SunWizardAI mobile app',
      icon: FiInfo,
      content:
        "SunWizardAI is an AI-powered informational tool designed to help users make informed decisions about sun protection. The App analyzes various factors — including location-based UV index, skin type, time and activity in the sun, and environmental conditions — to provide personalized sunscreen and SPF recommendations. The App's purpose is educational and advisory, not diagnostic or medical. It is intended to promote sun safety awareness and informed decision-making for sunscreen usage and purchase, not to replace professional medical care. While SunWizardAI provides guidance and information on sunscreens and SPF, we DO NOT make product or brand recommendations.",
    },
    {
      number: 3,
      title: 'No Medical Advice',
      icon: FiAlertCircle,
      content:
        'SunWizardAI does not provide medical advice, diagnosis, or treatment. All information and recommendations provided through the App are for informational purposes only and are not a substitute for professional medical judgment, diagnosis, or treatment. If you experience a skin reaction, sunburn, or any medical issue of any kind, please consult a qualified physician or dermatologist immediately.',
      items: [
        "The App's SPF and sunscreen recommendations are based on AI-generated analysis, not medical evaluation",
        'The App does not diagnose skin conditions, allergies, or diseases',
        'You should consult a qualified healthcare professional or dermatologist if you have questions or concerns about your skin, health, or medical conditions',
        'Never disregard or delay seeking professional medical advice because of something you have read or received from the App',
      ],
    },
    {
      number: 4,
      title: 'Eligibility for App usage',
      icon: FiLock,
      content:
        'To use SunWizardAI, you must be at least 16 years old (or the age of majority in your jurisdiction if higher). By using the App, you represent that you meet this requirement. If you are under the applicable age, you may only use the App under the supervision and consent of a parent or legal guardian.',
    },
    {
      number: 5,
      title: 'User Responsibilities',
      icon: FiShield,
      content: 'By using SunWizardAI, you agree to the following:',
      items: [
        'Use the App only for personal, non-commercial purposes',
        'Provide accurate information for AI analysis (e.g., skin type, location, activities, time in the sun, etc)',
        'Not misuse or attempt to interfere with the functionality, servers, or code of the App',
        'Not upload or share content that is illegal, defamatory, obscene, or violates the rights of others',
      ],
    },
    {
      number: 6,
      title: 'Intellectual Property',
      icon: FiFileText,
      content:
        'All content, software, graphics, algorithms, and other materials within SunWizardAI App are the intellectual property of BTM Cloud Consulting LLC or its licensors and are protected under applicable copyright, trademark, and intellectual property laws.',
      items: [
        'Copy, modify, reverse engineer, or distribute any portion of the App',
        'Use our trademarks, logos, or branding without prior written consent',
      ],
    },
    {
      number: 7,
      title: 'AI Analysis Disclaimer',
      icon: FiAlertCircle,
      content:
        'The SunWizardAI application uses artificial intelligence and algorithmic modeling to analyze available data inputs (e.g., user skin tone, location-based UV index, weather data, and exposure duration, activities, etc.). You understand and acknowledge that AI-generated insights are probabilistic, not guaranteed, and external factors can affect results.',
      items: [
        'AI-generated insights are probabilistic, not guaranteed',
        'External factors — such as environmental changes, sunscreen formulations or sunscreen application amounts or frequency of application, SPF content, UVA/UVB protection or user application habits — can affect results',
        'Recommendations are estimates designed for general guidance and not personalized medical or dermatological evaluations',
        'You acknowledge that SunwizardAI cannot guarantee results and following recommendations may still result in sunburns or adverse reactions to products',
      ],
    },
    {
      number: 8,
      title: 'Privacy and Data Protection',
      icon: FiLock,
      content:
        'Your privacy is very important to us. Our collection and use of your data are governed by our SunWizardAI Privacy Policy, which complies with international data protection laws (including GDPR, CCPA, and other applicable standards). By using SunWizardAI, you consent to the collection and use of information as outlined in the Privacy Policy.',
    },
    {
      number: 9,
      title: 'Limitation of Liability',
      icon: FiAlertCircle,
      content:
        'To the fullest extent permitted by law, BTM Cloud Consulting LLC, its affiliates, employees, and licensors shall not be liable for any direct, indirect, incidental, or consequential damages, including but not limited to:',
      items: [
        'Skin irritation or sun-related injury',
        'Misinterpretation of AI recommendations, or',
        "Reliance on the App's content for medical or health decisions",
      ],
      additionalContent:
        'You agree and acknowledge that use of SunWizardAI mobile app is at your own risk.',
    },
    {
      number: 10,
      title: 'No Warranties',
      icon: FiAlertCircle,
      content:
        "SunWizardAI is provided on an 'as is' and 'as available' basis. We make no representations or warranties of any kind, express or implied, including but not limited to:",
      items: [
        'Accuracy, completeness, or reliability of results',
        'Fitness for a particular purpose',
        'Uninterrupted or error-free service',
      ],
      additionalContent:
        "We do not guarantee that the App's recommendations will prevent sunburn, skin damage, or health issues related to sun exposure.",
    },
    {
      number: 11,
      title: 'International Use',
      icon: FiGlobe,
      content:
        'SunWizardAI is available for users worldwide. You are responsible for ensuring that your use of the App complies with local laws and regulations in your jurisdiction. If you access the App from outside the United States, you acknowledge that your data may be transferred to and processed in jurisdictions where privacy laws may differ.',
    },
    {
      number: 12,
      title: 'Termination',
      icon: FiShield,
      content:
        'We may suspend or terminate access to SunWizardAI mobile app at any time, with or without notice, for conduct that violates these Terms or is otherwise harmful to users or the company. Upon termination, all rights granted under these Terms will cease immediately.',
    },
    {
      number: 13,
      title: 'Indemnification',
      icon: FiShield,
      content:
        'You agree to indemnify and hold harmless BTM Cloud Consulting LLC, its affiliates, officers, employees, and partners from any claims, damages, or expenses arising from:',
      items: [
        'Your misuse of the App',
        'Violation of these Terms, or',
        'Infringement of third-party rights',
      ],
    },
    {
      number: 14,
      title: 'Governing Law',
      icon: FiGlobe,
      content:
        'These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles. Users outside the United States agree that any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Florida, USA.',
    },
    {
      number: 15,
      title: 'Changes to These Terms',
      icon: FiFileText,
      content:
        "We may update or revise these Terms at any time. The 'Last Updated' date above indicates when the latest revision took effect. By continuing to use SunWizardAI mobile app after changes are posted, you agree to the updated Terms.",
    },
    {
      number: 16,
      title: 'Contact Information',
      icon: FiMail,
      content:
        'For questions, feedback, or legal inquiries regarding these Terms, please contact us at:',
      contactInfo: {
        company: 'BTM Cloud Consulting LLC',
        attn: 'Attn: Legal Department',
        email: 'info@sunwizard.ai',
        website: 'www.sunwizard.ai',
      },
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Terms of Use
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
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {section.content}
                  </p>

                  {section.items && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.additionalContent && (
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {section.additionalContent}
                    </p>
                  )}

                  {section.contactInfo && (
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="font-semibold text-foreground">
                        {section.contactInfo.company}
                      </p>
                      <p className="text-muted-foreground">
                        {section.contactInfo.attn}
                      </p>
                      <p className="text-muted-foreground">
                        📧 {section.contactInfo.email}
                      </p>
                      <p className="text-muted-foreground">
                        🌐 {section.contactInfo.website}
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
