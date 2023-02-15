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
        handle
        title
        contentHtml
        content
        publishedAt
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
      {articles.nodes.map((article) => {
        // <div className="text-white" dangerouslySetInnerHTML={{__html:article['contentHtml']}}></div>
        const publishedAt = new Date(article.publishedAt);
        let localePublishedAt = publishedAt.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        return (
          <div className="container h-[391px]">
            <div className="flex flex-row flex-grow">
              <div className="flex md:flex-col w sm:flex-grow basis-1/3 mt-[79px] flex-col">
                <div className="flex flex-row">
                  <span className="text-[#0292E3] text-[28px]">
                    {article.tags[0]}
                  </span>
                  <span className="text-white text-[26.63px] align-bottom sm:ml-[25px]">
                    {localePublishedAt}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[43.65px] text-white font-[300]">
                    {article.title}
                  </h3>
                  <p className="text-[18px] text-white w-[503px]">
                    {article.content.length > 200
                      ? article.content.slice(0, 200) + "..."
                      : article.content}
                  </p>
                  <a
                    href="#"
                    className="button rounded-full p-4 lg:mt-[66px] md:mt-[66px] sm:mt-3 text-black bg-[#FEED73] font-bold text-[28px] text-center w-[257px] h-[77px]"
                  >
                    View Details
                  </a>
                </div>
              </div>
              <div className="">
                <img
                  src={article.image.url}
                  className="w-[522px] h-[360px] object-none rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
