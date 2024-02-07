import React from "react";
import PropTypes from 'prop-types';
import { cva } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors  text-base leading-normal font-medium",
  {
    variants: {
      variant: {
        Default: "bg-green-200 text-primary-foreground hover:bg-primary/90 text-white rounded-full	items-center",
        Outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-black rounded-full	items-center",
      },
      size: {
        Small: "px-6 py-2 text-sm	leading-relaxed	font-medium",
        Medium: "px-9 py-3 text-lg	leading-snug",
        Large: " px-9 py-3  w-full text-lg	leading-snug",
      },
      iconPlacement: {
        Left: "flex-row",
        Right: "flex-row-reverse"
      }
    },
  }
);

const Button = ({ size, variant, label, CustomIcon, iconPlacement }) => {
  const iconPositionClass = iconPlacement === 'Right' ? 'Right' : 'Left';
  const iconDisplay = CustomIcon ? "inline-block" : "none";
  
  return (
    <button className={cn(buttonVariants({ size, variant, iconPlacement }))}>
      {CustomIcon && (
        <span className={`w-4 h-4 d-flex items-center	 ${iconDisplay} ${iconPositionClass === 'Right' ? 'ml-2' : 'mr-2'}`}>
          <img src={CustomIcon} alt="Icon" />
        </span>
      )}
      {label}
    </button>
  );
};

// PropTypes for Button component
Button.propTypes = {
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  variant: PropTypes.oneOf(['Default','Outline']),
  iconPlacement: PropTypes.oneOf(['Left','Right']),
  label: PropTypes.string.isRequired,
  CustomIcon: PropTypes.string, 
};

export default Button;
