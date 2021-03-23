/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Index() {
  return (
    <Layout title="UI-Kit for ADA development">
      <div>
        <div className="splash">
          <div className="content">
            <h1>
              UI-Kit for ADA development <span className="wip-tag">PRE-ALPHA</span>
            </h1>
            <h2>
              ADA Design is a React UI kit for building incredible products on the web, providing an immersive
              experience for developers that aims to develop a fully accessible application.
            </h2>
            <div>
              <div className="landing-btn-container">
                <a className="landing-btn primary" target="_top" href={useBaseUrl('docs/getting-started')}>
                  Get Started
                </a>

                <a className="landing-btn primary" href={useBaseUrl('docs/components/a11y-context-provider')}>
                  Browser Components
                </a>
              </div>
            </div>

            <div className="slideshow">
              {/* <img src={useBaseUrl('img/logs.png')} className="splashScreen" />
              <img src={useBaseUrl('img/layout.png')} className="splashScreen" />
              <img src={useBaseUrl('img/network.png')} className="splashScreen" /> */}
              <img src={useBaseUrl('img/react-regular.png')} className="splashScreen" />
              <img src={useBaseUrl('img/react-preview.png')} className="splashScreen" />
              <img src={useBaseUrl('img/react-report.png')} className="splashScreen" />
              <img src={useBaseUrl('img/react-success.png')} className="splashScreen" />
            </div>
            <div className="shadow" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
