import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import IconWithText from '../components/HomepageFeatures/home_components';
import Android from '../../static/img/android.svg'
import Sqrt from '../../static/img/square-root.svg'
import Hammer from '../../static/img/hammer.svg'
import Scholar from '../../static/img/scholar.svg'


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div>
          <img id='profile-picture' src={require("@site/static/img/fixed-portrait.jpeg").default} alt="profile-picture" style={{borderRadius: "50%", height: "225px", width: "225px"}}/>
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader/>
      <div>
      <Heading as="h1" style={{textAlign: "center", margin: "16px", fontSize: "52px", color: "var(--ifm-color-primary)"}}>
          Skills
      </Heading>
      </div>
      <div style={{display: "flex", flexWrap: "nowrap", overflowX: "auto", justifyContent: "center", margin: "16px"}}>
        <IconWithText 
        icon={ <Android width={250} height={215} fill='var(--ifm-color-primary)'/> }
        headerText="Android" 
        bodyText="Multiple years of enterprise app development experience."
        />
      <IconWithText 
        icon={ <Sqrt width={250} height={215} fill="var(--ifm-color-primary)"/> }
        headerText="Algorithms" 
        bodyText="Expert in algorithms design and problem solving."
        />
      <IconWithText 
        icon={ <Scholar width={250} height={215} fill="var(--ifm-color-primary)"/> }
        headerText="Education" 
        bodyText="Achieved a BS in Computer Science with highest honors."
        />
      <IconWithText 
        icon={ <Hammer width={250} height={215} fill="var(--ifm-color-primary)"/> }
        headerText="CI/CD" 
        bodyText="Experienced in cloud-based CI/CD build pipelines."
        />
      </div>
    </Layout>
  );
}
