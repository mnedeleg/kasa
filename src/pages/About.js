import About from "../components/About/About"
import AboutInfo from "../data/about-data.json"
import CollapseDescription from "../components/Appartment/CollapseDescription"

const AboutPage = () => {

   
    return (
        <div>
            <div className="banner"></div>
                <div className="all-collapse-about">
                    
                    <div className="collapse-about" >
                        <CollapseDescription title="Fiabilité" >
                            <div>blalala</div>
                        </CollapseDescription>
                    </div>
                
                    <div className="collapse-about" >
                        <CollapseDescription title="Respect">
                            <div>blalala</div>
                        </CollapseDescription>
                    </div>

                    <div className="collapse-about" >
                        <CollapseDescription title="Service">
                            <div>blalala</div>
                        </CollapseDescription>
                    </div>

                    <div className="collapse-about" >
                        <CollapseDescription title="Sécurité">
                            <div>blalala</div>
                        </CollapseDescription>
                    </div>
            </div>
        </div>
    );
}

export default AboutPage;
