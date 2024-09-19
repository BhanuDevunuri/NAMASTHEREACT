//Here the parent is a ReactElement object => which is understand by HTML browser.



const parent = React.createElement("div",{id:"parent"},

   [ React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Iam a heading tag 1 "),
    React.createElement("h2",{},"Iam a heading tag 2 ")]
),
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Iam a heading tag 1 "),
    React.createElement("h2",{},"Iam a heading tag 2 ")]

    )

   ]
);

console.log(parent);

// const heading = React.createElement("h1" ,{id:"heading"},"Hello React World !" );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);