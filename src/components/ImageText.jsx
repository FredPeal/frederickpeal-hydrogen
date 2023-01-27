import "../output.css";
import { Image } from "@shopify/hydrogen";
function ImageText(props) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:flex-row lg:ml-[124px] md:ml-[124px] lg:mr-[124px] md:mr-[124px] sm:ml-1 bg-black xs:flex-wrap sm:flex-wrap">
        <div className="flex-note lg:w-[435px] md:w-[500px] sm:w-max xs:w-max">
          <h1 className="text-white text-[78.02px]">{props.title}</h1>
          <h2 className="text-white text-[43.65px]">{props.subtitle}</h2>
          <p className="text-white">{props.text}</p>
        </div>
        <div className="flex-1 lg:ml-[200px] grow sm:mt-[30px] xs:mt-[30px]">
          <Image
            src={props.image}
            className="rounded-lg"
            alt="Img"
            width={props.width}
            height={props.height}
          />
        </div>
      </div>
    </div>
  );
}
export default ImageText;
