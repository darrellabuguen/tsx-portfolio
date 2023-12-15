import Button from "./Button";
import Content from "./Content";

const Pages = () => {
    return (
        <>
            <div className="intro-container">
                <div className="card-container" id="Home">
                    <Content clsname="first-card firstro" background="bg-dark" sub="-subtle">
                        <div>
                            <p className="card-text">I'm a Website Developer!</p>
                            <p className="intro">Hi, I am Darrel Labuguen. A passionate Web Developer with strong knowledge in creating and developing websites.</p>
                            <p className="find-contact">Find Me on</p>
                            <div className="contact-container">
                                <a href="https://www.linkedin.com/in/darrel-labuguen-02924b280">
                                    <img src="./src/images/linkedin.svg" alt="img" className="iconn contact" />
                                </a>
                                <a href="https://www.instagram.com/darrel_labuguen/">
                                    <img src="./src/images/instagram.svg" alt="img" className="iconn contact" />
                                </a>
                                <a href="https://www.facebook.com/darrel.labuguen.9">
                                    <img src="./src/images/facebook.svg" alt="img" className="iconn contact" />
                                </a>
                                <a href="https://discord.gg/9R8xuAMq">
                                    <img src="./src/images/discord.svg" alt="img" className="iconn contact" />
                                </a>
                            </div>
                            <div className="tech-container">
                                <p className="techs">Tech Stack |</p>
                                <img src="./src/images/html5.svg" alt="img" className="iconn" />
                                <img src="./src/images/css3-alt.svg" alt="img" className="iconn" />
                                <img src="./src/images/square-js.svg" alt="img" className="iconn" />
                                <img src="./src/images/php.svg" alt="img" className="iconn php" />
                            </div>
                        </div>
                    </Content>
                    <Content clsname="second-card sectro" background="bg-dark" sub="-subtle">
                        <div className="card-text" id="Second Page">
                            <img src="./src/images/Darrel Labuguen-min.jpg" alt="img" className="profile" />
                        </div>
                    </Content>
                </div>
            </div>
            <div id="About">
                <Content clsname="first-card about" background="bg-dark" sub="-subtle">
                    <img className="about-pic" src="./src/images/ccsn.jpg" alt="img" />
                </Content>
                <Content clsname="second-card about" background="bg-dark" sub="-subtle">
                    <p className="card-title">ABOUT ME</p>
                    <p className="about-locate">A passionate Web Developer from Tiaong, Quezon</p>
                    <p className="about-me">
                        I’m Darrel Labuguen, I am a fresh graduate from Laguna State
                        Polytechnic University. I specialized in Web and Mobile Application Development.
                        I possess good set of skills in web development such as HTML, CSS, JavaScript, and PHP.
                        My expertise lies in converting digital web designs into fully functional website.
                    </p>
                </Content>
            </div>

            <div id="Projects">
                <p className="card-title">PROJECTS</p>
                <div className="project-container">
                    <Content clsname="first-card project" background="bg-dark" sub="-subtle">
                        <img className="project-pic" src="./src/images/resthotel_home.png" alt="img" />
                    </Content>
                    <Content clsname="second-card project" background="bg-dark" sub="-subtle">
                        <p className="project-title">Rest Hotel</p>
                        <p className="project-info">
                            Rest Hotel serves as an online booking platform that facilitates
                            users in selecting and reserving accommodations suitable for both leisure and business purposes.
                            Our website provides a seamless experience for room selection and efficient booking processes,
                            including verification procedures to confirm reservations.
                        </p>
                        <div className="project-language">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>PHP</p>
                        </div>
                        <div className="project-links">
                            <Button btnclass="github" name="Code" icon="./src/images/github.svg" onclick={() => {
                                window.open("https://github.com/darrellabuguen/resthotel.git")
                            }} />
                            <Button btnclass="link" name="Link" icon="./src/images/arrow-up-right-from-square-solid.svg" onclick={() => {
                                window.open("https://resthotel.000webhostapp.com/");
                            }} />
                        </div>
                    </Content>
                </div>
                <div className="project-container rev">
                    <Content clsname="second-card project" background="bg-dark" sub="-subtle">
                        <p className="project-title">Recipe Realm</p>
                        <p className="project-info">
                            Recipe realm is a simple recipe app that allows users to search for recipes,
                            users can choose recipe information from six different categories. This app
                            provides an interface for searching a variety of foods from over 5000+ recipes.
                        </p>
                        <div className="project-language">
                            <p>React</p>
                            <p>CSS</p>
                        </div>
                        <div className="project-links">
                            <Button btnclass="github" name="Code" icon="./src/images/github.svg" onclick={() => {
                                window.open("https://github.com/darrellabuguen/food-recipe.git");
                            }} />
                            <Button btnclass="link" name="Link" icon="./src/images/arrow-up-right-from-square-solid.svg" onclick={() => {
                                window.open("https://recipe-realm.netlify.app/");
                            }} />
                        </div>
                    </Content>
                    <Content clsname="first-card project" background="bg-dark" sub="-subtle">
                        <img className="project-pic" src="./src/images/reciperealm-home.png" alt="img" />
                    </Content>
                </div>
                <div className="project-container">
                    <Content clsname="first-card project" background="bg-dark" sub="-subtle">
                        <img className="project-pic" src="./src/images/Home.PNG" alt="img" />
                    </Content>
                    <Content clsname="second-card project" background="bg-dark" sub="-subtle">
                        <p className="project-title">Inventory System</p>
                        <p className="project-info">
                            Website is undergoing redevelopment.
                        </p>
                        <div className="project-language">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Firebase</p>
                        </div>
                        <div className="project-links">
                            <Button btnclass="github" name="Code" icon="./src/images/github.svg" onclick={() => {
                                window.open("https://github.com/darrellabuguen/resthotel.git")
                            }} />
                            <Button btnclass="link" name="Link" icon="./src/images/arrow-up-right-from-square-solid.svg" onclick={() => {
                                window.open("https://resthotel.000webhostapp.com/");
                            }} />
                        </div>
                    </Content>
                </div>
                <span className="back-top" onClick={() => window.scrollTo(0, 0)}>&uarr;</span>
            </div>
            <span id="Resume"></span>
            <br />
            <br />
            <br />
            <br />
            <span className="resume-title"><p className="card-title">RESUME</p></span>
            <div className="resume-container">
                <Content clsname="first-card resume" background="bg-dark" sub="-subtle">
                    <div className="info-container">
                        <img className="resume-pic" src="./src/images/Darrel Labuguen-min.jpg" alt="img" />
                        <div className="infos">
                            <p className="ress res-name">Darrel D. Labuguen</p>
                            <p className="ress"><img className="res-icon" src="./src/images/envelope-solid.svg" alt="img" />labuguendarrel@gmail.com</p>
                            <p className="ress"><img className="res-icon" src="./src/images/phone-solid.svg" alt="img" />09300515480</p>
                            <p className="ress"><img className="res-icon" src="./src/images/location.svg" alt="img" />352 St. Luke Street Villa Rosario Subdivision Tiaong, Quezon</p>
                        </div>
                    </div>
                    <div className="res-main">
                        <h3>Personal Data</h3>
                        <div className="personal-info">
                            <div className="data-name">
                                <p>Birthday:</p>
                                <p>Age:</p>
                                <p>Gender:</p>
                                <p>Civil Status:</p>
                                <p>Nationality:</p>
                            </div>
                            <div className="data-info">
                                <p>July 20, 2000</p>
                                <p>22 years old</p>
                                <p>Male</p>
                                <p>Single</p>
                                <p>Filipino</p>
                            </div>
                        </div>
                        <br />
                        <h3>Education</h3>
                        <div className="indent">
                            <p className="bold">Laguna State Polytechnic University</p>
                            <p>Bachelor of Science in Information Technology</p>
                            <p>Major in Web and Mobile Application Development</p>
                            <p>2018 - Sep. 2022</p>
                        </div>
                        <br />
                        <h3>Certificate</h3>
                        <div className="indent">
                            <p>Certificate of Completion JavaScript Course Sololearn</p>
                        </div>
                        <br />
                        <h3>Seminar/Webinar & Training</h3>
                        <div className="indent">
                            <p>Basic Microsoft Office Applications</p>
                            <p>2022</p>
                            <p>Computer Literacy Training</p>
                            <p>2014</p>
                        </div>
                        <br />
                        <h3>Achievement/Accomplishment</h3>
                        <div className="indent">
                            <p className="bold">Digitalization of inputting Records in Research and Development Office</p>
                            <p>
                                Laguna State Polytechnic University
                            </p>
                            <p>2022</p>
                            <p className="bold">1st Runner Up of LSPU Battle of the Bands 2018</p>
                            <p>
                                Laguna State Polytechnic University
                            </p>
                            <p>2018</p>
                            <p className="bold">Best in Thesis</p>
                            <p>
                                Impact of Blocking Pornographic Sites Among
                                Selected Internet
                            </p>
                            <p>
                                Cafe at
                                Poblacion I, II, III, and
                                IV of Tiaong, Quezon
                            </p>
                            <p>2018</p>
                        </div>
                        <br />
                    </div>
                </Content>
                <Content clsname="second-card resume" background="bg-dark" sub="-subtle">
                    <h3>Objective</h3>
                    <div className="indent" style={{ width: "95%" }}>
                        <p style={{ textAlign: "justify" }}>
                            To work in a company that has a good environment and good people where
                            I can share and use my knowledge. I also aim to be part of a company where I
                            can offer my skills in Web Development to provide good websites to users.
                        </p>
                    </div>
                    <br />
                    <h3>Skills</h3>
                    <div className="indent">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>PHP</p>
                        <p>SQL</p>
                        <p>Git/Github</p>
                        <p>Wordpress</p>
                        <p>Firebase JS (auth, database)</p>
                        <p>Computer Troubleshooting</p>
                        <p>Microsoft Office Applications (Office, Excel, Power Point, Publisher)</p>
                        <p>Installation of Windows OS</p>
                        <p>Basic Networking</p>
                        <p>Adobe Applications (Photoshop, illustrator, and Adobe Express)</p>
                        <p>Basic Video Editing (Sony Vegas)</p>
                        <p>Figma</p>
                    </div>
                    <br />
                    <h3>Pre-Work Experience</h3>
                    <div className="indent">
                        <p className="bold">Cybersecurity Threat Engineer</p>
                        <p>Trend Micro, Inc. (Jan. 16 - June 2, 2023)</p>
                        <p>8/F Tower 2, The Rockwell Business Center, 1600 Ortigas Ave,</p>
                        <p>Pasig, Metro Manila</p>
                        <p className="bold">OJT IT Support/Front-End Developer</p>
                        <p>Laguna State Polytechnic University, R&D Office</p>
                        <p>San Pablo City, Laguna</p>
                        <p>2022</p>
                    </div>
                    <br />
                    <h3>Character References</h3>
                    <div className="indent">
                        <p className="bold">Paolo Ronniel Labrador</p>
                        <p>Trend Micro Trainer</p>
                        <p>paoloronniel_labrador@trendmicro.com</p>
                        <p className="bold">Delon A. Ching, EdD</p>
                        <p>Director, Research and Development Services</p>
                        <p>delon.ching@lspu.edu.ph</p>
                        <p>09328644372</p>
                        <p className="bold">Lemuel Condes</p>
                        <p>Recto Memorial National High School</p>
                        <p>Teacher</p>
                        <p>09509928947</p>
                    </div>
                    <br />
                </Content>
            </div>
            <div className="download-container">
                <Button name="Download" btnclass="download" icon="./src/images/download-solid.svg" onclick={() => {
                    window.open("https://drive.google.com/file/d/1AM4gJAwddbU2o5N9nH0CbjERd_DSDQM4/view?usp=sharing");
                }} />
            </div>
        </>
    )
}

export default Pages;