import { useState } from "react";

export interface IsMenuClickedType {
  IsMenuClicked: boolean;
  setIsMenuClicked: (e: boolean) => boolean;
}

export function IsMenuClickedState() {
  const [IsMenuClicked, setIsMenuClicked] = useState(false);
  return { IsMenuClicked, setIsMenuClicked };
}
