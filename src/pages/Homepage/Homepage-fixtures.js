import { buttonColor } from '@/enums/button';
import { iconEnum } from '@/enums/icon';

export const hero = {
  title:
    'Recherchez des offres sur des <b>hôtels</b>, des <b>hébergements indépendants</b> et <b>plus encore</b>',
  image: {
    src: '/images/hero-large.jpeg',
    sources: [
      {
        srcset: '/images/hero-small.jpeg',
        media: '(max-width: 768px)',
      },
      {
        srcset: '/images/hero-large.jpeg',
        media: '(min-width: 769px)',
      },
    ],
    alt: '',
  },
};

export const destinationsGrid = {
  title: 'Nos destinations<br>populaires',
  destinations: [
    {
      image: {
        src: '/images/paris.jpeg',
        alt: 'Tour Eiffel',
      },
      title: 'Paris, France',
      url: '#',
      total: 7328,
      description:
        "Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine.",
      rating: 4.98,
      price: 90,
    },
    {
      image: {
        src: '/images/londres.jpeg',
        alt: 'Bus de Londres',
      },
      title: 'London, Royaume-Uni',
      url: '#',
      total: 5269,
      rating: 4.6,
      price: 120,
    },
    {
      image: {
        src: '/images/hachioji.jpeg',
        alt: 'Mer du Japon',
      },
      title: 'Hachioji, Japon',
      url: '#',
      total: 943,
      rating: 4.45,
      price: 999,
    },
    {
      image: {
        src: '/images/barcelone.jpeg',
        alt: 'Plage de Barcelone',
      },
      title: 'Barcelone, Espagne',
      url: '#',
      total: 5347,
      rating: 4.5,
      price: 999,
    },
    {
      image: {
        src: '/images/porto.jpeg',
        alt: 'Port de Porto',
      },
      title: 'Porto, Portugal',
      url: '#',
      total: 4911,
      rating: 4.8,
      price: 999,
    },
    {
      image: {
        src: '/images/marrakech.jpeg',
        alt: 'Mosquée de Marrakech',
      },
      title: 'Marrakech, Maroc',
      url: '#',
      total: 1568,
      rating: 4.76,
      price: 999,
    },
    {
      image: {
        src: '/images/bali.jpeg',
        alt: 'Temple indonésien',
      },
      title: 'Bali, Indonésie',
      url: '#',
      total: 2761,
      rating: 4.88,
      price: 999,
    },
  ],
  cta: {
    label: 'Trouvez un hébergement',
    url: '#',
  },
};

export const accomodationsList = {
  title: 'Types d’hébergement',
  accomodations: [
    {
      name: 'Hôtels',
      total: 156786,
      url: '#',
      image: 'https://picsum.photos/400/400?random=1',
    },
    {
      name: 'Appartements',
      total: 51652,
      url: '#',
      image: 'https://picsum.photos/400/400?random=2',
    },
    {
      name: 'Luxe',
      total: 51652,
      url: '#',
      image: 'https://picsum.photos/400/400?random=3',
      icon: iconEnum.AWARD,
    },
    {
      name: 'Villas privées',
      total: 181167,
      url: '#',
      image: 'https://picsum.photos/400/400?random=4',
    },
    {
      name: 'Bungalows',
      total: 8801,
      url: '#',
      image: 'https://picsum.photos/400/400?random=5',
    },
    {
      name: 'Locations de vacances',
      total: 8801,
      url: '#',
      image: 'https://picsum.photos/400/400?random=6',
    },
  ],
};

export const content = {
  title: 'Découvrez<br />notre concept',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur commodi nemo totam, fugit aspernatur, libero nostrum dolore sed rerum hic molestiae eaque quam. Veritatis hic saepe placeat fugiat eum.',
  ctas: [
    { label: 'En savoir plus', color: buttonColor.BLUE },
    { label: 'Trouvez un hébergement' },
  ],
};

export const register = {
  title: 'Profitez de réductions immédiates',
  subtitle:
    'Inscrivez-vous et profitez de toutes nos offres et réductions dès maintenant !',
  fields: [
    {
      id: 'gender',
      label: 'Genre',
      type: 'radio',
      options: [
        { label: 'Mme', value: 'mme' },
        { label: 'Mr', value: 'mr' },
        { label: 'Mx', value: 'mx' },
      ],
    },
    {
      id: 'firstname',
      label: 'Prénom',
      inputAttributes: {
        placeholder: 'Prénom',
      },
    },
    {
      id: 'lastname',
      label: 'Nom',
      inputAttributes: {
        placeholder: 'Nom',
      },
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      inputAttributes: {
        placeholder: 'Email',
        required: true,
      },
    },
    {
      id: 'origin',
      label: 'Comment-nous avez vous connu',
      type: 'select',
      options: [
        { label: 'Site web', value: 'website' },
        { label: 'Newsletter', value: 'newsletter' },
        { label: 'Bouche à oreille', value: 'friends' },
        { label: 'Media', value: 'media' },
      ],
    },
    {
      id: 'legal',
      label:
        'Vous affirmé avoir pris connaissance de notre Politique de confidentialité.',
      type: 'checkbox',
    },
  ],
};
