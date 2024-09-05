
type TButtonProps = {
    children: string;
}

const Button = ({children}: TButtonProps) => {
  return (
    <button className="btn bg-[#FF7826] text-gray-200  border-none hover:bg-[#FF0000] ">{children}</button>
  )
}

export default Button
