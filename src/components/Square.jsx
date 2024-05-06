/* eslint-disable react/prop-types */
export default function Square({ value, onSquareClick, index }) {
  return (
    <button
      className="w-24 h-24 border-solid border-[1px] border-slate-500 font-bold text-3xl -mr-[1px] -mt-[1px] bg-pink-100 grid place-items-center"
      onClick={() => onSquareClick(index)}>
      {value}
    </button>
  )
}
