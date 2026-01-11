import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = (event) => {
  event.redirect(301, '/converters');
};
