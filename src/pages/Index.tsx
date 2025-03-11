
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Heart } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Layout from '@/components/Layout';

// Placeholder image paths (replace with actual images when ready)
const heroImage = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop';
const coupleImage = 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1469&auto=format&fit=crop';
const venueImage = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop';

const Home = () => {
  // Wedding date (June 10, 2023)
  const weddingDate = new Date(2023, 5, 10, 16, 0, 0);
  
  return (
    <Layout>
      <Hero
        title="Charlotte & James"
        subtitle="Join us to celebrate our special day on June 10, 2023"
        date={weddingDate}
        backgroundImage={heroImage}
      />

      <Section
        title="Our Special Day Awaits"
        subtitle="We are beyond excited to celebrate our love with you. Join us on this beautiful journey as we begin our lives together."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover>
            <img
              src={coupleImage}
              alt="Couple looking at each other"
              className="w-full h-48 object-cover"
            />
            <Card.Header>
              <Card.Title>Our Love Story</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-wedding-charcoal/80 mb-4">
                From our first meeting to the proposal, discover the journey that brought us together.
              </p>
              <Link
                to="/our-story"
                className="text-wedding-gold inline-flex items-center group"
              >
                Read Our Story
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Card.Content>
          </Card>

          <Card hover className="md:translate-y-4">
            <img
              src={venueImage}
              alt="Wedding venue"
              className="w-full h-48 object-cover"
            />
            <Card.Header>
              <Card.Title>Wedding Details</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mr-2 text-wedding-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">June 10, 2023</p>
                    <p className="text-wedding-charcoal/70 text-sm">Saturday, 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-wedding-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Grand Luxe Estate</p>
                    <p className="text-wedding-charcoal/70 text-sm">Beverly Hills, CA</p>
                  </div>
                </div>
              </div>
              <Link
                to="/events"
                className="text-wedding-gold inline-flex items-center group"
              >
                View All Details
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Card.Content>
          </Card>

          <Card hover>
            <div className="h-48 bg-wedding-midnight flex items-center justify-center text-white">
              <div className="text-center">
                <Heart className="w-10 h-10 text-wedding-gold mx-auto mb-2" />
                <span className="text-lg font-serif">Celebrate With Us</span>
              </div>
            </div>
            <Card.Header>
              <Card.Title>RSVP</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-wedding-charcoal/80 mb-4">
                Please let us know if you'll be joining us to celebrate our special day.
              </p>
              <Link
                to="/rsvp"
                className="bg-wedding-gold text-wedding-midnight px-4 py-2 rounded-md inline-flex items-center group hover:shadow-gold transition-all"
              >
                RSVP Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Card.Content>
          </Card>
        </div>
      </Section>

      <Section
        dark
        centered
        className="bg-midnight-gradient text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Begin Your Journey With Us
          </h2>
          <p className="text-white/80 text-lg mb-8">
            We've created this website to share our story and all the details about our wedding day. We can't wait to celebrate with you!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-wedding-gold text-wedding-midnight font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-gold"
            >
              View Our Gallery
            </Link>
            <Link
              to="/registry"
              className="px-8 py-3 bg-transparent border border-white text-white rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Gift Registry
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
