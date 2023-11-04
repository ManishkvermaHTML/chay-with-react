console.log("connected");
function customRender(reactElement,mainContainer){

   /*
   customRender v1.0
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href",reactElement.props.href);
    domElement.setAttribute("target",reactElement.props.target);
    mainContainer.appendChild(domElement);
    */

    
//    customRender v2.0
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;
   for (const prop in reactElement.props) {
        if( prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
   }
   mainContainer.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "click me to go website google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer)
