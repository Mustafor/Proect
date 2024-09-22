import './App.css';
import headerLogo from './images/logo-img.svg';
import Heroimg from './images/hero-img.png';
import Leftimg from './images/left.svg';
import trust1img from './images/trust1.png';
import trust2img from './images/trust2.png';
import trust3img from './images/trust3.png';
import trust4img from './images/trust4.png';
import flashimg from './images/flesh.svg';
import moneyimg from './images/money.svg';
import okeyimg from './images/okey.svg';
import relax from './images/relax1.svg';
import relax1 from './images/relax.svg';
import relax2 from './images/relax3.svg';
import relax3 from './images/relax4.svg';
import relax4 from './images/relaximg.png';
import whirt1 from './images/whirt1.svg';
import whirt2 from './images/whirt2.svg';
import set from './images/setimg.png';
import task1 from './images/task1.svg';
import task2 from './images/task2.svg';
import task3 from './images/task3.svg';
import task4 from './images/task4.svg';
import blog1 from './images/blog1.png';
import blog2 from './images/blog12.png';
import blog3 from './images/blog3.png';


function App() {
  return (
    <>
      <header className='site-header'>
        <div className='container'>
          <div className='header'>
            <a className='header__log-link' href='#'>
              <img className='header__logo-img' src={headerLogo} alt='header-logo' width={135} height={47}/>
            </a>
            <ul className='header__list'>
              <li className='header__item'>
                <a className='header__link' href='#'>Features</a>
              </li>
              <li className='header__item'>
                <a className='header__link' href='#'>Pricing</a>
              </li>
              <li className='header__item'>
                <a className='header__link' href='#'>Integrations</a>
              </li>
              <li className='header__item'>
                <a className='header__link' href='#'>Learn</a>
              </li>
            </ul>
            <div className='header__content'>
            <a className='header__sign' href='/'>Sign in</a>
            <button className='header__btn'>Book a demo</button>
            </div>
          </div>
        </div>
      </header>
      <main className='site-main'>
        <section className='hero-section'>
          <div className='container'>
            <div className='hero'>
              <div className='hero__content'>
                <h2 className='hero__title'>Your everyday tasks, automated.</h2>
                <p className='hero__text'>Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.</p>
                <button className='hero__btn'>Book a demo</button>
                <a className='hero__link' href='#'><span className='hero__link'>Learn more</span></a>
              </div>
              <img src={Heroimg} alt='hero img' width={452} height={422}/>
            </div>
          </div>
        </section>
        <section className='trust-section'>
          <div className='container'>
            <div className='trust'>
              <strong className='trust__strong'>Trusted by 50,000+ companies</strong>
              <div className='trust__imgs'>
                <img src={trust1img} alt='Img' width={124} height={33}/>
                <img src={trust2img} alt='Img' width={159} height={27}/>
                <img src={trust3img} alt='Img' width={148} height={33}/>
                <img src={trust4img} alt='Img' width={117} height={34}/>
              </div>
              <ul className='trust__list'>
                <li className='trust__item'>
                  <img src={flashimg} alt='IMG' width={55} height={55}/>
                  <h3 className='trust__title'>Fast. Really fast.</h3>
                  <p className='trust__text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </li>
                <li className='trust__item2'>
                  <img src={moneyimg} alt='IMG' width={55} height={55}/>
                  <h3 className='trust__title'>More bang for buck.</h3>
                  <p className='trust__text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </li>      
                <li className='trust__item3'>
                  <img src={okeyimg} alt='IMG' width={55} height={55}/>
                  <h3 className='trust__title'>Safe and secure.</h3>
                  <p className='trust__text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='relax-section'>
          <div className='container'>
            <div className='relax'>
              <p className='relax__text'>We will take care of everything,so you can get back to relaxing.</p>
              <div className='relax__content'>
                <div>
                <div className='relax__wrapper'>
                  <img src={relax} alt='Img' width={32} height={32}/>
                  <strong className='relax__strong'>Anti-loss technology</strong>
                </div>
                <div className='relax__wrapper'>
                  <img src={relax1} alt='Img' width={32} height={32}/>
                  <strong className='relax__strong'>Exchange easily</strong>
                </div>
                
                <div className='relax__wrapper'>
                  <img src={relax2} alt='Img' width={32} height={32}/>
                  <strong className='relax__strong'>Fully encrypted</strong>
                </div>
                
                <div className='relax__wrapper'>
                  <img src={relax3} alt='Img' width={32} height={32}/>
                  <strong className='relax__strong'>Plenty of options</strong>
                </div>
                </div>
                <img src={relax4} alt='Relax img' width={481} height={479}/>
              </div>
            </div>
          </div>
        </section>
        <section className='whirl-section'>
          <div className='container'>
            <div className='whirl'>
              <h3 className='whirl__title'>What's Whirl all about?</h3>
              <ul className='whirl__list'>
                <li className='whirl__item'>
                  <strong className='whirl__strong'>All on one place.</strong>
                  <p className='whirl__text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </li>
                <li className='whirl__item2'>
                  <img className='whirl__img' src={whirt1} alt='img' width={55} height={55}/>
                  <strong className='whirl__strong'>Get daily alerts.</strong>
                  <p className='whirl__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </li>
                <li className='whirl__item2'>
                  <img className='whirl__img' src={whirt2} alt='img' width={55} height={55}/>
                  <strong className='whirl__strong'>Safe and secure.</strong>
                  <p className='whirl__text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='set-section'>
          <div className='container'>
            <div className='set'>
              <img src={set} alt='set img' width={382} height={374}/>
              <div className='set__content'>
                <h3 className='set__title'>Set, forget, and then track.</h3>
                <p className='set__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <strong className='set__strong'>Understand your options</strong>
                <strong className='set__strong'>No lock-ins</strong>
                <strong className='set__strong'>You own the shares</strong>
                <button className='set__btn'>Book a Demo</button>
              </div>
            </div>
          </div>
        </section>
        <section className='task-section'>
          <div className='container'>
            <div className='task__content'>
            <h3 className='task__title'>Your tasks, automated.</h3>
            <p className='task__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <ul className='task__list'>
              <li className='task__item'>
                <img className='task__img' src={task1} alt='task 1' width={55} height={56}/>
                <strong className='task__strong'>Learn your options.</strong>
                <p className='task__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </li>
              <li className='task__item1'>
                <img className='task__img' src={task2} alt='task 1' width={55} height={55}/>
                <strong className='task__strong'>Stay informed.</strong>
                <p className='task__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloretro.</p>
              </li>     
              <li className='task__item'>
                <img className='task__img' src={task3} alt='task 1' width={59} height={44}/>
                <strong className='task__strong'>Automate it all.</strong>
                <p className='task__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum.</p>
              </li>     
              <li className='task__item1'>
                <img className='task__img' src={task4} alt='task 1' width={50} height={48}/>
                <strong className='task__strong'>Stay informed.</strong>
                <p className='task__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et consectetur.</p>
              </li>
            </ul>
          </div>
        </section>
        <section className='blog-section'>
          <div className='container'>
            <div className='blog'>
              <div className='blog__content'>
                <h2 className='blog__title'>Get smarter, with our blog.</h2>
                <button className='blog__btn'>See All Posts</button>
              </div>
              <ul className='blog__list'>
                <li className='blog__item'>
                  <img src={blog1} alt='img' width={375} height={238}/>
                  <div className='item__content'>
                  <button className='blog__item-btn'>Improvements</button>
                  <h3 className='blog__subtitle'>Automating Daily Tasks from Your Phone</h3>
                  <p className='blog__text'>Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</p>
                  <span className='blog__span'>April 24, 2022</span>
                  </div>
                </li>
                <li className='blog__item'>
                  <img src={blog2} alt='img' width={375} height={238}/>
                  <div className='item__content'>
                  <button className='blog__item-btn'>Tips & Tricks</button>
                  <h3 className='blog__subtitle'>Can You Automate Group Learning?</h3>
                  <p className='blog__text'>Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</p>
                  <span className='blog__span'>April 24, 2022</span>
                  </div>
                </li>
                  <li className='blog__item'>
                  <img src={blog3} alt='img' width={375} height={238}/>
                  <div className='item__content'>
                  <button className='blog__item-btn'>News</button>
                  <h3 className='blog__subtitle'>Our $3,000,000 B Round Investors</h3>
                  <p className='blog__text'>Eos ipsum et est quis neque cum. Quis autem est eligendi amet animi eaque. Itaque minus illo delectus vel vitae dolores minus.</p>
                  <span className='blog__span'>April 24, 2022</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='start-section'>
          <div className='container'>
            <div className='start'>
              <h2 className='start__title'>Get started with Whirl</h2>
              <p className='start__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <button className='start__btn'>Book a demo</button>
              <div className='start__content'>
                <span className='start__span'>Free 30-day trial</span>
                <span className='start__span'>No credit-card required</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
