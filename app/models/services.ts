export interface Service {
id: string;
  title: string;
  desc: string;
  image: string;   // /public path
  icon?: React.ReactNode; // optional inline svg/icon
};