// Google gtag type declaration
interface Window {
  gtag: (...args: any[]) => void;
  dataLayer: any[];
}
