import cover from "../images/LOG_cover1.png";

const Footer = () => {
    return (
        <div className="footer">
            
                <div className="footer-cover">
                    <div className="footer-cover-image">
                        <img src={cover} alt="Album cover" />
                    </div>
                    <div className="footer-cover-info">
                        <h4>Laid to Rest</h4>
                        <p>Lamb of god</p>
                    </div>
                </div>
                <div className="footer-controls"></div>

            <div className="footer-progress">
                <div className="footer-progress-bar"></div>
            </div>
        </div>
    );
}

export default Footer;