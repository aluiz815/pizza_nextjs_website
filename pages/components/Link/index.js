import Link from 'next/link';
function LinkComponent({href,children}) {
  return (
    <Link href={href} passHref>
      {children}
    </Link>
  );
}

export default LinkComponent;