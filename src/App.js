import React,{useState,useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Zoom } from 'react-reveal';
//import { Fade } from 'react-bootstrap';
//import Fad
import {delay, motion, useAnimation, Variants} from 'framer-motion';
import { Button, Offcanvas } from 'react-bootstrap';
import image from './blobanimation (1).svg';
import image1 from './blob1.png'
import image2 from './banner3.png';
import backimg from './revanthIbg.jpg';
//import bg1 from './Animated Shape.svg';
import image3 from './blobanimation (2).svg';
import image5 from './revanth1.svg';
import stroke from './brush-stroke-png-47318.png';
import bg1 from './background1.svg';
import test from './blob11.svg'
import Line from './line2.png';
import './magic.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import { useAnimate } from 'framer-motion';
import { Modal} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/styles';
import { createTheme,ThemeProvider } from '@mui/material';
import "react-circular-progressbar/dist/styles.css";





export function Menu(){
  //const navigate=useNavigate();
  return(
    <Navbar collapseOnSelect expand="lg" style={{height:'10vh',backgroundColor:'rgba(100,100,100,0.3)',fontSize:'1.5rem',width:'100%'}}>
    <Container>
    <Navbar.Brand style={{height:'100%',textDecoration:'none',marginRight:'2rem'}}>
    <h1 className='grad_text'>Ch.Revanth</h1>
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:'#EB144C',maxHeight:'2rem',backgroundColor:'#EB144C',borderRadius:'50%'}}/>
      <Navbar.Offcanvas placement="end" id="responsive-navbar-nav" style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
        <Offcanvas.Header closeButton style={{backgroundColor:'#EB144C',color:'white'}}>
          <Offcanvas.Title>
            <h1>CH.Revanth</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-end" style={{width:'100%',paddingRight:'0',}}>
          <a  ref={el=>{if(el){el.style.setProperty('text-decoration','none','important')}}} href="/about" className='underline' style={{color:'white',textDecoration:'none',marginRight:'1rem'}} onMouseOver={(e)=>{e.target.style.color="#FF6969";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}} onClick={(e)=>{
            document.getElementById("about_div").scrollIntoView({behavior:'smooth'});
            e.preventDefault();
          }}>about me</a>
          <a  ref={el=>{if(el){el.style.setProperty('text-decoration','none','important')}}} href="/home" className='underline' style={{color:'white',textDecoration:'none',marginRight:'1rem'}} onMouseOver={(e)=>{e.target.style.color="#FF6969";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}} onClick={(e)=>{
            document.getElementById("skills_div").scrollIntoView({behavior:'smooth'});
            e.preventDefault();
          }}>skills</a>
          <a  ref={el=>{if(el){el.style.setProperty('text-decoration','none','important')}}} href="/home" className='underline' style={{color:'white',textDecoration:'none',marginRight:'1rem'}} onMouseOver={(e)=>{e.target.style.color="#FF6969";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}} onClick={(e)=>{
            document.getElementById("certificates_div").scrollIntoView({behavior:'smooth'});
            e.preventDefault();
          }}>certifications</a>
          <a  ref={el=>{if(el){el.style.setProperty('text-decoration','none','important')}}} href="/home" className='underline' style={{color:'white',textDecoration:'none',marginRight:'1rem'}} onMouseOver={(e)=>{e.target.style.color="#FF6969";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}} onClick={(e)=>{
            document.getElementById("projects_div").scrollIntoView({behavior:'smooth'});
            e.preventDefault();
          }}>projects</a>
          <a  ref={el=>{if(el){el.style.setProperty('text-decoration','none','important')}}} href="/home" className='underline' style={{color:'white',textDecoration:'none',marginRight:'1rem'}} onMouseOver={(e)=>{e.target.style.color="#FF6969";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}} onClick={(e)=>{
            document.getElementById("acheivements_div").scrollIntoView({behavior:'smooth'});
            e.preventDefault();
          }}>acheivements</a>
          <a  ref={el=>{if(el){el.style.setProperty('text-decoration','none','important')}}} href="/home" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FF6969";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}} onClick={(e)=>{
            document.getElementById("contact_div").scrollIntoView({behavior:'smooth'});
            e.preventDefault();
          }}>contact</a>     
        </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

const AboutMe=()=>{
  const [complete1,isComplete1]=useState(false);
  const [complete2,isComplete2]=useState(false);
  const [complete0,isComplete0]=useState(false);
  const [complete3,isComplete3]=useState(false);
  //const [complete4,isComplete4]=useState(false);
  const ref1=useRef(null);

  return(
    <div id="about_div" className='aboutMe' style={{backgroundColor:'#EB144C',width:'100hw',height:'fit-content',minHeight:'80vh',display:'flex',position:'relative',flexDirection:'row'}}>
        {complete0 && <>
          <motion.div initial={{opacity:0,scale:0}} className='div1' viewport={{amount:1,once:true}} whileInView={{opacity:1,scale:1,transition:{duration:1,delayChildren:1}}} style={{padding:'5%',backgroundImage:`url(${stroke})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain',}}>
             <motion.div animate={{y:[0,-50,0,50,0],transition:{duration:5,repeat:Infinity,delay:1,ease:'linear'}}} initial={{scale:0}} whileInView={{scale:1,transition:{duration:2}}} viewport={{once:true,amount:1}} className='magicpattern' onAnimationComplete={()=>{
              isComplete1(true);
             }}></motion.div>
          </motion.div>
          <motion.div className='div2'  style={{height:'100%',textAlign:'center',justifyContent:'center',alignItems:'center',padding:'5%'}}>
          {complete1 &&<motion.div ref={ref1} initial={{width:'0%'}} whileInView={{width:'fit-content',transition:{duration:1,delay:1}}} viewport={{once:true,amount:'1'}} style={{color:'white',whiteSpace:'nowrap',overflow:'hidden',borderRight:'2px solid white',fontWeight:1000,fontFamily:'Abril Fatface'}} 
          onAnimationComplete={()=>{
            ref1.current.style.border="none";
            isComplete2(true);
          }}
          ><h1 >About Me</h1></motion.div>}
          {complete2 &&
            <div style={{position:'relative',width:'36%',borderRadius:'1px',height:'0.5vh'}}>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'black',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear'}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:4}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'#EBB02D',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear',delay:0.3}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:3}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'white',width:['0%','100%','100%'],left:['0%','0%','0%'],transition:{duration:1,ease:'linear',delay:0.6}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:2}} onAnimationComplete={()=>{
              isComplete3(true);
              }}/>
            </div>
          }
          {complete3 && <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0,transition:{duration:1}}} viewport={{amount:0.5,once:true}} style={{color:'#F6F1E9',fontFamily:'Monomaniac One',width:'100%',height:'auto',marginTop:'5%',textAlign:'left'}}>
            <h3 style={{fontSize:'2Vmax'}}>
              I'm a passionate full-stack developer and competitive programmer. Currently pursuing B.Tech in Computer Science at Vignan College, I have a strong foundation in web development and a knack for problem-solving.
              I'm always eager to take on new challenges and collaborate with like-minded individuals to create exceptional projects. 
              I enjoy playing cricket, working out at the gym ,watching movies, and exploring the outdoors , fueling my passion for sports, fitness, and adventure.
            </h3>            
          </motion.div>
          }
          </motion.div>
        </>
        }
        <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'white',width:['0%','100%','100%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear'}}} viewport={{once:true,amount:0.5}} style={{height:'100%',position:'absolute',zIndex:4}}/>
        <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'#2D2727',width:['0%','100%','100%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear',delay:0.3}}} viewport={{once:true,amount:0.5}} style={{height:'100%',position:'absolute',zIndex:3}}/>
        <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'#EBB02D',width:['0%','100%','100%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear',delay:0.6}}} viewport={{once:true,amount:0.5}} style={{height:'100%',position:'absolute',zIndex:2}} onAnimationComplete={()=>{
          isComplete0(true);
        }}/>
  </div>
  )
}

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate:-10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};


const Ring=(props)=>{
  const val=props.val;

  return(
    <CircularProgressbar value={val} background backgroundPadding={4} text={`${val}%`} styles={buildStyles({
      backgroundColor: "#EB144C",
      textColor: "#fff",
      pathColor: "#fff",
      trailColor: "transparent",
    })}/>
  )
}




const SkillDiv=(props)=>{
  const img_src=props.img;
  const val=props.val;
  const [val1,setVal1]=useState(0);
  const [complete,setComplete]=useState(false);
  

  useEffect(()=>{
    setTimeout(()=>{
      if(val1<val && complete)
      setVal1(val1+1);
    },10)
  },[val1,complete]);

  return(
    <Grid {...{ xs: 6, sm: 6, md: 4, lg: 3 }} >
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
      style={(props.i==10)? {marginBottom:'0px'} :{}}
    >
      <div className="splash" style={{ background:'#EB144C' }} />
      <motion.div className="card" variants={cardVariants} onAnimationComplete={()=>{setComplete(true);}}>
        <img src={img_src} style={{width:`${props.i==4 ? '80%' : '100%'}`,height:'auto'}}/>  
        <div style={{width:'50%',height:'30%',position:'absolute',left:'50%',top:'0'}}>
        {complete &&
          <Ring val={val1}/>
        }
        </div>
      </motion.div>
    </motion.div>
    </Grid>
  )
}

const Skills=()=>{
  const skills=[{img:'https://www.techbaz.org/Course/img/c-logo.png',val:80},
  {img:'https://raw.githubusercontent.com/github/explore/180320cffc25f4ed1bbdfd33d4db3a66eeeeb358/topics/cpp/cpp.png',val:85},
  {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/800px-Python_logo_01.svg.png',val:60},
  {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png',val:80},
  {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png',val:70},
  {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png',val:85},
  {img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',val:80},
  {img:'https://www.upwork.com/catalog-images/456cc3ab684955d5a1bfeb58b18859c5',val:55},
  {img:'https://user-images.githubusercontent.com/104568275/186131673-9ffff84c-21b4-421b-b956-643aa0fa7dbd.png',val:75},
  {img:'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png',val:30},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0tgcD1bmpAAnhq66dHPXd6pkNIThusiyCP7Pt6pkkWquIf3H0824XqtQzKmM5iiWR1U&usqp=CAU',val:30}];
  const [complete0,isComplete0]=useState(false);
  const [complete1,isComplete1]=useState(false);
  //const [complete2,isComplete2]=useState(false);
  const ref2=useRef(null);

  return(
  <div id="skills_div" style={{height:'fit-content',width:'100vw'}}>
  <div style={{width:'100%',height:'fit-content',alignItems:'center',display:'flex',flexDirection:'column'}}>
  <motion.div ref={ref2} initial={{width:'0%'}} whileInView={{width:'fit-content',transition:{duration:1,delay:1}}} viewport={{once:true,amount:'1'}} style={{color:'#EB144C',whiteSpace:'nowrap',marginTop:'1%',overflow:'hidden',borderRight:'2px solid white',fontWeight:1000,fontFamily:'Abril Fatface'}} 
  onAnimationComplete={()=>{
  ref2.current.style.border="none";
  isComplete0(true);
  }}
  ><h1 style={{fontSize:'2.5Vmax'}}>My Skills</h1></motion.div>
  {
    complete0 && 
    <div style={{position:'relative',width:'25Vmax',borderRadius:'1px',height:'0.5vh'}}>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'white',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear'}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:4}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'yellow',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear',delay:0.3}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:3}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'#EB144C',width:['0%','100%','100%'],left:['0%','0%','0%'],transition:{duration:1,ease:'linear',delay:0.6}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:2}} onAnimationComplete={()=>{
              isComplete1(true);
              }}/>
    </div>
  }
  </div>
  <div style={{height:'fit-content',minHeight:'90vh',}}>
  <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
      >
        {complete1 &&  skills.map(( skill,i) => (
          <SkillDiv key={i} img={skill.img} i={i} val={skill.val}/>
        ))}
      </Grid>
  </Box>
  </div>
  </div>
  )
}



const Project=(props)=>{
  //const i=props.i;
  //const img_src=props.img;
  //const pad=props.padding;
  const images=props.images;
  const index=props.index;
  const [show,setShow]=useState(false);

  const ProjectModal=()=>{
    return(
      <Modal
        show={show}
        onHide={()=>{setShow(false)}}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {
              images.map((image,i)=>{
                return(
                  <Carousel.Item key={i} interval={1000}>
                  <div style={{backgroundColor:'white',height:'100%',maxHeight:'30vh',width:'100%',textAlign:'center'}}>
                    <img src={image} style={{height:'100%',width:'auto',maxHeight:'30vh',}}/>
                  </div>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
        <p>{props.text}</p>
          <Button onClick={()=>{setShow(false)}}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return(
    <>
    <ProjectModal/>
    <motion.div initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:0.5,delay:0.2*props.i,overflow:'hidden'}}} viewport={{once:true,amount:0.6}} style={{backgroundImage:`url(${props.img})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center',textAlign:'center',justifyContent:'center',alignItems:'center',position:'relative',cursor:'pointer',}} whileTap={()=>{setShow(true)}}>
        <motion.div initial={{opacity:0}} whileHover={{opacity:0.9,transform:{duration:1}}} style={{height:'100%',width:'100%',color:'white',backgroundColor:'black',position:'absolute',top:'-4px',bottom:0,right:'-4px'}} whileTap={()=>{setShow(true)}}>
            <h2 style={{marginTop:'30%'}}>{props.title}</h2>
        </motion.div>
    </motion.div>
    </>
  )
}


const Projects=()=>{
  const [complete0,isComplete0]=useState(false);
  const [complete1,isComplete1]=useState(false);
  const ref4=useRef(null);
  const projects=[{img:'./polieProject.svg',title:'police project',images:['./policeProject1.png','./policeProject2.png','./policeProject3.png'],text:'A complaint management system developed for vizianagaram police station using MERN stack'},
    {img:'./shoppyProject.svg',title:'shoppy',images:['./shoppyProject1.png','./shoppyProject2.png','./shoppyProject3.png'],text:'this is a e-commerce appliaction developed using MERN stack . platforms like firebase were used '},
    {img:'./helpinghandsProject.svg',title:'helping hands',images:['./helpinghandsProject1.png','./helpinghandsProject2.png','helpinghandsProject3.png'],text:'this is a complaint regesteration methos which bridges the gap between people and voulenteers'},
    {img:'./vignewsProject.svg',title:'vignews',images:['./vignewsProject1.png','./vignewsProject2.png','./vignewsProject3.png'],text:'this is an social media platform App developed using React Native and firebase for vignan students'},
    {img:'./farmbankProject.svg',title:'farm bank',images:['./farmbankProject1.png','./farmbankProject2.png','./farmbankProject3.png'],text:'farm bank is a online web platform that acts as a bridge between investors and farmers'},
    {img:'./movieboxProject.svg',title:'movie box',images:['./movieboxProject1.png','./movieboxProject2.png','./movieboxProject3.png'],text:'movie box is an online platform developed with Node js and React '},
    {img:'./loadingProject.svg',title:'loading more',images:['./workinprogress.jpg','./comingsoon.jpg'],text:'projects are still under development , will be included as soon as possible .'}];

  return(
    <div id="projects_div" className="projects_div" style={{minHeight:'fit-content',width:'100hw',paddingBottom:'2%'}}>
      <div style={{minHeight:'fit-content',width:'100%',alignItems:'center',display:'flex',flexDirection:'column'}}>
        <motion.div ref={ref4} initial={{width:'0%'}} whileInView={{width:'fit-content',transition:{duration:1,delay:1}}} viewport={{once:true,amount:'1'}} style={{color:'#EB144C',whiteSpace:'nowrap',marginTop:'1%',overflow:'hidden',borderRight:'2px solid white',fontWeight:1000,fontFamily:'Abril Fatface'}} 
        onAnimationComplete={()=>{
        ref4.current.style.border="none";
        isComplete0(true);
        }}
        ><h1 style={{fontSize:'2.5Vmax'}}>Projects</h1></motion.div>
        {
          complete0 && 
          <div style={{position:'relative',width:'20Vmax',borderRadius:'1px',height:'0.5vh'}}>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'black',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear'}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:4}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'yellow',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear',delay:0.3}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:3}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'#EB144C',width:['0%','100%','100%'],left:['0%','0%','0%'],transition:{duration:1,ease:'linear',delay:0.6}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:2}} onAnimationComplete={()=>{
              isComplete1(true);
              }}/>
          </div>
        }
      </div>
      <div style={{paddingBottom:'5%'}} className="main1">
      <div className="container1">
        {
          projects.map((project,i)=>{
            return(
              <Project key={i} img={project.img} index={i} title={project.title} images={project.images} text={project.text}/>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}


const Certificate=(props)=>{
  const img_src=props.img;
  const text=props.text;
  const index=props.index;
  const animate=useAnimation();

  const theme=createTheme({
    breakpoints:{
      values:{
      xs: 0,
      sm: 450,
      md: 900,
      lg: 1200,
      xl: 1536,
      }
    }
  })

  return(
    <ThemeProvider theme={theme}>
    <Grid {...{ xs: 6, sm: 6, md: 4, lg: 3 }} minHeight={250} >
          <motion.div initial={{y:20,opacity:0}} animate={{opacity:1,y:0,transition:{duration:1,delay:0.5*index}}}  style={{height:'100%',width:'100%',position:'relative',overflow:'hidden'}} onHoverStart={()=>{
            animate.start({width:'80%'},{duration:0.5});
          }} onHoverEnd={()=>{
            animate.start({width:'0%'});
          }}>
            <motion.img src={`${img_src}`} style={{width:'100%',height:'100%',borderRadius:'5%',position:'absolute',zIndex:'1'}}/>
            <motion.div initial={{width:'0%'}} animate={animate}  style={{position:'absolute',height:'100%',backgroundColor:'rgba(0,0,0,0.9)',textAlign:'center',fontFamily:'Abriac FatFace',justifyContent:'center',color:'white',overflow:'hidden',borderRadius:'5%',zIndex:'2',alignItems:'ceter'}}><h1>{text}</h1></motion.div>
          </motion.div>
    </Grid>
    </ThemeProvider>
  )
}





const Certifications=()=>{
  const [complete0,isComplete0]=useState(false);
  const [complete1,isComplete1]=useState(false);
  const ref3=useRef(null);
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
    }
  }


  const certificates=[{img:'./dbmCertificate.jpg',text:'NPTEL DBMS'},
  {img:'./ccdsaCertficate.png',text:'CCDSA'},
  {img:'./cCerificate.png',text:'Solo Learn C'},
  {img:'./problemsolvingCertificate.png',text:'Hacker Rank problem solving'},
  {img:'./pythonCertificate.png',text:'Solo Learn Python'},
  {img:'./reactCertificate.png',text:'Hacker Rank React'}];

  return(
    <div id="certificates_div" className="certificates_div" style={{minHeight:'60vh',width:'100hw',backgroundColor:'#EB144C',display:'block'}}>
    <div style={{width:'100%',textAlign:'center',alignItems:'center',backgroundColor:'#EB144C',display:'flex',flexDirection:'column'}}>
    <motion.div ref={ref3} initial={{width:'0%'}} whileInView={{width:'fit-content',transition:{duration:1,delay:1}}} viewport={{once:true,amount:'1'}} style={{color:'white',whiteSpace:'nowrap',marginTop:'1%',overflow:'hidden',borderRight:'2px solid white',fontWeight:1000,fontFamily:'Abril Fatface'}} 
    onAnimationComplete={()=>{
    ref3.current.style.border="none";
    isComplete0(true);
    }}
    ><h1 style={{fontSize:'2.5Vmax'}}>Certificates</h1></motion.div>
    {complete0 && 
      <div style={{position:'relative',width:'27Vmax',borderRadius:'1px',height:'0.5vh'}}>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'black',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear'}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:4}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'yellow',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear',delay:0.3}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:3}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'white',width:['0%','100%','100%'],left:['0%','0%','0%'],transition:{duration:1,ease:'linear',delay:0.6}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:2}} onAnimationComplete={()=>{
              isComplete1(true);
              }}/>
      </div>
    }
    </div>
    <motion.div  viewport={{amount:0.6,once:true}} variants={container} style={{height:'fit-content',width:'100%',backgroundColor:'#EB144C',alignItems:'center',display:'flex'}}>
    {complete1 &&
      <Box sx={{ flexGrow: 1, p: 2 ,}}>
      <Grid
        container
        spacing={2}
      >
        {certificates.map((certificate , index) => (
          <Certificate key={index} img={certificate.img} index={index} text={certificate.text}/>
        ))}
      </Grid>
      </Box>
    }
    </motion.div>
    </div>
  )
}


const Acheivements=()=>{
  const [complete0,isComplete0]=useState(false);
  //const [complete1,isComplete1]=useState(false);
  const ref4=useRef(null);
  const control=useAnimation();
  const [a,setA]=useState(false);
  const [b,setB]=useState(false);
  const acheivements=["secured 1st position in ANIITS coding state level coding contest",
  "secured 2nd position in vignan statelevel hackathon",
  "secured 1st position in college level coding contest",
  "secured 1st position in state level coding contest",
  "solved more than 1000 problems in codechef,leetcode,...."]

  const parent={
    hidden:{
      scale:0,
    },
    visible:{
      scale:1,
      transition:{
        duration:1,
        when:"beforeChildren",
        staggerChildren:0.5,
      }
    },
  }

  const child={
    hidden:{
      opacity:0,
      y:20,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:1,
      }
    }
  }


  return(
    <div id="acheivements_div" className="acheivements" style={{minHeight:'90vh',width:'100%',backgroundColor:'#EB144C',display:'flex',flexDirection:'row'}}>
    <div className="div3" style={{padding:'2%'}}>
    <motion.div initial={{scale:0}} whileInView={{scale:1}} viewport={{amount:0.6,once:true}} style={{height:'fit-content',width:'90%',color:'white',alignItems:'center',textAlign:'start',padding:'5%',marginLeft:'5%',borderRadius:'15px',boxShadow:'0px 0px 4px black'}}>
    <div style={{width:'100%',marginBottom:'3%'}}>
      <motion.div ref={ref4} initial={{width:'0%'}} whileInView={{width:'fit-content',transition:{duration:1,delay:1}}} viewport={{once:true,amount:'1'}} style={{color:'white',whiteSpace:'nowrap',marginTop:'1%',overflow:'hidden',borderRight:'2px solid white',fontWeight:1000,fontFamily:'Abril Fatface'}} 
      onAnimationComplete={()=>{
      ref4.current.style.border="none";
      isComplete0(true);
      }}
      ><h1 style={{fontSize:'2.5Vmax'}} >Achievements</h1></motion.div>
      {complete0 && 
      <div style={{position:'relative',width:'22Vmax',borderRadius:'1px',height:'0.5vh'}}>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'black',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear'}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:4}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'yellow',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear',delay:0.3}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:3}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'white',width:['0%','100%','100%'],left:['0%','0%','0%'],transition:{duration:1,ease:'linear',delay:0.6}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:2}} onAnimationComplete={()=>{
              //isComplete1(true);
              }}/>
     </div>
      }
    </div>
      <motion.ul initial="hidden" animate="visible" variants={parent}>
        {
          acheivements.map((acheivement,i)=>{
            return(
              <motion.li key={i} variants={child}><h2 style={{fontSize:'2Vmax'}}>{acheivement}</h2></motion.li>
            )
          })
        }
      </motion.ul>
    </motion.div>
    </div>


  <div className="div4">
      <motion.div id="images" initial="hidden" animate={a ? "visible": "none"} whileInView={()=>{setA(true)}} viewport={{amount:0.6,once:true}} variants={parent} style={{height:'90%',width:'90%',alignItems:'center',verticalAlign:'center',position:'relative',marginTop:'5%',marginLeft:'5%'}}>
        <motion.img variants={child} style={{height:'40%',width:'70%',position:'absolute',left:0,top:0,borderRadius:'10px'}} src="./Acheivements1.jpg"/>
        <motion.img variants={child} style={{height:'40%',width:'70%',position:'absolute',left:'30%',top:'30%',borderRadius:'10px'}} src="./Acheivements2.png"/>
        <motion.img variants={child} onAnimationComplete={()=>{}} style={{height:'40%',width:'70%',position:'absolute',left:0,top:'60%',borderRadius:'10px'}} src="./Acheivements3.png"/>
      </motion.div>
  </div>
  </div>
  )
}


const Profiles=()=>{


  const profiles=[{name:'codeechf',img:'https://cdn.dribbble.com/users/70628/screenshots/1743345/codechef.png',link:'https://www.codechef.com/users/manirevanth',text:'highest rating : 1839'},
  {name:'leetcode',img:'https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png',link:'https://leetcode.com/Mani_Revanth_548/',text:'solved problems : 259'},
  {name:'hackerearth',img:'https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2021/07/16/HackerEarthFeatureImage.png',link:'https://www.hackerearth.com/@ch.m.s.revanth',text:'hackerearth'},
  {name:'codeforces',img:'https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1',link:'https://codeforces.com/profile/Rocking_revanth_548',text:'institute rank : 6'},
  {name:'hackerRank',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/HackerRank_logo.png/800px-HackerRank_logo.png',link:'https://www.hackerrank.com/ch_m_s_revanth?hr_r=1',text:'hacker rank'}];


  return(
    <div id="profiles_div" className='profiles' style={{width:'fit-content',width:'100%',display:'inline-flex',height:'50%',flexWrap:'nowrap',overflowY:'hidden',overflowX:'scroll'}}>\
      {
        profiles.map((profile,i)=>{
          return(
            <div key={i} style={{height:'90%',marginTop:'1%',marginLeft:'2%',minWidth:'20rem',borderRadius:'10px',boxShadow:'0px 0px 4px white',backgroundColor:'rgba(255,255,255,0.1)'}}>
              <div style={{height:'60%',textAlign:'center',justifyContent:'center'}}>
                <img src={`${profile.img}`} style={{height:'80%',width:'80%',borderRadius:'15px',marginTop:'5%',backgroundColor:'white'}}/>
              </div>
              <div style={{height:'40%',textAlign:'center',alignItems:'center',color:'white'}}>
                <h4>{profile.text}</h4>
                <a href={`${profile.link}`} target='_blank' style={{textDecoration:'none',boxDecoration:'none'}}><button style={{backgroundColor:'#EB144C',color:'white',borderRadius:'10px'}}><h4>View Profile</h4></button></a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const Contact=()=>{
  const [complete0,isComplete0]=useState(false);
  const [complete1,isComplete1]=useState(false);
  const ref5=useRef(null);

  return(
    <div id="contact_div" style={{height:'fit-content',minHeight:'80vh',backgroundColor:'#EB144C',textAlign:'center',color:'white'}}>
      <div style={{width:'100%',backgroundColor:'#EB144C',display:'flex',alignItems:'center',flexDirection:'column'}}>
      <motion.div ref={ref5} initial={{width:'0%'}} whileInView={{width:'fit-content',transition:{duration:1,delay:1}}} viewport={{once:true,amount:'1'}} style={{color:'white',whiteSpace:'nowrap',marginTop:'1%',overflow:'hidden',borderRight:'2px solid white',fontWeight:1000,fontFamily:'Abril Fatface'}} 
      onAnimationComplete={()=>{
      ref5.current.style.border="none";
      isComplete0(true);
      }}
      ><h1 style={{fontSize:'2.5Vmax'}}>Contact Me</h1></motion.div>
      {complete0 && 
      <div style={{position:'relative',width:'27Vmax',borderRadius:'1px',height:'0.5vh'}}>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'black',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear'}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:4}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'yellow',width:['0%','100%','0%'],left:['0%','0%','100%'],transition:{duration:1,ease:'linear',delay:0.3}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:3}}/>
            <motion.div initial={{width:'1%',backgroundColor:'transparent'}} whileInView={{backgroundColor:'white',width:['0%','100%','100%'],left:['0%','0%','0%'],transition:{duration:1,ease:'linear',delay:0.6}}} viewport={{once:true,amount:0.5}} style={{borderRadius:'1px',height:'100%',position:'absolute',zIndex:2}} onAnimationComplete={()=>{
              isComplete1(true);
              }}/>
     </div>
      }
    <div style={{height:'90%',width:'100%',backgroundColor:'#EB144C',textAlign:'center',paddingTop:'3%',color:'white'}}>
        <h2 style={{fontSize:'2Vmax'}}>Feel free to contact me</h2>
        <h3 style={{color:'#B2B2B2',fontSize:'1.5Vmax'}}>Im always open for new oppurtunities</h3>
        <div style={{height:'50%',width:'100%'}}>
          <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid
          container
          spacing={2}
          >

          <Grid {...{ xs:6, sm: 6, md: 4, lg: 3 }} minHeight={250}>
            <div style={{height:'90%',width:'90%',}}>
              <img src="/location.png" style={{height:'60%',width:'auto'}}/>
              <h3>seetharama swamy temple street , goshal hospital bakside , vizag</h3>
            </div>
          </Grid>

          <Grid {...{ xs: 6, sm: 6, md: 4, lg: 3 }} minHeight={250}>
            <div style={{height:'90%',width:'90%',}}>
              <img src="/callI.png" style={{height:'60%',width:'auto'}}/>
              <h2>+919704093954</h2>
              <h2>+919985598581</h2>
            </div>
          </Grid>

          <Grid {...{ xs: 6, sm: 6, md: 4, lg: 3 }} minHeight={250}>
            <div style={{height:'90%',width:'90%',}}>
              <img src="/whatsapp.png" style={{height:'60%',width:'auto'}}/>
              <h2>+919704093954</h2>
              <h2>+919985598581</h2>
            </div>
          </Grid>

          <Grid {...{ xs: 6, sm: 6, md: 4, lg: 3 }} minHeight={250}>
            <div style={{height:'90%',width:'90%',}}>
              <img src="/email.png" style={{height:'60%',width:'auto'}}/>
              <h3>ch.m.s.revanth@gmail.com</h3>
            </div>
          </Grid>

          </Grid>
          </Box>
        </div>
    </div>
    </div>
    <div style={{width:'100%',height:'1%',textAlign:'center',justifyContent:'center',alignItems:'center'}}>

          <img src="/github.png" style={{height:'auto',width:'10vh',cursor:'pointer'}} onClick={()=>{window.open("https://github.com/mani-revanth","_blank")}}/>

          <img src="/linkedIn.png" style={{height:'auto',width:'10vh',cursor:'pointer'}} onClick={()=>{window.open("https://www.linkedin.com/in/mani-revanth-b8b792248","_blank")}}/>

    </div>
    </div>
  )
}


function App() {

  return (
    <div className="background" style={{overflow:'hidden',height:'100vh',width:'100hw',backgroundImage:`url(${backimg})`,backgroundColor:'rgba(0,0,0,1)'}}>
      <Menu/>
      <div style={{height:'90vh',width:'100hw',overflowY:'scroll',overflowX:'hidden'}}>
        <div style={{height:'90vh',padding:'10%',paddingTop:'12%'}}>
          <motion.div initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0,transition:{type:'spring',bounce:0.5,duration:2}}} viewport={{amount:0.1,once:true}}>
          <h3 style={{color:'white',marginLeft:'2%',fontFamily:'Monomaniac One',fontSize:'5vh'}}>Hi , im</h3></motion.div>
          <motion.div initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0,transition:{type:'spring',bounce:0.5,duration:2,delay:1,}}} viewport={{amount:0.1,once:true}}>
          <h1 style={{color:'#EB144C',fontWeight:1000,fontFamily:'Abril Fatface',marginLeft:'2%',fontSize:'7vh'}}>Mani Revanth</h1></motion.div>
          <motion.div initial={{
            opacity:0,
            y:100,
          }}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              type:'string',
              bounce:0.5,
              duration:1,
              delay:1.5,
            }
          }}
          viewport={{once:true}}
           style={{width:'100%',maxWidth:'40rem',paddingLeft:'2%',paddingTop:'1%',paddingBottom:'1%',fontSize:'4vh'}}>
          <h4 style={{color:'#F2D7D9',fontFamily:'Monomaniac One'}}>full stack web developer / competitve programmer</h4>
          </motion.div>


          <motion.div initial={{
            opacity:0,
            y:100,
          }}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              type:'string',
              bounce:0.5,
              duration:1,
              delay:2,
            }
          }} viewport={{once:true}} style={{width:'100%',maxWidth:'40rem',color:'#D8D8D8',marginLeft:'2%',fontFamily:'Monomaniac One',textAlign:'left',fontSize:'2vh'}}>
            <p>Im a highly motivated and skilled full stack developer with a passion for competitive programming, bringing a fresh perspective and strong technical abilities to the field</p>
          </motion.div>
          
          <motion.button 
          whileHover={{
            scale:1.1,
          }}

          onClick={()=>{
            window.open("mailto:ch.m.s.revanth@gmail.com","_blank");
          }}

          initial={{
            opacity:0,
            x:-50,
            paddingLeft:'6%',
            paddingRight:'6%',
          }}
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              type:'string',
              bounce:0.5,
              duration:1,
              delay:2.5,
            }
          }} viewport={{once:true}} style={{backgroundColor:'transparent',color:'#EB144C',paddingLeft:'4%',paddingRight:'4%',border:'2px solid #EB144C',padding:'0.5%',fontSize:'4vh',marginLeft:'2%',marginBottom:'2%'}}>Hire Me</motion.button>
        


          <motion.button 
          whileHover={{
            scale:1.1,
          }}


          onClick={()=>{
            window.open("https://drive.google.com/file/d/1-EaJA36e3mbYrnnYtpiVV08qDbGomoLO/view?usp=sharing","_blank");
          }}

          initial={{
            opacity:0,
            x:-50,
            paddingLeft:'6%',
            paddingRight:'6%',
          }}
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              type:'string',
              bounce:0.5,
              duration:1,
              delay:2.5,
            }
          }} viewport={{once:true}} style={{backgroundColor:'transparent',color:'#EB144C',paddingLeft:'4%',paddingRight:'4%',border:'2px solid #EB144C',padding:'0.5%',fontSize:'4vh',marginLeft:'2%',}}>My Resume</motion.button>  

        
        </div>

          <AboutMe/>

          <Skills/>

          <Certifications/>

          <Projects/>

          <Acheivements/>

          <Profiles/>

          <Contact/>

      </div>
    </div>
  );
}

export default App;
