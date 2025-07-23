import { Header } from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Star,
  Play,
  Check,
  Users,
  Cloud,
  BarChart3,
  FileText,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto from-emerald-50 to-blue-50 py-20">
        <div className="mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                We're here to
                <br />
                Increase your
                <br />
                Productivity
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest features in managing work
                every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3">
                  Try for free
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 px-8 py-3 bg-transparent"
                >
                  <Play className="w-4 h-4" />
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-emerald-400 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 rounded-full w-12 h-12"></div>
                <div className="absolute bottom-4 left-4 bg-purple-500 rounded-lg w-8 h-8"></div>
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Person with analytics"
                  width={300}
                  height={400}
                  className="mx-auto"
                />
                <div className="absolute top-8 left-8 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-semibold">$432.00</div>
                </div>
                <div className="absolute bottom-8 right-8 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-semibold">$24.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12">
            More than 25,000 teams use Collabs
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-xl font-semibold">Dropbox</div>
            <div className="text-xl font-semibold">Notion</div>
            <div className="text-xl font-semibold">INTERCOM</div>
            <div className="text-xl font-semibold">descript</div>
            <div className="text-xl font-semibold">grammarly</div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                How we support our
                <br />
                pratner all over the
                <br />
                world
              </h2>
              <p className="text-gray-600 mb-8">
                SaaS become a common delivery model for many business
                application, including office software, messaging software,
                payroll processing software, DBMS software, management software
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">4.9 / 5 rating</div>
                    <div className="text-sm text-gray-600">databricks</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">4.8 / 5 rating</div>
                    <div className="text-sm text-gray-600">Chainalysis</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Publishing
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Plan, collaborate, and publishing your contetn that drivees
                    meaningful engagement and growth for your barnd
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Analytics
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Analyze your performance and create goegeous report
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Engagement
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Quickly navigate you anda engage with your audience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Features
                <br />
                you cab get
              </h2>
              <p className="text-gray-600 max-w-md">
                We offer a variety of interesting features that you can help
                increase yor productivity at work and manage your projrct esaly
              </p>
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Get Started
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-emerald-100 rounded-lg p-6 mb-6">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Collaboration Teams
                </h3>
                <p className="text-gray-600 text-sm">
                  Here you can handle projects together with team virtually
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-blue-100 rounded-lg p-6 mb-6">
                  <Cloud className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cloud Storage
                </h3>
                <p className="text-gray-600 text-sm">
                  No nedd to worry about storage because we provide storage up
                  to 2 TB
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-yellow-100 rounded-lg p-6 mb-6">
                  <BarChart3 className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Daily Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Analyze all the data you need in one dashboard
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Benefit Will
                <br />
                You Get
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">
                    Free Consulting With Experet Saving Money
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Online Banking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">
                    Investment Report Every Month
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">
                    Saving Money For The Future
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Online Transaction</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Laptop with dashboard"
                width={500}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-sm">Money Transfer Successful</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Plan
              <br />
              That's Right For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose plan that works best for you, feel free to contact us
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="text-gray-600">Bil Monthly</span>
              <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm">
                Bil Yearly
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border border-gray-200">
              <CardContent className="p-0 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Free
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Have a go and test your superpowers
                </p>
                <div className="text-4xl font-bold text-gray-900 mb-8">0</div>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">2 Users</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">2 Files</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">
                      Public Share & Comments
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">Chat Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">
                      New income apps
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Signup for free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 border-2 border-emerald-500 bg-emerald-500 text-white relative">
              <CardContent className="p-0 text-center">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-emerald-100 text-sm mb-6">
                  Experiment the power of infinite possibilities
                </p>
                <div className="text-4xl font-bold mb-8">8</div>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-white" />
                    <span className="text-sm">4 Users</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-white" />
                    <span className="text-sm">All apps</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-white" />
                    <span className="text-sm">Unlimited editable exports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-white" />
                    <span className="text-sm">Folders and collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-white" />
                    <span className="text-sm">All incoming apps</span>
                  </div>
                </div>

                <Button className="w-full bg-white text-emerald-500 hover:bg-gray-100">
                  Go to pro
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="p-8 border border-gray-200">
              <CardContent className="p-0 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Business
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Unveil new superpowers and join the Design Leaque
                </p>
                <div className="text-4xl font-bold text-gray-900 mb-8">16</div>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">
                      All the features of pro plan
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">
                      Account success Manager
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">
                      Single Sign-On (SSO)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">
                      Co-conception pogram
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-gray-700">
                      Collaboration-Soon
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Go to Business
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                People are Saying
                <br />
                About DoWith
              </h2>
              <p className="text-gray-300 mb-8">
                Everything you need to accept to payment and grow your money of
                manage anywhere on planet
              </p>

              <div className="bg-slate-800 rounded-lg p-6 mb-6">
                <p className="text-gray-300 mb-4">
                  "I am very helped by this E-wallet application , my days are
                  very easy to use this application and its very helpful in my
                  life , even I can pay a short time 😍"
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">_ Aria Zinanrio</div>
                    <div className="text-sm text-gray-400">Designer</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg?height=32&width=32"
                    alt={`User ${i}`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ))}
                <ArrowRight className="w-5 h-5 text-gray-400 ml-2" />
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get Started</h3>
              <form className="space-y-4">
                <Input
                  placeholder="Email"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                />
                <Input
                  placeholder="Message"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  Request Demo
                </Button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                or Start 14 days trial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-emerald-500 mb-4">
                Biccas
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Get started noew increase your productivity
              </p>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Enter your email here"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 flex-1"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  Subscribe
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Help centre</div>
                <div>Account information</div>
                <div>About</div>
                <div>Contact us</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Help and Solution</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Talk to support</div>
                <div>Support docs</div>
                <div>System status</div>
                <div>Covid responde</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Update</div>
                <div>Security</div>
                <div>Beta test</div>
                <div>Pricing product</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>© 2022 Biccas Inc. Copyright and rights reserved</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>Terms and Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
