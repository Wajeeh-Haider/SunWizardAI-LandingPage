"use client"

import { FiAlertCircle, FiShield, FiLock } from "react-icons/fi"

export default function Terms() {
  const sections = [
    {
      number: 1,
      title: "Acceptance of Terms",
      icon: FiShield,
      content:
        "By accessing and using the SunWizard AI application and website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      number: 2,
      title: "Use License",
      icon: FiLock,
      content:
        "Permission is granted to temporarily download one copy of the materials (information or software) on SunWizard AI for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
      items: [
        "Modifying or copying the materials",
        "Using the materials for any commercial purpose or for any public display",
        "Attempting to decompile or reverse engineer any software contained on SunWizard AI",
        "Removing any copyright or other proprietary notations from the materials",
        "Transferring the materials to another person or mirroring the materials on any other server",
      ],
    },
    {
      number: 3,
      title: "Disclaimer",
      icon: FiAlertCircle,
      content:
        "The materials on SunWizard AI are provided on an 'as is' basis. SunWizard AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      number: 4,
      title: "Limitations",
      content:
        "In no event shall SunWizard AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SunWizard AI.",
    },
    {
      number: 5,
      title: "Accuracy of Materials",
      content:
        "The materials appearing on SunWizard AI could include technical, typographical, or photographic errors. SunWizard AI does not warrant that any of the materials on its website are accurate, complete, or current.",
    },
    {
      number: 6,
      title: "Links",
      content:
        "SunWizard AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SunWizard AI of the site.",
    },
    {
      number: 7,
      title: "Modifications",
      content:
        "SunWizard AI may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
    },
    {
      number: 8,
      title: "Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
    },
    {
      number: 9,
      title: "Medical Disclaimer",
      content:
        "SunWizard AI provides information and recommendations for educational purposes only. The information provided is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before making any decisions related to your health or sun protection.",
    },
    {
      number: 10,
      title: "Contact Information",
      content: "If you have any questions about these Terms & Conditions, please contact us at support@sunwizardai.com",
    },
  ]

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">Terms & Conditions</h1>
          <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Last updated: October 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="border-l-4 border-primary pl-6 py-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    {Icon && (
                      <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="text-primary" size={20} />
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.number}. {section.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{section.content}</p>
                  {section.items && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
