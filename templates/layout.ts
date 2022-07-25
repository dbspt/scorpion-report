import { html, HTML } from "@dbservices/scorpion-html";
import aside from "./default/aside";
import main from "./default/main";
import scripts from "./default/scripts";
import styles from "./default/styles";

export default (json): HTML =>
  html`
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scorpion Report</title>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/dbspt/resources/main/favicon.png"
        />
        $${styles()}
      </head>
      <body>
        <div id="root">
          <div class="ollbduyylt">$${aside(json)} $${main(json)}</div>
        </div>
        <div id="modal-media-image" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
            <button
              class="uk-modal-close-outside"
              type="button"
              uk-close
            ></button>
            <img id="screenshot" />
          </div>
        </div>
        <div id="modal-error-message" uk-modal>
          <div class="uk-modal-dialog uk-modal-body">
            <button
              class="uk-modal-close-default"
              type="button"
              uk-close
            ></button>
            <h2 class="uk-modal-title">Error Message</h2>
            <pre><code id="error-message"></code></pre>
          </div>
        </div>
        $${scripts()}
      </body>
    </html>
  `.trim();
