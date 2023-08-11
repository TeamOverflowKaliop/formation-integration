import { buttonColor } from '@/enums/button';
import { iconEnum } from '@/enums/icon';
import { inputType } from '@/enums/form';

export const hero = {
  title:
    'Recherchez des offres sur des <b>hôtels</b>, des <b>hébergements indépendants</b> et <b>plus encore</b>',
  image: {
    src: '/images/hero-large.webp',
    width: 1920,
    height: 860,
    sources: [
      {
        srcset: '/images/hero-small.webp',
        media: '(max-width: 768px)',
      },
      {
        srcset: '/images/hero-large.webp',
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
        src: '/images/paris-small.jpeg',
        alt: 'Tour Eiffel',
        width: 750,
        height: 563,
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
        src: '/images/londres-small.jpeg',
        alt: 'Bus de Londres',
        width: 750,
        height: 500,
      },
      title: 'London, Royaume-Uni',
      url: '#',
      total: 5269,
      rating: 4.6,
      price: 120,
    },
    {
      image: {
        src: '/images/hachioji-small.jpeg',
        alt: 'Mer du Japon',
        width: 750,
        height: 420,
      },
      title: 'Hachioji, Japon',
      url: '#',
      total: 943,
      rating: 4.45,
      price: 999,
    },
    {
      image: {
        src: '/images/barcelone-small.jpeg',
        alt: 'Plage de Barcelone',
        width: 750,
        height: 422,
      },
      title: 'Barcelone, Espagne',
      url: '#',
      total: 5347,
      rating: 4.5,
      price: 999,
    },
    {
      image: {
        src: '/images/porto-small.jpeg',
        alt: 'Port de Porto',
        width: 750,
        height: 422,
      },
      title: 'Porto, Portugal',
      url: '#',
      total: 4911,
      rating: 4.8,
      price: 999,
    },
    {
      image: {
        src: '/images/marrakech-small.jpeg',
        alt: 'Mosquée de Marrakech',
        width: 750,
        height: 500,
      },
      title: 'Marrakech, Maroc',
      url: '#',
      total: 1568,
      rating: 4.76,
      price: 999,
    },
    {
      image: {
        src: '/images/bali-small.jpeg',
        alt: 'Temple indonésien',
        width: 750,
        height: 500,
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
      image: '/images/hotels.jpg',
    },
    {
      name: 'Appartements',
      total: 51652,
      url: '#',
      image: '/images/appartments.jpg',
    },
    {
      name: 'Luxe',
      total: 51652,
      url: '#',
      image: '/images/luxe.jpg',
      icon: iconEnum.AWARD,
    },
    {
      name: 'Villas privées',
      total: 181167,
      url: '#',
      image: '/images/private-house.jpg',
    },
    {
      name: 'Bungalows',
      total: 8801,
      url: '#',
      image: '/images/bungalows.jpg',
    },
    {
      name: 'Locations de vacances',
      total: 8801,
      url: '#',
      image: '/images/renting.jpg',
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
      name: 'gender',
      type: inputType.RADIO,
      inputAttributes: {
        options: [
          { label: 'Mme', value: 'mme', id: 'register-mme' },
          { label: 'Mr', value: 'mr', id: 'register-mr' },
          { label: 'Mx', value: 'mx', id: 'register-mx' },
        ],
      },
    },
    {
      name: 'firstname',
      id: 'firstname',
      label: 'Prénom',
      inputAttributes: {
        placeholder: 'Prénom',
      },
    },
    {
      name: 'lastname',
      id: 'lastname',
      label: 'Nom',
      inputAttributes: {
        placeholder: 'Nom',
      },
    },
    {
      name: 'email',
      id: 'email',
      label: 'Email',
      type: inputType.EMAIL,
      inputAttributes: {
        placeholder: 'Email',
        required: true,
      },
    },
    {
      name: 'origin',
      id: 'origin',
      label: 'Comment-nous avez vous connu',
      type: inputType.SELECT,
      inputAttributes: {
        options: [
          {
            label: 'Comment-nous avez vous connu',
            value: '',
            disabled: true,
            selected: true,
          },
          { label: 'Site web', value: 'website' },
          { label: 'Newsletter', value: 'newsletter' },
          { label: 'Bouche à oreille', value: 'friends' },
          { label: 'Media', value: 'media' },
        ],
      },
    },
    {
      name: 'legal',
      id: 'legal',
      label:
        'Vous affirmez avoir pris connaissance de notre Politique de confidentialité.',
      type: 'checkbox',
    },
  ],
};

export const privacyPolicy = {
  title: 'Politique de confidentialité',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel excepturi maxime soluta inventore culpa illo accusamus impedit dolorum fugit eum adipisci laboriosam, esse consequuntur repellendus unde. Error perferendis beatae placeat aliquid expedita, eveniet tempore! Quam, suscipit. Magni libero amet repellat aliquam dolore reprehenderit aspernatur incidunt at minima eos! Quos quae eaque earum necessitatibus reprehenderit autem impedit. Saepe, dolore deserunt. Magnam, odit. Nulla labore amet recusandae consectetur deleniti, explicabo molestiae animi soluta, perferendis esse sed odio atque dolore dolorum ad quos voluptatibus ipsam delectus consequatur omnis magnam libero itaque. Odio ipsum quibusdam, exercitationem nam mollitia iusto itaque quidem molestiae porro?',
};
