
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import StoryTimeline from '@/components/StoryTimeline';
import { TimelineEvent } from '@/components/StoryTimeline';

const storyTimelineEvents: TimelineEvent[] = [
  {
    date: 'January 15, 2019',
    title: 'The First Meeting',
    description: 'We met at a mutual friend\'s birthday party. James spilled his drink on Charlotte\'s favorite shoes, and somehow that led to hours of conversation and laughter.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b4ce491?q=80&w=1470&auto=format&fit=crop'
  },
  {
    date: 'March 20, 2019',
    title: 'First Date',
    description: 'Our first official date was at a small Italian restaurant downtown. We talked until the staff had to politely ask us to leave as they were closing.',
    image: 'https://images.unsplash.com/photo-1559924098-e5b0dc0ffb3c?q=80&w=1374&auto=format&fit=crop'
  },
  {
    date: 'December 31, 2019',
    title: 'New Year\'s Kiss',
    description: 'We rang in the new year together and knew this was the beginning of something special. It was the perfect midnight kiss.',
    image: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=1470&auto=format&fit=crop'
  },
  {
    date: 'August 12, 2020',
    title: 'Moving In Together',
    description: 'We decided to take the next step and move in together. Our first home was a cozy apartment with a view of the city skyline.',
    image: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=1470&auto=format&fit=crop'
  },
  {
    date: 'July 4, 2022',
    title: 'The Proposal',
    description: 'During a weekend getaway to the mountains, James proposed at sunset overlooking the valley. Charlotte said yes before he could even finish asking!',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop'
  },
  {
    date: 'June 10, 2023',
    title: 'Our Wedding Day',
    description: 'The day we\'ve been dreaming of is finally here. We can\'t wait to celebrate our love with all our family and friends.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop'
  }
];

const OurStory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-wedding-midnight z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Love Story</h1>
            <p className="text-white/80 text-lg md:text-xl">
              Every love story is beautiful, but ours is our favorite. Here's a glimpse into our journey together.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <StoryTimeline events={storyTimelineEvents} />
        </div>
      </Section>

      {/* His & Her Perspectives */}
      <Section
        title="His & Her Perspectives"
        subtitle="Love is seeing the world through each other's eyes. Here are our personal reflections on our journey together."
        centered
        dark
        className="bg-wedding-midnight"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-wedding-gold flex items-center justify-center mr-4">
                <span className="font-serif text-wedding-midnight text-lg">J</span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-wedding-gold">James</h3>
                <p className="text-white/60 text-sm">The Groom</p>
              </div>
            </div>
            <p className="text-white/80 italic mb-4">
              "From the moment I met Charlotte, I knew there was something special about her. Her smile lights up every room, and her kindness touches everyone she meets. I've never been more certain of anything than I am of spending the rest of my life with her."
            </p>
            <p className="text-white/80">
              "Every day with Charlotte is an adventure, and I can't wait for all the adventures that lie ahead for us. She is not just the love of my life, but my best friend and confidant. I'm the luckiest man alive to be marrying her."
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-wedding-blush flex items-center justify-center mr-4">
                <span className="font-serif text-white text-lg">C</span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-wedding-blush">Charlotte</h3>
                <p className="text-white/60 text-sm">The Bride</p>
              </div>
            </div>
            <p className="text-white/80 italic mb-4">
              "James came into my life when I least expected it, but exactly when I needed him. His steady presence and unwavering support have been my rock through all of life's challenges and triumphs."
            </p>
            <p className="text-white/80">
              "His thoughtfulness, sense of humor, and the way he loves me so completely make me fall in love with him more each day. I'm so grateful that we found each other, and I can't wait to build our life together as husband and wife."
            </p>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section centered>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl text-wedding-gold opacity-30 font-serif mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-wedding-charcoal mb-8">
            Real love stories never have endings.
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="h-px w-12 bg-wedding-gold/50"></div>
            <p className="mx-4 text-wedding-charcoal/70 uppercase text-sm tracking-wider">Richard Bach</p>
            <div className="h-px w-12 bg-wedding-gold/50"></div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default OurStory;
