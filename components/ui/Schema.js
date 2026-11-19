// Injects JSON-LD structured data. `data` is a schema.org object (or @graph).
export default function Schema({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
