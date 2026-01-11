import type { RequestHandler } from '@builder.io/qwik-city';
import { redirect } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ url }) => {
  const segs = url.pathname.split('/').filter(Boolean);
  const lang = segs[0] || '';
  throw redirect(301, `/${lang}/converters`);
};
