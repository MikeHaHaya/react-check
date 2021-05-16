import React, {FC} from "react";

interface Props {
    color?: string;
    text?: string;
}

// Some combination of css here, in a real object, we will open another css file to point on the html file
const Button: FC<Props> = ({color, text}) => {

    return (
        <div>
            <button className="btn" style= {{backgroundColor: color}} >
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: "steelblue",
    text: "INSERT TEXT HERE",
}

export default Button;