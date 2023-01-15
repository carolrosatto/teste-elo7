import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import JobsSection from '../../components/JobsSection';
import StaffSection from '../../components/StaffSection';
import VideoSection from '../../components/VideoSection';
import ValuesSection from '../../components/ValuesSection';

import bannerBottom from '../../assets/images/foto-bottom.png';

function Home() {
  return (
    <>
      <Header />
      <VideoSection />
      <StaffSection />
      <ValuesSection />
      <Banner bannerImage={bannerBottom} bannerAlt="TESTE" />
      <JobsSection />
    </>
  )
}

export default Home;