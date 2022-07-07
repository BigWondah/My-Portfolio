import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const works = [
  { title: 'Modern Responsive Portfolio', description: 'Modern React-JS Portfolio', projectLink: 'http//boiwondahportfolio.ps', codeLink: 'github.com', tags:['React JS', 'ALL'], imgUrl: images.about01},
  { title: 'Node-JS Server', description: 'NodeJS costom APP with professional implementation', projectLink: 'http//boiwondahportfolio.ps', codeLink: 'github.com', tags:['Node JS', 'ALL'], imgUrl: images.about02}
  // { title: 'Software Engineer', description: 'I am a good Software Engineer.', imgUrl: images.about03},
  // { title: 'Digital Marketer', description: 'I am a good Digital Marketer.', imgUrl: images.about04}
]
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(works); 
  
  
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);
    
    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if(item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }
  return ( 
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span><br /> Section
      </h2>

      <div className='app__work-filter'>
        {['Web App', 'React JS', 'Node JS', 'Digital Marketing', 'All'].map((item, index) => (<div key={index} onClick={() => handleWorkFilter(item)} className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
          {item}
        </div>))}   
      </div>

      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className='app__work-portfolio'>
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.name} />
              <motion.div whileHover={{opacity: [0, 1]}} transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }} className='app__work-hover app__flex'>
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div whileInView={{scale: [0, 1]}} whileHover={{ scale: [1, 0.9]}} transition={{ duration: 0.25 }} className='app__flex'>
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div whileInView={{scale: [0, 1]}} whileHover={{ scale: [1, 0.9]}} transition={{ duration: 0.25 }} className='app__flex'>
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);