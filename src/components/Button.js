function Button(data) {
  const { text, className } = data;
  if (className !== null) {
    return (
      <div className="px-[20px] py-[10px] cursor-pointer border-2 hover:bg-purple-400 hover:text-white font-bold rounded-[12px] border-purple-600">
        {text}
      </div>
    );
  } else {
    return <div className={className}>{text}</div>;
  }
}

export default Button;
