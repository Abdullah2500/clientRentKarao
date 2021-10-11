import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import '../assets/contentui.css';
const BgElement = Element.BgElement;

const AppHero = () => {
    return (
        <div className="banner">
            <BannerAnim prefixCls="banner-user" autoPlay>
                <Element
                    prefixCls="banner-user-elem"
                    followParallax={{
                        delay: 1000,
                        data: [
                            { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
                            { id: 'title', value: 80, type: 'x' },
                            { id: 'content', value: -30, type: 'x' },
                        ],
                    }}
                    key="0"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }} id="title">
                    Welcome ! Explore Places with Us
      </TweenOne>
                    <TweenOne className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from' }} id="content">
                        An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne.
      </TweenOne>
                </Element>
                <Element
                    prefixCls="banner-user-elem"
                    key="1"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }} id="title">
                        Search Option to Book Place of Your Choice !
      </TweenOne>
                    <TweenOne className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }} id="content">
                        An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne.
    </TweenOne>
                </Element>
                <Element
                    prefixCls="banner-user-elem"
                    key="3"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            backgroundImage: 'url(https://images.pexels.com/photos/34153/pexels-photo.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }} id="title">
                        Web and mobile payment built for developers
      </TweenOne>
                    <TweenOne className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }} id="content">
                        An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne.
    </TweenOne>
                </Element>

            </BannerAnim>
            </div>
            );
        
}

export default AppHero;