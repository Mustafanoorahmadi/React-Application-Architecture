import classNames from "classnames";
import { ButtonProps, ButtonShape } from "./button.type";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  default: "",
  square: "btn-square",
};
export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  LoadingType = "spinner",
  LoadingText = "در حال ارسال درخواست ...",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    "btn",
    className,
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { [`${shapeClasses[shape]}`]: shape },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading }
  );
  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isLoading ? LoadingText : children}
    </button>
  );
};
