import { Link, useLocation } from "react-router-dom"
import { accountSidebar, mainSidebar } from "../helpers"

export const Sidebar = () => {

    const { pathname } = useLocation();

    const active = mainSidebar.findIndex( e => e.path === pathname );

    return (
        <div className="sidebar">
            <div className="sidebar__main">
                {
                    mainSidebar.map((e, i) => (
                        <Link to={e.path} key={ i } className={`sidebar__main__content ${i === active ? 'active' : ''}`}>
                            <img className="sidebar__main__content__img" src={e.icon} />
                            <p className="sidebar__main__content__text">{e.text}</p>
                        </Link>
                    ))
                }
            </div>
            <div className="sidebar__account">
                <p className="sidebar__account__title">Account</p>
                {
                    accountSidebar.map((item, i) => (
                        <div className="sidebar__account__content" key={ i }>
                            <img className="sidebar__account__content__img" src={item.icon}/>
                            <p className="sidebar__account__content__text" >{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}