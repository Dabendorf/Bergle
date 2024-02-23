import React, { PropsWithChildren, ReactNode } from "react";

const PageContainer = ({ children }: PropsWithChildren<ReactNode>) => (
  <div className="flex justify-center flex-auto dark:bg-slate-900 dark:text-slate-50">
    <div className="w-full max-w-lg flex flex-col"> {children} </div>
  </div>
);

export default PageContainer;
