import UseTheme from "../contexts/theme"

export default function ThemeBtn(){
    // alert("ThemeBtn Rendered");
    const {themeMode, lightTheme, darkTheme} = UseTheme()
    console.log("Theme:", themeMode);
    const onChangeBtn = (e) => {
        console.log("Checked:", e.target.checked);
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }
    }

    return(
        <label>
            <input 
            type="checkbox"
            
            className="px-4 py-2 rounded-lg cursor-pointer transition hover: scale-105"
            onChange={onChangeBtn}
            checked={themeMode==="dark"}
            />
        </label>
    )
}