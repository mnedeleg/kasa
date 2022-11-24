import AboutInfo from "../data/about-data.json"
import CollapseDescription from "../components/Appartment/CollapseDescription"

const AboutPage = () => {

    return (
        <div className="about-main-page">
            <div className="about-banner"></div>
                <div className="about-collapse-all">  

                    <div className="about-collapse" >
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
                
                    <div className="about-collapse" >
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

                    <div className="about-collapse" >
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

                    <div className="about-collapse" >
                        <CollapseDescription title="Sécurité">
                            {AboutInfo.map(info =>{
                                return (
                                    <div>
                                        {info.sécurité}
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
