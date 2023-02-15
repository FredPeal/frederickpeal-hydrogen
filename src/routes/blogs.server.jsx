import { Image } from "@shopify/hydrogen";
import BlogImageHeader from "../assets/IMG_8861-1.webp";
import Articles from "../components/Articles";
export default function blogs() {
  return (
    <div>
      <div className="ml-auto text-center">
        <h1 className="text-[#FEED73] text-[78.02px]"> {"{ Blogs }"}</h1>
      </div>
      <Articles first={10} />
      {/* <div className="mx-auto pb-10 mt-[90px]">
        <Image
          className="rounded-lg mx-auto"
          src={BlogImageHeader}
          width={1192}
          height={600}
          alt="Blog Image Header"
        />
      </div> */}
      
    </div>
  );
}
