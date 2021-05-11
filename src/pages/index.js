import React, { useState, useEffect } from "react";
import Layout from '../components/layout';
import Head from '../components/head';
import indexStyles from './index.module.scss';
import { professions } from '../utils/constants';


const IndexPage = (props) => {
  const [prof, setProf] = useState(professions[0]);
  
  let iterations = 0;
  const setCurrentProfession = () => {
    iterations++;
    if (iterations === 5) {
      iterations = 0
    }
    setProf(professions[iterations])
  }
  
  useEffect(() => {
    const startSlider = setInterval(() => setCurrentProfession(), 2000)
    return () => {
      clearInterval(startSlider);
    };
  }, []);
  const emoji = (pr) => {
    return pr === 'a mother of 3' ? (<span role="img" aria-label="baby, son, daughter">{pr} 🙋‍♀️🙋‍♂️ 🙋 </span>)
    : pr
  }
  return (
    <div> 
        <Layout>
          <Head title="Home"/>
            <div className={indexStyles.content}>
              <div className={indexStyles.presentation}>
                <h2 className={indexStyles.h2}>Hello, I'm Carla, and I am <span className={indexStyles.jobs}>{emoji(prof)}</span></h2>
              </div>
            </div>
        </Layout>
    </div>
  )
}

export default IndexPage;