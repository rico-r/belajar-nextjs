import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavTab({ text, icon, className = "" }: { text: string, icon: IconProp, className?: string }) {
  return (
    <div className={"inline-block p-2 text-white hover:bg-orange-400"}>
      <FontAwesomeIcon
        height="0.9em"
        className={`inline me-1 ${className}`}
        icon={icon}
      />
      {text}
    </div>
  );
}
