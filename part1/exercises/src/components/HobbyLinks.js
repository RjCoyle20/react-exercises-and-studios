export default function HobbyLinks () {
    const hobbyLinks = [ "https://www.dndbeyond.com/" , "https://www.duolingo.com/"] 
    return (
        <div>
            <h3>My Hobbies</h3>
            <p>
        <a href= {hobbyLinks[0]}> Dungeons & Dragons</a>;
        <br></br>
        <a href= {hobbyLinks[1]}> Learning Languages</a>;
        </p>
        </div>
    )
}