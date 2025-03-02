/* eslint-env browser */
(function () {
  try {
    const onMessage = ({ data }) => {
      if (!data.wappalyzer || !data.wappalyzer.technologies) {
        return;
      }
      //MATIKAN KLIK KANAN
      document.oncontextmenu = () => {
        alert(
          "MAU APA HAH? MAU CRACK? MODAL MIKIR LAH KONTOL, JANGAN KEK PEPEK LAH KAU. \n KENAPA? GA SENANG? SEPONG NIH KONTOL,\n PLER KAU BENGKAK ANJING, MATI AJA LU BABI."
        );
        return false;
      };
      document.onkeydown = (e) => {
        //MATIKAN CTRL + U DAN F12
        if (e.key == "F12") {
          alert(
            "MAU APA HAH? MAU CRACK? MODAL MIKIR LAH KONTOL, JANGAN KEK PEPEK LAH KAU. \n KENAPA? GA SENANG? SEPONG NIH KONTOL,\n PLER KAU BENGKAK ANJING, MATI AJA LU BABI."
          );
          return false;
        }
        if (e.ctrlKey && e.key == "u") {
          alert(
            "MAU APA HAH? MAU CRACK? MODAL MIKIR LAH KONTOL, JANGAN KEK PEPEK LAH KAU. \n KENAPA? GA SENANG? SEPONG NIH KONTOL,\n PLER KAU BENGKAK ANJING, MATI AJA LU BABI."
          );
          return false;
        }
      };
      const { technologies } = data.wappalyzer;

      postMessage({
        wappalyzer: {
          js: technologies.reduce((technologies, { name, chains }) => {
            chains.forEach((chain, index) => {
              const value = chain
                .split(".")
                .reduce(
                  (value, method) =>
                    value &&
                    value instanceof Object &&
                    Object.prototype.hasOwnProperty.call(value, method)
                      ? value[method]
                      : "__UNDEFINED__",
                  window
                );

              if (value !== "__UNDEFINED__") {
                technologies.push({
                  name,
                  chain,
                  value:
                    typeof value === "string" || typeof value === "number"
                      ? value
                      : !!value,
                });
              }
            });

            return technologies;
          }, []),
        },
      });
    };

    addEventListener("message", onMessage, { once: true });
  } catch (e) {
    // Fail quietly
  }
})();
