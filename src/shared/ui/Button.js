export function Button({
  className,
  type = 'button',
  onClick,
  children,
  ...props
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props} type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
