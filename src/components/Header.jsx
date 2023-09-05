

export const Header = ({ text, name }) => {
    return (
        <div className="header">
            <h1 className="header__text">{ text }</h1>
            <div className="header__profile">
                <p className="header__profile__name">{ name }</p>
                <div className="header__profile__img"></div>
            </div>
        </div>
    )
}
