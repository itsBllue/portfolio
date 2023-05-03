import GithubIcon from "./GIthubIcon";
import LinkedInIcon from "./LinkedInIcon";
import DiscordIcon from "./DiscordIcon";
import EmailIcon from "./EmailIcon";
import ResumeIcon from "./ResumeIcon";

export default function SVGComponent(props){
        const width = props.width || 25;
        const height = props.height || 25;
        const Icons = {
                "github":<GithubIcon width={width} height={height}/>,
                "linkedin": <LinkedInIcon width={width} height={height}/>,
                "discord":<DiscordIcon width={width} height={height}/>,
                "email":<EmailIcon width={width} height={height}/>,
                "resume":<ResumeIcon width={width} height={height}/>,
                }
        return (Icons[props.name])
}

export {GithubIcon as GithubIcon, 
        DiscordIcon as DiscordIcon,
        LinkedInIcon as LinkedInIcon,
        EmailIcon as EmailIcon,
        ResumeIcon as ResumeIcon
        }