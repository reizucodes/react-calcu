
interface NumberButtonProps{
  data: string;
  onClick: (data:any) => void;
}
export default function NumberButtons({ onClick, data }: NumberButtonProps) {
  const handleClick = (data: any) => {
    onClick(data);
  };
  //
  return (
    <>
    <div className="flex justify-center">
      <button className="rounded-full bg-slate-800 text-red w-16 h-16 p-2" onClick={() => handleClick(data)}>{data}</button>
    </div>
    </>
    
  )
}
