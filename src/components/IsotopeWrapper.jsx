import React, { Component } from "react";
//import Grid from '@material-ui/core/Grid';

import IsotopeHandler from "./IsotopeHandler";
import IsotopePopClickEl from "./IsotopePopClickEl";

import "../css/IsotopeWrapper.css";

class IsotopeWrapper extends Component {
 

  render() {
    let resultsList = [
      {
        label: "Accountants",
        image:
          "https://c8.alamy.com/comp/2BF89WX/accountants-working-in-office-closeup-2BF89WX.jpg"
      },
      {
        label: "Business Energy",
        image:
          "https://previews.123rf.com/images/zstockphotos/zstockphotos1308/zstockphotos130800005/21361828-young-technician-checking-solar-panels-on-factory-roof.jpg"
      },
      {
        label: "CCTV and Security",
        image:
          "https://www.caughtoncamera.net//wp-content/uploads/2017/05/iStock-482112104-1024x683.jpg"
      },
      {
        label: "Copiers and Printers",
        image:
          "https://www.toner-tech.com/uploads/6/2/1/0/62106799/konica-minolta-bizhub-c754e-colour-copier-touch-panel-and-keypad_42_orig.jpg"
      },
      {
        label: "Website Designers",
        image:
          "https://websitesareus.co.uk/blog/wp-content/uploads/2020/07/Web-Design.jpg"
      },
      {
        label: "Business Mobile",
        image:
          "https://www.vmcdn.ca/f/files/kamloopsmatters/images/contributed-photos/phone-woman.jpg"
      },
      {
        label: "Digital Marketing",
        image:
          "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1554213733000/photosp/74375d8f-cbb8-445c-b3fe-33a77f0b6498/stock-photo-looking-mobile-phone-mobile-search-job-online-jobs-hire-mobile-device-74375d8f-cbb8-445c-b3fe-33a77f0b6498.jpg"
      },
      {
        label: "SEO Specialists",
        image:
          "https://st2.depositphotos.com/3591429/10966/i/450/depositphotos_109668090-stock-photo-businesswoman-working-on-computer-with.jpg"
      },
      {
        label: "Payroll providers",
        image:
          "https://media.gettyimages.com/photos/stock-charts-on-apple-ipad-picture-id458126185"
      },
      {
        label: "Telemarketing",
        image:
          "https://thumbs.dreamstime.com/b/telemarketing-operator-working-office-talking-other-workers-background-97060428.jpg"
      },
      {
        label: "Solicitors",
        image:
          "https://thumbs.dreamstime.com/z/close-up-solicitor-holding-pen-ready-signing-contract-client-close-up-solicitor-lawyer-real-estate-agent-holding-pen-ready-170490761.jpg"
      },
      {
        label: "Payment Services",
        image:
          "https://static4.depositphotos.com/1000944/331/i/450/depositphotos_3311391-stock-photo-credit-cards.jpg"
      }
    ];

    let items = [
      {
        entity: <IsotopePopClickEl item={resultsList[0]} />,
        //"entity": "<p>Mercury</p>",
        gridHeight: 300,
        gridWidth: 600,
        attributes: {
          name: "Accountants",
          category: "finance",
          weight: "122",
          symbol: "Hg",
          number: 12,
          isgas: false
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[1]} />,
        //"entity": "<p>Tellurium</p>",
        gridHeight: 300,
        gridWidth: 600,
        attributes: {
          name: "Business Energy",
          category: "energy",
          weight: "12",
          symbol: "Te",
          number: 232,
          isgas: false
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[2]} />,
        //"entity": "<p>Bismuth</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "CCTV and Security",
          category: "electronics",
          weight: "2200.59",
          symbol: "Bi",
          number: 1666,
          isgas: false
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[3]} />,
        //"entity": "<p>Cadmium</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "Copiers and Printers",
          category: "electronics",
          weight: "1200",
          symbol: "Cd",
          number: 454,
          isgas: false
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[4]} />,
        //"entity": "<p>Bosim</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "Website Designers",
          category: "it",
          weight: "100",
          symbol: "Gs",
          number: 454,
          isgas: true
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[5]} />,
        //"entity": "<p>Xosim</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "Business Mobile",
          category: "it",
          weight: "100",
          symbol: "xs",
          number: 44,
          isgas: true
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[6]} />,
        //"entity": "<p>Xosim</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "Digital Marketing",
          category: "it",
          weight: "100",
          symbol: "xs",
          number: 44,
          isgas: true
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[7]} />,
        //"entity": "<p>Xosim</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "SEO Specialists",
          category: "it",
          weight: "100",
          symbol: "xs",
          number: 44,
          isgas: true
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[8]} />,
        //"entity": "<p>Xosim</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "Payroll providers",
          category: "finance",
          weight: "100",
          symbol: "xs",
          number: 44,
          isgas: true
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[9]} />,
        //"entity": "<p>Xosim</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "Telemarketing",
          category: "marketing",
          weight: "100",
          symbol: "xs",
          number: 44,
          isgas: true
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[10]} />,
        //"entity": "<p>Xosim</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "Solicitors",
          category: "finance",
          weight: "110",
          symbol: "xs",
          number: 44,
          isgas: true
        }
      },
      {
        entity: <IsotopePopClickEl item={resultsList[11]} />,
        //"entity": "<p>Xosim</p>",
        gridHeight: 100,
        gridWidth: 100,
        attributes: {
          name: "Payment Services",
          category: "finance",
          weight: "125",
          symbol: "xs",
          number: 44,
          isgas: true
        }
      }
    ];

    let isotopeForm = {
      initialIsotopeFormValues: {
        sorting: "category"
      },
      fieldsIsotopeForm: [
        {
          type: "buttons",
          label: "Filtering",
          name: ["filtering"],
          options: [
            {
              label: "show all",
              value: "showAll|*|*" //rule/field/value
            } /*,{
                  "label": "number > 50",
                  "value": "greaterThan|number|50",//rule/field/value 
                }*/,
            {
              label: "Finance",
              value: "matches|category|finance" //rule/field/value
            },
            {
              label: "Energy",
              value: "matches|category|energy" //rule/field/value
            },
            {
              label: "Electronics",
              value: "matches|category|electronics" //rule/field/value
            },
            {
              label: "I.T.",
              value: "matches|category|it" //rule/field/value
            },
            {
              label: "Marketing",
              value: "matches|category|marketing" //rule/field/value
            },
            {
              label: "finance or energy",
              value: [
                "matches|category|finance", //rule/field/value
                "matches|category|energy" //rule/field/value
              ],
              type: "OR"
            },
            {
              label: "finance or energy",
              value: [
                "matches|category|finance", //rule/field/value
                "matches|category|energy" //rule/field/value
              ],
              type: "OR"
            },
            {
              label: "finance with weight > 120",
              value: [
                "matches|category|finance", //rule/field/value
                "greaterThan|weight|120" //rule/field/value
              ]
            }
          ]
          //"validate": ["required"],
        },
        {
          type: "buttons",
          label: "Sorting",
          name: ["sorting"],
          options: [
            {
              label: "Original Order",
              value: "original-order"
            },
            {
              label: "Name",
              value: "name"
            },
            {
              label: "Category",
              value: "category"
            }
          ]
          //"validate": ["required"],
        }
      ],
      buttonsIsotopeForm: [
        /*{
              "label": "Submit3",
              "variant": "contained",
              "color": "primary",
              "type": "submit",
              "disabled": ["submitting"],
              "onClick" : null
            }*/
      ]
    };

    return (
      <div className="business-services-block">
        <h2>business services</h2>

        <div className="business-items-wrapper">
          <IsotopeHandler items={items} isotopeForm={isotopeForm} />
        </div>
      </div>
    );
  }
}

export default IsotopeWrapper;
