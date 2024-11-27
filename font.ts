import { Roboto } from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'], // Choose the subsets you need
    weight: ['400', '500', '700'], // Specify desired font weights
    style: ['normal', 'italic'], // Specify styles if needed
    display: 'swap', // Optimize loading behavior
  });