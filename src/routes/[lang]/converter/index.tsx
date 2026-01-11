import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = (event) => {
  const segs = event.url.pathname.split('/').filter(Boolean);
  const lang = segs[0] || '';
  event.redirect(301, `/${lang}/converters`);
};
