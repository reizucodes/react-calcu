interface Props {
  prevData: any;
  display: string;
}
export default function Display({ prevData, display }: Props) {
  return (
    <>
      <div className="rounded-xl w-full h-20 bg-orange-200 px-2 py-2 mb-2">
        <div className="flex flex-col">
          <div className="display flex justify-end h-1/3 text-gray-600 font-medium">
            {prevData}
          </div>
          <h1 className="display  flex justify-end h-2/3 text-gray-800">
            {display}
          </h1>
        </div>
      </div>
    </>
  );
}
