import React from "react";
  
interface GuessRowWrapperProps {
children?: React.ReactNode;
}

export function GuessRowWrapper({ children }: GuessRowWrapperProps) {
	return (
		<div className="grid grid-cols-7 gap-1 text-center">
		{children}
		</div>
	);
}