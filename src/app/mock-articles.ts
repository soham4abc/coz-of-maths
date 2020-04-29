import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "It's me Banerjee",
    content:
      "<p>Hello All,</p><p>I’m Banerjee. I Code for change and do it cause it is the only thing i believe i can do!</p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    description: 'Get to know me a bit!',
    key: 'my-first-article',
    date: new Date(),
    imageurl:
      'https://cdn0.iconfinder.com/data/icons/team-and-management-glyph/160/coding-team-512.png',
  },
  {
    id: 2,
    content:
      '<p> A spectre is haunting Europe — the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.Where is the party in opposition that has not been decried as communistic by its opponents in power? </p> Where is the opposition that has not hurled back the branding reproach of communism, against the more advanced opposition parties, as well as against its reactionary adversaries?',
    title: 'Ideologies',
    description: 'views about the people and world',
    key: 'the-second-article',
    date: new Date(),
    imageurl:
      'https://cdn0.iconfinder.com/data/icons/education-213/64/brain-mind-smart-think-intelligence-512.png',
  },
];
