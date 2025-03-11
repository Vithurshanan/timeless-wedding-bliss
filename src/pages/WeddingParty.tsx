
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import WeddingPartyCard from '@/components/WeddingPartyCard';

const WeddingParty = () => {
  const bridesmaids = [
    {
      name: 'Emma Thompson',
      role: 'Maid of Honor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop',
      relationship: 'Sister of the Bride',
      bio: 'Emma and Charlotte have been inseparable since childhood. As her sister and best friend, Emma has been by Charlotte\'s side through every milestone.'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Bridesmaid',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1528&auto=format&fit=crop',
      relationship: 'College Roommate',
      bio: 'Sophia and Charlotte met during their freshman year of college and quickly became best friends, sharing countless late-night study sessions and adventures.'
    },
    {
      name: 'Olivia Parker',
      role: 'Bridesmaid',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1528&auto=format&fit=crop',
      relationship: 'Childhood Friend',
      bio: 'Olivia has known Charlotte since they were in elementary school. They grew up next door to each other and have remained close despite moves and career changes.'
    },
  ];

  const groomsmen = [
    {
      name: 'Michael Williams',
      role: 'Best Man',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop',
      relationship: 'Brother of the Groom',
      bio: 'Michael has been James\'s biggest supporter throughout his life. As brothers, they\'ve shared everything from childhood adventures to career advice.'
    },
    {
      name: 'Daniel Chen',
      role: 'Groomsman',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
      relationship: 'College Friend',
      bio: 'Daniel and James met during their college years. They bonded over their shared love of sports and have remained close friends ever since.'
    },
    {
      name: 'Brandon Wilson',
      role: 'Groomsman',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1528&auto=format&fit=crop',
      relationship: 'Childhood Friend',
      bio: 'Brandon and James have been friends since middle school. Through high school sports, college adventures, and beyond, they\'ve always stayed connected.'
    },
  ];

  return (
    <Layout>
      <Section
        title="Our Wedding Party"
        subtitle="Meet the amazing people standing by our side on our special day"
        centered
        className="pt-28 md:pt-32"
      >
        <div className="space-y-16">
          <div className="space-y-8">
            <h3 className="font-serif text-2xl md:text-3xl text-center">Bridesmaids</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {bridesmaids.map((member, index) => (
                <WeddingPartyCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  relationship={member.relationship}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-2xl md:text-3xl text-center">Groomsmen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {groomsmen.map((member, index) => (
                <WeddingPartyCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  relationship={member.relationship}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default WeddingParty;
