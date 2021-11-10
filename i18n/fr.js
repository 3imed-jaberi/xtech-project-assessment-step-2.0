// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ANCHOR_SEE_ALL: 'Voir tout',
  ANCHOR_NOTIFICATION_CONTENT: 'Cliqué pour tout voir...',
  FOOTER_SELECT_LANG_LABEL: 'Langues',
  FOOTER_SELECT_INR_LABEL: 'INR',
  FOOTER_SECTIONS: {
    AIRBNB: {
      MODULE: 'Airbnb',
      SUBMODULE: [
        'À propos de nous',
        'Carrières',
        'Presse',
        'Politiques',
        'Aide',
        'Diversité et Appartenance'
      ],
    },
    DISCOVER: {
      MODULE: 'Découvrir',
      SUBMODULE: [
        'Confiance et sécurité',
        'Crédit Voyage',
        'Cartes Cadeaux',
        'Airbnb Citizen',
        'Guides',
        'Airbnb Mag'
      ],
    },
    HOSTING: {
      MODULE: 'Hébergement',
      SUBMODULE: [
        'Pourquoi héberger',
        'Hospitalité',
        'Hébergement Responsable',
        'Centre communautaire'
      ],
    }
  },
  FOOTER_INC: 'Airbnb, Inc.',
  FOOTER_TERMS: 'Conditions Confidentialité Plan du site',
  NAVBAR_NOTIFICATION_CONTENT: (txt) => `Cliqué ${txt}!`,
  NAVBAR_SEARCH_PLACEHOLDER: 'Partout',
  NAVBAR_ITEMS_LIST: ['Devenir hôte', 'Aide', 'Inscrivez-vous', 'Connexion'],
  NAVBAR_TABS_NAVIGATION_CONFIG: [
    {
      label: 'Pour vous',
      to: '/',
    },
    {
      label: 'Accueil',
      to: '/home',
    },
    {
      label: 'Expériences',
      to: '/experiences',
    },
    {
      label: 'Des endroits',
      to: '/places',
    },
  ],
  SELECT_LANG_OPTIONS: [
    'Français',
    'Anglais'
  ],
  PAGE_WELCOME: {
    EXPERIENCES: 'Bienvenue sur la page Expériences !',
    HOME: 'Bienvenue sur la page Accueil !',
    PLACES: 'Bienvenue sur la page Des endroits !',
  },
  CLASSIFIER_TITLE_MAPPER: [
    'Viens de réserver',
    'Destinations en vedette'
  ]
}
