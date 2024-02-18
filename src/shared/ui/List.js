export function List({ as: Component = 'ul', className, children, ...props }) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}
