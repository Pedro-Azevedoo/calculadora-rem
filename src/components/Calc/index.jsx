import styles from './styles.module.scss';
import { useState } from "react"

export default function Calc(){
    const [valor, setValor] = useState(0);
    const [styleCpy, setStyleCpy] = useState(styles.dNone);
    
    
    const onChangeHandler = event => {
        setValor(event.target.value);
     };
    
    function copyToClipdoard(){
        navigator.clipboard.writeText(valor/16+"rem");
        setStyleCpy(styles.copy);

        setTimeout(() => {
            setStyleCpy(styles.dNone);

          }, 3000);
    }
    
    return(


        <>
           <div className={styles.teste}>
            <h3>Digite o valor (px)</h3>
            <input type="text" value={valor} onChange={onChangeHandler}/>

            <h1 onClick={copyToClipdoard}>{valor / 16 }rem</h1>
            <div className={styleCpy}>Copiado!</div>

           </div>
        </>
    );
}