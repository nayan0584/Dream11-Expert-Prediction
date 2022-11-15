import {BannerAd} from '@react-native-admob/admob';

export const BannerAds = (bannerSize, Uid) => {
  return <BannerAd size={bannerSize} unitId={Uid} />;
};
