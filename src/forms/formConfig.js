export const forms = {
  b2b: [
    {
      label: "Deemed Export",
      name: "deemed_export",
      type: "checkbox",
      required: true,
      tag: "input"
    },
    {
      label: "SEZ Supplies with payment",
      name: "sez_supplies_with_payment",
      type: "checkbox",
      required: true,
      tag: "input"
    },
    {
      label: "SEZ Supplies without payment",
      name: "sez_supplies_without_payment",
      type: "checkbox",
      required: true,
      tag: "input"
    },
    {
      label: "Supply attract reverse charge",
      name: "supply_attract_reverse_charge",
      type: "checkbox",
      required: true,
      tag: "input"
    },
    {
      label: "Intra-State Supplies attracting IGST",
      name: "intra_state_supplies_attracting_igst",
      type: "checkbox",
      required: true,
      tag: "input"
    },
    {
      label: "Supply taxed at differential percentage",
      name: "is_the_supply_eligible",
      type: "checkbox",
      required: true,
      tag: "input"
    },
    {
      label: "Recipient GSTIN/UIN",
      name: "recipient_gstin", // ✅ Fixed unique name
      type: "text",
      placeholder: "Search by recipient name as in master ",
      tag: "input",
      required: true
    },
    {
      label: "Recipient Name",
      name: "recipient_name",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    },
    {
      label: "Name as in Master",
      name: "name_as_in_master",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    },
    {
      label: "Invoice no",
      name: "invoice_name",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    },
    {
      label: "Invoice date",
      name: "invoice_date",
      type: "date",
      placeholder: "",
      tag: "input",
      required: true
    },
    {
      label: "Total invoice value",
      name: "total_invoice_value",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    },
    {
      label: "POS",
      name: "pos",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    },
    {
      label: "Supply Type",
      name: "supply_type",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    },
    {
      label: "Source",
      name: "source",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    },
    {
      label: "IRN",
      name: "irn",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    }
    ,
    {
      label: "IRN date",
      name: "irn_date",
      type: "text",
      placeholder: "",
      tag: "input",
      required: true
    }
  ],
  b2cl : [
    {
      label: "Is the supply eligible to be taxed at a differential percentage (%) of the existing rate of tax, as notified by the Goverment?",
      name: "rate_of_tax",
      type: "checkbox",
      required: true,
      tag: "input"
    } ,
    {
      label: "POS ",
      name: "pos",
      type: "select",
      required: true,
      options: ["Inter-State", "Intra-State"],
      tag: "select"
    },
    {
      label: "Invoice no.",
      name: "invoice_no",
      type: "text",
      required: true,
      tag: "input"
    },
    {
      label: "Invoice date.",
      name: "invoice_date",
      type: "date",
      required: true,
      tag: "input"
    },
    {
      label: "Supply Type",
      name: "supply_type",
      type: "text",
      placeholder : "Inter-State",
      required: true,
      tag: "input"
    },
    {
      label: "Total invoice value()",
      name: "is_the_supply_eligible",
      type: "text",
      required: true,
      tag: "input"
    }, 
    {
      label: "Item Details",
      name: "tables",
      type: "table",
      tag: "table",
      columns: [
        { label: "Rate (%)", name: "rate", type: "select", options: ["0.1%", "1%", "5%", "12%", "18%", "28%"] },
        { label: "Taxable value(₹)", name: "taxable_value", type: "text" },
        { label: "Amount Of Tax", name: "amount_of_tax", type: "heading" },
        { label: "Integrated tax(₹)", name: "integrated_tax", type: "number", parent: "Amount Of Tax" },
        { label: "Cess(₹)", name: "cess", type: "number", parent: "Amount Of Tax" }
      ]
    }
      
  ],
  b2cs : [ 
    {
      label: "POS ",
      name: "pos",
      type: "select",
      required: true,
      options: ["Inter-State", "Intra-State"],
      tag: "select"
    },
    {
      label: "Invoice value(₹)",
      name: "invoice_value",
      type: "text",
      required: true,
      tag: "input"
    },
    {
      label: "Supply Type.",
      name: "supply_type",
      type: "text",
      required: true,
      tag: "input"
    }
    ,
    {
      label: "SELECT TWO ",
      name: "pos",
      type: "select",
      required: true,
      options: ["Inter-State", "Intra-State"],
      tag: "select"
    },
    
    {
      label: "dummy",
      name: "dummy",
      type: "checkbox",
      placeholder : "Inter-State",
      required: true,
      tag: "input"
    }
    // ,
    // {
    //   label: "Total invoice value()",
    //   name: "is_the_supply_eligible",
    //   type: "text",
    //   required: true,
    //   tag: "input"
    // }, 
    // {
    //   label: "Item Details",
    //   name: "tables",
    //   type: "table",
    //   tag: "table",
    //   columns: [
    //     { label: "Rate (%)", name: "rate", type: "select", options: ["0.1%", "1%", "5%", "12%", "18%", "28%"] },
    //     { label: "Taxable value(₹)", name: "taxable_value", type: "text" },
    //     { label: "Amount Of Tax", name: "amount_of_tax", type: "heading" },
    //     { label: "Integrated tax(₹)", name: "integrated_tax", type: "number", parent: "Amount Of Tax" },
    //     { label: "Cess(₹)", name: "cess", type: "number", parent: "Amount Of Tax" }
    //   ]
    // }
      
  ],
  SixA : [
    {
      label: "Invoice no",
      name: "invoice_no",
      type: "text",
      required: true,
      tag: "input"
    },
    {
      label: "Invoice date",
      name: "invoice_date",
      type: "date",
      required: true,
      tag: "input"
    },
    {
      label: "Port Code",
      name: "port_code",
      type: "text",
      required: true,
      tag: "input"
    },
    {
      label: "Shipping Bill No./Bill of Export No",
      name: "shipping_bill_export_no",
      type: "text",
      required: true,
      tag: "input"
    },
    {
      label: "Shipping Bill Date/Bill of Export Date",
      name: "invoice_no_export_date",
      type: "text",
      required: true,
      tag: "input"
    },
    {
      label: "Total invoice value",
      name: "total_invoice_value",
      type: "text",
      required: true,
      tag: "input"
    },
    {
      label: "Supply Type",
      name: "supply_type",
      type: "text",
      placeholder : "Inter-State",
      required: true,
      tag: "input"
    }, 
    {
      label: "GST Payment",
      name: "gst_payment",
      placeholder : "With Payment Tax",
      type: "number",
      required: true,
      tag: "input"
    },
    {
      label: "Source",
      name: "source", 
      type: "text",
      required: true,
      tag: "input"
    },
    {
      label: "IRN",
      name: "irn",
      type: "date",
      required: true,
      tag: "input"
    },
    {
      label: "IRN Date",
      name: "irn",
      type: "date",
      required: true,
      tag: "input"
    },
    {
      label: "IRN Date",
      name: "irn",
      type: "date",
      required: true,
      tag: "input"
    } 
    ,
    {
      label: "Total invoice value(₹)",
      name: "is_the_supply_eligible",
      type: "text",
      required: true,
      tag: "input"
    }, 
    {
      label: "Item Details",
      name: "tables",
      type: "table",
      tag: "table",
      columns: [
        { label: "Rate (%)", name: "rate", type: "select", options: ["0.1%", "1%", "5%", "12%", "18%", "28%"] },
        { label: "Taxable value(₹)", name: "taxable_value", type: "text" },
        { label: "Amount Of Tax", name: "amount_of_tax", type: "heading" },
        { label: "Integrated tax(₹)", name: "integrated_tax", type: "number", parent: "Amount Of Tax" },
        { label: "Cess(₹)", name: "cess", type: "number", parent: "Amount Of Tax" }
      ]
    } 
  ],
 hns: {
    hns_b2b: [
      
      {
        label: "Note: ",
        name: "note",
        type: "note", 
        li: ["Please select HNS form the search result in dropdown only. Manual entry of HNS will not be avilable.", 
                  "Description can't be entered manually under description as per HNS code field but can be entered manually under Description field.",
                  "Kindly click on save button after any modification (add , edit) to save the changes."
                ],
        tag: "ol"
      },
      {
        label: "HNS",
        name: "hns",
        type: "text",
        placeholder : "Enter Product name as in Master/HNS code",
        required: true,
        tag: "input"
      },
      {
        label: "Description",
        name: "description",
        type: "text",
        required: true,
        tag: "input"
      },
      {
        label: "Product name as in My Master",
        name: "product_name_as_in_my_master",
        type: "text",
        required: true,
        tag: "input"
      },
      {
        label: "Description as in per HNS code",
        name: "description_in_per_hns_code",
        type: "text",
        required: true,
        tag: "input"
      },
      {
        label: "UQC",
        name: "uqc",
        type: "text",
        required: true,
        tag: "input"
      },
      {
        label: "Total Quantity",
        name: "total_quantity",
        type: "text",
        required: true,
        tag: "input"
      },
      {
        label: "Total taxable value(₹)",
        name: "total_taxable_value",
        type: "text", 
        tag: "input",
        required: true
      },
      {
        label: "Central Tax (₹)",
        name: "central_tax",
        type: "text",
        placeholder: "",
        tag: "input",
        required: true
      },
      {
        label: "State/UT Tax(₹)",
        name: "state_tax",
        type: "text", 
        tag: "input",
        required: true
      },
      {
        label: "Cess(₹)",
        name: "cess",
        type: "text",
        placeholder: "",
        tag: "input",
        required: true
      } 
    ],

    hns_b2c: [
      {
        label: "Recipient Name",
        name: "recipient_name",
        type: "text",
        placeholder: "",
        tag: "input",
        required: true
      },
      {
        label: "Name as in Master",
        name: "name_as_in_master",
        type: "text",
        placeholder: "",
        tag: "input",
        required: true
      },
      {
        label: "Invoice date",
        name: "invoice_date",
        type: "date",
        placeholder: "",
        tag: "input",
        required: true
      },
      {
        label: "Total invoice value",
        name: "total_invoice_value",
        type: "text",
        placeholder: "",
        tag: "input",
        required: true
      },
      {
        label: "POS",
        name: "pos",
        type: "text",
        placeholder: "",
        tag: "input",
        required: true
      },
      {
        label: "Supply Type",
        name: "supply_type",
        type: "text",
        placeholder: "",
        tag: "input",
        required: true
      },
      {
        label: "Source",
        name: "source",
        type: "text",
        placeholder: "",
        tag: "input",
        required: true
      }
    ]
  }
  
};
