import Button from "./Button";

// How components can help us
const Header = () => {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color="green" text="OK SORRY"/>
            <Button color="blue" text="JOKE'S ON YOU MOTHERFUCKER NO ONE LIKES YOU"/>
            <Button color="red" text="WOW"/>
            <Button/>
        </header>
    );
}

export default Header;