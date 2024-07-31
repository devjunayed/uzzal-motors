
type TButtonProps = {
    children: string;
}

const Button = ({children}: TButtonProps) => {
  return (
    <button className="btn bg-[#FFB508] text-black border-none hover:bg-yellow-400 ">{children}</button>
  )
}

export default Button
