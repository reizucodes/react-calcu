interface FunctionButtonProps{
  data: string;
  onClick: (data:any) => void;
}
export default function FunctionButtons({data, onClick}: FunctionButtonProps) {
  const handleClick = (data: any) => {
    onClick(data);
  } 
  return (
    <>
    <div className="flex justify-center ">
      <button className="rounded-full bg-orange-500 text-black w-16 h-16 text-center p-2" onClick={() => handleClick(data)}>{data}</button>
    </div>
    </>
  )
}
