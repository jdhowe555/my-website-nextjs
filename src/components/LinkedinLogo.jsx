import Image from "next/image";
import linkedInLogo from '@/assets/linkedin.png';

export default function LinkedinLogo({ size = 25, link = "https://www.linkedin.com/in/jeff-howe-381977106"}) {
    return (
        <div style={{ width: `${size}px`, height: `${size}px`, display: 'flex' }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Image src={linkedInLogo} alt="LinkedIn Logo" width={size} height={size}/>
            </a>
        </div>
    );
};