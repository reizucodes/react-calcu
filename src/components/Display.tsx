interface Props {
  prevData: any;
  display: string;
}
export default function Display({ prevData, display }: Props) {
  return (
    <>
      <div className="w-full px-2 py-2 mb-2">
        <div className="text-xl text-center">
          <span className="text-orange-500">react </span>Calculator
        </div>
        <div className="flex flex-col mx-4">
          <p className="flex justify-end h-1/3 text-gray-500 font-medium text-lg">
            {prevData}
          </p>
          <p className="flex justify-end h-2/3 text-white text-5xl">
            {display}
          </p>
        </div>
      </div>
    </>
  );
}
