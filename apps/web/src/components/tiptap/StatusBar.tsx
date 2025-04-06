import React from 'react';

import { ReactNode } from 'react';

const StatusBar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      {children}
    </div>
  );
};

export default StatusBar;