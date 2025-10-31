'use client';

import {
  FiTarget,
  FiUsers,
  FiCheckCircle,
  FiAward,
  FiGlobe,
  FiTrendingUp,
} from 'react-icons/fi';

export default function About() {
  // const team = [
  //   {
  //     name: 'Dr. Sarah Mitchell',
  //     role: 'Founder & Dermatologist',
  //     bio: 'Board-certified dermatologist with 15+ years of experience in skin health and UV protection research.',
  //     initials: 'SM',
  //   },
  //   {
  //     name: 'James Chen',
  //     role: 'CTO & AI Specialist',
  //     bio: "Machine learning expert with a passion for building AI solutions that improve people's health.",
  //     initials: 'JC',
  //   },
  //   {
  //     name: 'Lisa Rodriguez',
  //     role: 'Head of Product',
  //     bio: 'Product strategist focused on creating intuitive, user-friendly health applications.',
  //     initials: 'LR',
  //   },
  // ];

  const values = [
    {
      icon: FiTarget,
      title: 'Mission',
      description:
        'Make personalized sun protection accessible to everyone through AI-powered technology.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: FiGlobe,
      title: 'Innovation',
      description:
        'Continuously improve our recommendations using the latest dermatological research.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: FiUsers,
      title: 'Community',
      description:
        'Build a supportive community of people committed to protecting their skin health.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FiCheckCircle,
      title: 'Trust',
      description:
        'Maintain the highest standards of data privacy and scientific accuracy.',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            About SunWizard AI
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            We're on a mission to revolutionize sun protection through
            personalized AI recommendations and real-time UV monitoring.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 animate-slide-up">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              SunWizard AI was founded by Dr. Sarah Mitchell, a dermatologist
              who witnessed firsthand the devastating effects of sun damage on
              her patients' skin. Despite knowing the importance of sun
              protection, many people struggled to find personalized, practical
              solutions that fit their lifestyle.
            </p>
            <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Recognizing this gap, Dr. Mitchell partnered with AI specialist
              James Chen to create an intelligent system that could provide
              real-time UV monitoring and personalized sunscreen
              recommendations. The result is SunWizard AI – a comprehensive sun
              protection assistant that combines cutting-edge AI with
              dermatological expertise.
            </p>
            <p className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Today, thousands of users rely on SunWizard AI to protect their
              skin from harmful UV rays. We're committed to making sun
              protection smarter, easier, and more accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center animate-slide-up">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center animate-slide-up">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-8 bg-muted rounded-2xl hover:shadow-lg transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-foreground to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiUsers, label: 'Active Users', value: '50K+' },
              { icon: FiTrendingUp, label: 'UV Checks Daily', value: '1M+' },
              { icon: FiAward, label: 'User Satisfaction', value: '98%' },
              { icon: FiGlobe, label: 'Countries Served', value: '150+' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={40} />
                  </div>
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-lg text-gray-300">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
