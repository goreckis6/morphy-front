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
          // In Qwik, dangerouslySetInnerHTML accepts string directly, not { __html: string }
          const htmlContent = typeof dangerouslySetInnerHTML === 'string' 
            ? dangerouslySetInnerHTML 
            : (dangerouslySetInnerHTML as any)?.__html || '';
          return (
            <style key={s.key} {...restProps} dangerouslySetInnerHTML={htmlContent} />
          );
        }
        // Otherwise, use s.style directly (it's already a string)
        return (
          <style key={s.key} {...(s.props || {})} dangerouslySetInnerHTML={s.style || undefined} />
        );
      })}

      {head.scripts.map((s) => {
        // If props contains dangerouslySetInnerHTML, use it; otherwise use s.script
        if (s.props?.dangerouslySetInnerHTML) {
          const { dangerouslySetInnerHTML, ...restProps } = s.props;
          // In Qwik, dangerouslySetInnerHTML accepts string directly, not { __html: string }
          const htmlContent = typeof dangerouslySetInnerHTML === 'string' 
            ? dangerouslySetInnerHTML 
            : (dangerouslySetInnerHTML as any)?.__html || '';
          return (
            <script key={s.key} {...restProps} dangerouslySetInnerHTML={htmlContent} />
          );
        }
        // Otherwise, use s.script directly (it's already a string)
        return (
          <script key={s.key} {...(s.props || {})} dangerouslySetInnerHTML={s.script || undefined} />
        );
      })}
    </>
  );
});
