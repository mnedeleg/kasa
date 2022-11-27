import AboutInfo from "../data/about-data.json"
import CollapseDescription from "../components/Appartment/CollapseDescription"
import Banner from "../components/banner/Banner"

const AboutPage = () => {
    return (
        <div className="about-main-page">
            <Banner/>
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
