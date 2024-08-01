
type TButtonProps = {
    children: string;
}

const Button = ({children}: TButtonProps) => {
  return (
    <button className="btn bg-[#FFB508] text-federal_blue-500  border-none hover:bg-yellow-400 ">{children}</button>
  )
}

export default Button
