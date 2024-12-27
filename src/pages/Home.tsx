import React from 'react';
import HeroSlider from '../components/HeroSlider';
import StateSection from '../components/StateSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import PartnerSection from '../components/PartnerSection';
import EventsAnnouncements from '../components/home/EventsAnnouncements';
import ArtInFocus from '../components/home/ArtInFocus';
import InstagramFeed from '../components/home/InstagramFeed';
import OnView from '../components/home/OnView';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <StateSection />
      {/* <AboutSection /> */}
      <EventsAnnouncements />
      <OnView />
      <ArtInFocus />
      <InstagramFeed />
      {/* <TeamSection />
      <PartnerSection /> */}
    </>
  );
};

export default Home;