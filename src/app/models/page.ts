export interface Page {
  [key: string]: PageContent;
}

export interface PageContent {
  heading: string;
  description:  string;
  disclaimer: string;
  faq: Array<{answer: string, question: string}>;
}
