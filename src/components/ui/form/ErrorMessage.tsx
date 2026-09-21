import { cn } from "@/lib";
import Typography from "../typography";

interface ErrorMessageProps {
  error?: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  return (
    <Typography
      color="danger"
      size="xs"
      className={cn("mt-1.5 mb-0 pb-0 tracking-wide text-red-400")}>
      {error}
    </Typography>
  );
}
