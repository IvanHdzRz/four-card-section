import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Styles from './main.module.css';
import svg1 from './images/icon-supervisor.svg';
import svg2 from './images/icon-team-builder.svg';
import svg3 from './images/icon-karma.svg';
import svg4 from './images/icon-calculator.svg';

const benefits=[
  {
    title:'Supervisor',
    description:'Monitors activity to identify project roadblocks',
    highLightColor:'hsl(180, 62%, 55%)',
    icon:svg1,
  },
  {
    title:'Team Builder',
    description:'Scans our talent network to create the optimal team for your proyect',
    highLightColor:'hsl(0, 78%, 62%)',
    icon:svg2,
  },
  {
    title:'Karma',
    description:'Regularly evaluates our talent to ensure quality',
    highLightColor:'hsl(34, 97%, 64%)',
    icon:svg3,
  },
  {
    title:'Calculator',
    description:'Uses data from past project to provides better delivery estimates',
    highLightColor:'hsl(212, 86%, 64%)',
    icon:svg4,
  },
]

class Main extends React.Component{

  render(){
    return(
      <div className={Styles.main}>
        <div className={Styles.header}>
          <h2 className={Styles.titleLight}>Reliable, efficent delivery</h2>
          <h2 className={Styles.titleBold}>Power by Technology</h2>
          <p>
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
          </p>
        </div>
        <div className={Styles.cardSeccion}>
          {benefits.map((item)=>{
            return (
              <Card
                title={item.title}
                icon={item.icon}
                description={item.description}
                highLightColor={item.highLightColor}
              />
            )
          })}
        </div>  
      
      </div>
     
      
    ) 
  }

}


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
