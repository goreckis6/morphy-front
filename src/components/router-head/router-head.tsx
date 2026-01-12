import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/favicon.png" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => {
        // If props contains dangerouslySetInnerHTML, use it; otherwise use s.style
        if (s.props?.dangerouslySetInnerHTML) {
          const { dangerouslySetInnerHTML, ...restProps } = s.props;
          return (
            <style key={s.key} {...restProps} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
          );
        }
        // Otherwise, use s.style directly (it's already a string or object)
        return (
          <style key={s.key} {...(s.props || {})} dangerouslySetInnerHTML={s.style ? { __html: s.style } : undefined} />
        );
      })}

      {head.scripts.map((s) => {
        // If props contains dangerouslySetInnerHTML, use it; otherwise use s.script
        if (s.props?.dangerouslySetInnerHTML) {
          const { dangerouslySetInnerHTML, ...restProps } = s.props;
          return (
            <script key={s.key} {...restProps} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
          );
        }
        // Otherwise, use s.script directly (it's already a string or object)
        return (
          <script key={s.key} {...(s.props || {})} dangerouslySetInnerHTML={s.script ? { __html: s.script } : undefined} />
        );
      })}
    </>
  );
});
