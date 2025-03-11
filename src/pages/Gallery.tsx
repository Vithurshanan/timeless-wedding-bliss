
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import PhotoGallery from '@/components/PhotoGallery';

const Gallery = () => {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop',
      alt: 'Couple under a tree',
      width: 1470,
      height: 980,
    },
    {
      src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1469&auto=format&fit=crop',
      alt: 'Bride and groom close-up',
      width: 1469,
      height: 980,
    },
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop',
      alt: 'Wedding reception venue',
      width: 1470,
      height: 980,
    },
    {
      src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop',
      alt: 'Wedding rings',
      width: 1470,
      height: 980,
    },
    {
      src: 'https://images.unsplash.com/photo-1470162656305-6f429ba817bf?q=80&w=1470&auto=format&fit=crop',
      alt: 'Engagement session',
      width: 1470,
      height: 980,
    },
    {
      src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1470&auto=format&fit=crop',
      alt: 'Bride getting ready',
      width: 1470,
      height: 980,
    },
    {
      src: 'https://images.unsplash.com/photo-1571275168539-df3d40c69c8d?q=80&w=1470&auto=format&fit=crop',
      alt: 'Couple walking hand in hand',
      width: 1470,
      height: 980,
    },
    {
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop',
      alt: 'Wedding bouquet',
      width: 1470,
      height: 980,
    },
    {
      src: 'https://images.unsplash.com/photo-1519225417060-eed80095390e?q=80&w=1470&auto=format&fit=crop',
      alt: 'First dance',
      width: 1470,
      height: 980,
    },
  ];

  return (
    <Layout>
      <Section
        title="Our Gallery"
        subtitle="Moments and memories from our journey together"
        centered
        className="pt-28 md:pt-32"
      >
        <PhotoGallery photos={photos} />
      </Section>
    </Layout>
  );
};

export default Gallery;
