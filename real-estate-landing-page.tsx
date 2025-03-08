import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Globe, Home, Instagram, Mail, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Camera } from "lucide-react";

export default function RealEstateLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#585454] backdrop-blur supports-[backdrop-filter]:bg-[#585454]">
  <div className="container flex h-20 items-center justify-between">
    {/* Logo Button */}
    <button className="flex items-center">
      <Image
        src="https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/tprhoiglqzbp9mbu8x8s"
        alt="Julie Hansen Partnership"
        width={120} 
        height={40} 
        className="h-10 w-auto md:h-12"
      />
    </button>

    {/* Navigation Links */}
    <nav className="hidden md:flex gap-6">
      <Link href="#about" className="text-sm font-medium text-white hover:underline underline-offset-4">
        About
      </Link>
      <Link href="#services" className="text-sm font-medium text-white hover:underline underline-offset-4">
        Services
      </Link>
      <Link href="#selling" className="text-sm font-medium text-white hover:underline underline-offset-4">
        Selling
      </Link>
      <Link href="#buying" className="text-sm font-medium text-white hover:underline underline-offset-4">
        Buying
      </Link>
      <Link href="#marketing" className="text-sm font-medium text-white hover:underline underline-offset-4">
        Marketing
      </Link>
      <Link href="#contact" className="text-sm font-medium text-white hover:underline underline-offset-4">
        Contact
      </Link>
    </nav>

    {/* CTA Button */}
    <Button className="bg-white text-[#585454] hover:bg-gray-200">Book an Appointment</Button>
  </div>
</header>


      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury home exterior"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Over 33 Years of Real Estate Excellence
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                We provide every one of our clients with a level of service they won't find anywhere else. When you
                choose Julie Hansen Partnership, experience is 100% nonnegotiable.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Book an Appointment
                </Button>
                <Button size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all">
                Learn More
              </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-5">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Julie Hansen Partnership
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  An Elite Group of Real Estate Professionals
                </h2>
                <p className="text-muted-foreground text-lg">
                  An elite group of the East Bay's most talented and visionary real estate professionals believed buyers
                  and sellers deserved more from their real estate company. More service. More resources. More
                  integrity. More global reach. In a word, more of everything people should expect when they buy or sell
                  their homes.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Julie Hansen-Orvis</h3>
                    <p className="text-muted-foreground">CA DRE# 00934447</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                  alt="Luxury home interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Comprehensive Marketing Plan</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  Creating an Unforgettable Experience for You
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Phone className="mr-3 h-6 w-6 text-primary" />
                    Responsive Communication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Always available via phone, text, or email. We believe communication is the foundation of our client
                    relationships.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Globe className="mr-3 h-6 w-6 text-primary" />
                    Extensive Syndication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Marketing your property locally, nationally, and internationally to ensure maximum exposure to
                    qualified buyers.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Home className="mr-3 h-6 w-6 text-primary" />
                    High-Quality Virtual Tours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Making your home stand out with immersive virtual tours that allow buyers to experience your
                    property from anywhere.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                  <Camera className="mr-3 h-6 w-6 text-primary" />
                    Professional Photography
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Featuring beautiful, high-end photography as a central part of our marketing strategy to showcase
                    your home's best features.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Star className="mr-3 h-6 w-6 text-primary" />
                    Staging Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <span>Decluttering and Organization - Ensuring your home is neat and inviting.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <span>Drawer and Cabinet Arrangement - Keeping storage spaces orderly.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <span>Pet Management - Keeping pets outdoors or off the premises during showings.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <span>Ambiance Enhancement - Playing soft music to create a welcoming atmosphere.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Selling & Buying Process */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="selling" className="w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/80 p-1 rounded-full">
                  <TabsTrigger
                    value="selling"
                    id="selling"
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    The Selling Process
                  </TabsTrigger>
                  <TabsTrigger
                    value="buying"
                    id="buying"
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    The Buying Process
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="selling" className="space-y-4">
                <div className="grid gap-10 md:grid-cols-2 items-center">
                  <div className="relative h-[500px] overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2196&q=80"
                      alt="Selling a home"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Our Proven Selling Process</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                      <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                        1
                      </div>
                        <div>
                          <h4 className="font-bold text-lg">Initial Consultation & Planning</h4>
                          <p className="text-muted-foreground">
                            Understanding your goals and creating a tailored plan that meets your specific needs and
                            timeline.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Devise & Execute Marketing Plan</h4>
                          <p className="text-muted-foreground">
                            Implementing strategies to showcase your property effectively to the right audience of
                            potential buyers.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Review Offers & Reach Agreement</h4>
                          <p className="text-muted-foreground">
                            Negotiating terms to achieve the best outcome and maximize your property's value.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Complete Transaction Process</h4>
                          <p className="text-muted-foreground">
                            Ensuring all details are finalized smoothly, from inspections to closing documents.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                          5
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">After-Sale Service</h4>
                          <p className="text-muted-foreground">
                            Providing continued support even after the sale is complete to ensure a seamless transition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="buying" className="space-y-4">
                <div className="grid gap-10 md:grid-cols-2 items-center">
                  <div className="relative h-[500px] overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                      alt="Buying a home"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Our Streamlined Buying Process</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Initial Consultation & Planning</h4>
                          <p className="text-muted-foreground">
                            Discussing your preferences, needs, and budget to create a personalized home buying
                            strategy.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Search for a Home & Get Pre-Approved</h4>
                          <p className="text-muted-foreground">
                            Finding properties that match your criteria and securing financing to strengthen your offer.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Submit an Offer</h4>
                          <p className="text-muted-foreground">
                            Making a competitive proposal for your chosen property with expert negotiation support.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-4 flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Complete Settlement Process</h4>
                          <p className="text-muted-foreground">
                            Finalizing all necessary paperwork and arrangements to ensure a smooth transition to your
                            new home.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Communication Tablet */}
        <section id="communication" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="relative h-[600px] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Communication Tablet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Innovative Communication
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  The Hansen Partners Communications Tablet
                </h2>
                <p className="text-muted-foreground text-lg">
                  We have created this as a wonderful tool so that we can communicate with you daily, provide you with
                  updates on what is happening with your home. We are available at the click of your tablet.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-6 w-6 text-primary shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Document Review and Signing</h4>
                      <p className="text-muted-foreground">
                        Review all documents and sign in the comfort of your home or anywhere.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-6 w-6 text-primary shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Real-Time Marketing Updates</h4>
                      <p className="text-muted-foreground">
                        Stay up to date on all marketing activities, review materials, photos, etc., in real time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-6 w-6 text-primary shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Virtual Meetings</h4>
                      <p className="text-muted-foreground">
                        Meet with us face to face on our Gotomeeting.com platform to discuss the events of the week.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-6 w-6 text-primary shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Dedicated Communication Channel</h4>
                      <p className="text-muted-foreground">
                        You have your own email assigned just for you and your common space to quickly write a note, or
                        quickly send a video message to us for fast communication using our BombBomb video messaging
                        system.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground font-medium italic border-l-4 border-primary/20 pl-4">
                  We believe that transparency and guiding you and your family through the process is key to having the
                  best experience. During these uncertain times, it is a good feeling to know you have someone with a
                  proven track record you can count on. Who you work with does matter!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Strategy */}
        <section id="marketing" className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Global Reach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Marketing Your Home to the World
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  The Bay Area remains one of the world's most sought-after regions to live in, and when looking to
                  sell, it is vital that your home be marketed online to audiences locally, nationally, and
                  internationally.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Local Exposure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-40 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Local neighborhood"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Through our partnership with Nextdoor, the private online social network now used in over 80% of
                    U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives
                    targeted local exposure.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">National Exposure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-40 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                      alt="National real estate"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more
                    consumers to your home and increasing exposure. We will receive every inquiry about your property
                    directly.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">International Exposure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-40 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2196&q=80"
                      alt="International real estate"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground mb-3">
                    To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent
                    international real estate portals.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>Wall Street Journal</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>LuxuryPortfolio.com</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>LuxuryRealEstate.com</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>LeadingRE.com</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>UniqueHomes.com</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>China.apr.com</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>Caimeiju</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>Juwai</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="mr-1 h-4 w-4 text-primary" />
                      <span>Country Life UK</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="w-full py-16 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Subscribe to our Newsletter</h2>
                <p className="text-muted-foreground text-lg">
                  Stay tuned for latest news and updates about luxury properties, market trends, and exclusive
                  offerings.
                </p>
                <div className="space-y-3 max-w-md">
                  <Input type="email" placeholder="Email Address" className="h-12" />
                  <Button size="lg" className="w-full">
                    Subscribe
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our
                    Privacy Policy and consent to receiving marketing communications, including through automated calls,
                    texts, and emails, some of which may use artificial or prerecorded voices. This consent isn't
                    necessary for purchasing any products or services and you may opt out at any time. To opt out from
                    texts, you can reply, 'stop' at any time. To opt out from emails, you can click on the unsubscribe
                    link in the emails. Message and data rates may apply.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury home"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  We combine data gained from your home's Comparative Market Analysis with local market research to
                  create a marketing plan designed to help you meet your selling goals.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full">
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="w-full bg-muted/80 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Home className="h-6 w-6" />
                <span>Julie Hansen Partnership</span>
              </div>
              <p className="text-muted-foreground">
                An elite group of the East Bay's most talented and visionary real estate professionals.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">ADDRESS</h3>
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p>4733 Chabot Drive #100</p>
                  <p>Pleasanton, CA 94588</p>
                  <p className="mt-2">Julie Hansen-Orvis | CA DRE# 00934447</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">CONTACT INFORMATION</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  <a href="tel:(925) 553-6707" className="hover:underline">
                    (925) 553-6707
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  <a href="mailto:luxuryhomesinwc@icloud.com" className="hover:underline">
                    luxuryhomesinwc@icloud.com
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">FOLLOW US</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © {new Date().getFullYear()} Julie Hansen Partnership. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
                <span>|</span>
                <p>Website Designed & Developed by Luxury Presence</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

