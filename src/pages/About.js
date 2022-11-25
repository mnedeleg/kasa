import AboutInfo from "../data/about-data.json"
import CollapseDescription from "../components/Appartment/CollapseDescription"

const AboutPage = () => {
    return (
        <div className="about-main-page">
            <div className="about-banner"></div>
                <div className="about-collapse-all">  

                    {AboutInfo.map((info, i) =>{
                        return (
                            <div key={i} className="about-collapse" >
                                <CollapseDescription title={info.title} >
                                        <div key={i}>
                                            {info.content}
                                        </div>
                                </CollapseDescription>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
}

export default AboutPage;
