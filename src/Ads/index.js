import React, {useEffect, useState} from 'react';
import {AppOpenAd, BannerAd, InterstitialAd} from '@react-native-admob/admob';

export const BannerAds = (bannerSize, Uid) => {
  return <BannerAd size={bannerSize} unitId={Uid} />;
};

export const AppOpenAds = Uid => {
  const [openAds, setOpenAds] = useState(AppOpenAd | null);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const OpenAdsCreate = AppOpenAd.createAd(Uid);
    setOpenAds(OpenAdsCreate);

    const loadSubscription = OpenAdsCreate.addEventListener('adLoaded', () => {
      setAdLoaded(true);
    });

    const faildSubscription = OpenAdsCreate.addEventListener(
      'adFailedToLoad',
      () => {
        setAdLoaded(false);
      },
    );

    if (adLoaded && openAds) {
      AppOpenAd.show();
    }

    return () => loadSubscription.remove(), faildSubscription.remove();
  }, []);
};

export const InterstitialAds = Uid => {
  const [interstitialAds, setInterstitialAds] = useState(InterstitialAd | null);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const InterstitialAdsCreate = InterstitialAd.createAd(Uid);
    setInterstitialAds(InterstitialAdsCreate);

    const loadSubscription = InterstitialAdsCreate.addEventListener(
      'onAdLoaded',
      () => {
        setAdLoaded(true);
      },
    );

    const failedSubscription = InterstitialAdsCreate.addEventListener(
      'onAdDismissed',
      () => {
        setAdLoaded(false);
      },
    );

    if (adLoaded && interstitialAds) {
      InterstitialAd.show();
    }

    return () => loadSubscription.remove(), failedSubscription.remove();
  }, []);
};
