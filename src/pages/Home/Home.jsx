import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import JobsSection from '../../components/JobsSection';
import StaffSection from '../../components/StaffSection';
import VideoSection from '../../components/VideoSection';
import ValuesSection from '../../components/ValuesSection';

import bannerBottom from '../../assets/images/foto-bottom.png';
import { getActiveJobs } from "../../services/api";

function Home() {
  const [activeJobs, setActiveJobs] = useState([]);

  useEffect(() => {
    getActiveJobs().then((job) => setActiveJobs(job));
  }, []);

  return (
    <>
      <Header />
      <VideoSection />
      <StaffSection />
      <ValuesSection />
      <Banner bannerImage={bannerBottom} bannerAlt="Imagem panorâmica de feira de artes da Elo7" />
      <JobsSection jobList={activeJobs} />
    </>
  )
}

export default Home;