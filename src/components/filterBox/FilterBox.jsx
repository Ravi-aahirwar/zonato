import css from './FilterBox.module.css';

let FilterBox = ({ leftIcon, text1, text2, text3, text4, filterClicked,handleFilterClicked }) => {  
    return <div className={css.outerDiv}>
        {leftIcon ? <div className={css.leftIconBox} >
            {
                leftIcon ?
                    <img className={css.leftIcon} src={leftIcon} alt="icon" /> : ""
            }
        </div> : null}
        <div className={css.text}>{text1}</div>
        <div className={css.text}>{text2}</div>
        <div className={css.text}>{text3}</div>
        <div className={css.text}>{text4}</div>
    </div>
}

export default FilterBox;
