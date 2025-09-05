import { cn } from "./cn";
import Container from "./container";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bg?: string;                  
  pad?: string;        
};

export default function Section({
  id,
  children,
  className,
  containerClassName,
  bg = "",
  pad = "py-16",
}: Props) {
  return (
    <section id={id} className={cn(bg, pad, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
