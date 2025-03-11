
import { useEffect, useState } from 'react';
import { Calendar, Clock, Sparkles, Utensils, Music } from 'lucide-react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Card from '@/components/Card';
import MapLocation from '@/components/MapLocation';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>('ceremony');

  const events = [
    {
      id: 'ceremony',
      title: 'Wedding Ceremony',
      time: '4:00 PM - 5:00 PM',
      location: 'Grand Luxe Estate Garden',
      description: 'Join us for an intimate garden ceremony where we will exchange vows and begin our journey as husband and wife.',
      details: [
        { 
          icon: <Clock className="w-5 h-5 text-wedding-gold" />, 
          label: 'Duration', 
          value: 'Approximately 60 minutes' 
        },
        { 
          icon: <Sparkles className="w-5 h-5 text-wedding-gold" />, 
          label: 'Dress Code', 
          value: 'Formal Attire (Black Tie Optional)' 
        }
      ],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209278385008!3d34.10028065595332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6912b19%3A0x29140913a0d3e355!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1682282366900!5m2!1sen!2sus'
    },
    {
      id: 'cocktail',
      title: 'Cocktail Hour',
      time: '5:00 PM - 6:30 PM',
      location: 'Estate Terrace',
      description: 'Following the ceremony, enjoy cocktails and hors d\'oeuvres on the terrace overlooking the beautiful grounds.',
      details: [
        { 
          icon: <Utensils className="w-5 h-5 text-wedding-gold" />, 
          label: 'Catering', 
          value: 'Chef Michael\'s Signature Selections' 
        },
        { 
          icon: <Music className="w-5 h-5 text-wedding-gold" />, 
          label: 'Entertainment', 
          value: 'String Quartet' 
        }
      ],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209278385008!3d34.10028065595332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6912b19%3A0x29140913a0d3e355!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1682282366900!5m2!1sen!2sus'
    },
    {
      id: 'reception',
      title: 'Reception & Dinner',
      time: '6:30 PM - 10:00 PM',
      location: 'Grand Ballroom',
      description: 'Join us for a night of dinner, dancing, and celebration as we begin our new life together.',
      details: [
        { 
          icon: <Utensils className="w-5 h-5 text-wedding-gold" />, 
          label: 'Dining', 
          value: 'Five Course Gourmet Dinner' 
        },
        { 
          icon: <Music className="w-5 h-5 text-wedding-gold" />, 
          label: 'Entertainment', 
          value: 'Live Band & DJ' 
        }
      ],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209278385008!3d34.10028065595332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6912b19%3A0x29140913a0d3e355!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1682282366900!5m2!1sen!2sus'
    },
    {
      id: 'afterparty',
      title: 'After Party',
      time: '10:00 PM - 1:00 AM',
      location: 'Skyline Lounge',
      description: 'Continue the celebration at our exclusive after party with cocktails, music, and a special midnight surprise.',
      details: [
        { 
          icon: <Sparkles className="w-5 h-5 text-wedding-gold" />, 
          label: 'Special Feature', 
          value: 'Midnight Fireworks Display' 
        },
        { 
          icon: <Music className="w-5 h-5 text-wedding-gold" />, 
          label: 'Entertainment', 
          value: 'DJ & Open Dance Floor' 
        }
      ],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209278385008!3d34.10028065595332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6912b19%3A0x29140913a0d3e355!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1682282366900!5m2!1sen!2sus'
    }
  ];

  const currentEvent = events.find(event => event.id === selectedEvent) || events[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-wedding-midnight z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Wedding Events</h1>
            <p className="text-white/80 text-lg md:text-xl">
              We're excited to celebrate our special day with you. Here's everything you need to know about our wedding weekend.
            </p>
          </div>
        </div>
      </section>

      {/* Date & Location Overview */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-wedding-gold/20 text-wedding-gold font-medium text-sm mb-6">
            Save The Date
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">June 10, 2023</h2>
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-wedding-gold/50"></div>
            <p className="mx-4 text-wedding-charcoal/70 uppercase text-sm tracking-wider">Saturday</p>
            <div className="h-px w-12 bg-wedding-gold/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gold-gradient text-wedding-midnight p-6">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 mb-3" />
                <h3 className="font-serif text-xl mb-1">The Date</h3>
                <p>June 10, 2023</p>
              </div>
            </Card>
            <Card className="bg-midnight-gradient text-white p-6">
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-3" />
                <h3 className="font-serif text-xl mb-1">The Time</h3>
                <p>Ceremony Begins at 4:00 PM</p>
              </div>
            </Card>
            <Card className="bg-blush-gradient text-wedding-midnight p-6">
              <div className="flex flex-col items-center">
                <Sparkles className="w-8 h-8 mb-3" />
                <h3 className="font-serif text-xl mb-1">Dress Code</h3>
                <p>Black Tie Optional</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Event Schedule */}
      <Section
        title="Event Schedule"
        subtitle="Our wedding celebration includes several events. Here's what to expect throughout the day."
        centered
        className="bg-gray-50 dark:bg-wedding-midnight/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {events.map((event, index) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event.id)}
                className={`p-4 rounded-lg transition-all duration-300 text-left ${
                  selectedEvent === event.id
                    ? 'bg-wedding-gold text-wedding-midnight shadow-gold'
                    : 'bg-white dark:bg-wedding-midnight/30 hover:shadow-elegant'
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    selectedEvent === event.id
                      ? 'bg-wedding-midnight text-wedding-gold'
                      : 'bg-wedding-gold/20 text-wedding-gold'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-lg">{event.title}</h3>
                </div>
                <p className={selectedEvent === event.id ? 'text-wedding-midnight/80' : 'text-wedding-charcoal/70 dark:text-white/70'}>
                  {event.time}
                </p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <Card.Header>
                  <div className="inline-block px-3 py-1 rounded-full bg-wedding-gold/20 text-wedding-gold font-medium text-sm mb-2">
                    {currentEvent.time}
                  </div>
                  <Card.Title className="text-2xl">{currentEvent.title}</Card.Title>
                  <p className="text-wedding-charcoal/70 dark:text-white/70">
                    {currentEvent.location}
                  </p>
                </Card.Header>
                <Card.Content>
                  <p className="text-wedding-charcoal/80 dark:text-white/80 mb-6">
                    {currentEvent.description}
                  </p>
                  <div className="space-y-4">
                    {currentEvent.details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-3 mt-1">{detail.icon}</div>
                        <div>
                          <p className="font-medium">{detail.label}</p>
                          <p className="text-wedding-charcoal/70 dark:text-white/70">{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Content>
              </Card>
            </div>
            <div>
              <MapLocation
                name={currentEvent.location}
                address="123 Elegance Drive, Beverly Hills, CA"
                embeddedMapUrl={currentEvent.mapUrl}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Colors & Theme */}
      <Section
        title="Wedding Colors & Theme"
        subtitle="Our wedding features an elegant color palette and styling details that reflect our personal taste."
        centered
        dark
        className="bg-wedding-midnight"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-wedding-midnight border-4 border-white/20 mb-3"></div>
              <p className="text-white/80">Midnight Blue</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-wedding-gold border-4 border-white/20 mb-3"></div>
              <p className="text-white/80">Champagne Gold</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-wedding-sage border-4 border-white/20 mb-3"></div>
              <p className="text-white/80">Sage Green</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-wedding-blush border-4 border-white/20 mb-3"></div>
              <p className="text-white/80">Blush Pink</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-2xl text-wedding-gold mb-4">Elegant Romance</h3>
            <p className="text-white/80 mb-6">
              Our wedding theme blends timeless elegance with romantic elements. Expect lush florals, soft candlelight, and luxurious details that create an atmosphere of sophisticated romance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 rounded-full bg-wedding-gold/20 text-wedding-gold text-sm">Floral Accents</span>
              <span className="px-3 py-1 rounded-full bg-wedding-gold/20 text-wedding-gold text-sm">Candlelight</span>
              <span className="px-3 py-1 rounded-full bg-wedding-gold/20 text-wedding-gold text-sm">Champagne Gold Details</span>
              <span className="px-3 py-1 rounded-full bg-wedding-gold/20 text-wedding-gold text-sm">Luxurious Fabrics</span>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Events;
