import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
function Articles(props) {
  const first = props.first ?? 2;
  const QUERY = gql`
  query articles {
    articles (first: ${first} sortKey: PUBLISHED_AT) {
      nodes {
        id
        tags
        image {
            url
        }
        contentHtml
      }
    }
  }
`;
  const {
    data: { articles },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });
  return (
    <div>
      {articles.nodes.map(article => (
       // <div className="text-white" dangerouslySetInnerHTML={{__html:article['contentHtml']}}></div>
      ))}
    </div>
  );
}

export default Articles;