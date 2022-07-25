import { html, HTML } from "@dbservices/scorpion-html";

export default (): HTML =>
  html`
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.1/dist/js/uikit.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <script type="text/javascript">
      $(function () {
        $(document).on("click", "[data-img]", function (e) {
          e.preventDefault();
          $("#screenshot").attr("src", $(this).data("img"));
        });
        $(document).on("click", "[data-err]", function (e) {
          e.preventDefault();
          let bytes = CryptoJS.AES.decrypt($(this).data("err"), "scorpion");
          $("#error-message").html(bytes.toString(CryptoJS.enc.Utf8));
        });
      });
    </script>
  `.trim();
