
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Gift, Home, Plane } from 'lucide-react';

const Registry = () => {
  const registries = [
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
      description: 'Shop our Amazon registry for home essentials and more.',
      url: 'https://www.amazon.com/',
    },
    {
      name: 'Crate & Barrel',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Crate_%26_Barrel_logo.svg/1200px-Crate_%26_Barrel_logo.svg.png',
      description: 'We\'ve selected beautiful items for our new home from Crate & Barrel.',
      url: 'https://www.crateandbarrel.com/',
    },
    {
      name: 'Zola',
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/Zola-Logo.png',
      description: 'Our main registry with all our favorite picks for our new life together.',
      url: 'https://www.zola.com/',
    },
  ];

  const fundOptions = [
    {
      title: 'Honeymoon Fund',
      icon: <Plane className="h-10 w-10 text-wedding-gold" />,
      description: 'Help us create amazing memories on our dream honeymoon to Bali.',
    },
    {
      title: 'Home Down Payment',
      icon: <Home className="h-10 w-10 text-wedding-gold" />,
      description: 'Contribute to our future home where we\'ll build our life together.',
    },
  ];

  return (
    <Layout>
      <Section
        title="Registry"
        subtitle="Thank you for celebrating with us. Your presence is the greatest gift, but if you wish to help us start our new life together, we've created these registries."
        centered
        className="pt-28 md:pt-32"
      >
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {registries.map((registry, index) => (
              <Card key={index} hover>
                <Card.Header>
                  <div className="flex justify-center">
                    <img 
                      src={registry.logo} 
                      alt={registry.name} 
                      className="h-12 object-contain"
                    />
                  </div>
                </Card.Header>
                <Card.Content>
                  <p className="text-wedding-charcoal/80 mb-6 text-center">
                    {registry.description}
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      asChild
                      className="bg-wedding-gold hover:bg-wedding-gold/90 text-wedding-midnight"
                    >
                      <a href={registry.url} target="_blank" rel="noopener noreferrer">
                        View Registry
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>

          <div className="pt-4">
            <h3 className="font-serif text-2xl text-center mb-8">Cash Funds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fundOptions.map((fund, index) => (
                <Card key={index} hover>
                  <Card.Content className="p-8">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        {fund.icon}
                      </div>
                      <h4 className="font-serif text-xl">
                        {fund.title}
                      </h4>
                      <p className="text-wedding-charcoal/80">
                        {fund.description}
                      </p>
                      <Button 
                        className="mt-4 bg-wedding-gold hover:bg-wedding-gold/90 text-wedding-midnight"
                      >
                        Contribute
                        <Gift className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-10">
            <p className="text-lg">
              We're truly grateful for your presence on our special day. <br />
              Your warm wishes and support mean the world to us as we begin this new chapter.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Registry;
