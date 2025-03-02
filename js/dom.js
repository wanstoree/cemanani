/* eslint-env browser */
        //MATIKAN KLIK KANAN
 //MATIKAN KLIK KANAN
 document.oncontextmenu = () => {
  alert("MAU APA HAH? MAU CRACK? MODAL MIKIR LAH KONTOL, JANGAN KEK PEPEK LAH KAU. \n KENAPA? GA SENANG? SEPONG NIH KONTOL,\n PLER KAU BENGKAK ANJING, MATI AJA LU BABI.")
  return false
}
document.onkeydown = e => {
  //MATIKAN CTRL + U DAN F12
if(e.key == "F12") {
  alert("MAU APA HAH? MAU CRACK? MODAL MIKIR LAH KONTOL, JANGAN KEK PEPEK LAH KAU. \n KENAPA? GA SENANG? SEPONG NIH KONTOL,\n PLER KAU BENGKAK ANJING, MATI AJA LU BABI.")
  return false
}
if(e.ctrlKey && e.key == "u" ) {
  alert("MAU APA HAH? MAU CRACK? MODAL MIKIR LAH KONTOL, JANGAN KEK PEPEK LAH KAU. \n KENAPA? GA SENANG? SEPONG NIH KONTOL,\n PLER KAU BENGKAK ANJING, MATI AJA LU BABI.")
  return false
}
}
;(function () {
    try {
      const onMessage = ({ data }) => {
        if (!data.wappalyzer || !data.wappalyzer.technologies) {
          return
        }
  
        const { technologies } = data.wappalyzer
  
        const toScalar = (value) =>
          typeof value === 'string' || typeof value === 'number' ? value : !!value
  
        removeEventListener('message', onMessage)
  
        postMessage({
          wappalyzer: {
            dom: technologies.reduce((technologies, { name, dom }) => {
              try {
                Object.keys(dom).forEach((selector) => {
                  let nodes = []
  
                  try {
                    nodes = document.querySelectorAll(selector)
                  } catch (error) {
                    // Continue
                  }
  
                  if (!nodes.length) {
                    return
                  }
  
                  nodes.forEach((node) => {
                    dom[selector].forEach(({ properties }) => {
                      if (properties) {
                        Object.keys(properties).forEach((property) => {
                          if (
                            Object.prototype.hasOwnProperty.call(node, property)
                          ) {
                            const value = node[property]
  
                            if (typeof value !== 'undefined') {
                              technologies.push({
                                name,
                                selector,
                                property,
                                value: toScalar(value),
                              })
                            }
                          }
                        })
                      }
                    })
                  })
                })
              } catch (error) {
                // Fail quietly
              }
  
              return technologies
            }, []),
          },
        })
      }
  
      addEventListener('message', onMessage)
    } catch (e) {
      // Fail quietly
    }
  })()
  