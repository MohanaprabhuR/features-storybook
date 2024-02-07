import React from "react";
import PropTypes from 'prop-types';
import { cva } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors  text-base leading-normal font-medium",
  {
    variants: {
      variant: {
        default: "bg-green-700 text-primary-foreground hover:bg-primary/90 text-white",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-black",
        rounded: "bg-green-700 rounded-full hover:bg-accent hover:text-accent-foreground text-white",
      },
      size: {
        default: "h-10 px-9 py-3",
        sm: "h-9 px-6",
        lg: "h-10 px-9 py-3",
      },
      iconPlacement: {
        left: "flex-row",
        right: "flex-row-reverse"
      }
    },
    // defaultVariants: {
    //   variant: "default",
    //   size: "lg", 
    //   iconPlacement: "left",
    // },
  }
);

const Button = ({ size, variant, label, customIcon, iconPlacement }) => {
  const iconPositionClass = iconPlacement === 'right' ? 'right' : 'left';
  const iconDisplay = customIcon ? "inline-block" : "none";
  
  return (
    <button className={cn(buttonVariants({ size, variant, iconPlacement }))}>
      {customIcon && (
        <span className={`w-4 h-4 ${iconDisplay} ${iconPositionClass === 'right' ? 'ml-2' : 'mr-2'}`}>
          <img src={customIcon} alt="Icon" />
        </span>
      )}
      {label}
    </button>
  );
};

// PropTypes for Button component
Button.propTypes = {
  size: PropTypes.oneOf(['default', 'sm', 'lg']),
  variant: PropTypes.oneOf(['default','outline','rounded']),
  iconPlacement: PropTypes.oneOf(['left','right']),
  label: PropTypes.string.isRequired,
  customIcon: PropTypes.string, 
};

export default Button;
