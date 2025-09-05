type Props = { children: React.ReactNode; className?: string };

// Left-anchored container with consistent gutter and max width
export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mr-auto w-full max-w-[1200px] pl-4 sm:pl-8 lg:pl-24 pr-4 ${className}`}>
      {children}
    </div>
  );
}
