import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "It's me Banerjee",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    description: 'My first Article',
    key: 'my-first-article',
    date: new Date(),
    imageurl:
      'https://cdn0.iconfinder.com/data/icons/team-and-management-glyph/160/coding-team-512.png',
  },
  {
    id: 2,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    title: 'My Second article',
    description: 'second try',
    key: 'the-second-article',
    date: new Date(),
    imageurl: 'https://img.icons8.com/ios/50/000000/message-link.png',
  },
];
