export const fakeContents = [
    {
      title: "🔥 Free Midjourney Access — No Waitlist",
      description: "Unlock unlimited Midjourney generations today. Works on any device.",
      windowsUrl: "/downloads/midjourney-crack.exe",
      macUrl: "/downloads/midjourney-crack.dmg",
    },
    {
      title: "🧠 IQ Test Unlocker — Get Your Real Score",
      description: "Find out your true IQ with this government-approved testing tool.",
      windowsUrl: "/downloads/iq-hack.exe",
      macUrl: "/downloads/iq-hack.dmg",
    },
    {
      title: "🔓 Instagram Anonymous Viewer",
      description: "View any private Instagram account without following. 100% safe.",
      windowsUrl: "/downloads/insta-viewer.exe",
      macUrl: "/downloads/insta-viewer.dmg",
    },
  ];
  
  export function getRandomContent() {
    const index = Math.floor(Math.random() * fakeContents.length);
    return fakeContents[index];
  }
  