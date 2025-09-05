type Props = { children: React.ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-8 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}
