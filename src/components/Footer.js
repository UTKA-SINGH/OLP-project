import '../styles/NotRNavbarFooter.css';
import { Link } from "react-router-dom";
export function Footer () {
    return (
        <div className="footer">
            <div className="logo">
            <Link to = "/" className='logo_link'>Learner's</Link></div>
            <div className="owner">
            <h3>Copyright@ Siddharth Agrawal</h3>
            <h3>Copyright@ Utkarsh Singh</h3>
            <h3>Copyright@ Zubair Khan</h3>
            </div>
        </div>
    )
}