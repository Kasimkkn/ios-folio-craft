import { Wifi, Signal, Battery } from "lucide-react";
import { useEffect, useState } from "react";

export const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-11 z-50 flex items-center justify-between px-6 text-foreground text-sm font-medium">
      <div className="flex items-center gap-1">
        <span>{formatTime(time)}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-5 h-4" />
      </div>
    </div>
  );
};
