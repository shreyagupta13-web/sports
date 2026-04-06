export function ArticleBody({ html }: { html: string }) {
  return (
    <article
      className="richtext"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
