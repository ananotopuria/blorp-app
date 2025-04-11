
type NavigatorUAData = {
    platform: string;
    brands?: { brand: string; version: string }[];
    mobile?: boolean;
  };
  
export function getUserOS(): "windows" | "mac" | "unknown" {
    const nav = navigator as Navigator & { userAgentData?: NavigatorUAData };
  
    if (nav.userAgentData?.platform) {
      const platform = nav.userAgentData.platform.toLowerCase();
      if (platform.includes("mac")) return "mac";
      if (platform.includes("win")) return "windows";
    }
  
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) return "mac";
    if (userAgent.includes("win")) return "windows";
  
    return "unknown";
  }
  