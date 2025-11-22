"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Zap, Shield, Users, TrendingUp, Sparkles, Crown, Building2, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="animatedGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="SaaS Pro"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "https://app.saaspro.io/signup"
          }}
          buttonClassName="px-6 py-2 rounded-sharp"
          buttonTextClassName="font-bold text-sm"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="SAAS PRO"
          description="Empower your business with intelligent automation and real-time analytics. Build, deploy, and scale with confidence."
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://app.saaspro.io/trial"
            },
            {
              text: "Watch Demo",
              href: "#features"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823858730-ewvov9uo.jpg",
              imageAlt: "SaaS dashboard interface"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823859774-c2he00wh.jpg",
              imageAlt: "Cloud computing analytics"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823860411-x4yre815.jpg",
              imageAlt: "Team collaboration workspace"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Why choose SaaS Pro? We deliver innovative solutions that transform how teams work together, drive measurable results, and scale with your business needs."
          features={[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Optimized performance with sub-second response times ensures your workflows never slow down, even under heavy load."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level encryption and compliance certifications protect your data with industry-leading security standards."
            },
            {
              icon: Users,
              title: "Seamless Collaboration",
              description: "Real-time updates and intuitive interfaces enable teams to work together efficiently from anywhere."
            },
            {
              icon: TrendingUp,
              title: "Scalable Growth",
              description: "Infrastructure that grows with you, from startup to enterprise, without compromising performance or reliability."
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Plan"
          description="Start free and scale up as your business grows. All plans include core features and priority support."
          plans={[
            {
              id: "starter",
              badge: "Starter",
              badgeIcon: Sparkles,
              price: "$29/mo",
              subtitle: "Perfect for small teams and startups",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.saaspro.io/trial"
                },
                {
                  text: "Learn More",
                  href: "#contact"
                }
              ],
              features: [
                "Up to 5 team members",
                "5GB storage",
                "Basic analytics",
                "Community support",
                "Monthly reports"
              ]
            },
            {
              id: "professional",
              badge: "Professional",
              badgeIcon: Sparkles,
              price: "$79/mo",
              subtitle: "Best for growing businesses",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.saaspro.io/trial"
                },
                {
                  text: "Learn More",
                  href: "#contact"
                }
              ],
              features: [
                "Up to 25 team members",
                "100GB storage",
                "Advanced analytics",
                "Priority email support",
                "Custom integrations",
                "Weekly reports"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "For large-scale operations",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "#contact"
                },
                {
                  text: "Schedule Demo",
                  href: "https://calendly.com/saaspro"
                }
              ],
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "Enterprise analytics",
                "24/7 dedicated support",
                "Advanced security",
                "Custom SLA"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Impact"
          description="Trusted by thousands of companies worldwide to drive innovation and growth"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Active Users",
              value: "50,000+"
            },
            {
              id: "2",
              icon: Building2,
              title: "Companies",
              value: "5,000+"
            },
            {
              id: "3",
              icon: Globe,
              title: "Countries",
              value: "75+"
            },
            {
              id: "4",
              icon: TrendingUp,
              title: "Uptime",
              value: "99.99%"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="scale-rotate"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Teams Worldwide"
          description="See what our customers have to say about their experience with SaaS Pro"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO at TechVenture",
              testimonial: "SaaS Pro transformed how our team collaborates. We reduced project timelines by 40% and our team productivity increased significantly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823861126-8qqogqjx.jpg",
              imageAlt: "Sarah Johnson headshot"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO at DataFlow",
              testimonial: "The automation features alone have saved us countless hours. The integration with our existing tools was seamless and took only minutes to set up.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823861746-kleovxpv.jpg",
              imageAlt: "Michael Chen headshot"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Operations Director at CloudNine",
              testimonial: "Best investment we made this year. The analytics dashboard gives us real-time insights that drive better business decisions every single day.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823862384-c4m3s2gu.jpg",
              imageAlt: "Emma Rodriguez headshot"
            },
            {
              id: "4",
              name: "James Williams",
              role: "Founder at StartupX",
              testimonial: "From day one, the support team was incredibly helpful. We scaled from 5 to 50 team members without any issues. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823863050-658odt25.jpg",
              imageAlt: "James Williams headshot"
            },
            {
              id: "5",
              name: "Lisa Park",
              role: "Marketing Manager at GrowthCo",
              testimonial: "The user interface is intuitive and beautiful. Our team needed minimal training. It just works, and it works well.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823863800-lu9eqlyv.jpg",
              imageAlt: "Lisa Park headshot"
            },
            {
              id: "6",
              name: "David Kumar",
              role: "Product Lead at InnovateLab",
              testimonial: "Security compliance became effortless. We passed our audit in record time thanks to SaaS Pro's built-in compliance features.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823864682-fwjfzd3g.jpg",
              imageAlt: "David Kumar headshot"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about SaaS Pro and how it can transform your business"
          faqs={[
            {
              id: "1",
              title: "What is SaaS Pro?",
              content: "SaaS Pro is a comprehensive business automation platform designed to help teams streamline workflows, improve collaboration, and make data-driven decisions. It combines powerful analytics with intuitive automation tools."
            },
            {
              id: "2",
              title: "How long does implementation take?",
              content: "Most teams are up and running within 24-48 hours. Our onboarding team handles the setup process, and you can have your first team members working immediately. Enterprise deployments may take longer based on custom requirements."
            },
            {
              id: "3",
              title: "Is my data secure?",
              content: "Yes. We use bank-level 256-bit encryption, comply with GDPR, CCPA, SOC 2 Type II, and ISO 27001 standards. All data is encrypted in transit and at rest, with automatic backups and disaster recovery."
            },
            {
              id: "4",
              title: "Can I integrate with existing tools?",
              content: "Absolutely. SaaS Pro integrates with 500+ popular applications including Slack, Salesforce, HubSpot, Google Workspace, and more. Custom API integrations are available for Enterprise plans."
            },
            {
              id: "5",
              title: "What kind of support do you offer?",
              content: "We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers. Our average response time is under 2 hours for all support tiers."
            },
            {
              id: "6",
              title: "Can I cancel anytime?",
              content: "Yes. There are no long-term contracts or cancellation fees. You can cancel your subscription anytime. Your data is always available for export in standard formats."
            },
            {
              id: "7",
              title: "Do you offer custom plans?",
              content: "Yes. Enterprise customers can request custom plans tailored to their specific needs, including custom pricing, dedicated infrastructure, and personalized onboarding."
            },
            {
              id: "8",
              title: "What's the pricing for large teams?",
              content: "Starter: $29/month (5 users), Professional: $79/month (25 users). For teams larger than 25, we recommend our Enterprise plan with custom pricing based on your specific requirements."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Started Today"
          description="Join thousands of teams using SaaS Pro to transform their business. Have questions? Our sales team is here to help you find the perfect solution."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Work Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "teamSize",
              type: "text",
              placeholder: "Team Size",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs and how we can help",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763823865398-tv3uc03j.jpg"
          imageAlt="SaaS Pro customer support"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "https://saaspro.io/security" },
                { label: "Roadmap", href: "https://saaspro.io/roadmap" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "https://saaspro.io/blog" },
                { label: "Careers", href: "https://saaspro.io/careers" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://saaspro.io/privacy" },
                { label: "Terms of Service", href: "https://saaspro.io/terms" },
                { label: "Cookie Policy", href: "https://saaspro.io/cookies" },
                { label: "Status", href: "https://status.saaspro.io" }
              ]
            }
          ]}
          copyrightText="© 2025 SaaS Pro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}