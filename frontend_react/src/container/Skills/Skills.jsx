import React from 'react';
import { motion } from 'framer-motion';
import  ReactTooltip  from 'react-tooltip';

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const skills = [{name: 'React', icon: images.react, bgColor: '#edf2f8'}, {name: 'Node JS', icon: images.node, bgColor: '#edf2f8'}, {name: 'Git', icon: images.git, bgColor: '#edf2f8'}, {name: 'SASS', icon: images.sass, bgColor: '#edf2f8'}, {name: '', icon: '', bgColor: ''}]

const experiences = [{year: '2020', works: [{name: 'Frontend Developer', company: 'Google', desc: 'I work as a frontend developer in various section, ranging from implementation and upgrades. This has help me to develop in some ways that are essential for my growth and reinforce my knowledge as a frontend engineer'}, {name: 'Digital Marketer', company: 'Mavex', desc: 'I work as a Digital Maketer in various section, ranging from implementation and upgrades. This has help me to develop in some ways that are essential for my growth and reinforce my knowledge'}]}, {year: '2021'}, {year: '2022', works: [{name: 'Backend Developer', company: 'Cholatrek Institute', desc: 'I started as a student in this instite, where I was later retained to teach, make reserches and work on serveral projects as a backend engineer'}]}]


const Skills = () => {
  
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {console.log('here', experience.works)}
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
