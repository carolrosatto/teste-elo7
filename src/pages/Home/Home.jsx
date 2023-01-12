import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import JobsSection from '../../components/JobsSection';
import StaffSection from '../../components/StaffSection';
import VideoSection from '../../components/VideoSection';
import ValuesSection from '../../components/ValuesSection';

function Home() {
  return (
    <>
      <Header />
      <VideoSection />
      <StaffSection />
      <ValuesSection />
      <Banner />
      <JobsSection />
    </>
  )
}

export default Home;