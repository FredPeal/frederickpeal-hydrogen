import { Image } from "@shopify/hydrogen";
function Column(props) {
  return (
    <div className="w-[503px] sm:mt-[50px] xs:mt-[50px]">
      <div>
        <h3 className="text-white text-[43.65px]">{props.title}</h3>
      </div>
      <div>
        <p className="text-white">{props.text}</p>
      </div>
      <div className="mt-[35px]">
        <Image className="rounded-lg" src={props.image} alt="Img" width="650" height="365.62" />
      </div>
    </div>
  );
}
export default Column;
