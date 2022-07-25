import { html, HTML } from "@dbservices/scorpion-html";

export default (): HTML =>
  html`
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/uikit@3.15.1/dist/css/uikit.min.css"
    />
    <style type="text/css">
      :root {
        --pass: #6fe49b;
        --fail: #ff4f81;
        --skipped: #1e87f0;
        --undefined: #faa05a;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        position: relative;
        height: 100%;
        background: #f6f7fb;
      }

      *,
      button,
      input {
        border: 0;
        outline: 0;
      }

      pre {
        background-color: #000000;
        color: var(--fail);
      }

      /* CONTAINER */
      .mcmksecrin {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
      }

      /* CONTENT */
      .ollbduyylt {
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-rows: auto;
        grid-template-areas: "ASIDE MAIN";
      }

      /* ASIDE */
      .kjmootqqbi {
        grid-area: ASIDE;
        position: relative;
        background-color: #ffffff;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .xofsgekxyk {
        background: #404e67;
        height: 60px;
        padding: 0 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
      }

      .xofsgekxyk img {
        height: 32px;
      }

      .xofsgekxyk h1 {
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        color: #fff;
      }

      .uk-tab {
        flex-wrap: unset;
      }

      .uk-tab-left {
        margin: 0;
      }

      .uk-tab-left > * > a {
        border-right: 5px solid transparent;
      }

      .uk-tab > * > a {
        padding: 10px;
        text-transform: unset;
        color: #dcdcdc;
        display: grid;
        column-gap: unset;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        grid-template-areas:
          "FEATURE_NAME FEATURE_NAME"
          "FEATURE_TIME FEATURE_STATUS";
      }

      .uk-tab > .uk-active > a {
        color: #323232;
      }

      .uk-tab > .uk-active > a.failed {
        border-color: var(--fail);
      }

      .uk-tab > .uk-active > a.passed {
        border-color: var(--pass);
      }

      .uk-tab > .uk-active > a.skipped {
        border-color: var(--skipped);
      }

      .uk-tab > .uk-active > a.undefined {
        border-color: var(--undefined);
      }

      .aside_name {
        grid-area: FEATURE_NAME;
        font-weight: bold;
      }

      .aside_time {
        grid-area: FEATURE_TIME;
      }

      .aside_status {
        grid-area: FEATURE_STATUS;
        text-transform: uppercase;
        display: flex;
        justify-content: right;
      }

      .aside_status.failed {
        color: var(--fail);
      }

      .aside_status.passed {
        color: var(--pass);
      }

      .aside_status.skipped {
        color: var(--skipped);
      }

      .aside_status.undefined {
        color: var(--undefined);
      }

      /* MAIN */
      .sigvwfvcpb {
        grid-area: MAIN;
        width: 100%;
        height: 100%;
        padding: 15px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
      }

      .sigvwfvcpb ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .sigvwfvcpb ul li {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .sigvwfvcpb ul li ul li {
        border-left-width: 5px;
        border-style: solid;
        border-color: #ebebeb;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      }

      .sigvwfvcpb ul li ul li.failed {
        border-color: var(--fail);
      }

      .sigvwfvcpb ul li ul li.passed {
        border-color: var(--pass);
      }

      .sigvwfvcpb ul li ul li.skipped {
        border-color: var(--skipped);
      }

      .sigvwfvcpb ul li ul li.undefined {
        border-color: var(--undefined);
      }

      .sigvwfvcpb ul li ul li {
        display: flex;
        gap: 0;
      }

      .sigvwfvcpb ul li ul li a {
        display: flex;
        gap: 0;
      }

      .uk-accordion li {
        background-color: #fff;
        border-radius: 5px;
      }

      .uk-accordion > :nth-child(n + 2) {
        margin-top: 0;
      }

      .uk-accordion-title {
        line-height: normal;
        padding: 15px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
      }

      .scenario-title {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 15px;
      }

      .uk-accordion-title span {
        display: flex;
        align-items: center;
      }

      .scenario-status {
        background-color: #000000;
        padding: 0 12px;
        border-radius: 15px;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 100;
        color: #fff;
        display: flex;
      }

      .scenario-status.failed {
        background-color: var(--fail);
      }

      .scenario-status.passed {
        background-color: var(--pass);
      }

      .scenario-status.skipped {
        background-color: var(--skipped);
      }

      .scenario-status.undefined {
        background-color: var(--undefined);
      }

      .uk-accordion-content {
        margin: 0;
        padding: 15px;
      }

      .scenario-content {
        background-color: #000000;
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .scenario-steps {
        width: calc(100% + 20px);
        margin-left: -20px;
        display: flex;
        flex-direction: column;
      }

      .scenario-step-description {
        width: calc(100% + 10px);
        margin-left: 5px;
        margin-bottom: 5px;
        padding: 0 15px;
        color: #999;
        display: flex;
        flex-direction: column;
      }

      .scenario-step-item {
        width: calc(100% + 15px);
        padding: 0 15px;
        border-left-width: 5px;
        border-left-style: solid;
        border-left-color: #ebebeb;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #000000;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000000;
        color: #fff;
        display: grid;
        grid-template-columns: 90% 10%;
        grid-template-areas: "SCENARIO_STEP_GHERKIN SCENARIO_STEP_TIME";
      }

      .scenario-step-item:hover {
        background-color: #323232;
      }

      .scenario-step-item.failed {
        background-color: rgba(255, 79, 129, 0.5);
        border-left-color: var(--fail);
      }

      .scenario-step-item.passed {
        border-left-color: var(--pass);
      }

      .scenario-step-item.skipped {
        border-left-color: var(--skipped);
      }

      .scenario-step-item.undefined {
        background-color: rgba(250, 160, 90, 0.5);
        border-left-color: var(--undefined);
      }

      .scenario-step-item span {
        font-weight: bold;
        color: #db4437;
      }

      .scenario-step-gherkin {
        grid-area: SCENARIO_STEP_GHERKIN;
        display: flex;
        flex-direction: row;
        gap: 15px;
      }

      .scenario-step-time {
        grid-area: SCENARIO_STEP_TIME;
        display: flex;
        justify-content: right;
      }
    </style>
  `.trim();
