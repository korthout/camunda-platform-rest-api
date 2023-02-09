import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Started Quickly',
    Svg: require('@site/static/img/time-speed_orange.svg').default,
    description: (
      <>
        Camunda Platform REST API was designed to be easily installed,
        to get you connected to <a href="https://camunda.com/platform/">Camunda Platform 8</a> quickly.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/API_orange.svg').default,
    description: (
      <>
        <span>Thanks to a consistent API design and an </span>
        <a href="https://www.openapis.org/">OpenAPI</a>
        <span> specification, you can focus on interacting with Camunda Platform 8.</span>
      </>
    ),
  },
  {
    title: 'Community Driven',
    Svg: require('@site/static/img/people_orange.svg').default,
    description: (
      <>
        <span>This project is community maintained. We welcome </span>
        <a href="https://github.com/korthout/camunda-platform-rest-api/blob/main/CONTRIBUTING.md">contributions</a>
        <span> for feature requests and bug reports, as well as for docs and code changes.</span>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
