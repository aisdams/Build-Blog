import Image from "next/image";
import johnny from "../public/johnny.jpg";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        src={johnny}
        height={50}
        width={50}
        className="rounded-full object-cover"
        alt=""
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
