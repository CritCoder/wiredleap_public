import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individual developers getting started",
      features: [
        "Real-time code suggestions",
        "Basic integrations",
        "Single MCP server connection",
        "Up to 2 AI coding agents",
        "Vercel deployments with Wiredleap branding",
        "Community support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professional developers and small teams",
      features: [
        "Everything in Free",
        "Advanced AI code reviews",
        "Unlimited MCP server connections",
        "Up to 10 AI coding agents",
        "Priority support",
        "Custom integrations",
        "Team collaboration features",
        "Advanced analytics"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per month",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited AI coding agents",
        "On-premises deployment",
        "Custom AI model training",
        "Dedicated support",
        "SLA guarantees",
        "Advanced security features",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that's right for you. Start free and upgrade as you grow.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white border border-gray-200 rounded-2xl p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-black shadow-lg scale-105' 
                    : 'hover:shadow-lg transition-all duration-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    {plan.period !== "forever" && (
                      <span className="text-gray-600">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-black text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-black mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-black mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes, all paid plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-black mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-black mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment.
              </p>
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold text-black mb-4">Need Enterprise Features?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get custom pricing, dedicated support, and enterprise-grade features for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
              <button className="bg-gray-100 text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}

