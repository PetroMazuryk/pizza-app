export interface ISortOptions {
  name: string;
  value: 'rating' | 'title' | 'price' | '-title' | '-price';
}

export const sortOptions: ISortOptions[] = [
  { name: 'популярностю', value: 'rating' },
  { name: 'алфавітом (DESC)', value: 'title' },
  { name: 'алфавітом (ASC)', value: '-title' },
  { name: 'ціною ⬆', value: 'price' },
  { name: 'ціною ⬇', value: '-price' },
];
