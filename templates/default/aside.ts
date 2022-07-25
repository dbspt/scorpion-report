import { html, HTML } from "@dbservices/scorpion-html";

export default (json): HTML =>
  html`
    <div class="kjmootqqbi">
      <div class="xofsgekxyk">
        <img
          src="https://raw.githubusercontent.com/dbspt/resources/main/favicon.png"
          height="40"
        />
        <h1>Scorpion Report</h1>
      </div>
      <ul
        class="uk-tab-left"
        uk-tab="connect: #component-tab; animation: uk-animation-fade"
      >
        $${json.map((feature: any, index: string | number) =>
          html`
            <li>
              <a class="${feature.status}" href="#">
                <span class="aside_name">${feature.name}</span>
                <span class="aside_time">${feature.time}</span>
                <span class="aside_status ${feature.status}">
                  ${feature.status}
                </span>
              </a>
            </li>
          `.trim()
        )}
      </ul>
    </div>
  `.trim();
