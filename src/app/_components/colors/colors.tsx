"use client";
import { tailwindColors } from "../../../../tailwind.config";
import { colord } from "colord";

const getTextColor = (backgroundColor: string): string =>
  colord(backgroundColor).isDark() ? "#dddddd" : "#333333";

export const Colors: React.FC = () => (
  <div className="flex flex-wrap justify-center" lang="en" dir="ltr">
    {Object.entries(tailwindColors).map(([name, color]) => (
      <ColorBox name={name} key={name} color={color} />
    ))}
  </div>
);

const ColorBox: React.FC<{ name: string, color: string }> = ({
  name,
  color,
}) => (
  <div
    className="h-60 w-96 flex flex-col items-center justify-center text-center uppercase"
    style={{ backgroundColor: color, color: getTextColor(color) }}
  >
    <span>{name}</span>
    <span>{color}</span>
  </div>
);
