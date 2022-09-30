import styles from './styles.module.scss';
import { useState } from "react"

export default function Calc(){
    const [valor, setValor] = useState(0);
    
    
    const onChangeHandler = event => {
        setValor(event.target.value);
     };

    
    return(


        <>
           <div className={styles.teste}>
            <h3>Digite o valor (px)</h3>
            <input type="text" value={valor} onChange={onChangeHandler}/>

            <h1 onClick={() => {navigator.clipboard.writeText(valor/16+"rem")}}>{valor / 16 }rem</h1>

           </div>
        </>
    );
}