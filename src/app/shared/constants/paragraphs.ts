export class Paragraph {
  constructor(private val: string) {
  }

  public getString(): string {
    return this.val;
  }
}

export class Paragraphs {
  readonly ANOTHER_PAGE_H1 = new Paragraph('Here is another pages linked by the menu');
  readonly ANOTHER_PAGE_H2 = new Paragraph('Isnt That Cool');

  readonly ANOTHER_PAGE_P1 = new Paragraph('Lorem ipsum dolor sit amet reprehenderit mollit esse Lorem sint nulla enim proident aute excepteur et culpa nisi. Sint proident cillum ipsum aute irure do pariatur.');
  readonly ANOTHER_PAGE_P2 = new Paragraph('Labore pariatur in Lorem deserunt aliqua sit adipisicing ut voluptate nulla. Ex enim veniam fugiat consectetur enim est minim nostrud id anim commodo nostrud ipsum dolore fugiat consectetur enim pariatur dolore officia incididunt commodo. Laborum adipisicing proident qui occaecat dolor tempor magna sunt ea dolor exercitation ea velit in ex dolore velit nostrud dolore consectetur enim sunt. Officia elit ipsum excepteur, laboris occaecat non labore ad in enim culpa consectetur aliquip qui ad tempor ea deserunt nostrud qui ad. Veniam in incididunt labore ullamco sunt, ut.');
  readonly ANOTHER_PAGE_P3 = new Paragraph('Qui eiusmod culpa ullamco deserunt enim exercitation minim veniam nisi cillum enim ipsum ut labore. Ullamco magna amet aliqua laboris quis do cillum consectetur et incididunt tempor incididunt consectetur labore sint aute nostrud, mollit non consequat. Occaecat minim cillum do incididunt enim mollit ullamco tempor quis anim eu. Cupidatat tempor commodo in et esse ut excepteur amet aliqua mollit, proident est eiusmod occaecat. Magna laborum nisi commodo et labore aliqua excepteur veniam labore eiusmod proident in nisi fugiat esse mollit minim.');
  readonly ANOTHER_PAGE_P4 = new Paragraph('Ex dolor sint est proident in deserunt ipsum commodo quis Lorem ad eu eiusmod velit excepteur incididunt eiusmod cillum. Mollit cillum reprehenderit aute laboris veniam pariatur dolore proident est cupidatat enim voluptate do minim. Tempor occaecat deserunt officia aliquip nulla eiusmod esse laborum mollit pariatur velit enim est magna est deserunt. Ad sit consectetur nisi reprehenderit elit officia commodo tempor incididunt est proident aliquip reprehenderit officia excepteur proident.');
  readonly ANOTHER_PAGE_P5 = new Paragraph('Amet Lorem minim nostrud quis cillum nostrud deserunt. Ex non labore ipsum sunt do occaecat sunt Lorem eiusmod. Labore nulla proident reprehenderit cupidatat deserunt elit deserunt reprehenderit eu dolore occaecat qui culpa ullamco qui,. Magna ullamco exercitation aute exercitation dolor sit quis in ipsum tempor culpa, mollit. Ea labore, in sit officia tempor sunt voluptate dolore in exercitation nostrud nulla occaecat dolore reprehenderit pariatur ex veniam mollit pariatur do.');

  readonly BIO_P1 = new Paragraph('Lorem ipsum dolor sit amet cillum voluptate est adipisicing ea anim nostrud labore ex est laboris ad aliquip labore dolor velit occaecat. Laborum non nostrud, ad mollit quis duis veniam exercitation. Veniam cupidatat, ad commodo incididunt consequat nisi do ex eiusmod excepteur nostrud magna irure nisi consectetur veniam reprehenderit voluptate proident eiusmod aliqua et culpa. Exercitation id sit Lorem aute labore amet fugiat nulla aliqua culpa magna et. Laboris magna eu enim Lorem nulla reprehenderit dolor labore non reprehenderit ex tempor id amet aliquip consectetur adipisicing. Culpa velit proident ex irure esse. Mollit commodo sit cupidatat qui dolor consectetur excepteur ex ad Lorem pariatur laboris. Ipsum magna quis tempor officia tempor ea aliqua ex sit minim enim ullamco labore ut dolore laborum cupidatat reprehenderit sit.');
  readonly BIO_P2 = new Paragraph('Consequat culpa officia ea tempor non ad duis ullamco amet sunt dolor. Consectetur ea occaecat ad consectetur et fugiat aliquip et amet dolor incididunt tempor magna duis. Reprehenderit ex ut magna proident in, cillum irure nostrud voluptate aute tempor adipisicing quis. Magna et sit ut culpa esse. Nisi ad, id dolore consequat cupidatat.');
  readonly BIO_P3 = new Paragraph('Aute deserunt aliquip sit, minim in labore nostrud occaecat eiusmod sunt quis ut qui. Consequat laborum do occaecat sint duis aliqua qui. Pariatur sunt ea magna ipsum aliqua occaecat sunt aliqua tempor adipisicing nostrud. Sit ut sit magna duis proident aliquip. Labore proident irure commodo, non sint do labore sunt id culpa tempor sit. Labore mollit sit voluptate consectetur deserunt esse anim occaecat laboris laborum ullamco qui excepteur sunt sint irure dolore enim amet do. Nostrud amet est occaecat in ex duis.');

  readonly LANDING_P1 = new Paragraph('Here is a little bit about me. Find out more below.');
}
