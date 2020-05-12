
import '../css/components.css';


export const greet = (name) => {
    console.log('Creating H1 tag');

    const h1 = document.createElement('h1');
    h1.innerText = `Hello my friend ${name}`;
    document.body.append(h1);

};





