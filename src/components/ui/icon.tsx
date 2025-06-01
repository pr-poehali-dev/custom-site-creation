import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof LucideIcons;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({ name, fallback = "AlertCircle", ...props }: IconProps) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Using fallback "${fallback}".`);
    return <LucideIcons.AlertCircle {...props} />;
  }

  return <IconComponent {...props} />;
};

export default Icon;
