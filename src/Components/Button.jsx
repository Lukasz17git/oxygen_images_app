

const Button = ({ text, onClick, className }) => {
   return (
      <button
         onClick={onClick}
         className={`frcc w-40 h-40 min-w-128 py-8 px-12 tw br-5 bc-main bg-main tc-white tf-semibold ${className}`}
      >
         {text}
      </button>
   )
}
export default Button