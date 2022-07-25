import { html, HTML } from "@dbservices/scorpion-html";
import * as CryptoJS from "crypto-js";

export default (json): HTML =>
  html`
    <div class="sigvwfvcpb">
      <ul id="component-tab" class="uk-switcher">
        $${json.map((feature: any, indexA: string | number) =>
          html`
            <li>
              <ul uk-accordion="multiple: true">
                <li class="uk-open">
                  <a class="uk-accordion-title" href="#">${feature.name}</a>
                  <div class="uk-accordion-content">
                    <p>${feature.description}</p>
                  </div>
                </li>
              </ul>
              <ul uk-accordion="multiple: true">
                $${feature.scenarios.map(
                  (scenario: any, indexB: string | number) =>
                    html`
                      <li class="${scenario.status}">
                        <a class="uk-accordion-title" href="#">
                          <div class="scenario-title">
                            <span class="scenario-status ${scenario.status}">
                              ${scenario.status}
                            </span>
                            <span>${scenario.name}</span>
                          </div>
                        </a>
                        <div class="uk-accordion-content scenario-content">
                          <div class="scenario-steps">
                            <div class="scenario-step-description">
                              ${scenario.description}
                            </div>
                            $${scenario.steps.map(
                              (step: any, indexC: string | number) =>
                                html`
                                  <div
                                    class="scenario-step-item ${step.status}"
                                  >
                                    <div class="scenario-step-gherkin">
                                      <div>
                                        <span>${step.keyword}</span>
                                        ${step.name}
                                        $${step.embeddings != undefined
                                          ? `<a data-img="${step.embeddings}" 
                                          href="#modal-media-image" uk-toggle>+ Screenshot</a>`
                                          : ""}
                                        $${step.error_message != undefined
                                          ? `<a data-err="${CryptoJS.AES.encrypt(step.error_message, "scorpion")}" 
                                          href="#modal-error-message" uk-toggle>+ Error Message</a>`
                                          : ""}
                                      </div>
                                    </div>
                                    <div class="scenario-step-time">
                                      ${step.duration}
                                    </div>
                                  </div>
                                `.trim()
                            )}
                          </div>
                        </div>
                      </li>
                    `.trim()
                )}
              </ul>
            </li>
          `.trim()
        )}
      </ul>
    </div>
  `.trim();
