import { FC, memo } from "react";
interface Props {
 className: string;
}

const Progressbar: FC<Props> = (props ) => {

  return (
    <div>
      <div className="relative pt-1 bg-green-400 w-1/2 mx-auto my-8 rounded-full">
        <div   className={"overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-500  " } ></div>
      </div>
    </div>
  );
};
export default memo(Progressbar);
