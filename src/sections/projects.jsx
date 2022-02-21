import React from 'react';
import { Image, Button } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';

import bathroom1 from '../assets/img/portfolio/bathroom4-before1.jpg';
import bathroom2 from '../assets/img/portfolio/bathroom4-before2.jpg';
import bathroom3 from '../assets/img/portfolio/bathroom4-before3.jpg';
import bathroom4 from '../assets/img/portfolio/bathroom4-after1.jpg';
import bathroom5 from '../assets/img/portfolio/bathroom4-after2.jpg';
import bathroom6 from '../assets/img/portfolio/bathroom4-after3.jpg';
import bathroom7 from '../assets/img/portfolio/bathroom4-after4.jpg';
import dst1 from '../assets/img/portfolio/downstairs-toilet-before.jpg';
import dst2 from '../assets/img/portfolio/downstairs-toilet-prior.jpg';
import dst3 from '../assets/img/portfolio/downstairs-toilet-build1.jpg';
import dst4 from '../assets/img/portfolio/downstairs-toilet-plumbing.jpg';
import dst5 from '../assets/img/portfolio/downstairs-toilet-done1.jpg';
import dst6 from '../assets/img/portfolio/downstairs-toilet-done2.jpg';
import kitchen1 from '../assets/img/portfolio/kitchen-before.jpg';
import kitchen2 from '../assets/img/portfolio/kitchen-after.jpg';
import bathroom8 from '../assets/img/portfolio/bathroom-before.jpg';
import bathroom9 from '../assets/img/portfolio/bathroom-after.jpg';
import showerroom1 from '../assets/img/portfolio/bathroom2-before.jpg';
import showerroom2 from '../assets/img/portfolio/bathroom2-after.jpg';
import showerroom3 from '../assets/img/portfolio/bathroom5-before1.jpg';
import showerroom4 from '../assets/img/portfolio/bathroom5-after1.jpg';
import showerImg from '../assets/img/portfolio/shower.jpg';
import bathroomImg from '../assets/img/portfolio/bathroom.jpg';
import flatImg from '../assets/img/portfolio/flat.jpg';
import maggie1Img from '../assets/img/portfolio/1_maggie_after.jpg';
import deb1Img from '../assets/img/portfolio/2_after_deb.jpg';
const images = [showerImg, bathroomImg, flatImg, maggie1Img, deb1Img];

const projectData = [
  {
    title: 'Full Bathroom',
    intro: 'One of our larger projects, utilising our extended trade contacts',
    titleImg: bathroom7,
    images: [
      {
        src: bathroom1,
        altText: 'Slide 1',
      },
      {
        src: bathroom2,
        altText: 'Slide 2',
      },
      {
        src: bathroom3,
        altText: 'Slide 3',
      },
      {
        src: bathroom4,
        altText: 'Slide 4',
      },
      {
        src: bathroom5,
        altText: 'Slide 5',
      },
      {
        src: bathroom6,
        altText: 'Slide 6',
      },
      {
        src: bathroom7,
        altText: 'Slide 7',
      },
    ],
  },
  {
    title: 'Downstairs toilet',
    intro: 'From scratch build and installation of a downstairs toilet',
    titleImg: dst5,
    images: [
      {
        src: dst1,
        altText: 'Slide 1',
      },
      {
        src: dst2,
        altText: 'Slide 2',
      },
      {
        src: dst3,
        altText: 'Slide 3',
      },
      {
        src: dst4,
        altText: 'Slide 4',
      },
      {
        src: dst5,
        altText: 'Slide 5',
      },
      {
        src: dst6,
        altText: 'Slide 6',
      },
    ],
  },
  {
    title: 'Kitchen refit',
    intro:
      'We undertook the transformation of a kitchen for one of our clients.',
    titleImg: kitchen2,
    images: [
      {
        src: kitchen1,
        altText: 'Kitchen before',
      },
      {
        src: kitchen2,
        altText: 'Kitchen after',
      },
    ],
  },
  {
    title: 'Full Bathroom',
    intro: 'Another full bathroom modernisation project',
    titleImg: bathroom9,
    images: [
      {
        src: bathroom8,
        altText: 'Slide 1',
      },
      {
        src: bathroom9,
        altText: 'Slide 2',
      },
    ],
  },
  {
    title: 'Shower room',
    intro: 'A full refit of a small shower room with toilet',
    titleImg: showerroom2,
    images: [
      {
        src: showerroom1,
        altText: 'Slide 1',
      },
      {
        src: showerroom2,
        altText: 'Slide 2',
      },
    ],
  },
  {
    title: 'Shower room',
    intro: 'A full strip out and modernisation of a small bathroom.',
    titleImg: showerroom4,
    images: [
      {
        src: showerroom3,
        altText: 'Slide 1',
      },
      {
        src: showerroom4,
        altText: 'Slide 2',
      },
    ],
  },
];

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { project, photoIndex, isOpen } = this.state;
    return (
      <div className="container" id="portfolio" name="portfolio">
        <br />
        <div className="row">
          <br />
          <h1 className="centered">SOME OF OUR PROJECTS</h1>
          <hr />
          <br />
          <br />
        </div>
        <div className="container">
          <div className="row">
            {projectData.map((project, index) => {
              return (
                <div className="col-md-4 centered project" key={index}>
                  <br />
                  <br />
                  <Image
                    src={project.titleImg}
                    alt=""
                    circle
                    height="200px"
                    width="200px"
                  />
                  <h2>{project.title}</h2>
                  <p>{project.intro}</p>
                  <Button
                    bsStyle="primary"
                    onClick={() =>
                      this.setState({ project: project, isOpen: true })
                    }
                  >
                    See more
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col">
              <p>
                <br />
                <br />
                <br />
                <br />
                You can see more pictures of our latest projects in our
                Instagram page{' '}
                <a href="https://www.instagram.com/audebathrooms/">here</a>
              </p>
            </div>
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={project.images[photoIndex].src}
              nextSrc={
                project.images[(photoIndex + 1) % project.images.length].src
              }
              prevSrc={
                project.images[
                  (photoIndex + project.images.length - 1) %
                    project.images.length
                ].src
              }
              onCloseRequest={() =>
                this.setState({ isOpen: false, photoIndex: 0 })
              }
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + project.images.length - 1) %
                    project.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % project.images.length,
                })
              }
            />
          )}
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Projects;
