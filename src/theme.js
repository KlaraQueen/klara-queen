export const theme = {
  breakpoints: {
    miniPhone: 360,
    phone: 430,
    tablet: 820,
    desktopHd: 1920,
    tv4k: 3840,
  },

  colors: {
    darkBordo: "#3d020e",
    deepBlack: "#1a0005",
    goldMain: "#d4af37",
    goldSoft: "#e9d8b0",
    goldHover: "#f5e6bf",
    bordoAccent: "#7a1428",
    bordoAccentDark: "#4a0d1a",
    bordoCore: "#2e0810",
    goldShadow: "rgba(212, 175, 55, 1)",
    goldGlowSoft: "rgba(244, 222, 166, 0.4)",
    goldGlowMobile: "rgba(244, 222, 166, 0.25)",
    whiteWarm: "rgba(255, 245, 210, 0.18)",
    blackStrong: "rgba(0, 0, 0, 0.85)",
    blackStronger: "rgba(0, 0, 0, 0.9)",
    blackMobile: "rgba(0, 0, 0, 0.75)",
    white: "#ffffff",
  },

  effects: {
    logoFilter: "brightness(4) drop-shadow(0 0 16px rgba(212, 175, 55, 1))",
    logoFilterHover:
      "brightness(4.3) drop-shadow(0 0 22px rgba(212, 175, 55, 1))",
    navTextShadow:
      "0 1px 0 rgba(255, 245, 210, 0.18), 0 2px 10px rgba(0, 0, 0, 0.85)",
    navTextShadowHover:
      "0 0 8px rgba(244, 222, 166, 0.4), 0 2px 10px rgba(0, 0, 0, 0.9)",
    navTextShadowMobile:
      "0 0 6px rgba(244, 222, 166, 0.25), 0 2px 6px rgba(0, 0, 0, 0.75)",
  },

  layout: {
    navbar: {
      uiScale: {
        base: "clamp(0.72, 0.52 + 0.55vw, 1.25)",
        tablet: "clamp(0.68, 0.54 + 0.45vw, 0.95)",
        phone: "clamp(0.6, 0.5 + 0.4vw, 0.8)",
        desktopHd: "clamp(1.12, 0.94 + 0.4vw, 1.45)",
        tv4k: "clamp(1.3, 1.08 + 0.35vw, 1.8)",
      },
      padding: {
        base: "clamp(8px, 1.1vw, 14px) clamp(12px, 2vw, 34px) clamp(12px, 1.6vw, 20px)",
        tablet:
          "clamp(6px, 1.8vw, 12px) clamp(8px, 2.5vw, 18px) clamp(8px, 2vw, 14px)",
        phone: "5px 8px 8px",
        desktopHd:
          "clamp(16px, 1.4vw, 22px) clamp(40px, 2.8vw, 60px) clamp(20px, 1.8vw, 28px)",
        tv4k:
          "clamp(22px, 1.2vw, 34px) clamp(66px, 3.2vw, 116px) clamp(28px, 1.7vw, 44px)",
      },
      logoHeight: {
        base: "clamp(62px, 7vw, 112px)",
        tablet: "clamp(46px, 8.5vw, 72px)",
        phone: "clamp(36px, 10vw, 54px)",
        desktopHd: "clamp(96px, 6.5vw, 136px)",
        tv4k: "clamp(124px, 5.2vw, 210px)",
      },
      menuGap: {
        base: "calc(180px * var(--uiScale))",
        tablet: "clamp(44px, 9vw, 80px)",
        phone: "clamp(28px, 7vw, 44px)",
        desktopHd: "calc(200px * var(--uiScale))",
        tv4k: "calc(250px * var(--uiScale))",
      },
      menuFontScale: {
        base: "calc(1rem * var(--uiScale))",
        tablet: "calc(0.9rem * var(--uiScale))",
        phone: "calc(0.86rem * var(--uiScale))",
      },
    },
  },

  fonts: {
    main: "Segoe UI, sans-serif",
    size: {
      title: "3.5rem",
      subtitle: "1.2rem",
    },
  },
};
