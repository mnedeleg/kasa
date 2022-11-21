import About from "../components/About/About"
import AboutInfo from "../data/about-data.json"
import CollapseDescription from "../components/Appartment/CollapseDescription"

const AboutPage = () => {

   
    return (
        <div className="about">
            <div className="banner-about"></div>
                <div className="all-collapse-about">
                    
                    <div className="collapse-about" >
                        <CollapseDescription title="Fiabilité" >
                           {AboutInfo.map(info =>{
                               return (
                                   <div>
                                       {info.fiabilité}
                                   </div>
                               )
                           })}
                        </CollapseDescription>
                    </div>
                
                    <div className="collapse-about" >
                        <CollapseDescription title="Bienveillance">
                            {AboutInfo.map(info =>{
                                return (
                                    <div>
                                        {info.bienveillance}
                                    </div>
                                )
                            })}  
                        </CollapseDescription>
                    </div>

                    <div className="collapse-about" >
                        <CollapseDescription title="Service">
                            {AboutInfo.map(info =>{
                                return (
                                    <div>
                                        {info.service}
                                    </div>
                                )
                            })}
                        </CollapseDescription>
                    </div>

                    <div className="collapse-about" >
                        <CollapseDescription title="Sécurité">
                            {AboutInfo.map(info =>{
                                return (
                                    <div>
                                        {info.secu}
                                    </div>
                                )
                            })}
                        </CollapseDescription>
                    </div>
            </div>
        </div>
    );
}

export default AboutPage;
